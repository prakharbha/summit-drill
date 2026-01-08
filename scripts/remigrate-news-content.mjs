/**
 * Re-migrate news content with improved HTML to Portable Text conversion
 * Run with: node scripts/remigrate-news-content.mjs
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

// Generate a random key for Portable Text
function randomKey() {
    return Math.random().toString(36).substr(2, 12)
}

// Parse inline marks (bold, italic, links) within text
function parseInlineMarks(html) {
    const children = []
    let remaining = html

    // Simple regex-based parsing for inline elements
    const pattern = /(<em>|<i>|<strong>|<b>|<a[^>]*>)(.*?)(<\/em>|<\/i>|<\/strong>|<\/b>|<\/a>)/gi

    let lastIndex = 0
    let match

    // Reset pattern
    const regex = new RegExp(pattern)

    while ((match = regex.exec(html)) !== null) {
        // Add text before this match
        if (match.index > lastIndex) {
            const text = html.slice(lastIndex, match.index)
                .replace(/&amp;/g, '&')
                .replace(/&nbsp;/g, ' ')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
            if (text.trim()) {
                children.push({
                    _type: 'span',
                    _key: randomKey(),
                    text: text,
                    marks: []
                })
            }
        }

        const tag = match[1].toLowerCase()
        const content = match[2]
            .replace(/<[^>]+>/g, '') // Remove nested tags
            .replace(/&amp;/g, '&')
            .replace(/&nbsp;/g, ' ')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')

        let marks = []
        if (tag.includes('<em') || tag.includes('<i')) marks.push('em')
        if (tag.includes('<strong') || tag.includes('<b')) marks.push('strong')

        if (content.trim()) {
            children.push({
                _type: 'span',
                _key: randomKey(),
                text: content,
                marks: marks
            })
        }

        lastIndex = match.index + match[0].length
    }

    // Add remaining text
    if (lastIndex < html.length) {
        const text = html.slice(lastIndex)
            .replace(/<[^>]+>/g, '') // Remove any remaining tags
            .replace(/&amp;/g, '&')
            .replace(/&nbsp;/g, ' ')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
        if (text.trim()) {
            children.push({
                _type: 'span',
                _key: randomKey(),
                text: text,
                marks: []
            })
        }
    }

    // If no inline marks found, return simple span
    if (children.length === 0) {
        const cleanText = html
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&nbsp;/g, ' ')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
        if (cleanText.trim()) {
            return [{
                _type: 'span',
                _key: randomKey(),
                text: cleanText,
                marks: []
            }]
        }
        return []
    }

    return children
}

// Improved HTML to Portable Text conversion
function htmlToPortableText(html) {
    if (!html) return []

    const blocks = []

    // Normalize line breaks
    let normalized = html
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')

    // Split by block-level elements and double line breaks
    // First, extract headings
    const h2Pattern = /<h2[^>]*>(.*?)<\/h2>/gi
    const h3Pattern = /<h3[^>]*>(.*?)<\/h3>/gi

    // Replace headings with markers
    let processedHtml = normalized
    const headings = []

    processedHtml = processedHtml.replace(h2Pattern, (match, content) => {
        const id = `__H2_${headings.length}__`
        headings.push({ type: 'h2', content: content.replace(/<[^>]+>/g, '').trim() })
        return `\n\n${id}\n\n`
    })

    processedHtml = processedHtml.replace(h3Pattern, (match, content) => {
        const id = `__H3_${headings.length}__`
        headings.push({ type: 'h3', content: content.replace(/<[^>]+>/g, '').trim() })
        return `\n\n${id}\n\n`
    })

    // Split by paragraph breaks
    const paragraphs = processedHtml
        .split(/(?:<\/p>|<br\s*\/?>|\n\n)+/)
        .map(p => p.replace(/<p[^>]*>/gi, '').trim())
        .filter(p => p.length > 0)

    for (const para of paragraphs) {
        // Check if it's a heading marker
        const h2Match = para.match(/__H2_(\d+)__/)
        const h3Match = para.match(/__H3_(\d+)__/)

        if (h2Match) {
            const heading = headings[parseInt(h2Match[1])]
            if (heading && heading.content) {
                blocks.push({
                    _type: 'block',
                    _key: randomKey(),
                    style: 'h2',
                    children: [{ _type: 'span', _key: randomKey(), text: heading.content, marks: [] }]
                })
            }
            continue
        }

        if (h3Match) {
            const heading = headings[parseInt(h3Match[1])]
            if (heading && heading.content) {
                blocks.push({
                    _type: 'block',
                    _key: randomKey(),
                    style: 'h3',
                    children: [{ _type: 'span', _key: randomKey(), text: heading.content, marks: [] }]
                })
            }
            continue
        }

        // Regular paragraph - parse inline marks
        const children = parseInlineMarks(para)
        if (children.length > 0) {
            blocks.push({
                _type: 'block',
                _key: randomKey(),
                style: 'normal',
                children: children
            })
        }
    }

    return blocks
}

async function remigrateNewsContent() {
    console.log('Loading posts data...')

    const postsData = JSON.parse(readFileSync('./scripts/posts-data.json', 'utf8'))
    console.log(`Found ${postsData.length} posts in posts-data.json`)

    for (const post of postsData) {
        try {
            const sanityPost = await client.fetch(
                `*[_type == "newsPost" && slug.current == $slug][0]`,
                { slug: post.slug }
            )

            if (!sanityPost) {
                console.log(`Post not found in Sanity: ${post.slug}`)
                continue
            }

            // Convert HTML content to Portable Text with improved converter
            const content = htmlToPortableText(post.fullContent || post.content)

            // Update the post
            await client.patch(sanityPost._id)
                .set({ content })
                .commit()

            console.log(`Updated: ${post.title.substring(0, 50)}... (${content.length} blocks)`)
        } catch (error) {
            console.error(`Error updating ${post.slug}:`, error.message)
        }
    }

    console.log('Done re-migrating news content!')
}

remigrateNewsContent().catch(console.error)
