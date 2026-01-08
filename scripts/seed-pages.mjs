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

function textToPortableText(text) {
    if (!text) return []
    if (Array.isArray(text)) {
        return text.map(line => ({
            _key: generateKey(),
            _type: 'block',
            style: 'normal',
            children: [{ _key: generateKey(), _type: 'span', text: line }]
        }))
    }
    return [{
        _key: generateKey(),
        _type: 'block',
        style: 'normal',
        children: [{ _key: generateKey(), _type: 'span', text: text }]
    }]
}

const pages = [
    {
        title: "Our Vision and Purpose",
        slug: "about-us",
        heroDescription: "Summit's Vision is to serve as a trusted contractor to environmental professionals providing the high-quality subsurface data, drilling expertise, and remediation system support that enable consultants to design and implement effective cleanup strategies.",
        ribbonText: "ABOUT US",
        legacyImagePath: "/images/about/hero-banner.webp",
        content: [
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Through this partnership, we help reduce risk, improve site outcomes, contribute to healthier communities and restored natural environments." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Our Mission is built around delivering an exceptional customer experience, one grounded in safety, responsiveness, technical excellence, and genuine care. Every day, we commit ourselves to protecting the health and safety of our employees, clients, and the individuals living in or around impacted properties. This responsibility shapes every decision, procedure, and project we undertake." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Environmental Responsibility and Social Impact" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Our work extends beyond our services—it contributes to quality of life. Environmental restoration creates safer groundwater, cleaner soils, and revitalized properties that enable healthier, more sustainable communities. Summit embraces this impact as part of our social and environmental responsibility." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Integrated Capabilities, Multi-Regional Reach" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "As Summit has grown, so has the breadth and integration of our service capabilities. What began as a specialty drilling operation has evolved into a unified environmental services provider offering geophysical investigation, down-hole analytics, environmental and geotechnical drilling, treatment system installation, O&M programs, and full-scale remediation system support." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Serving clients from Maine to Florida, Summit delivers continuity across the entire project lifecycle. This reduces cost, accelerates schedules, simplifies communication, and enables faster site closure. The benefit is clear: a single contractor equipped to manage a broader scope of complex requirements, safely and efficiently." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Moving Forward Together" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Summit exists to make a meaningful difference for our customers, our people, the environment, and for communities across an expanding geographic footprint. If you are looking for a partner with integrated capabilities, multi-regional reach, and a team that is approachable, appreciative, and eager to serve, we invite you to connect." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h3', // Using h3 for the bold italic text at the end
                children: [{ _key: generateKey(), _type: 'span', text: "Together, we can explore new opportunities, deliver exceptional results, and advance the greater good through smarter, safer, more effective environmental solutions." }]
            }
        ],
        sidebar: {
            title: "A Legacy Built on Hard Work and Integrity",
            legacyImagePath: "/images/about/summit-history.webp",
            content: textToPortableText("Summit's story spans nearly seven decades and honors the pioneering work of Robert Kreilick, Sr. and Donald Grahamer, who drilled test borings throughout the Northeast beginning in the 1950s. From the establishment of Summit Well & Pump Co. in 1969 to the founding of Summit Drilling Company, Inc. in 1986, the company steadily built its reputation for quality and reliability. Over the years, strategic acquisitions and the addition of key talent have transformed Summit into a multi-regional industry leader. Although our fleet, equipment, and service lines have evolved, the values that shaped Summit's early days continue to guide us.")
        }
    },
    {
        title: "Health & Safety",
        slug: "health-safety",
        heroDescription: "A Safety Culture Built to Protect People, Strengthen Teams and Elevate Careers",
        ribbonText: "SUMMIT",
        legacyImagePath: "/images/health-safety-banner.webp",
        content: [
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "A Culture Where Safety and Operational Excellence Go Hand in Hand" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "At Summit, safety isn't a checklist, it's a core value that shapes every action in the field, every project plan, and every customer interaction. Our teams operate in complex environmental and geotechnical conditions, where attention to detail and the discipline of safe practices are essential. We foster a culture where every employee understands their role in protecting themselves, their coworkers, and the communities where we work. This shared responsibility ensures that customers receive exceptional service backed by consistent, reliable, safety-driven performance." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Meet Ben Shaffer – Leading Summit's Next Generation of Health & Safety" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "After five years of progressive experience at Summit, Ben Shaffer has been promoted to Director of Health & Safety, an advancement earned through hard work, hands-on field knowledge, and a deep commitment to the well-being of our teams. Ben began his career as a Driller Assistant and advanced to Lead Driller, gaining firsthand insight into the daily challenges of drilling, injection, and geophysical operations. His passion for Health & Safety grew under the mentorship of long-time Safety Director Denis Crayon and expanded through ongoing certifications, including his Certified Occupational Safety Specialist (COSS) credential. With his blend of technical training and frontline experience, Ben brings a practical, grounded approach to safety leadership." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Training, Certification, and Career Advancement Built Into Every Role" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Summit's Health & Safety programs do more than keep our people safe, they strengthen careers. Every employee, from new hires to senior drillers, receives comprehensive safety training and access to certification pathways that support long-term professional growth." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Our structured Driller Apprentice Training Program integrates essential safety protocols with equipment operation, CDL licensing opportunities, OSHA coursework, machinery training, and more. These investments help our teams build confidence, earn valuable credentials, and advance into higher-level operational and leadership roles. When our people grow, our customers benefit from safer, more efficient project outcomes." }]
            }
        ],
        sidebar: {
            title: "Core H&S Training",
            legacyImagePath: "/images/dark-mountain.webp", // Using mountain logo as image here
            listItems: [
                "OSHA 40-Hour & 8-Hour Refresher",
                "Loss Prevention System (LPS)",
                "API Passport Safety Training",
                "Amtrak & NJ Transit Safety Programs",
                "Fall Protection",
                "Lockout/Tagout (Energy Control)",
                "PPE Training",
                "HAZCOM",
                "Emergency Action Plans",
                "Fire Safety & Prevention",
                "Forklift Safety",
                "Respirator Fit Testing",
                "Hot Work Activity Program"
            ]
        }
    },
    {
        title: "You Matter Here",
        slug: "careers",
        heroDescription: "We enthusiastically welcome new talent to the Summit team and treat all, new members and long-standing contributors, with respect.",
        ribbonText: "Careers",
        legacyImagePath: "/images/careers/hero.webp",
        dividerColor: "#a4c5c5",
        content: [
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "A Culture of Service. What we promise:" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h3',
                children: [{ _key: generateKey(), _type: 'span', text: "We listen with patience and empathy." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "Our goal is to be responsive and to follow up in a timely manner to your questions with the answers you need. From understanding details about our comprehensive benefits, to building your career direction, we are here to support you." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "We invite open discussion to establish a full understanding of your goals, needs or situations. We will be accessible for you and provide an open door to revisit conversations to ensure a mutual understanding and a positive path forward." }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h3',
                children: [{ _key: generateKey(), _type: 'span', text: "At Summit, you are our customer" }]
            }
        ]
    },
    {
        title: "We're here to help. Let's connect.",
        slug: "contact",
        ribbonText: "Contact",
        legacyImagePath: "/images/contact/hero-banner.webp",
        content: [
            {
                _key: generateKey(),
                _type: 'block',
                style: 'h2',
                children: [{ _key: generateKey(), _type: 'span', text: "Keep In Touch" }]
            },
            {
                _key: generateKey(),
                _type: 'block',
                style: 'normal',
                children: [{ _key: generateKey(), _type: 'span', text: "A lot is happening at Summit, follow us on social media, contact one of our experts below, or complete the form so we can learn more about your needs." }]
            }
        ]
    },
    {
        title: "Start a Project",
        slug: "start-a-project",
        heroDescription: "Let's discuss your project needs",
        legacyImagePath: "/images/start-project-banner.webp",
        dividerColor: "#8B4513"
    },
    {
        title: "Industries Served",
        slug: "industries",
        heroDescription: "Summit serves diverse industries with specialized drilling, geophysics, and remediation solutions. Our multi-regional reach and technical expertise make us the trusted partner for environmental, geotechnical, cathodic, and aggregate projects.",
        ribbonText: "SUMMIT DRILLING",
        legacyImagePath: "/images/industries/environmental-banner.webp",
        dividerColor: "#377d7e"
    },
    {
        title: "Airport Earth Work", // Featured Project Title as Hero Title
        slug: "project-gallery",
        heroDescription: "This active North Carolina project required a team that could work safely around a critical transportation facility. But that's not all!",
        ribbonText: "FEATURED PROJECT",
        legacyImagePath: "/images/projects/gallery-banner.webp",
        dividerColor: "#377d7e"
    },
    {
        title: "Summit News & Insights",
        slug: "news",
        heroDescription: "Stay up to date with the latest news, press releases, and insights from Summit Drilling.",
        ribbonText: "SUMMIT NEWS",
        legacyImagePath: "/images/about/hero-banner.webp",
        dividerColor: "#162f58"
    }
]

async function seedPages() {
    console.log('Seeding pages...')
    for (const page of pages) {
        const doc = {
            _type: 'page',
            title: page.title,
            slug: { current: page.slug },
            heroDescription: page.heroDescription,
            ribbonText: page.ribbonText,
            legacyImagePath: page.legacyImagePath,
            dividerColor: page.dividerColor,
            content: page.content,
            sidebar: page.sidebar
        }

        // Create or replace based on slug
        // We need to find if it exists first because we can't use slug as ID directly easily without custom ID
        // But we can use a deterministic ID based on slug
        const id = `page-${page.slug}`

        await client.createOrReplace({
            _id: id,
            ...doc
        })
        console.log(`Seeded page: ${page.title}`)
    }
    console.log('Done seeding pages!')
}

seedPages().catch(console.error)
