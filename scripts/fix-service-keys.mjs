import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import crypto from 'crypto'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

function generateKey() {
    return crypto.randomUUID()
}

async function fixServiceKeys() {
    console.log('Fetching services to fix keys...')
    const services = await client.fetch(`*[_type == "service"]`)

    for (const service of services) {
        let needsUpdate = false
        const newContent = (service.content || []).map(block => {
            const newBlock = { ...block }

            // Add key to block if missing
            if (!newBlock._key) {
                newBlock._key = generateKey()
                needsUpdate = true
            }

            // Add keys to children if missing (for block type)
            if (newBlock._type === 'block' && Array.isArray(newBlock.children)) {
                newBlock.children = newBlock.children.map(child => {
                    if (!child._key) {
                        needsUpdate = true
                        return { ...child, _key: generateKey() }
                    }
                    return child
                })
            }

            return newBlock
        })

        if (needsUpdate) {
            console.log(`Fixing keys for service: ${service.title}`)
            await client.patch(service._id)
                .set({ content: newContent })
                .commit()
            console.log(`Updated ${service.title}`)
        } else {
            console.log(`Service ${service.title} already has keys.`)
        }
    }

    console.log('Done!')
}

fixServiceKeys().catch(console.error)
