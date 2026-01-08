/**
 * Update news posts with full content from posts-data.json
 * Run with: node scripts/update-news-content.mjs
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { readFileSync } from 'fs'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

// Parse HTML to Portable Text blocks (simplified conversion)
function htmlToPortableText(html) {
    if (!html) return []

    const blocks = []

    // Split by paragraph-like breaks
    const parts = html.split(/(?:<\/p>|<br\s*\/?>|\r?\n\r?\n)+/)

    for (const part of parts) {
        let text = part
            // Remove opening tags
            .replace(/<p[^>]*>/gi, '')
            .replace(/<\/?(em|i)>/gi, '')
            .replace(/<\/?(strong|b)>/gi, '')
            .replace(/<a[^>]*>([^<]*)<\/a>/gi, '$1')
            .replace(/<[^>]+>/g, '') // Remove remaining HTML tags
            .replace(/&amp;/g, '&')
            .replace(/&nbsp;/g, ' ')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .trim()

        if (text.length > 0) {
            // Check if it's a heading
            const h2Match = part.match(/<h2[^>]*>(.*?)<\/h2>/i)
            const h3Match = part.match(/<h3[^>]*>(.*?)<\/h3>/i)

            if (h2Match) {
                blocks.push({
                    _type: 'block',
                    _key: Math.random().toString(36).substr(2, 9),
                    style: 'h2',
                    children: [{ _type: 'span', _key: Math.random().toString(36).substr(2, 9), text: h2Match[1].replace(/<[^>]+>/g, '').trim() }],
                })
            } else if (h3Match) {
                blocks.push({
                    _type: 'block',
                    _key: Math.random().toString(36).substr(2, 9),
                    style: 'h3',
                    children: [{ _type: 'span', _key: Math.random().toString(36).substr(2, 9), text: h3Match[1].replace(/<[^>]+>/g, '').trim() }],
                })
            } else {
                blocks.push({
                    _type: 'block',
                    _key: Math.random().toString(36).substr(2, 9),
                    style: 'normal',
                    children: [{ _type: 'span', _key: Math.random().toString(36).substr(2, 9), text }],
                })
            }
        }
    }

    return blocks
}

async function updateNewsContent() {
    console.log('Loading posts data...')

    // Read posts-data.json
    const postsData = JSON.parse(readFileSync('./scripts/posts-data.json', 'utf8'))
    console.log(`Found ${postsData.length} posts in posts-data.json`)

    for (const post of postsData) {
        try {
            // Find the post in Sanity by slug
            const sanityPost = await client.fetch(
                `*[_type == "newsPost" && slug.current == $slug][0]`,
                { slug: post.slug }
            )

            if (!sanityPost) {
                console.log(`Post not found in Sanity: ${post.slug}`)
                continue
            }

            // Convert HTML content to Portable Text
            const content = htmlToPortableText(post.fullContent || post.content)

            // Update the post
            await client.patch(sanityPost._id)
                .set({ content })
                .commit()

            console.log(`Updated: ${post.title.substring(0, 50)}...`)
        } catch (error) {
            console.error(`Error updating ${post.slug}:`, error.message)
        }
    }

    console.log('Done updating news content!')
}

updateNewsContent().catch(console.error)
