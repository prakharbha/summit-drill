/**
 * Upload news images to Sanity CDN
 * Run with: node scripts/upload-news-images.mjs
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function uploadNewsImages() {
    console.log('Fetching news posts...')

    // Get all news posts with their legacy image paths
    const posts = await client.fetch(`*[_type == "newsPost"]{
    _id,
    title,
    legacyImagePath,
    "hasImage": defined(image.asset)
  }`)

    console.log(`Found ${posts.length} news posts`)

    let uploaded = 0
    let skipped = 0
    let failed = 0

    for (const post of posts) {
        try {
            // Skip if already has an image
            if (post.hasImage) {
                console.log(`Skipping (already has image): ${post.title.substring(0, 40)}...`)
                skipped++
                continue
            }

            // Skip if no legacy path
            if (!post.legacyImagePath) {
                console.log(`Skipping (no legacy path): ${post.title.substring(0, 40)}...`)
                skipped++
                continue
            }

            // Build local file path
            const imagePath = join(process.cwd(), 'public', post.legacyImagePath)

            if (!existsSync(imagePath)) {
                console.log(`File not found: ${imagePath}`)
                failed++
                continue
            }

            // Upload image to Sanity
            console.log(`Uploading: ${post.legacyImagePath}...`)
            const imageAsset = await client.assets.upload('image', createReadStream(imagePath), {
                filename: post.legacyImagePath.split('/').pop(),
            })

            // Update the post with the uploaded image
            await client.patch(post._id)
                .set({
                    image: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    },
                })
                .commit()

            console.log(`Uploaded: ${post.title.substring(0, 40)}...`)
            uploaded++
        } catch (error) {
            console.error(`Error with ${post.title}:`, error.message)
            failed++
        }
    }

    console.log('\n--- Summary ---')
    console.log(`Uploaded: ${uploaded}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Failed: ${failed}`)
}

uploadNewsImages().catch(console.error)
