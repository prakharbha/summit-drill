/**
 * Upload images for News Posts and Pages to Sanity CDN
 * Run with: node scripts/upload-content-images.mjs
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

async function uploadImage(docId, imagePath, fieldPath) {
    if (!imagePath) return false

    // Handle relative paths (remove leading slash if present)
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath
    const fullPath = join(process.cwd(), 'public', cleanPath)

    if (!existsSync(fullPath)) {
        console.log(`File not found: ${fullPath} (for doc ${docId})`)
        return false
    }

    console.log(`Uploading: ${cleanPath}...`)
    try {
        const imageAsset = await client.assets.upload('image', createReadStream(fullPath), {
            filename: cleanPath.split('/').pop(),
        })

        // Construct the patch object dynamically based on fieldPath
        // fieldPath could be 'image' or 'heroImage' or 'sidebar.image'
        const patchObj = {}

        if (fieldPath.includes('.')) {
            const [parent, child] = fieldPath.split('.')
            patchObj[parent] = {
                [child]: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id,
                    }
                }
            }
            // We need to merge this carefully if we don't want to overwrite other sidebar fields
            // Actually, for nested objects like sidebar, we should probably use set() on the specific path
            await client.patch(docId)
                .set({
                    [fieldPath]: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        }
                    }
                })
                .commit()
        } else {
            await client.patch(docId)
                .set({
                    [fieldPath]: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        }
                    }
                })
                .commit()
        }

        console.log(`Uploaded & Updated: ${docId} -> ${fieldPath}`)
        return true
    } catch (error) {
        console.error(`Error uploading ${cleanPath}:`, error.message)
        return false
    }
}

async function processNewsPosts() {
    console.log('\nProcessing News Posts...')
    const posts = await client.fetch(`*[_type == "newsPost"]{
        _id,
        title,
        legacyImagePath,
        "hasImage": defined(image.asset)
    }`)

    for (const post of posts) {
        if (post.hasImage) {
            console.log(`Skipping (already has image): ${post.title}`)
            continue
        }
        await uploadImage(post._id, post.legacyImagePath, 'image')
    }
}

async function processPages() {
    console.log('\nProcessing Pages...')
    const pages = await client.fetch(`*[_type == "page"]{
        _id,
        title,
        legacyImagePath,
        "hasHeroImage": defined(heroImage.asset),
        sidebar
    }`)

    for (const page of pages) {
        // Hero Image
        if (!page.hasHeroImage && page.legacyImagePath) {
            await uploadImage(page._id, page.legacyImagePath, 'heroImage')
        } else if (page.hasHeroImage) {
            console.log(`Skipping Hero (already has image): ${page.title}`)
        }

        // Sidebar Image
        if (page.sidebar && page.sidebar.legacyImagePath && !page.sidebar.image?.asset) {
            await uploadImage(page._id, page.sidebar.legacyImagePath, 'sidebar.image')
        }
    }
}

async function main() {
    await processNewsPosts()
    await processPages()
    console.log('\nDone!')
}

main().catch(console.error)
