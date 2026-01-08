/**
 * Seed script to migrate news posts to Sanity
 * Run with: npx ts-node --skip-project scripts/seed-news.ts
 */

import { createClient } from '@sanity/client'
import { newsPosts } from '../data/news'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function seedNewsPosts() {
    console.log(`Starting to seed ${newsPosts.length} news posts...`)

    for (const post of newsPosts) {
        try {
            // Check if post already exists
            const existing = await client.fetch(
                `*[_type == "newsPost" && slug.current == $slug][0]`,
                { slug: post.slug }
            )

            if (existing) {
                console.log(`Skipping existing: ${post.slug}`)
                continue
            }

            // Create the news post document
            const doc = {
                _type: 'newsPost',
                title: post.title,
                slug: {
                    _type: 'slug',
                    current: post.slug, // Preserve exact same slug
                },
                excerpt: post.excerpt,
                publishedAt: new Date(post.date).toISOString(),
                // Note: Images need to be uploaded separately to Sanity
                // For now we'll store the original path as a reference
                legacyImagePath: post.image,
            }

            const result = await client.create(doc)
            console.log(`Created: ${post.title} (${result._id})`)
        } catch (error) {
            console.error(`Error creating ${post.slug}:`, error)
        }
    }

    console.log('Done seeding news posts!')
}

// Run if called directly
seedNewsPosts().catch(console.error)
