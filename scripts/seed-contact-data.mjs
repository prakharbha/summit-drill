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
    // console.log(`Uploading image: ${imagePath}`)
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

const EMPLOYEES = [
    // Corporate
    { name: "Ron Bucca", title: "Chief Executive Officer", email: "RBucca@summitdrilling.com", image: "/images/contact/ron-bucca-ceo.webp", department: "corporate" },
    { name: "Matthew Vetter", title: "Chief Operating Officer", email: "MVetter@summitdrilling.com", image: "/images/contact/matthew-vetter-coo.webp", department: "corporate" },
    { name: "Pete Byer", title: "Head of Corporate Development", email: "PByer@summitdrilling.com", image: "/images/contact/pete-byer-head-of-corp-dev.webp", department: "corporate" },
    // Operations
    { name: "Joel Bernstein", title: "Senior Vice President", email: "JBernstein@summitdrilling.com", image: "/images/contact/joel-bernstein-sr-vp.webp", department: "operations" },
    { name: "Joan Baer", title: "Regional Vice President of Operations – Greater Philadelphia", email: "JBaer@summitdrilling.com", image: "/images/contact/joan-baer.webp", department: "operations" },
    { name: "Jack Byer", title: "Regional Vice President of Operations – Southeast", email: "JByer@summitdrilling.com", image: "/images/contact/jack-byer-vice-president-operations.webp", department: "operations" },
    { name: "Joseph C. Negro", title: "Vice President of Remediation", email: "JNegro@summitdrilling.com", image: "/images/contact/joey-negro-vp-remediation.webp", department: "operations" },
    { name: "Jerry Aquino", title: "Director of Fleet Services", email: "JAquino@summitdrilling.com", image: "/images/contact/jerry-aquino-director-of-fleet-services.webp", department: "operations" },
    { name: "Ed Ruger", title: "Project Manager", email: "ERuger@summitdrilling.com", image: "/images/contact/ed-ruger-project-manager.webp", department: "operations" },
    { name: "Yecenia DeTorrice", title: "Project Manager", email: "YDetorrice@summitdrilling.com", image: "/images/contact/yecenia-detorrice-pm.webp", department: "operations" },
    { name: "Jess Parell", title: "Project Manager", email: "JParell@summitdrilling.com", image: "/images/contact/jessica-parell-pm.webp", department: "operations" },
    { name: "Katie West", title: "Project Manager", email: "KWest@summitdrilling.com", image: "/images/contact/katie-west.webp", department: "operations" },
    { name: "Michael Wilson", title: "Drilling Field Supervisor", email: "MWilson@summitdrilling.com", image: "/images/contact/mike-wilson-drilling-field-supervisor.webp", department: "operations" },
    { name: "Richy Lemire", title: "Drilling Field Supervisor", email: "RLemire@summitdrilling.com", image: "/images/contact/richey-lamire-drilling-field-supervisor.webp", department: "operations" },
    { name: "Mary Holmes", title: "Project Administrator", email: "MHolmes@summitdrilling.com", image: "/images/contact/mary-holmes-project-administrator.webp", department: "operations" },
    { name: "Zach Thompson", title: "Project Manager", email: "ZThompson@summitdrilling.com", image: "/images/contact/zach-thompson.webp", department: "operations" },
    { name: "Brian Moriarty", title: "Project Manager", email: "BMoriarty@summitdrilling.com", image: "/images/contact/brian-moriarty.webp", department: "operations" },
    { name: "Dustin Lutz", title: "General Manager", email: "DLutz@summitdrilling.com", image: "/images/contact/dustin-lutz.webp", department: "operations" },
    { name: "Nick King", title: "Project Manager", email: "NKing@summitdrilling.com", image: "/images/contact/nick-king.webp", department: "operations" },
    // IT Ops
    { name: "Trevor Quinn", title: "Director of IT", email: "TQuinn@summitdrilling.com", image: "/images/contact/trevor-quinn-director-it.webp", department: "it_ops" },
    { name: "Kaylyn Johnson", title: "Digital Transformation and Integration Manager", email: "KJohnson@summitdrilling.com", image: "/images/contact/kaylyn-johnson.webp", department: "it_ops" },
    // Business Dev
    { name: "Lauren DiVello", title: "VP of Sales & Business Development", email: "ldivello@summitdrilling.com", image: "/images/contact/lauren-divello-vp-of-sales.webp", department: "business_dev" },
    { name: "Dermot P. Dillon", title: "Vice President of Major Accounts", email: "DDillon@summitdrilling.com", image: "/images/contact/dermot-dillon-vice-president-major-accounts.webp", department: "business_dev" },
    // Health & Safety
    { name: "Ben Shaffer", title: "Director of Health and Safety", email: "BShaffer@summitdrilling.com", image: "/images/contact/ben-shaffer-director-of-health-safety.webp", department: "health_safety" },
    // Finance
    { name: "Abigail George", title: "Accounts Receivable Manager", email: "AGeorge@summitdrilling.com", image: "/images/contact/abigail-george-accounts-receiveable-manager.webp", department: "finance" },
]

const LOCATIONS = [
    {
        name: "Bridgewater, NJ",
        label: "Headquarters",
        address: "81 Chimney Rock Road, Bridgewater, NJ 08807",
        phone: "800-242-6648",
        fax: "732-356-1009",
        mapQuery: "81+Chimney+Rock+Road,+Bridgewater,+NJ+08807"
    },
    {
        name: "Runnemede, NJ",
        label: "Regional Office",
        address: "190 Ninth Avenue, Runnemede, NJ 08078",
        phone: "800-242-6648",
        fax: "732-356-1009",
        mapQuery: "190+Ninth+Avenue,+Runnemede,+NJ+08078"
    },
    {
        name: "Jackson Township, NJ",
        label: "Regional Office",
        address: "629 Wright Debow Road, Jackson Township, NJ 08527",
        phone: "800-242-6648",
        fax: "732-356-1009",
        mapQuery: "629+Wright+Debow+Road,+Jackson+Township,+NJ+08527"
    },
    {
        name: "Easton, PA",
        label: "Regional Office",
        address: "724 S 27th St, Easton, PA 18045",
        phone: "888-204-3266",
        fax: "888-204-3266",
        mapQuery: "724+S+27th+St,+Easton,+PA+18045"
    },
    {
        name: "Fort Mill, SC",
        label: "Regional Office",
        address: "9088 Northfield Drive, Fort Mill, SC 29707",
        phone: "800-849-0353",
        fax: "888-204-3266",
        mapQuery: "9088+Northfield+Drive,+Fort+Mill,+SC+29707"
    }
]

async function seedContactData() {
    console.log('Seeding Employees...')
    let order = 0
    for (const emp of EMPLOYEES) {
        const imageAsset = await uploadImage(emp.image)
        const doc = {
            _type: 'teamMember',
            name: emp.name,
            title: emp.title,
            email: emp.email,
            department: emp.department,
            image: imageAsset,
            order: order++
        }
        // Use name as ID for idempotency (simple slugification)
        const id = `team-${emp.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
        await client.createOrReplace({ _id: id, ...doc })
        console.log(`Seeded employee: ${emp.name}`)
    }

    console.log('Seeding Locations...')
    order = 0
    for (const loc of LOCATIONS) {
        const doc = {
            _type: 'location',
            ...loc,
            order: order++
        }
        const id = `location-${loc.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
        await client.createOrReplace({ _id: id, ...doc })
        console.log(`Seeded location: ${loc.name}`)
    }

    console.log('Done seeding contact data!')
}

seedContactData().catch(console.error)
