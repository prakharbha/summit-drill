import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

async function checkServiceImages() {
    console.log('Checking service images...')
    const services = await client.fetch(`
        *[_type == "service" && slug.current in ["borehole-geophysics", "electrical-resistivity"]] {
            title,
            slug,
            legacyImagePath,
            heroImage
        }
    `)

    for (const service of services) {
        console.log(`\nService: ${service.title}`)
        if (service.heroImage?.asset?._ref) {
            const url = urlFor(service.heroImage).url()
            console.log(`Sanity URL: ${url}`)
        } else {
            console.log('No Sanity image found.')
        }
    }
}

checkServiceImages().catch(console.error)
