import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function RoselleProjectPage() {
    const projectDetails = {
        clientType: "Environmental Consulting",
        wellDepths: "52', 55', and 65'",
        drillingMethod: "Air Rotary",
        casing: "6\" steel, set 10 ft into bedrock",
        monitoringWells: "2\" PVC, 5' screens, flush-mounted manholes",
        siteCondition: "Tight workspace requiring controlled operations"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/roselle-banner.webp"
                    backgroundAlt="Shallow Bedrock Well Installation"
                    ribbonText="FEATURED PROJECT"
                    title="Shallow Bedrock Well Installation"
                />

                <section className="py-16 bg-[#a4c5c5]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <div className="bg-[#78a8a8] p-8 rounded-lg shadow-xl">
                                    <div className="text-center mb-6">
                                        <div className="flex justify-center mb-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src="/images/projects/project-sidebar-icon.webp"
                                                    alt="Project Details"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#923d21] tracking-widest uppercase">
                                            Project Details
                                        </h3>
                                        <div className="w-full h-1 bg-[#923d21] mt-4 mx-auto max-w-[200px]"></div>
                                    </div>

                                    <dl className="space-y-4 text-[#1A365D]">
                                        <div>
                                            <dt className="font-bold text-xl italic">Client Type:</dt>
                                            <dd className="text-lg">{projectDetails.clientType}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Well Depths:</dt>
                                            <dd className="text-lg">{projectDetails.wellDepths}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Drilling Method:</dt>
                                            <dd className="text-lg">{projectDetails.drillingMethod}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Casing:</dt>
                                            <dd className="text-lg">{projectDetails.casing}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Monitoring Wells:</dt>
                                            <dd className="text-lg">{projectDetails.monitoringWells}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Site Condition:</dt>
                                            <dd className="text-lg">{projectDetails.siteCondition}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Project Overview:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        A global company specializing in the energy, infrastructure, and environmental sectors engaged Summit to preclear, drill, and install three shallow bedrock monitoring wells in Roselle, NJ. The wells were advanced to depths of 65-75 feet deep to support environmental groundwater characterization beneath a constrained urban site. Summit performed all drilling, well installation, waste handling, and development activities.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The project was completed within a tight work area, requiring careful rig positioning, controlled staging of materials, and efficient movement of equipment to avoid disruptions to nearby operations. Limited access also required disciplined waste management and containment procedures.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Preclear/vacuum extraction of three drilling locations to 5 ft</li>
                                        <li>Air rotary drilling into shallow bedrock</li>
                                        <li>Installation of three 6&quot; steel casings set 10 ft into bedrock</li>
                                        <li>Advancement of boreholes to targeted depth</li>
                                        <li>Geophysical logging of each borehole to determine depth of screened intervals</li>
                                        <li>Installation of 2&quot; PVC monitoring wells extending 15 ft beyond casing</li>
                                        <li>Placement of 5&apos; well screens and construction of flush-mounted manholes</li>
                                        <li>Drum management of soil and water; staging of IDW onsite</li>
                                        <li>Well development</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit began with vacuum extraction and preclearance to safely expose and prepare each drilling location. Using air rotary methods, the crew installed 6&quot; steel surface casing and advanced boreholes through the shallow bedrock to reach productive groundwater intervals. Each borehole was drilled to a target depth of 65-75&apos; below ground surface. Geophysical logging was performed on each borehole to ensure the screens were set over a targeted fracture zone. Once data was compiled, the boreholes were converted into a 2&quot; PVC monitoring well with a 5-foot screen to support high-quality groundwater sampling. Work areas were tightly controlled due to site constraints, with soil and water drummed and staged for proper handling. The team completed well development and installed flush-mounted manholes to allow secure, low-profile access.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        All three monitoring wells were successfully installed to target depths despite limited workspace. Summit&apos;s customer received structurally sound, fully developed wells ready for sampling and long-term monitoring. The project was completed safely and efficiently, demonstrating Summit&apos;s capability to execute precision drilling in space-restricted urban environments.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <Link
                                        href="/project-gallery"
                                        className="inline-block bg-[#377d7e] hover:bg-sky-500 text-white font-bold italic text-sm px-6 py-2 rounded-sm shadow-md transition-colors"
                                    >
                                        Back to Gallery &gt;&gt;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DrillingRequestForm />
            </main>
            <Footer />
        </>
    );
}
