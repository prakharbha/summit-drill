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

function textToPortableText(text) {
    if (!text) return []
    if (Array.isArray(text)) {
        return text.map(line => ({
            _key: Math.random().toString(36).substring(7),
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', _key: Math.random().toString(36).substring(7), text: line }]
        }))
    }
    return [{
        _key: Math.random().toString(36).substring(7),
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', _key: Math.random().toString(36).substring(7), text: text }]
    }]
}

const parentPages = [
    {
        title: 'Drilling Techniques',
        slug: 'drilling-techniques',
        category: 'Drilling',
        heroImage: '/images/drilling/hero-banner.webp',
        heroDescription: 'In an industry where geology, risk and timelines intersect, seasoned insight becomes the most valuable piece of equipment on site',
        content: [
            "You may think that drilling experience going back to the late 1950s has little relevance now. To a degree, there is some truth to that. Technology, applications, processes, have all advanced.",
            "One thing however that nearly 6 decades of drilling did provide is crystalized knowledge. Knowing what geology is below the surface and drilling in it, from Maine to Florida, can be of great value.",
            "The knowledge transfer that has passed through the generations, across thousands of job sites, has manifested into an AI-like source for countless environmental consultants and geotechnical engineers. Summit is counted on for insights in approach development, rig technology requirements, sampling timeframes and safety parameters associated with specific locations and regions up and down the eastern U.S.",
            "Today, Summit's drilling technology is one of the most comprehensive. From multiple drilling technologies to expertise in dealing with emerging contaminants, they have become a \"Go To\" source for large and complex projects. The more critical the scope of work, the more valuable Summit is to its customers.",
            "Increasing their value further, Summit's growth has expanded their services platform enabling them to wrap support services around their drilling capabilities that had in the past required additional contractors. This is proving to be highly efficient for customers by reducing complexity in scheduling and contractor management."
        ],
        specialtyApplications: [
            "Over water barge drilling",
            "Horizontal drilling",
            "Drilling & In-Situ injection",
            "Low clearance / Remote access",
            "Well decommissioning",
            "Geotechnical Investigations",
            "Cathodic systems services",
            "Dewatering services"
        ],
        order: 1
    },
    {
        title: 'Geophysical Services',
        slug: 'geophysical-services',
        category: 'Geophysical',
        heroImage: '/images/geophysics/utility-locating-banner.webp',
        heroDescription: "Summit's Geophysical Services and growing geophysics division provide a full array of real-time geophysical services to the environmental, engineering, and construction industries.",
        content: [
            "Our multi-faceted approach includes:",
            "• Ground Penetrating Radar",
            "• Radio Frequency Line Locating",
            "• Electromagnetic Scanning",
            "• Resistivity Profiling",
            "Our combination of equipment and experienced geophysicists enable us to detect private utilities, underground storage tanks (tank sweeps), drums, septic structures, borehole bedrock fractures, excavations, rebar and more.",
            "Summit's geophysical services are supported by one of the industry's largest teams of full-time professional geologists and highly experienced geophysicists with multiple crews dispatched daily. Each crew is equipped with the latest in geophysical technology, including ground penetrating radar, electromagnetic scanning, radio frequency line locating equipment, and high-tech drones.",
            "Our combination of equipment and experience is unequaled. Customers count on us for a wide range of services from near-surface infrastructure detection to precise downhole geophysics and logging. Summit is a trusted source for pre-drilling or pre-excavation clearance, private utilities, underground storage tanks (tank sweeps), drums, septic structures, rebar, landfill and buried waste delineation, karst terrain and bedrock mapping, and electrical resistivity profiling. Our multi-faceted geophysics division provides a full array of real-time geophysical services to the environmental, engineering, and construction industries."
        ],
        specialtyApplications: [],
        order: 2
    },
    {
        title: 'Remediation Services',
        slug: 'remediation-services',
        category: 'Remediation',
        heroImage: '/images/remediation/hero-banner.webp',
        heroDescription: "Powered by strategic growth and unified leadership, Summit's talented remediation teams offer comprehensive, tech-forward solutions for complex sites.",
        content: [
            "Since 2022, Summit has invested more confidently in remediation services to expand value to customers and complement its industry-leading drilling capabilities.",
            "By integrating top talent and a wide range of technology, Summit has restructured the division into a successful, multi-regional capability that is enabling customers to achieve site closure more quickly and efficiently.",
            "Keys to their success point to Summit's technology-specific leaders and their efforts to cross train and unify their remediation talent from the North to South. This has benefitted customers, especially those who require a contractor with a strong geographic reach.",
            "Summit's remediation division has become a trusted source by environmental consultants and engineers from New England to Florida. Their ability to integrate a diverse set of services into a seamless experience has added high levels of efficiency and satisfaction for customers by reducing the number of contractors needed to accomplish large and complex scopes of work."
        ],
        specialtyApplications: [
            "Vapor Mitigation Systems",
            "Treatment Systems Installations",
            "Bucket/Paddle Soil Mixing",
            "Single Column Mixing",
            "Multi-Point Injection Systems",
            "Impermeable Barriers",
            "Ecological Restoration",
            "Engineering Cap Installation",
            "Access Roads/Ramp Installations"
        ],
        order: 3
    }
]

