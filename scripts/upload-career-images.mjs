/**
 * Upload career page images to Sanity CDN
 * Run with: node scripts/upload-career-images.mjs
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

async function uploadCareerImages() {
    console.log('Fetching career pages...')

    const pages = await client.fetch(`*[_type == "careerPage"]{
    _id,
    title,
    legacyImagePath,
    "hasImage": defined(heroImage.asset)
  }`)

    console.log(`Found ${pages.length} career pages`)

    let uploaded = 0
    let skipped = 0
    let failed = 0

    for (const page of pages) {
        try {
            if (page.hasImage) {
                console.log(`Skipping (already has image): ${page.title}`)
                skipped++
                continue
            }

            if (!page.legacyImagePath) {
                console.log(`Skipping (no legacy path): ${page.title}`)
                skipped++
                continue
            }

            const imagePath = join(process.cwd(), 'public', page.legacyImagePath)

            if (!existsSync(imagePath)) {
                console.log(`File not found: ${imagePath}`)
                failed++
                continue
            }

            console.log(`Uploading: ${page.legacyImagePath}...`)
            const imageAsset = await client.assets.upload('image', createReadStream(imagePath), {
                filename: page.legacyImagePath.split('/').pop(),
            })

            await client.patch(page._id)
                .set({
                    heroImage: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    },
                })
                .commit()

            console.log(`Uploaded: ${page.title}`)
            uploaded++
        } catch (error) {
            console.error(`Error with ${page.title}:`, error.message)
            failed++
        }
    }

    console.log('\n--- Summary ---')
    console.log(`Uploaded: ${uploaded}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Failed: ${failed}`)
}

uploadCareerImages().catch(console.error)
