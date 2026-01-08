/**
 * Upload industry images to Sanity CDN
 * Run with: node scripts/upload-industry-images.mjs
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

async function uploadIndustryImages() {
    console.log('Fetching industries...')

    const industries = await client.fetch(`*[_type == "industry"]{
    _id,
    title,
    legacyImagePath,
    "hasImage": defined(heroImage.asset)
  }`)

    console.log(`Found ${industries.length} industries`)

    let uploaded = 0
    let skipped = 0
    let failed = 0

    for (const industry of industries) {
        try {
            if (industry.hasImage) {
                console.log(`Skipping (already has image): ${industry.title}`)
                skipped++
                continue
            }

            if (!industry.legacyImagePath) {
                console.log(`Skipping (no legacy path): ${industry.title}`)
                skipped++
                continue
            }

            const imagePath = join(process.cwd(), 'public', industry.legacyImagePath)

            if (!existsSync(imagePath)) {
                console.log(`File not found: ${imagePath}`)
                failed++
                continue
            }

            console.log(`Uploading: ${industry.legacyImagePath}...`)
            const imageAsset = await client.assets.upload('image', createReadStream(imagePath), {
                filename: industry.legacyImagePath.split('/').pop(),
            })

            await client.patch(industry._id)
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

            console.log(`Uploaded: ${industry.title}`)
            uploaded++
        } catch (error) {
            console.error(`Error with ${industry.title}:`, error.message)
            failed++
        }
    }

    console.log('\n--- Summary ---')
    console.log(`Uploaded: ${uploaded}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Failed: ${failed}`)
}

uploadIndustryImages().catch(console.error)
