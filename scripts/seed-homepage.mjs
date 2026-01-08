import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'
import { basename } from 'path'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

async function uploadImage(imagePath) {
    if (!imagePath) return null
    const localPath = join(process.cwd(), 'public', imagePath)
    if (!existsSync(localPath)) {
        console.warn(`Image not found: ${localPath}`)
        return null
    }
    console.log(`Uploading image: ${imagePath}`)
    const asset = await client.assets.upload('image', createReadStream(localPath), {
        filename: basename(localPath)
    })
    return {
        _type: 'image',
        asset: {
            _type: 'reference',
            _ref: asset._id
        }
    }
}

async function seedHomepage() {
    console.log('Seeding Homepage...')

    // Upload images first
    const careersImage = await uploadImage('/images/careers-image.webp')
    const startProjectImage = await uploadImage('/images/start-bg.webp')
    const healthSafetyImage = await uploadImage('/images/health-safety-home-bg.webp')

    const doc = {
        _type: 'homePage',
        _id: 'homePage', // Singleton ID
        title: 'Home Page',
        hero: {
            title: "Discovery",
            subtitle: "Geophysics, Drilling, Remediation",
            description: "Summit's ability to consistently manage a diverse range of complex projects safely, efficiently and with excellent results is sustained through our unique customer promise— An Exceptional Experience. We care about this work, the environment, and your experience with us. We take pride in listening, responding, and delivering because your satisfaction drives our success. Approachable. Appreciative. Eager to Serve.",
            videoUrl: "/videos/hero-background.mp4",
            ctaText: "About Us >>",
            ctaLink: "/about-us"
        },
        careers: {
            title: "Careers",
            description: "In our human resources department, you are the customer. Creating opportunities for our people to grow is not lip service, it’s a commitment. We have a successful career development program that provides trainings, certifications and a clear path forward.",
            image: careersImage,
            ctaText: "Start your career track at Summit >>",
            ctaLink: "/careers"
        },
        startProject: {
            title: "Start-a-Project 24/7",
            description: "Get a fast, accurate and competitive proposal. Tap into our veteran project managers. Experience increased efficiency through our broad services platform. Leverage our Maine to Florida reach to cover your hard to get to project sites. Use our simple online form to easily upload your scope of work.",
            image: startProjectImage,
            ctaText: "We're eager to serve you >>",
            ctaLink: "/resources/start-a-project"
        },
        healthSafety: {
            title: "Health & Safety",
            description: "Our Health & Safety programs are unique. How? We blend best practice trainings, PPE use, equipment maintenance and Sr. team mentors with the industry's most hands-on approach. Our H&S leaders are out in the field to guide where the work is being done.",
            image: healthSafetyImage,
            ctaText: "Learn more about our H&S culture and leadership >>",
            ctaLink: "/health-safety"
        }
    }

    await client.createOrReplace(doc)
    console.log('Seeded Homepage!')
}

seedHomepage().catch(console.error)
