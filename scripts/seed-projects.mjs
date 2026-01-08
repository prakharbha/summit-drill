/**
 * Seed projects to Sanity
 * Run with: node scripts/seed-projects.mjs
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

function textToPortableText(text) {
    if (!text) return []
    return [{
        _type: 'block',
        _key: randomKey(),
        style: 'normal',
        children: [{ _type: 'span', _key: randomKey(), text, marks: [] }]
    }]
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

const projects = [
    {
        slug: 'charlotte-airport',
        title: 'Bentonite Hydraulic Cut-Off Wall Installation',
        location: 'Charlotte, NC',
        excerpt: 'Summit constructed a bentonite-based hydraulic cut-off wall within an active airport environment adjacent to a runway and taxiway.',
        image: '/images/projects/charlotte-airport-banner.webp',
        sidebarDetails: [
            { label: 'Containment Length', value: '400+ linear feet' },
            { label: 'Depth', value: '17–25 ft below ground surface' },
            { label: 'Regulatory Compliance', value: 'FAA, AOA, TSA, NCDEQ' },
            { label: 'Key Complexity', value: 'Construction within an active airfield adjacent to runway/taxiway' },
            { label: 'Additional Infrastructure', value: 'Protection/encapsulation of active utilities' },
            { label: 'Monitoring', value: 'Post-construction monitoring wells installed to confirm wall performance' }
        ],
        overview: "Summit's Remediation Division was engaged by the City of Charlotte, with a global engineering firm serving as design engineer, and Charlotte Douglas International Airport overseeing compliance, to construct a bentonite-based hydraulic cut-off wall within an active and highly secured airport environment. The system was designed to prevent the migration of impacted groundwater toward a stream monitored by NCDEQ. The project took place adjacent to an active runway and taxiway and required strict adherence to FAA, AOA, TSA, and NCDEQ protocols, all while ensuring full continuity of airport operations.",
        challenge: "Performing environmental construction inside an active airfield is inherently complex. The work zone sat directly beside critical aviation infrastructure and active utilities, requiring precise trenching, real-time coordination, and carefully sequenced construction practices. Strict federal and airport security requirements governed access, equipment movement, communication, and safety. Additionally, the shoreline-adjacent setting required reinforced staging areas, controlled excavation, and compliant handling of impacted soils.",
        services: [
            "Construction of 400+ linear feet of bentonite hydraulic cut-off wall (17–25 ft bgs)",
            "Site clearing, grading, and shoreline reinforcement to establish a stable work platform",
            "Excavation, backfilling, and transportation/disposal of impacted soils",
            "Trench-based containment wall installation around active airport subsurface utilities",
            "Restoration of disturbed areas, including backfilling, surface shaping, and final grading",
            "Installation of monitoring wells to evaluate hydraulic performance of the containment system",
            "Full compliance with FAA, AOA, TSA, NCDEQ, and airport-specific operational protocols"
        ],
        solutions: "Summit began by constructing a reinforced shoreline platform to maintain stability along the excavation corridor. Impacted soils were excavated, backfilled, and transported for proper disposal, ensuring environmental compliance at every stage. A trench-based hydraulic cut-off wall was then installed using bentonite slurry to create a continuous subsurface barrier. Crews worked with precision around sensitive, active airport utilities, encapsulating them within the wall alignment while preserving their function. Upon completion of the cut-off wall, Summit restored the work zone, regraded the shoreline, and reestablished safe operational conditions for the airport. Monitoring wells were then installed on both sides of the wall to verify hydraulic control and demonstrate regulatory compliance. Throughout the project, Summit maintained seamless coordination with airport operations, ensuring uninterrupted airfield activity.",
        outcome: "Summit successfully delivered a fully engineered hydraulic containment system that met all design criteria and regulatory expectations. The project was completed safely, on schedule, and without impact to airport operations. Post-installation monitoring confirmed proper hydraulic function, demonstrating effective containment of impacted groundwater. The effort highlights Summit's capability to execute precise, large-scale environmental construction inside high-security, operationally sensitive environments."
    },
    {
        slug: 'brick-nj',
        title: 'Emergency Storm Sewer Repair',
        location: 'Brick, NJ',
        excerpt: 'Summit delivered a complete investigation-to-restoration solution for an urgent subsurface infrastructure issue involving a monitoring well that punctured a storm sewer line.',
        image: '/images/projects/brick-nj-banner.webp',
        sidebarDetails: [
            { label: 'Client Type', value: 'Engineering firm & county infrastructure authority' },
            { label: 'Project Type', value: 'Storm sewer repair, well abandonment, utility investigation, monitoring well replacement' },
            { label: 'Disciplines Used', value: 'Geophysical, Drilling, Remediation' },
            { label: 'Technologies Used', value: 'RF, EM, GPR, DPT/Geoprobe, structural shoring systems' },
            { label: 'Infrastructure Repaired', value: '18" storm sewer line' },
            { label: 'Contract Structure', value: 'All work self-performed by Summit under one coordinated contract' }
        ],
        overview: "Summit was contracted by a large Engineering firm and Ocean County to address an urgent subsurface infrastructure failure in Brick, NJ. A sink hole had developed in a busy parking lot used by shoppers and township vehicles. The failure involved a monitoring well that had unintentionally punctured an 18-inch storm sewer line beneath a county roadway. Summit delivered a complete investigation-to-restoration solution using its Geophysical, Drilling, and Remediation divisions—eliminating the need for additional subcontractors and ensuring efficient coordination from start to finish.",
        challenge: "The damaged storm line restricted access for inspection and maintenance while the repair area was located directly beside an active two-lane county roadway. The project required traffic diversion, precision excavation, structural shoring, and seamless multi-division coordination to maintain roadway stability, public safety, and regulatory compliance throughout the work.",
        services: [
            "Subsurface utility investigation using RF, EM, and GPR",
            "Proper abandonment of an improperly installed monitoring well",
            "Roadway traffic control and diversion operations",
            "Shored excavation adjacent to active roadway",
            "Cutting and removal of existing well casing",
            "Clearing and repairing an 18\" storm sewer line (coupler & bentonite chip seal)",
            "Controlled backfilling and compaction with shoring removal",
            "Installation of a new monitoring well via direct-push Geoprobe drilling",
            "All services performed in-house under a single coordinated contract"
        ],
        solutions: "Summit began with a full geophysical investigation to map utilities and subsurface conditions around the compromised storm line. After confirming the location of the puncture, the Drilling Division abandoned the original monitoring well in place to prevent further interference. The Remediation Division then mobilized shoring systems, a mini excavator, and full roadway traffic control to safely manage traffic flow on the county road. A precision excavation was performed adjacent to the pavement without undermining the roadway. Crews removed the abandoned well, cleaned and cleared the storm sewer, and executed repairs with a mechanical coupler and bentonite seal. The excavation was then backfilled and compacted in controlled lifts while shoring was systematically removed. Once surface conditions were restored, Summit returned with its direct-push drilling team to install a new monitoring well in the remediated area, completing the system restoration.",
        outcome: "Summit delivered a fully self-performed, multi-division solution that restored storm sewer integrity, resolved ongoing access issues, and reinstated a functional monitoring well—all with minimal public disruption. The coordinated approach reduced downtime, ensured structural roadway stability, maintained regulatory compliance, and significantly streamlined project delivery for customers."
    },
    {
        slug: 'charlestown',
        title: 'Sonic Drilling – Overburden & Bedrock Wells',
        location: 'Charlestown, RI',
        excerpt: 'Large-scale sonic drilling and well installation program at a U.S. Army Corps of Engineers site with 30 overburden wells and rock coring to 150 feet.',
        image: '/images/projects/charlestown-banner.webp',
        sidebarDetails: [
            { label: 'Drilling Methods', value: 'Roto-sonic (overburden & bedrock)' },
            { label: 'Total Overburden Wells', value: '30' },
            { label: 'Overburden Depths', value: '60–78 feet' },
            { label: 'Bedrock Depths', value: '95–153 feet' },
            { label: 'Rock Coring', value: 'NQ coring with 100% recovery' },
            { label: 'Special Requirement', value: 'Full-time USACE SSHO oversight' }
        ],
        overview: "Summit was contracted by a national environmental engineering firm to perform a large-scale sonic drilling and well installation program at a site managed by the U.S. Army Corps of Engineers in Rhode Island. This investigation-focused project involved installation of 30 overburden monitoring wells and multiple bedrock drilling locations, with total depths exceeding 150 feet. All work was executed under strict federal safety and environmental protocols, with full-time oversight by a USACE SSHO.",
        challenge: "Coordinating a high-volume sonic drilling program across varied terrain while meeting federal USACE requirements added substantial complexity. Deep bedrock wells required specialized rock coring techniques and sustained high-level safety oversight. The site also demanded efficient scheduling across multiple drill rigs to meet project timelines.",
        services: [
            "Roto-sonic overburden drilling and continuous coring",
            "Installation of 30 monitoring wells (4-inch flush-mount) at depths of 60–78 feet",
            "Sonic bedrock drilling and NQ-diameter rock coring to 153 feet",
            "Multi-rig coordination with up to 3 crews operating simultaneously",
            "Full compliance with USACE site-specific health & safety protocols"
        ],
        solutions: "Summit deployed multiple sonic drill rigs to maximize efficiency across the site. Overburden drilling was performed using continuous sonic coring to collect high-quality samples and install 4-inch monitoring wells in flush-mount completions. Bedrock locations were drilled using sonic methods transitioning to NQ-diameter rock coring to achieve required depths with near-complete core recovery. All drilling and well construction activities were completed under full-time SSHO oversight.",
        outcome: "Summit successfully completed the investigation program safely and on schedule, meeting all USACE requirements and delivering reliable sample recovery across all depths. The project demonstrated Summit's capability to manage complex, multi-rig sonic drilling operations under rigorous federal oversight."
    },
    {
        slug: 'charlotte-methane',
        title: 'Methane Mitigation System with Cupolex & VIMS',
        location: 'Charlotte, NC',
        excerpt: 'Installation of a complex methane mitigation system for a 7-story building including 15,920 sq. ft. of Cupolex domed forming system.',
        image: '/images/projects/charlotte-methane-banner.webp',
        sidebarDetails: [
            { label: 'System Type', value: 'Passive methane mitigation' },
            { label: 'Cupolex Coverage', value: '15,920 sq. ft.' },
            { label: 'Building', value: '7-story multifamily residential' },
            { label: 'Key Challenge', value: 'Coordinating with active building construction' },
            { label: 'VIMS Program', value: 'Vapor Intrusion Monitoring System' }
        ],
        overview: "Summit's Remediation Division was engaged to install a passive methane mitigation system beneath a 7-story multifamily residential building in Charlotte, NC. The system included installation of 15,920 sq. ft. of Cupolex domed forming modules and integrated vapor mitigation infrastructure, designed to address subsurface methane conditions associated with historic site use.",
        challenge: "Work was performed concurrently with active building construction, requiring careful coordination with the general contractor and subcontractors. Crews needed to install a large-scale mitigation system beneath the building footprint while maintaining compatibility with the structural and mechanical construction schedule.",
        services: [
            "Installation of 15,920 sq. ft. of Cupolex domed forming system",
            "Vapor barrier installation and sealing",
            "Passive sub-slab depressurization system integration",
            "Coordination with general contractor and building construction",
            "VIMS (Vapor Intrusion Monitoring System) infrastructure support"
        ],
        solutions: "Summit mobilized crews to install the Cupolex system in coordination with the building's foundation schedule. The domed forming modules created a uniform air gap beneath the slab for passive vapor collection, while vapor barriers were carefully installed and sealed to ensure system integrity. All work was completed around ongoing construction activities to avoid schedule delays.",
        outcome: "Summit successfully installed the methane mitigation system on schedule, enabling the building construction to proceed without delay. The integrated system met all design specifications and regulatory requirements for vapor intrusion mitigation."
    },
    {
        slug: 'gastonia',
        title: 'Permeable Reactive Barrier (PRB) Installation',
        location: 'Gastonia, NC',
        excerpt: 'Rapid installation of a permeable reactive barrier at a Southeastern superfund site in response to an urgent groundwater issue.',
        image: '/images/projects/gastonia-banner.webp',
        sidebarDetails: [
            { label: 'Purpose', value: 'Prevent permanganate-impacted groundwater from migrating into a nearby stream' },
            { label: 'Divisions Involved', value: 'Remediation Division (with drilling support for well documentation)' },
            { label: 'PRB Length', value: '120 linear feet (nonconsecutive)' },
            { label: 'Trench Depths', value: '12–17 feet' },
            { label: 'Specialty Materials', value: 'Washed silica sand, ground GAC' },
            { label: 'Schedule', value: 'Rapid response; work performed July–August 2025' },
            { label: 'Regulatory Oversight', value: 'NCDEQ and U.S. EPA' }
        ],
        overview: "Summit's Remediation Division was contracted by a global engineering firm to perform the rapid installation of a permeable reactive barrier (PRB) at a Southeastern superfund site in response to an urgent groundwater issue. Potassium permanganate, previously injected as part of the remediation program, had migrated back to the surface and visibly entered a nearby stream, prompting immediate regulatory action by NCDEQ and the U.S. EPA. Summit mobilized quickly, sourcing specialty materials, preparing the site, and completing construction under accelerated deadlines while maintaining full compliance with regulatory oversight.",
        challenge: "The project required fast, technically accurate corrective action under high visibility and active environmental concern. Crews needed to rapidly source and blend specialty media, excavate deep trench sections, and construct the PRB while preventing further discharge to the stream. An accelerated schedule, strict regulatory scrutiny, and sensitive site conditions added to project complexity.",
        services: [
            "Site clearing, light grading, and erosion & sediment control installation",
            "Access preparation and workspace stabilization",
            "Specialty procurement of washed silica sand and ground granulated activated carbon (GAC)",
            "On-site blending of filtration media",
            "Excavation of six PRB trenches (12–17 ft deep), totaling 120 nonconsecutive linear feet",
            "Installation of GAC/sand permeable media to intercept impacted groundwater",
            "Installation and documentation of casing within select PRB sections for sampling and recovery",
            "Return mobilization for site restoration, grading, and stabilization"
        ],
        solutions: "Summit began by preparing the site through clearing, light grading, and erosion control installation to ensure a safe and compliant work zone. Materials were rapidly sourced and blended on-site to create a custom reactive media mix capable of treating permanganate-impacted groundwater before it reached the stream. Crews excavated six trench locations to depths of 12–17 feet and placed 120 linear feet of PRB media in nonconsecutive sections, forming a permeable treatment pathway. Simultaneously, Summit documented well casing installations within portions of the barrier to support future groundwater recovery and performance monitoring. Following installation, Summit returned to complete final grading and stabilization, leaving the site fully restored and operational.",
        outcome: "Summit successfully installed the PRB system under accelerated timelines, effectively addressing an active stream impact and restoring regulatory confidence in the site's containment measures. The project demonstrated Summit's ability to rapidly mobilize, manage specialty materials, and execute complex environmental construction under pressure. Based on performance, Summit was sourced for additional follow-on work at the superfund site."
    },
    {
        slug: 'linden',
        title: 'GPR & Drilling – Subsurface Investigation',
        location: 'Linden, NJ',
        excerpt: 'Multi-technology subsurface investigation including GPR preclearance, drilling across 16 locations, and installation of injection wells.',
        image: '/images/projects/linden-banner.webp',
        sidebarDetails: [
            { label: 'Client Type', value: 'National engineering firm' },
            { label: 'Site Type', value: 'Active industrial facility' },
            { label: 'Borings/Wells', value: '16 locations' },
            { label: 'Technologies', value: 'GPR, direct-push, hollow-stem auger' },
            { label: 'Well Types', value: 'Monitoring wells, injection wells' }
        ],
        overview: "Summit was engaged by a national environmental engineering firm to perform a comprehensive subsurface investigation at an active industrial facility in Linden, NJ. The project combined geophysical preclearance, direct-push drilling, and hollow-stem auger drilling across 16 locations to support soil and groundwater characterization, as well as installation of monitoring and injection wells.",
        challenge: "Work was performed within an active industrial setting with underground utilities and limited access windows. Accurate utility clearance was critical to avoid disruption to facility operations.",
        services: [
            "GPR subsurface utility preclearance across all drill locations",
            "Direct-push soil sampling and groundwater investigation",
            "Hollow-stem auger drilling for monitoring well installation",
            "Injection well installation for future remediation activities",
            "Coordination with facility operations to minimize disruption"
        ],
        solutions: "Summit performed GPR scans on all proposed locations prior to drilling to identify and avoid underground utilities. Direct-push methods were used for efficient soil and groundwater sampling, while hollow-stem auger drilling provided stable boreholes for permanent well installations. All work was scheduled around facility operations to maintain safety and minimize production impact.",
        outcome: "Summit successfully completed the investigation program without incident, delivering accurate subsurface data and functional well infrastructure for ongoing site management."
    },
    {
        slug: 'princeton-jct',
        title: 'Long-Term Injection & Monitoring Well Program',
        location: 'Princeton Junction, NJ',
        excerpt: 'Nine years of continuous involvement supporting environmental investigation and remediation efforts with multiple drilling technologies.',
        image: '/images/projects/princeton-jct-banner.webp',
        sidebarDetails: [
            { label: 'Duration', value: '9+ years' },
            { label: 'Scope', value: 'Ongoing investigation and remediation support' },
            { label: 'Technologies', value: 'Hollow-stem auger, sonic, direct-push' },
            { label: 'Well Types', value: 'Monitoring, injection, recovery' },
            { label: 'Client Type', value: 'Engineering firm supporting industrial client' }
        ],
        overview: "Summit has provided continuous drilling support at this industrial site in Princeton Junction, NJ for over nine years, working under contract with a longstanding engineering client. The program has included investigation drilling, monitoring well installation, injection well construction, and targeted remediation support across multiple phases of environmental work.",
        challenge: "Long-term site programs require consistent quality, adaptability to evolving site conditions, and seamless coordination with the engineering team over many years and project phases.",
        services: [
            "Multi-phase drilling programs spanning 9+ years",
            "Hollow-stem auger, sonic, and direct-push drilling",
            "Monitoring well, injection well, and recovery well installation",
            "Ongoing coordination with engineering consultants"
        ],
        solutions: "Summit has maintained a consistent presence at this site, adapting drilling methods and well designs to meet evolving investigation and remediation needs. Strong communication with the engineering team has enabled efficient project execution across multiple phases.",
        outcome: "The long-term partnership has provided reliable, high-quality drilling services that support the site's ongoing environmental management objectives."
    },
    {
        slug: 'princeton',
        title: 'Sonic Drilling on Collegiate Athletic Field',
        location: 'Princeton, NJ',
        excerpt: 'High-resolution subsurface investigation on Princeton University\'s baseball field using Terra Sonic technology with zero impact to artificial turf.',
        image: '/images/projects/princeton-banner.webp',
        sidebarDetails: [
            { label: 'Location', value: 'Princeton University athletic field' },
            { label: 'Technology', value: 'Terra Sonic roto-sonic drilling' },
            { label: 'Surface Protection', value: 'Zero damage to artificial turf' },
            { label: 'Sample Quality', value: 'High-resolution continuous core' }
        ],
        overview: "Summit was engaged to perform sonic drilling on Princeton University's baseball field to support a subsurface investigation. The work required high-resolution sample recovery while protecting the artificial turf surface from damage.",
        challenge: "Operating on an active collegiate athletic field required extreme care to avoid damage to the artificial turf surface. High-resolution sampling was needed for detailed site characterization.",
        services: [
            "Terra Sonic roto-sonic drilling with continuous coring",
            "Surface protection and turf preservation measures",
            "High-resolution subsurface sampling"
        ],
        solutions: "Summit deployed its Terra Sonic drill rig with turf protection measures to prevent damage to the artificial surface. Continuous sonic coring provided detailed subsurface data while maintaining the field's playable condition.",
        outcome: "Summit completed the investigation without damage to the athletic field surface, delivering high-quality samples that met project characterization requirements."
    },
    {
        slug: 'raleigh',
        title: 'Multi-Depth Monitoring Well Installation',
        location: 'Raleigh, NC',
        excerpt: 'Installation of 10 monitoring wells to depths up to 170 feet, completed 7 days ahead of schedule with multi-crew coordination.',
        image: '/images/projects/raleigh-banner.webp',
        sidebarDetails: [
            { label: 'Well Count', value: '10 monitoring wells' },
            { label: 'Maximum Depth', value: '170 feet' },
            { label: 'Schedule Performance', value: 'Completed 7 days ahead of schedule' },
            { label: 'Crew Coordination', value: 'Multi-crew deployment' }
        ],
        overview: "Summit was engaged to install 10 monitoring wells at depths up to 170 feet at a site in Raleigh, NC. The program required multi-crew coordination to meet project timelines.",
        challenge: "Deep well installations across multiple locations required efficient crew scheduling and coordination to meet the aggressive project timeline.",
        services: [
            "Installation of 10 monitoring wells to 170 feet",
            "Multi-crew drilling operations",
            "Deep well construction and completion"
        ],
        solutions: "Summit deployed multiple drilling crews with coordinated scheduling to maximize productivity across the site. Deep drilling was performed efficiently while maintaining well construction quality.",
        outcome: "Summit completed the monitoring well program 7 days ahead of schedule, demonstrating effective multi-crew coordination and construction efficiency."
    },
    {
        slug: 'roselle',
        title: 'Shallow Bedrock Well Installation',
        location: 'Roselle, NJ',
        excerpt: 'Precision drilling in a space-restricted urban environment with installation of three shallow bedrock monitoring wells.',
        image: '/images/projects/roselle-banner.webp',
        sidebarDetails: [
            { label: 'Environment', value: 'Space-restricted urban site' },
            { label: 'Well Count', value: '3 bedrock monitoring wells' },
            { label: 'Geology', value: 'Shallow bedrock' }
        ],
        overview: "Summit performed precision drilling and well installation at a space-restricted urban site in Roselle, NJ, installing three shallow bedrock monitoring wells.",
        challenge: "Limited access and tight work areas in the urban setting required compact equipment and careful operations.",
        services: [
            "Compact drilling operations in restricted spaces",
            "Shallow bedrock drilling and well construction",
            "Installation of 3 bedrock monitoring wells"
        ],
        solutions: "Summit utilized compact drilling equipment suited for tight urban spaces while performing precision drilling into shallow bedrock. Wells were constructed to meet investigation requirements.",
        outcome: "Summit successfully installed all three monitoring wells without incident, meeting site characterization needs despite challenging access conditions."
    },
    {
        slug: 'spartanburg-cap',
        title: 'Engineering Cap Repair & Streambank Stabilization',
        location: 'Spartanburg, SC',
        excerpt: 'Restoration of 200 linear feet of storm-damaged streambank and multi-layer engineered cap system in dense woodland.',
        image: '/images/projects/spartanburg-cap-banner.webp',
        sidebarDetails: [
            { label: 'Streambank Restoration', value: '200 linear feet' },
            { label: 'Setting', value: 'Dense woodland' },
            { label: 'System Type', value: 'Multi-layer engineered cap' },
            { label: 'Cause', value: 'Storm damage' }
        ],
        overview: "Summit's Remediation Division was engaged to repair storm damage at a site in Spartanburg, SC, including restoration of 200 linear feet of streambank and repair of a multi-layer engineered cap system located in dense woodland.",
        challenge: "Access through dense woodland required careful equipment mobilization. Streambank stabilization and cap restoration needed to be performed simultaneously.",
        services: [
            "Restoration of 200 linear feet of storm-damaged streambank",
            "Multi-layer engineered cap repair",
            "Woodland access and equipment mobilization"
        ],
        solutions: "Summit mobilized equipment carefully through the wooded site, performing streambank stabilization work along the damaged corridor while restoring the integrity of the multi-layer cap system.",
        outcome: "Summit completed the restoration work, successfully stabilizing the streambank and repairing the engineered cap to meet site management requirements."
    },
    {
        slug: 'spartanburg-sonic',
        title: 'Deep Vertical Aquifer Profile (VAP) Investigation',
        location: 'Spartanburg, SC',
        excerpt: 'Deep roto-sonic drilling to 300 feet with high-resolution vertical profiling of VOCs in groundwater at 6 VAP locations.',
        image: '/images/projects/spartanburg-sonic-banner.webp',
        sidebarDetails: [
            { label: 'Drilling Method', value: 'Roto-sonic' },
            { label: 'Maximum Depth', value: '300 feet' },
            { label: 'VAP Locations', value: '6' },
            { label: 'Target Contaminants', value: 'VOCs in groundwater' },
            { label: 'Profiling Resolution', value: 'High-resolution vertical sampling' }
        ],
        overview: "Summit was engaged to perform deep roto-sonic drilling to 300 feet at a site in Spartanburg, SC. The investigation included high-resolution vertical profiling of VOCs in groundwater at 6 VAP locations.",
        challenge: "Deep drilling to 300 feet required specialized sonic equipment capable of sustained performance. High-resolution vertical sampling was needed to characterize VOC distribution throughout the aquifer system.",
        services: [
            "Deep roto-sonic drilling to 300 feet",
            "Vertical aquifer profiling (VAP) at 6 locations",
            "High-resolution groundwater sampling for VOC characterization"
        ],
        solutions: "Summit deployed roto-sonic drilling equipment capable of reaching 300 feet while collecting high-resolution groundwater samples throughout the aquifer system. VAP data were collected systematically to map VOC distribution.",
        outcome: "Summit successfully completed the deep VAP investigation, providing detailed groundwater quality data across the full depth of the aquifer system at all 6 locations."
    }
]

async function seedProjects() {
    console.log(`Starting to seed ${projects.length} projects...`)

    for (const project of projects) {
        try {
            // Check if project exists
            const existing = await client.fetch(
                `*[_type == "project" && slug.current == $slug][0]`,
                { slug: project.slug }
            )

            if (existing) {
                console.log(`Skipping existing: ${project.slug}`)
                continue
            }

            const doc = {
                _type: 'project',
                title: project.title,
                slug: { _type: 'slug', current: project.slug },
                location: project.location,
                excerpt: project.excerpt,
                legacyImagePath: project.image,
                ribbonText: 'FEATURED PROJECT',
                sidebarDetails: project.sidebarDetails.map(d => ({
                    _key: randomKey(),
                    label: d.label,
                    value: d.value
                })),
                overview: textToPortableText(project.overview),
                challenge: textToPortableText(project.challenge),
                services: listToPortableText(project.services),
                solutions: textToPortableText(project.solutions),
                outcome: textToPortableText(project.outcome),
            }

            const result = await client.create(doc)
            console.log(`Created: ${project.title} (${result._id})`)
        } catch (error) {
            console.error(`Error creating ${project.slug}:`, error.message)
        }
    }

    console.log('Done seeding projects!')
}

seedProjects().catch(console.error)