const childPages = [
    // DRILLING CHILDREN
    {
        title: 'Sonic Drilling',
        slug: 'sonic-drilling',
        parentSlug: 'drilling-techniques',
        heroImage: '/images/services/drilling/sonic-banner.webp',
        heroDescription: 'Behind every successful sonic project is a Summit driller who knows exactly how to optimize the rig to the geological conditions below it. Summit provides its customers with an entire division of them.',
        content: [
            "Experience matters when operating one of the industry's most powerful drilling technologies. Summit's Sonic teams have become the most trusted. An overnight success? No. Our teams represent decades of sonic use that has led to an understanding of the subtleties of these rigs. This intangible quality differentiates us from others and is why we deliver the highest number of successful outcomes. Being a \"Go To\" source for environmental, geotechnical and aggregate industry professionals is well earned.",
            "Sonic Basics",
            "Sonic drilling or roto-sonic is a safe, clean and a low-impact environmental drilling technique. Roto Sonic Boreholes are drilled, cored and cased by rotating and vibrating the rod, core barrel and casing at resonant sonic frequencies. It is outstanding in its ability to provide continuous, undisturbed core samples through any geological formation – even the most-difficult-to-drill terrain.",
            "This highly efficient drilling method results in overall project cost savings for Summit customers due to a reduction in time personnel are required to be in the field. In addition, sonic drilling generates considerably less drill spoils than auger, mud or air rotary methods, saving additional project resources."
        ],
        listing: {
            subtitle: "Sonic Drilling – The difference is our operators!",
            excerpt: "Having a Sonic Rig and using it effectively in the field are 2 very different things. At Summit, our Sonic drillers have logged thousands of hours handling these sophisticated rigs and operate them like a fine instrument.",
            ctaText: "Industry Leading Sonic Capabilities"
        }
    },
    {
        title: 'Direct Push',
        slug: 'direct-push',
        parentSlug: 'drilling-techniques',
        heroImage: '/images/services/drilling/dpt-banner.webp',
        heroDescription: 'Summit offers a variety of direct push drilling equipment including truck mounted and all-terrain units for collecting high-quality samples with minimal site impact.',
        content: [
            "These probes allow for the collection of soil, groundwater and vapor samples with minimal impact to the site. Summit's direct push fleet can manage any site access issues and the most diverse subsurface geological conditions.",
            "For example, many of Summit's direct push drilling rigs convert to hollow stem augers which enable well installation where needed. Compared to conventional drilling, direct push drilling is less labor intensive, offers quicker setup time, and generates less drill cuttings. Direct push tooling is also easier to decontaminate and maintain."
        ],
        listing: {
            subtitle: "Direct Push – Fast, Efficient & Exceptionally Precise!",
            excerpt: "There are no drilling technologies better suited to collect high-quality soil, groundwater, and soil-gas data quickly. Summit offers a large number of Probes with specialty tooling that will help you accelerate site characterization and remediation planning.",
            ctaText: "Our Broad Direct Push Capabilities"
        }
    },
    {
        title: 'Auger Drilling',
        slug: 'auger-drilling',
        parentSlug: 'drilling-techniques',
        heroImage: '/images/services/drilling/hsa-banner.webp',
        heroDescription: 'Hollow stem auger drilling is the ideal method for advancing shallow boreholes in unconsolidated formations especially when soil sampling is required.',
        content: [
            "For normal hole advancement, a pilot bit is inserted through the cutter head to drill the center of the hole. The drill rod is bolted to the inside of the drive cap with a rod-to-cap adapter so that the pilot bit can turn in tandem with the augers. This method allows for split spoon sampling, Shelby tube sampling, Dennison sampling, Hydro punch discrete water sampling, and rock coring to be performed while leaving the augers in place.",
            "Drill rods are normally added each time an auger is added. In soft formations (dirt and sand), a tapered wooden plug may be inserted into the end of the cutter head to prevent material from going up inside the augers and eliminates the use of drill rod. When the hole is completed, the plug may be knocked out the bottom of the auger string. The next step is to insert the monitoring screen and casing, which is then grouted into place to prevent contamination from the top of the hole.",
            "Scenarios of Use",
            "Hollow stem auger drilling is the ideal method for advancing shallow boreholes in unconsolidated formations especially when soil sampling is required during the advancement of the borehole."
        ],
        listing: {
            subtitle: "Hollow Stem Auger Drilling (HSA) – Go deeper in unconsolidated soils!",
            excerpt: "Need stable, cased boreholes? How about track-mounted rigs for difficult to access locations? Summit's HSA rigs are diverse, dependable and a highly effective method for environmental and geotechnical investigations.",
            ctaText: "Our Auger Drilling Capabilities"
        }
    },
    {
        title: 'Air Rotary',
        slug: 'air-rotary-drilling',
        parentSlug: 'drilling-techniques',
        heroImage: '/images/services/drilling/air-rotary-banner.webp',
        heroDescription: 'High-flow air is injected through the drill string, cooling the bit, evacuating rock cuttings from the borehole and stabilizing the borehole during drilling.',
        content: [
            "The air-rotary technique is much more efficient than other rock drilling techniques (i.e., cable tool) because the high-flow air constantly cleans the bottom of the borehole, which allows for consistent contact between the drill bit and intact bedrock.",
            "The size of the air compressor and borehole determine the achievable depth, since the compressor must maintain an up hole velocity of approximately 3,000 feet per minute to effectively remove the drill cuttings. In bedrock formations where cuttings removal is more difficult, foam can be added to the injected air to increase the viscosity and help lift cuttings from the borehole.",
            "Scenarios of Use",
            "Air rotary drilling is the ideal method for advancing boreholes in consolidated bedrock formations."
        ],
        listing: {
            subtitle: "Air Rotary Drilling – Speed, Depth and clarity of geological formations!",
            excerpt: "Summit's air rotary rigs and talented operators unequaled for deeper boring, bedrock investigations requiring high-productivity drilling. Need to penetrate hard rock?",
            ctaText: "Our Air Rotary Drilling Capabilities"
        }
    },
    {
        title: 'Drilling & Injection',
        slug: 'injection-remediation-services',
        parentSlug: 'drilling-techniques',
        heroImage: '/images/services/drilling/injection-banner.webp',
        heroDescription: "Summit's Injection Division offers consultants enabling technology, decades of experience and expertly trained personnel.",
        content: [
            "From chemical oxidation to thermal remediation preparation and support, Summit's Injection Division supports a broad range of in-situ remediation projects.",
            "Benefit from:",
            "• A custom designed injection skid",
            "• Multiple manifolds enable you to inject multiple points simultaneously",
            "• 15 years of experience injecting a full spectrum of Regenesis products",
            "• ORC, ORC-A, PlumeStop, PersulfOX, HRC, HRC-X, HRC Primer, Metals Remediation Compound (MRC), sodium permanganate, potassium permanganate, iron powders and more",
            "• Injection Division supported by our large fleet of Geoprobe and Sonic equipment",
            "• Deep experience and full range of drilling technology available to support Thermal Remediation technologies"
        ],
        listing: {
            subtitle: "Drilling & Injection",
            excerpt: "Summit's Injection Division offers consultants enabling technology, decades of experience and expertly trained personnel.",
            ctaText: "Our Drilling & Injection Capabilities"
        }
    },

    // GEOPHYSICAL CHILDREN
    {
        title: 'Utility Locating',
        slug: 'utility-locating',
        parentSlug: 'geophysical-services',
        heroImage: '/images/geophysics/utility-locating-banner.webp',
        heroDescription: 'Utility locating is a critical process that helps prevent accidents, protect the environment, and ensure the efficient and safe execution of construction, excavation, drilling and maintenance activities.',
        content: [
            "Summit's geophysical professionals utilize a wide variety of technology",
            "• Radio Frequency (RF) line locator",
            "• Fisher TW-6 electromagnetic instrument",
            "• Ground Penetrating Radar (GPR)",
            "• Duct Rodder (fiberglass wrapped tracing line)",
            "• EM61, EM31 electromagnetic instruments",
            "• Sub-meter GPS",
            "• Drone aerial to memorialize the mark outs",
            "Utility locating or detection, is the process of identifying and marking the location of buried utility lines and infrastructure beneath the ground. These utilities can include various types of pipes, cables, and conduits that provide essential services such as water supply, sewage, electricity, telecommunications, natural gas, and more. The primary purpose of utility locating is to prevent damage to these underground utilities during construction, excavation, or drilling activities.",
            "Key Applications",
            "• Summit Private Utility Location: We address everything that is not covered by a one-call such as, water from valve to meter, sanitary sewer from cleanout to building, storm sewers, privately run electric lines, floor drains, oil/water separators and septic.",
            "• Preferrable Pathway Evaluations: This involves the identification of utility corridors typically at the entrance of a building. Our services help customers target vapor intrusion investigations.",
            "• Gas Stations",
            "• One Call Mark Out Confirmations: As many consultants and engineers know, One Calls are not always accurate as utility companies may not clip on to the utility and frequently use plans that are not as comprehensive compared to \"as-builts\".",
            "Tech/Instrumentation/Tools",
            "Summit's geophysical professionals utilize a wide variety of technology, including:",
            "• Radio Frequency (RF) line locator",
            "• Fisher TW-6 electromagnetic instrument",
            "• Ground Penetrating Radar (GPR)",
            "• Duct Rodder (fiberglass wrapped tracing line)",
            "• EM61, EM31 electromagnetic instruments",
            "• Sub-meter GPS",
            "• Drone aerial to memorialize the mark outs",
            "Utility locating is a critical process that helps prevent accidents, protect the environment, and ensure the efficient and safe execution of construction, excavation, drilling and maintenance activities."
        ],
        listing: {
            subtitle: "Utility Locating – Prevent accidents and protect critical infrastructure!",
            excerpt: "Utility locating is a critical process that helps prevent accidents, protect the environment, and ensure the efficient and safe execution of construction, excavation, drilling and maintenance activities.",
            ctaText: "Our Utility Locating Capabilities"
        }
    },
    {
        title: 'UST & Septic Detection',
        slug: 'ust-septic-detection',
        parentSlug: 'geophysical-services',
        heroImage: '/images/geophysics/ust-septic-detection.webp',
        heroDescription: 'The importance of locating USTs or detecting septic systems lies in the prevention of environmental contamination, protection of human health and safety, adherence to regulators, and potential cost savings.',
        content: [
            "Summit's geophysical professionals utilize a wide variety of technology",
            "• EM61",
            "• EM31",
            "• Fisher TW-6 electromagnetic instrument",
            "• Ground Penetrating Radar (GPR)",
            "• Radio Frequency (RF) line locator",
            "Locating underground storage tanks (USTs) and detecting septic systems is of significant importance due to the potential risks and benefits associated with their identification, management, or removal. There are several reasons to consider these services, including: environmental protection, environmental remediation, health and safety, regulatory compliance, and property transaction and development.",
            "Key Applications",
            "• Full property sweeps for orphaned/unknown USTs",
            "• Known UST footprint and orientation delineation",
            "• Septic structure detection (sub-grade tanks, distribution boxes, leach fields, laterals, and other piping, etc.)",
            "• Property transactions and/or unknown source evaluations",
            "Tech/Instrumentation/Tools",
            "• EM61",
            "• EM31",
            "• Fisher TW-6 electromagnetic instrument",
            "• Ground Penetrating Radar (GPR)",
            "• Radio Frequency (RF) line locator",
            "The importance of locating USTs or detecting septic systems lies in the prevention of environmental contamination, protection of human health and safety, adherence to regulators, and potential cost savings. It is a proactive measure that not only mitigates risks but also facilitates responsible property management and development."
        ],
        listing: {
            subtitle: "UST & Septic Detection – Environmental protection starts underground!",
            excerpt: "The importance of locating USTs or detecting septic systems lies in the prevention of environmental contamination, protection of human health and safety, adherence to regulators, and potential cost savings.",
            ctaText: "Our UST & Septic Detection Services"
        }
    },
    {
        title: 'Borehole Geophysics',
        slug: 'borehole-geophysics',
        parentSlug: 'geophysical-services',
        heroImage: '/images/geophysics/borehole-geophysics.webp',
        heroDescription: 'Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications.',
        content: [
            "Summit's geophysical professionals utilize a wide variety of technology, including:",
            "• Optical Televiewer",
            "• Acoustic Televiewer",
            "• Caliper",
            "• Temperature/Fluid Resistivity",
            "• GR/SP/SPR",
            "• Heat Pulse Flowmeter",
            "• Full Wave Form Sonic",
            "• Well CAD",
            "Borehole Geophysics, also known as well logging or downhole geophysics, is a subsurface exploration technique used to obtain geophysical data from within boreholes or wells drilled. It involves the use of specialized instruments and sensors to collect data on geological, hydrogeological, and geophysical properties at various depths below the surface.",
            "Key Applications",
            "This technology is conducted to gather information on the geologic and hydrogeologic interpretation in open boreholes. It is used to identify specific structural characteristics of the borehole (fractures, fracture zones, voids, bedding planes, etc.), lithology, water bearing zones, and vertical flow conditions to target for well construction purposes. It can also be used to identify areas of contaminant presence and its migration.",
            "Borehole Geophysics",
            "Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications.",
            "Summit's geophysical professionals utilize a wide variety of technology, including:",
            "• Optical Televiewer – 360-degree visual color presentation of borehole conditions that include geologic structures (fractures, bedding planes, voids, etc.), lithology (color changes), and stratigraphic conditions.",
            "• Acoustic Televiewer – Similar to the optical televiewer, however an acoustic signal is used as an energy source.",
            "• Caliper – provides a continuous record of borehole size versus depth in the borehole.",
            "• Temperature/Fluid Resistivity – Fluid resistivity – delineating potential water-bearing zones.",
            "• GR/SP/SPR – Spontaneous Potential, Single Point Resistance, Natural Gamma Ray.",
            "• Heat Pulse Flowmeter – measures minute changes in vertical flow at specific depths.",
            "• Full Wave Form Sonic – Used to determine the integrity of grout in the annulus behind casing.",
            "• Well CAD software for processing and analysis of logging data.",
            "Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications. It plays a significant role in environmental assessments and engineering projects, providing essential information for approach development and risk mitigation in subsurface activities."
        ],
        listing: {
            subtitle: "Borehole Geophysics – Characterize subsurface conditions with precision!",
            excerpt: "Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications.",
            ctaText: "Our Borehole Geophysics Capabilities"
        }
    },
    {
        title: 'Electrical Resistivity',
        slug: 'electrical-resistivity',
        parentSlug: 'geophysical-services',
        heroImage: '/images/geophysics/electrical-resistivity.webp',
        heroDescription: 'Electrical conductivity and resistivity measurements provide valuable information about the subsurface properties of materials, helping professionals make informed decisions in a wide range of applications, from environmental assessments and resource exploration to civil engineering and archeology.',
        content: [
            "Summit's geophysical professionals utilize a wide variety of field applications, including:",
            "• Identify near surface geologic and hydrogeologic features",
            "• Bedrock surface, clay layers, cavities/sinkholes/voids, karstic features, depth to groundwater, and possible contaminant presence",
            "• Property/infrastructure development",
            "Electrical Resistivity measures the electrical resistivity of subsurface materials. It is predominantly used for environmental and geotechnical studies to assess soil and groundwater contamination, locate buried infrastructure and study geological formations.",
            "Key Applications",
            "• Identify near surface geologic and hydrogeologic features and existing subsurface conditions.",
            "• Bedrock surface, clay layers, cavities/sinkholes/voids, karstic features, depth to groundwater, possible contaminant presence. Cross-sectional images of the subsurface are generated to typical depths of 100 feet or more.",
            "• Property/infrastructure development, used prior to, or in conjunction with geotechnical borings.",
            "Tech/Instrumentation/Tools",
            "AGI SuperSting R8IP Earth Resistivity Meter – measures voltage drop of an induced electrical current across numerous electrodes as it travels through an electrically heterogeneous subsurface. EarthImager processing software is used to generate cross-sectional electrical resistivity images.",
            "Electrical conductivity and resistivity measurements provide valuable information about the subsurface properties of materials, helping professionals make informed decisions in a wide range of applications, from environmental assessments and resource exploration to civil engineering and archeology. These measurements aid in understanding the physical and chemical characteristics of the Earth's subsurface and contribute to more effective problem-solving."
        ],
        listing: {
            subtitle: "Electrical Resistivity – Map the subsurface with electrical measurements!",
            excerpt: "Electrical conductivity and resistivity measurements provide valuable information about the subsurface properties of materials, helping professionals make informed decisions.",
            ctaText: "Our Electrical Resistivity Services"
        }
    },
    {
        title: 'Seismic Refraction',
        slug: 'seismic-refraction',
        parentSlug: 'geophysical-services',
        heroImage: '/images/geophysics/seismic-refraction.webp',
        heroDescription: 'Seismic Refraction is a valuable geophysical technique used to study subsurface properties and provide insights into the geological and geotechnical characteristics of an area.',
        content: [
            "Summit's geophysical professionals utilize a wide variety of field applications, including:",
            "• Good estimates for depths to bedrock, consolidated beds and groundwater",
            "• Determining the approximate velocities of geologic materials",
            "• Rock rippability",
            "• Detecting intrusive geologic bodies",
            "• Identifying structural features",
            "Seismic Refraction is a geophysical technique used to study subsurface properties of the Earth, specifically the distribution of seismic velocity within near-surface geologic layers. Seismic waves travel through the Earth at different velocities depending on the properties of the materials encountered. Generally speaking, waves travel faster through dense or ridged materials and slower through less dense or malleable material. By analyzing the refractions of these waves, geophysicists can map subsurface structures and identify potential infrastructure and underground assets.",
            "Key Applications",
            "• Good estimates for depths to (a) bedrock (overburden thickness), (b) consolidated beds, and (c) groundwater. Good for generating 2-D profiles that show bedrock topography and lateral changes in compressional and shear wave velocity.",
            "• Determine the approximate velocities of geologic materials, which may be related to rock type, water saturation, degree of weathering, and the presence of faults, fractures, and weathered zones (low velocities)",
            "• Estimation of Poisson's Ratio for geotechnical purposes",
            "• Rock rippability (ease of mechanical excavation)",
            "• Detecting intrusive geologic bodies.",
            "• Identifying structural features.",
            "Tech/Instrumentation/Tools",
            "Geometrics – Geode 24-channel seismograph with 4-Hz or 14 Hz geophones, and a 12-16-pound hammer source. SeisImager 2D and SeisImager SW processing software are used to generate 2-D compressional and shear wave velocity images of the subsurface.",
            "Seismic Refraction is a valuable geophysical technique used to study subsurface properties and provide insights into the geological and geotechnical characteristics of an area. Its applications are diverse and include site investigations for construction to environmental assessments. By better understanding the subsurface, professionals can make more informed decisions to ensure the safety and success of their various projects."
        ],
        listing: {
            subtitle: "Seismic Refraction – Study subsurface properties with seismic waves!",
            excerpt: "Seismic Refraction is a valuable geophysical technique used to study subsurface properties and provide insights into the geological and geotechnical characteristics of an area.",
            ctaText: "Our Seismic Refraction Capabilities"
        }
    },

    // REMEDIATION CHILDREN
    {
        title: 'Remediation Systems',
        slug: 'remediation-systems',
        parentSlug: 'remediation-services',
        heroImage: '/images/remediation/systems-banner.webp',
        heroDescription: 'Summit delivers end-to-end remediation system expertise, from vapor mitigation and liner installations to complex treatment systems, O&M programs, and temporary water-handling solutions.',
        content: [
            "Benefit from their experience and multi-regional delivery!",
            "With decades of applied field experience, deep cross-trained talent, and seamless coordination across multiple regions, Summit ensures that every remediation system is installed safely, correctly, and ready to perform.",
            "Remediation systems require precision and hands-on technical expertise, areas where Summit's integrated teams excel. Their crews have installed hundreds of systems across varied geologies and regulatory frameworks, often working alongside environmental consultants to refine treatment designs, streamline installation schedules, and anticipate field conditions before they become challenges.",
            "Because Summit operates with multi-regional reach and consistent quality standards, customers benefit from more predictable outcomes, reduced project risk, and a single partner capable of supporting long-term system performance.",
            "Summit remediation services include:",
            "• Vapor Mitigation Systems and Liner Installation: Summit installs sub-slab depressurization systems, vapor barriers, geomembrane liners, and other mitigation technologies designed to block or redirect vapor intrusion pathways.",
            "• Treatment System Installation: We construct and install groundwater and soil treatment systems ranging from small modular units to large, multi-stage treatment solutions.",
            "• Treatment System Operation and Maintenance (O&M): Summit provides O&M services to keep remediation systems performing reliably and in compliance with regulatory requirements.",
            "• Temporary Treatment Systems: For dewatering, construction support, or short-term remediation needs, Summit deploys temporary treatment systems tailored to site flow rates, contaminant profiles, and discharge requirements.",
            "Summit provides the experience and technical depth needed to deliver reliable, compliant performance. Connect with our team to discuss your remediation system needs and begin planning your next project with confidence."
        ],
        listing: {
            subtitle: "Deep experience plus multi-regional delivery!",
            excerpt: "Summit delivers end-to-end remediation system expertise from vapor mitigation and liner installations to complex treatment systems, O&M programs, and temporary water-handling solutions. Explore how our experienced multi-regional team supports safer sites, cleaner water, and more successful outcomes.",
            ctaText: "Our Remediation Systems Capabilities"
        }
    },
    {
        title: 'In-Situ Remediation',
        slug: 'in-situ-remediation',
        parentSlug: 'remediation-services',
        heroImage: '/images/remediation/in-situ-banner.webp',
        heroDescription: 'From ISS soil mixing to auger-based single-column stabilization, Summit applies field-proven in-situ technologies to restore soil integrity and control contaminant mobility.',
        content: [
            "When immobilizing contaminants is the right approach!",
            "Summit delivers advanced in-situ remediation solutions that stabilize, solidify, or immobilize contaminants directly in the subsurface—reducing risk, improving safety, and supporting faster site recovery.",
            "With proven technologies such as ISS soil mixing and single-column auger/cutter mixing, our teams apply precise, engineered in-situ methods tailored to site conditions, contaminants, and regulatory objectives.",
            "In-situ remediation requires a high level of field control, equipment expertise, and the ability to adapt in real-time to subsurface conditions. Summit's crews bring decades of geotechnical and environmental experience, enabling them to execute mixing programs efficiently while maintaining strict quality assurance standards. Our multi-regional reach ensures consistent delivery across project locations, while our cross-trained personnel provide insights that improve constructability, treatment effectiveness, and cost predictability.",
            "Customers gain the benefit of a deeply experienced partner capable of navigating technical challenges and ensuring successful outcomes in complex environments.",
            "Summit in-situ remediation services include:",
            "• In-Situ Soil Solidification/Stabilization (ISS): Using bucket or paddle mixing techniques, Summit blends binding reagents into contaminated soils to enhance strength, reduce permeability, and immobilize contaminants.",
            "• Single Column Mixing (SCM)/Auger/Cutter Mixing: SCM technologies allow precise column-based mixing of soils at depth using specialized augers or cutter-head equipment.",
            "Summit's in-situ expertise helps transform challenging subsurface conditions into stable, compliant, and redevelopment-ready environments. Contact our team to evaluate whether in-situ remediation is the right solution for your site."
        ],
        listing: {
            subtitle: "When immobilizing contaminants is the right approach!",
            excerpt: "From ISS soil mixing to auger-based single-column stabilization, Summit applies field-proven in-situ technologies to restore soil integrity and control contaminant mobility. See how our specialized crews and equipment elevate project performance.",
            ctaText: "Our In-Situ Remediation Capabilities"
        }
    },
    {
        title: 'Injection Remediation',
        slug: 'injection-remediation',
        parentSlug: 'remediation-services',
        heroImage: '/images/remediation/injection.webp',
        heroDescription: "Summit's injection remediation services offer precise, controlled delivery of reagents into the subsurface through single and multi-port systems tailored to site-specific conditions.",
        content: [
            "Need a more targeted approach for your injection project?",
            "Summit provides precise, controlled injection remediation services using single-port and multi-port systems to deliver reagents directly into the subsurface for targeted contaminant reduction.",
            "Our field teams design and execute injection programs that optimize reagent distribution, maximize contact with contamination, and support more predictable remediation outcomes across varied geological settings.",
            "Effective injection remediation depends on accurate delivery, subsurface awareness, and the ability to adjust injection methods in real time. Summit's cross-trained drilling and remediation specialists bring the skill, equipment knowledge, and field judgment needed to achieve consistent, verifiable results.",
            "Our teams understand how geology, pressure, flow, and reagent chemistry interact underground—insight that directly benefits consultants seeking efficiency and confidence in reagent-based treatment designs. With Summit, customers receive a partner capable of executing injections with precision and documented performance.",
            "Summit injection services include:",
            "• Single-Port Injection Systems: Ideal for focused treatment zones; single-port wells deliver reagents to targeted depths and intervals to address discrete contamination layers or hot spots.",
            "• Multi-Port Injection Systems: Designed for broader or more complex zones, multi-port systems allow for regulated delivery across multiple elevations, improving distribution and treatment efficiency while reducing surface disruption.",
            "Summit's injection remediation programs bring precision, adaptability and proven field performance to every site. Contact us to discuss how injection technologies can support your remediation goals."
        ],
        listing: {
            subtitle: "Need a more targeted approach for your injection project?",
            excerpt: "Summit's injection services offer precise, controlled delivery of reagents into the subsurface through single and multi-port systems tailored to site-specific conditions. Learn how our approach maximizes contact, minimizes rebound, and improves remediation efficiency.",
            ctaText: "Our Injection Remediation Capabilities"
        }
    },
    {
        title: 'Barrier Walls',
        slug: 'barrier-walls',
        parentSlug: 'remediation-services',
        heroImage: '/images/remediation/barrier-walls-banner.webp',
        heroDescription: 'Summit installs high-performance hydraulic, reactive, and impermeable barrier walls designed to control groundwater flow and isolate contaminants with precision and reliability.',
        content: [
            "Strengthen site protection and long-term remediation goals!",
            "Our field teams apply proven construction methods to create subsurface containment systems that prevent migration, protect adjacent properties, and support long-term remediation strategies.",
            "Barrier wall systems must perform flawlessly, often for decades. Summit's experience with diverse soils, groundwater conditions, and installation technologies allows us to construct dependable containment systems that stand up to regulatory demands and real-world site dynamics.",
            "Our ability to mobilize across multiple regions with consistent quality and safety standards offers significant value to consultants seeking more predictable results and minimized project risk. With Summit, customers gain a partner skilled in both engineering requirements and the practical realities of constructing subsurface isolation systems.",
            "Summit barrier wall services include:",
            "• Reactive Barrier Walls: These systems incorporate treatment media into the subsurface, allowing groundwater to passively interact with reactive materials that neutralize, bind, or degrade contaminants as water flows through.",
            "• Impermeable Barrier Walls: Designed to halt groundwater flow entirely, impermeable walls utilize slurry, membrane, or other low-permeability materials to create a continuous hydraulic cut-off.",
            "Summit builds containment systems that deliver long-term groundwater control and remediation certainty. Speak with our team to discuss the best barrier wall solution for your site."
        ],
        listing: {
            subtitle: "Strengthen site protection and long-term remediation goals!",
            excerpt: "Summit's hydraulic cut-off and reactive and permeable barrier walls provide essential control of groundwater flow and treatment, preventing off-site migration and safeguarding adjacent properties. Learn how our advanced installation techniques enhance containment treatment across diverse site conditions.",
            ctaText: "Our Barrier Wall Capabilities"
        }
    },
    {
        title: 'Earthwork',
        slug: 'earthwork-remediation',
        parentSlug: 'remediation-services',
        heroImage: '/images/remediation/earthwork-banner.webp',
        heroDescription: 'Summit provides complete earthwork and ex-situ remediation services, from excavation to ecological restoration, designed to remove contaminants, rebuild site stability, and prepare properties for safe, future use.',
        content: [
            "Our full suite of earthwork and ex-situ remediation services is getting deep!",
            "Our crews manage soil removal, testing, transportation, disposal, and site reconstruction with precision. We integrate civil, environmental, and geotechnical practices into one seamless delivery model.",
            "Ex-situ remediation projects require heavy civil capability combined with environmental expertise—an intersection where Summit excels. Our teams understand how to manage contaminated materials safely, comply with transport and disposal regulations, and reconstruct site features to support long-term resilience.",
            "With multi-regional delivery and deep experience in challenging field conditions, Summit gives customers confidence that soil removal, stabilization, and site restoration will be executed efficiently and in full compliance. This reduces risk, improves project predictability, and supports redevelopment goals.",
            "Summit earthwork services include:",
            "• Excavation, Transportation & Disposal of Impacted Soils",
            "• Test-Pitting/Trenching",
            "• Ecological Restoration/Shoreline Stabilization",
            "• Engineering Cap Installation (Vegetative/Impervious/Other)",
            "• Ex-Situ Soil Mixing",
            "Summit transforms contaminated sites into compliant, stable, and redevelopment-ready spaces. Connect with our team to plan your earthwork or ex-situ remediation project."
        ],
        listing: {
            subtitle: "Our full suite of earthwork and ex-situ remediation services is getting very deep!",
            excerpt: "By combining heavy civil earthwork with specialized ex-situ remediation practices—such as soil excavation, trenching, stabilization, and engineered capping, Summit is making a major contribution to transforming contaminated sites into stable, compliant, and future-ready assets. Discover the depth of our remediation expertise.",
            ctaText: "Our Earthwork Capabilities"
        }
    },
    {
        title: 'Drilling Support',
        slug: 'drilling-support',
        parentSlug: 'remediation-services',
        heroImage: '/images/remediation/drilling-support-banner.webp',
        heroDescription: 'Summit provides essential drilling support services, including site access construction, road and ramp installation, and large matting systems, to ensure safe, efficient, and reliable field operations.',
        content: [
            "Creating access and stable working platforms that keep our drillers drilling and your projects advancing!",
            "By creating access, stabilizing ground conditions, and improving mobility, our support services help drilling crews work more productively in challenging terrains and environmentally sensitive areas.",
            "Safe access is fundamental to successful drilling and remediation projects. Summit's ability to rapidly construct stable roads, entrances, ramps, and heavy-duty matting platforms minimizes downtime, protects equipment, and reduces environmental disturbance.",
            "Our teams understand the unique access demands of drilling operations and tailor solutions to site constraints, weather conditions, and regulatory objectives. Customers gain a partner who ensures that drilling operations start smoothly, stay on schedule, and maintain compliance from the moment equipment arrives.",
            "Summit drilling support services include:",
            "• Road/Construction Entrance/Ramp Installation: Summit builds stabilized access points, temporary roads, and engineered ramps that allow equipment and personnel to move safely and efficiently across any job site.",
            "• Large Matting Installation: We deploy durable, load-bearing mats to create stable work surfaces in soft, uneven, or environmentally sensitive areas to support rigs, vehicles, and staging operations.",
            "Summit delivers access solutions that keep drilling operations safe, productive, and compliant. Reach out to our team to plan your site access or drilling support needs."
        ],
        listing: {
            subtitle: "Creating stable working platforms that keep our drillers drilling and your projects advancing!",
            excerpt: "From access road construction to heavy-duty matting systems, Summit delivers the infrastructure that enables drilling crews to work safely in challenging conditions. See how our support services reduce downtime and improve site productivity.",
            ctaText: "Our Drilling Support Capabilities"
        }
    }
]

