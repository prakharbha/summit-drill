/**
 * Upload project images to Sanity CDN
 * Run with: node scripts/upload-project-images.mjs
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

async function uploadProjectImages() {
    console.log('Fetching projects...')

    const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    legacyImagePath,
    "hasImage": defined(featuredImage.asset)
  }`)

    console.log(`Found ${projects.length} projects`)

    let uploaded = 0
    let skipped = 0
    let failed = 0

    for (const project of projects) {
        try {
            if (project.hasImage) {
                console.log(`Skipping (already has image): ${project.title.substring(0, 40)}...`)
                skipped++
                continue
            }

            if (!project.legacyImagePath) {
                console.log(`Skipping (no legacy path): ${project.title.substring(0, 40)}...`)
                skipped++
                continue
            }

            const imagePath = join(process.cwd(), 'public', project.legacyImagePath)

            if (!existsSync(imagePath)) {
                console.log(`File not found: ${imagePath}`)
                failed++
                continue
            }

            console.log(`Uploading: ${project.legacyImagePath}...`)
            const imageAsset = await client.assets.upload('image', createReadStream(imagePath), {
                filename: project.legacyImagePath.split('/').pop(),
            })

            await client.patch(project._id)
                .set({
                    featuredImage: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    },
                })
                .commit()

            console.log(`Uploaded: ${project.title.substring(0, 40)}...`)
            uploaded++
        } catch (error) {
            console.error(`Error with ${project.title}:`, error.message)
            failed++
        }
    }

    console.log('\n--- Summary ---')
    console.log(`Uploaded: ${uploaded}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Failed: ${failed}`)
}

uploadProjectImages().catch(console.error)
