/**
 * Update metadata for all documents in Sanity based on lib/site-metadata.json
 * Run with: node scripts/update-metadata.mjs
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { readFileSync } from 'fs'
import { join } from 'path'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

const metadataPath = join(process.cwd(), 'lib/site-metadata.json')
const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'))

async function updateDocument(type, slug, meta) {
    // Find the document
    let query = `*[_type == "${type}" && slug.current == "${slug}"][0]._id`

    // Special handling for singleton homePage
    if (type === 'homePage') {
        query = `*[_type == "homePage"][0]._id`
    }

    const docId = await client.fetch(query)

    if (!docId) {
        console.log(`Document not found for: ${type} / ${slug}`)
        return
    }

    // Update metadata
    try {
        await client.patch(docId)
            .set({
                metaTitle: meta.title,
                metaDescription: meta.description
            })
            .commit()
        console.log(`Updated metadata for: ${type} / ${slug}`)
    } catch (err) {
        console.error(`Error updating ${type} / ${slug}:`, err.message)
    }
}

async function main() {
    console.log('Updating metadata...')

    for (const [path, meta] of Object.entries(metadata)) {
        const cleanPath = path.replace(/^\//, '') // Remove leading slash

        if (path === '/') {
            await updateDocument('homePage', '', meta)
        } else if (path.startsWith('/services/')) {
            const slug = cleanPath.replace('services/', '')
            await updateDocument('service', slug, meta)
        } else if (path.startsWith('/project-gallery/')) {
            const slug = cleanPath.replace('project-gallery/', '')
            // Check if it's the main gallery page or a project
            if (slug === '') {
                await updateDocument('page', 'project-gallery', meta)
            } else if (slug === 'featured') {
                // Skip featured for now or handle if it exists
                console.log('Skipping featured project placeholder')
            } else {
                await updateDocument('project', slug, meta)
            }
        } else if (path.startsWith('/industries/')) {
            const slug = cleanPath.replace('industries/', '')
            await updateDocument('industry', slug, meta)
        } else if (path.startsWith('/about-us/')) {
            const slug = cleanPath.replace('about-us/', '')
            if (slug === '') {
                await updateDocument('page', 'about-us', meta)
            } else if (slug === 'news') {
                await updateDocument('page', 'news', meta)
            } else {
                // Other about-us subpages (company-history, etc.) might be separate pages or sections
                // For now, try to find a page with that slug
                await updateDocument('page', slug, meta)
            }
        } else if (path.startsWith('/careers/')) {
            const slug = cleanPath.replace('careers/', '')
            if (slug === '') {
                await updateDocument('page', 'careers', meta)
            } else {
                // Subpages like benefits, positions
                // These might be separate pages
                await updateDocument('page', slug, meta)
            }
        } else if (path.startsWith('/safety/')) {
            // Safety subpages
            const slug = cleanPath.replace('safety/', '')
            // Try to find page
            await updateDocument('page', slug, meta)
        } else if (path.startsWith('/resources/')) {
            const slug = cleanPath.replace('resources/', '')
            if (slug === '') {
                await updateDocument('page', 'resources', meta)
            } else {
                await updateDocument('page', slug, meta)
            }
        } else {
            // Top level pages or news posts
            // Try page first
            let docId = await client.fetch(`*[_type == "page" && slug.current == "${cleanPath}"][0]._id`)
            if (docId) {
                await updateDocument('page', cleanPath, meta)
            } else {
                // Try news post
                docId = await client.fetch(`*[_type == "newsPost" && slug.current == "${cleanPath}"][0]._id`)
                if (docId) {
                    await updateDocument('newsPost', cleanPath, meta)
                } else {
                    console.log(`Could not match path to doc: ${path}`)
                }
            }
        }
    }

    console.log('Done!')
}

main().catch(console.error)
