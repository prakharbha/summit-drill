/**
 * Update script to add ribbonText to existing news posts
 * Run with: node scripts/update-news-ribbon.mjs
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function updateNewsRibbon() {
    console.log('Updating news posts with ribbonText...')

    // Get all news posts
    const posts = await client.fetch(`*[_type == "newsPost"]{ _id, title }`)
    console.log(`Found ${posts.length} news posts`)

    for (const post of posts) {
        try {
            await client.patch(post._id)
                .set({ ribbonText: 'SUMMIT NEWS' })
                .commit()
            console.log(`Updated: ${post.title.substring(0, 50)}...`)
        } catch (error) {
            console.error(`Error updating ${post._id}:`, error)
        }
    }

    console.log('Done!')
}

updateNewsRibbon().catch(console.error)
