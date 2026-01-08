import { createClient } from '@sanity/client'
import { basename } from 'path'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function uploadServiceImages() {
    console.log('Fetching services...')
    const services = await client.fetch(`*[_type == "service"]{_id, title, legacyImagePath, heroImage}`)

    for (const service of services) {
        if (!service.legacyImagePath) {
            console.log(`Skipping ${service.title} (no legacy image path)`)
            continue
        }

        if (service.heroImage?.asset) {
            console.log(`Skipping ${service.title} (already has image)`)
            continue
        }

        const localPath = join(process.cwd(), 'public', service.legacyImagePath)

        if (!existsSync(localPath)) {
            console.error(`Image not found: ${localPath}`)
            continue
        }

        console.log(`Uploading image for ${service.title}: ${service.legacyImagePath}`)

        try {
            const asset = await client.assets.upload('image', createReadStream(localPath), {
                filename: basename(localPath)
            })

            await client.patch(service._id)
                .set({
                    heroImage: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: asset._id
                        }
                    }
                })
                .commit()

            console.log(`Updated ${service.title} with new image`)
        } catch (err) {
            console.error(`Failed to upload image for ${service.title}:`, err.message)
        }
    }

    console.log('Done!')
}

uploadServiceImages().catch(console.error)