async function seedServices() {
    console.log('Seeding services...')

    const parentIds = {}

    // Seed Parent Pages
    for (const page of parentPages) {
        console.log(`Creating parent page: ${page.title}`)
        const doc = {
            _type: 'service',
            title: page.title,
            slug: { _type: 'slug', current: page.slug },
            category: page.category,
            heroDescription: page.heroDescription,
            ribbonText: 'SUMMIT SERVICES',
            legacyImagePath: page.heroImage,
            content: textToPortableText(page.content),
            specialtyApplications: page.specialtyApplications,
            order: page.order
        }

        const created = await client.createOrReplace({
            _id: `service-${page.slug}`,
            _type: 'service',
            ...doc
        })
        parentIds[page.slug] = created._id
        console.log(`Created parent: ${page.title} (${created._id})`)
    }

    // Seed Child Pages
    for (const page of childPages) {
        console.log(`Creating child page: ${page.title}`)
        const parentId = parentIds[page.parentSlug]

        if (!parentId) {
            console.error(`Parent not found for ${page.title} (slug: ${page.parentSlug})`)
            continue
        }

        const doc = {
            _type: 'service',
            title: page.title,
            slug: { _type: 'slug', current: page.slug },
            category: parentPages.find(p => p.slug === page.parentSlug).category,
            parentService: {
                _type: 'reference',
                _ref: parentId
            },
            heroDescription: page.heroDescription,
            ribbonText: 'SUMMIT SERVICES',
            legacyImagePath: page.heroImage,
            content: textToPortableText(page.content),

            // Listing fields
            subtitle: page.listing.subtitle,
            excerpt: page.listing.excerpt,
            ctaText: page.listing.ctaText
        }

        const created = await client.createOrReplace({
            _id: `service-${page.slug}`,
            _type: 'service',
            ...doc
        })
        console.log(`Created child: ${page.title} (${created._id})`)
    }

    console.log('Done!')
}

seedServices().catch(console.error)
