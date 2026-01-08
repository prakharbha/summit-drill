/**
 * Seed team members to Sanity
 * Run with: node scripts/seed-team.mjs
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

// Team members with departments (combined from TeamCarousel and ContactPageContent)
const TEAM_MEMBERS = [
    // Corporate Leadership
    { name: "Ron Bucca", title: "Chief Executive Officer", email: "RBucca@summitdrilling.com", image: "/images/contact/ron-bucca-ceo.webp", department: "corporate", showOnHomepage: true, order: 1 },
    { name: "Matthew Vetter", title: "Chief Operating Officer", email: "MVetter@summitdrilling.com", image: "/images/contact/matthew-vetter-coo.webp", department: "corporate", showOnHomepage: true, order: 2 },
    { name: "Pete Byer", title: "Head of Corporate Development", email: "PByer@summitdrilling.com", image: "/images/contact/pete-byer-head-of-corp-dev.webp", department: "corporate", showOnHomepage: true, order: 9 },

    // Operations
    { name: "Joel Bernstein", title: "Senior Vice President", email: "JBernstein@summitdrilling.com", image: "/images/contact/joel-bernstein-sr-vp.webp", department: "operations", showOnHomepage: true, order: 3 },
    { name: "Joan Baer", title: "Regional Vice President of Operations – Greater Philadelphia", email: "JBaer@summitdrilling.com", image: "/images/contact/joan-baer.webp", department: "operations", showOnHomepage: true, order: 4 },
    { name: "Jack Byer", title: "Regional Vice President of Operations – Southeast", email: "JByer@summitdrilling.com", image: "/images/contact/jack-byer-vice-president-operations.webp", department: "operations", showOnHomepage: true, order: 5 },
    { name: "Joseph C. Negro", title: "Vice President of Remediation", email: "JNegro@summitdrilling.com", image: "/images/contact/joey-negro-vp-remediation.webp", department: "operations", showOnHomepage: true, order: 6 },
    { name: "Jerry Aquino", title: "Director of Fleet Services", email: "JAquino@summitdrilling.com", image: "/images/contact/jerry-aquino-director-of-fleet-services.webp", department: "operations", showOnHomepage: true, order: 11 },
    { name: "Ed Ruger", title: "Project Manager", email: "ERuger@summitdrilling.com", image: "/images/contact/ed-ruger-project-manager.webp", department: "operations", showOnHomepage: true, order: 14 },
    { name: "Yecenia DeTorrice", title: "Project Manager", email: "YDetorrice@summitdrilling.com", image: "/images/contact/yecenia-detorrice-pm.webp", department: "operations", showOnHomepage: true, order: 17 },
    { name: "Jessica Parell", title: "Project Manager", email: "JParell@summitdrilling.com", image: "/images/contact/jessica-parell-pm.webp", department: "operations", showOnHomepage: true, order: 15 },
    { name: "Katie West", title: "Project Manager", email: "KWest@summitdrilling.com", image: "/images/contact/katie-west.webp", department: "operations", showOnHomepage: true, order: 16 },
    { name: "Michael Wilson", title: "Drilling Field Supervisor", email: "MWilson@summitdrilling.com", image: "/images/contact/mike-wilson-drilling-field-supervisor.webp", department: "operations", showOnHomepage: true, order: 20 },
    { name: "Richy Lemire", title: "Drilling Field Supervisor", email: "RLemire@summitdrilling.com", image: "/images/contact/richey-lamire-drilling-field-supervisor.webp", department: "operations", showOnHomepage: true, order: 21 },
    { name: "Mary Holmes", title: "Project Administrator", email: "MHolmes@summitdrilling.com", image: "/images/contact/mary-holmes-project-administrator.webp", department: "operations", showOnHomepage: true, order: 18 },
    { name: "Zach Thompson", title: "Project Manager", email: "ZThompson@summitdrilling.com", image: "/images/contact/zach-thompson.webp", department: "operations", showOnHomepage: true, order: 22 },
    { name: "Brian Moriarty", title: "Project Manager", email: "BMoriarty@summitdrilling.com", image: "/images/contact/brian-moriarty.webp", department: "operations", showOnHomepage: true, order: 23 },
    { name: "Dustin Lutz", title: "General Manager", email: "DLutz@summitdrilling.com", image: "/images/contact/dustin-lutz.webp", department: "operations", showOnHomepage: true, order: 24 },
    { name: "Nick King", title: "Project Manager", email: "NKing@summitdrilling.com", image: "/images/contact/nick-king.webp", department: "operations", showOnHomepage: true, order: 25 },
    { name: "Christian Tormen", title: "Driller", email: "", image: "/images/team/christian-tormen-driller.webp", department: "operations", showOnHomepage: true, order: 26 },
    { name: "Matt Jelinski", title: "Driller", email: "", image: "/images/team/matt-jelinski-driller.webp", department: "operations", showOnHomepage: true, order: 27 },

    // IT Operations
    { name: "Trevor Quinn", title: "Director of IT", email: "TQuinn@summitdrilling.com", image: "/images/contact/trevor-quinn-director-it.webp", department: "it_ops", showOnHomepage: true, order: 12 },
    { name: "Kaylyn Johnson", title: "Digital Transformation and Integration Manager", email: "KJohnson@summitdrilling.com", image: "/images/contact/kaylyn-johnson.webp", department: "it_ops", showOnHomepage: true, order: 13 },

    // Health & Safety
    { name: "Ben Shaffer", title: "Director of Health and Safety", email: "BShaffer@summitdrilling.com", image: "/images/contact/ben-shaffer-director-of-health-safety.webp", department: "health_safety", showOnHomepage: true, order: 10 },

    // Business Development
    { name: "Lauren DiVello", title: "VP of Sales & Business Development", email: "ldivello@summitdrilling.com", image: "/images/contact/lauren-divello-vp-of-sales.webp", department: "business_dev", showOnHomepage: true, order: 7 },
    { name: "Dermot P. Dillon", title: "Vice President of Major Accounts", email: "DDillon@summitdrilling.com", image: "/images/contact/dermot-dillon-vice-president-major-accounts.webp", department: "business_dev", showOnHomepage: true, order: 8 },

    // Finance
    { name: "Abigail George", title: "Accounts Receivable Manager", email: "AGeorge@summitdrilling.com", image: "/images/contact/abigail-george-accounts-receiveable-manager.webp", department: "finance", showOnHomepage: true, order: 19 },
]

async function seedTeamMembers() {
    console.log(`Starting to seed ${TEAM_MEMBERS.length} team members...`)

    for (const member of TEAM_MEMBERS) {
        try {
            // Check if member exists
            const existing = await client.fetch(
                `*[_type == "teamMember" && name == $name][0]`,
                { name: member.name }
            )

            if (existing) {
                console.log(`Skipping existing: ${member.name}`)
                continue
            }

            const doc = {
                _type: 'teamMember',
                name: member.name,
                title: member.title,
                email: member.email || undefined,
                department: member.department,
                showOnHomepage: member.showOnHomepage,
                order: member.order,
                legacyImagePath: member.image,
            }

            const result = await client.create(doc)
            console.log(`Created: ${member.name} (${result._id})`)
        } catch (error) {
            console.error(`Error creating ${member.name}:`, error.message)
        }
    }

    console.log('Done seeding team members!')
}

seedTeamMembers().catch(console.error)
