/**
 * Upload team member images to Sanity CDN
 * Run with: node scripts/upload-team-images.mjs
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

async function uploadTeamImages() {
    console.log('Fetching team members...')

    const members = await client.fetch(`*[_type == "teamMember"]{
    _id,
    name,
    legacyImagePath,
    "hasImage": defined(image.asset)
  }`)

    console.log(`Found ${members.length} team members`)

    let uploaded = 0
    let skipped = 0
    let failed = 0

    for (const member of members) {
        try {
            if (member.hasImage) {
                console.log(`Skipping (already has image): ${member.name}`)
                skipped++
                continue
            }

            if (!member.legacyImagePath) {
                console.log(`Skipping (no legacy path): ${member.name}`)
                skipped++
                continue
            }

            const imagePath = join(process.cwd(), 'public', member.legacyImagePath)

            if (!existsSync(imagePath)) {
                console.log(`File not found: ${imagePath}`)
                failed++
                continue
            }

            console.log(`Uploading: ${member.legacyImagePath}...`)
            const imageAsset = await client.assets.upload('image', createReadStream(imagePath), {
                filename: member.legacyImagePath.split('/').pop(),
            })

            await client.patch(member._id)
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

            console.log(`Uploaded: ${member.name}`)
            uploaded++
        } catch (error) {
            console.error(`Error with ${member.name}:`, error.message)
            failed++
        }
    }

    console.log('\n--- Summary ---')
    console.log(`Uploaded: ${uploaded}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Failed: ${failed}`)
}

uploadTeamImages().catch(console.error)
