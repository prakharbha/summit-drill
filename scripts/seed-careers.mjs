/**
 * Seed careers pages to Sanity
 * Run with: node scripts/seed-careers.mjs
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config()

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

function randomKey() {
    return Math.random().toString(36).substr(2, 12)
}

function textToPortableText(paragraphs) {
    if (!paragraphs || paragraphs.length === 0) return []
    return paragraphs.map(text => ({
        _type: 'block',
        _key: randomKey(),
        style: 'normal',
        children: [{ _type: 'span', _key: randomKey(), text, marks: [] }]
    }))
}

function listToPortableText(items) {
    if (!items || items.length === 0) return []
    return items.map(item => ({
        _type: 'block',
        _key: randomKey(),
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: randomKey(), text: item, marks: [] }]
    }))
}

const pages = [
    {
        slug: 'benefits',
        title: 'Join an Industry Leader',
        heroDescription: 'Become part of a culture dedicated to providing you with an opportunity to an exceptional career',
        ribbonText: 'Benefits',
        image: '/images/careers/benefits.webp',
        content: [
            "At Summit, people are more than their job titles, they're valued members of a close-knit team that looks out for one another. New team members quickly discover a culture built on respect, collaboration, and genuine support. That's why so many of us reach anniversary milestones.",
            "Summit is a growing industry leader offering competitive compensation, a 401(K)-retirement plan, including a generous employer match, healthcare benefits, including dental and vision, a values-based and team-oriented work culture, skills and training development."
        ]
    },
    {
        slug: 'your-career',
        title: 'What Separates Summit Drilling',
        heroDescription: 'From our competitors and makes us a highly desired place to build a career, is our company culture and the many talented people who sustain it',
        ribbonText: 'Your Career',
        image: '/images/careers/your-career.webp',
        content: [
            "Summit always welcomes the best and brightest and we are committed in training and developing the next wave of Summit team members. We welcome talented individuals who are just starting out to people with some work experience from related fields, such as engineering, construction, manufacturing, auto mechanics, farming, as well as military veterans re-entering the workforce.",
            "Our programs are comprehensive and designed to support our people in their advancement. For example, we offer a unique Driller Apprentice Training Program that includes a comprehensive list of health and safety programs and equipment operating licensure opportunities, such as CDLs, OSHA Safety Certifications, heavy machinery and more. This ensures that our teams are well trained and prepared for successful outcomes and a rewarding career path."
        ]
    },
    {
        slug: 'positions',
        title: 'Summit Takes Pride',
        heroDescription: 'In creating an environment where every individual can learn, grow, and feel part of something larger, a company united by purpose, safety, and shared success',
        ribbonText: 'Positions',
        image: '/images/careers/positions.webp',
        content: [
            "Whether you're in the field or in the office, you'll find approachable leaders, open communication, and colleagues who are eager to share knowledge and lend a hand.",
            "Summit is a growing industry leader offering competitive compensation, a 401(K)-retirement plan that includes a generous employer match, healthcare benefits, including dental and vision, a values-based and team-oriented work culture, skills and training development.",
            "We provide employment opportunities company-wide including:",
            // List items will be handled separately in the logic below
            "Early Career Apprentice Field Positions",
            "Drilling Positions",
            "Geophysical Services",
            "Remediation Services",
            "Fleet Maintenance & Management",
            "Corporate/Office Administration",
            "Business Development/Sales",
            "So, whether you're already an experienced licensed professional, a military veteran, or a young person in search of a unique career, Summit offers a proven-effective path to achieve your goals.",
            "We have immediate opportunities for Licensed Drillers and Driller Assistants."
        ]
    }
]

async function seedCareers() {
    console.log(`Starting to seed ${pages.length} career pages...`)

    for (const page of pages) {
        try {
            // Check if exists
            const existing = await client.fetch(
                `*[_type == "careerPage" && slug.current == $slug][0]`,
                { slug: page.slug }
            )

            if (existing) {
                console.log(`Skipping existing: ${page.slug}`)
                continue
            }

            let content = []
            if (page.slug === 'positions') {
                // Custom handling for positions page to mix text and list
                content = [
                    ...textToPortableText(page.content.slice(0, 3)),
                    ...listToPortableText(page.content.slice(3, 10)),
                    ...textToPortableText(page.content.slice(10))
                ]
            } else {
                content = textToPortableText(page.content)
            }

            const doc = {
                _type: 'careerPage',
                title: page.title,
                slug: { _type: 'slug', current: page.slug },
                heroDescription: page.heroDescription,
                ribbonText: page.ribbonText,
                legacyImagePath: page.image,
                content: content,
            }

            const result = await client.create(doc)
            console.log(`Created: ${page.title} (${result._id})`)
        } catch (error) {
            console.error(`Error creating ${page.slug}:`, error.message)
        }
    }

    console.log('Done seeding career pages!')
}

seedCareers().catch(console.error)
