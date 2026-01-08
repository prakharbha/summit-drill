/**
 * Seed industries to Sanity
 * Run with: node scripts/seed-industries.mjs
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

const industries = [
    {
        slug: 'environmental',
        title: 'Environmental Services',
        heroDescription: 'Partnering with environmental professionals for over 40 years',
        subtitle: 'Environmental – Partnering with environmental professionals for over 40 years!',
        excerpt: 'Consultants in need of environmental contracting services recognize that Summit is the go-to source for subsurface investigations and remediation services.',
        ctaText: 'Our Environmental Expertise',
        image: '/images/industries/environmental-banner.webp',
        order: 1,
        content: [
            "Consultants in need of environmental contracting services recognize that Summit is the go-to source for subsurface investigations and remediation services.",
            "From Maine to Florida, Summit offers the industry's most comprehensive, effective and efficient geophysical, drilling and remediation services. Their dedicated, experienced environmental field talent deliver the most effective integrated solutions regardless of site conditions.",
            "Leading environmental contracting companies, such as Summit, deliver crews that combine technical expertise and rigorous health and safety training with the practical experience needed to address virtually any environmental requirement. With a strong emphasis on project management and quality control, clients are ensured to have their needs met efficiently and cost effectively.",
            "Summit utilizes state-of-the-art environmental technologies to support their geophysical, drilling and remediation solutions while providing industry-leading expertise to their multi-regional customers ensuring exceptional results."
        ]
    },
    {
        slug: 'geotechnical',
        title: 'Geotechnical Services',
        heroDescription: 'We help you strengthen every project from the ground up',
        subtitle: 'Geotechnical – We help you strengthen every project from the ground up!',
        excerpt: 'From large construction projects to solar carports, Summit\'s geotechnical services offer talented and licensed drillers with decades of experience.',
        ctaText: 'Our Geotechnical Expertise',
        image: '/images/industries/geotechnical-banner.webp',
        order: 2,
        content: [
            "From large construction projects to solar carports, Summit's geotechnical services offer talented and licensed drillers with decades of experience.",
            "Our geotechnical drilling capabilities support foundation design, slope stability assessments, and subsurface investigations across diverse terrains and project types.",
            "Summit's state-of-the-art equipment and experienced crews ensure accurate data collection and reliable results for engineering decisions.",
            "We work closely with geotechnical engineers and construction teams to deliver precise soil and rock sampling, SPT testing, and monitoring well installations."
        ]
    },
    {
        slug: 'cathodic',
        title: 'Cathodic Protection Services',
        heroDescription: 'Drilling that helps protect what matters most',
        subtitle: 'Cathodic – Drilling that helps protect what matters most!',
        excerpt: 'Summit delivers precise cathodic protection boreholes that safeguard pipelines, tanks, and other buried infrastructure.',
        ctaText: 'Our Cathodic Expertise',
        image: '/images/industries/cathodic-banner.webp',
        order: 3,
        content: [
            "Summit delivers precise cathodic protection boreholes that safeguard pipelines, tanks, and other buried infrastructure.",
            "Our specialized drilling services support the installation of impressed current and sacrificial anode systems designed to prevent corrosion.",
            "With decades of experience in utility and infrastructure projects, Summit's cathodic protection drilling ensures accurate placement and reliable performance.",
            "We partner with cathodic protection engineers and utility companies to deliver safe, efficient solutions for critical infrastructure protection."
        ]
    },
    {
        slug: 'aggregate',
        title: 'Aggregate Drilling Services',
        heroDescription: 'Core insights that drive smarter, more profitable excavations',
        subtitle: 'Aggregate – Core insights that drive smarter, more profitable excavations!',
        excerpt: 'From coring accuracy to equipment uptime, Summit provides the data and daily production reliability quarry owners count on.',
        ctaText: 'Our Aggregate Expertise',
        image: '/images/industries/aggregate-banner.webp',
        order: 4,
        content: [
            "From coring accuracy to equipment uptime, Summit provides the data and daily production reliability quarry owners count on to assess reserves, reduce uncertainty, and confidently advance their mining plans.",
            "We support large quarry and test pit owners with expert coring services. Geotechnical drilling and sampling of aggregate materials such as sand, gravel, and stone determines material location and volume, two critical factors in terms of excavation planning and cost estimating.",
            "Summit provides reliable core sampling that is used to determine the thickness of aggregate beds, as well as the amount of overburden present. Cores can be studied to determine the volume of materials for excavating. At the same time, core samples will help determine the amount of vegetation and topsoil covering the material beds.",
            "To ensure maximum uptime, Summit proactively maintains all equipment through their internal Fleet Maintenance and Management Division. This ensures our field crews can execute targeted amounts of core drilling per day with minimal to no disruption.",
            "If you need a proven team to help you with the assessment and growth of your quarry or sand pit operation, add Summit to your bid list today!"
        ]
    }
]

async function seedIndustries() {
    console.log(`Starting to seed ${industries.length} industries...`)

    for (const industry of industries) {
        try {
            // Check if exists
            const existing = await client.fetch(
                `*[_type == "industry" && slug.current == $slug][0]`,
                { slug: industry.slug }
            )

            if (existing) {
                console.log(`Skipping existing: ${industry.slug}`)
                continue
            }

            const doc = {
                _type: 'industry',
                title: industry.title,
                slug: { _type: 'slug', current: industry.slug },
                heroDescription: industry.heroDescription,
                ribbonText: 'INDUSTRIES SERVED',
                subtitle: industry.subtitle,
                excerpt: industry.excerpt,
                ctaText: industry.ctaText,
                legacyImagePath: industry.image,
                order: industry.order,
                content: textToPortableText(industry.content),
            }

            const result = await client.create(doc)
            console.log(`Created: ${industry.title} (${result._id})`)
        } catch (error) {
            console.error(`Error creating ${industry.slug}:`, error.message)
        }
    }

    console.log('Done seeding industries!')
}

seedIndustries().catch(console.error)
