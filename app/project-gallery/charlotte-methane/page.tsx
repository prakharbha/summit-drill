import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";


export const metadata = getPageMetadata("/project-gallery/charlotte-methane");

export default function CharlotteMethaneProjectPage() {
    const projectDetails = {
        systemArea: "15,920 sq. ft. Cupolex installation",
        building: "7-story mixed-use development",
        hazardAddressed: "Methane intrusion from historic landfill",
        keyComponents: "Vapor membrane, Cupolex dome system, perforated extraction piping, roof-line vent, 24-hour methane monitoring system, PLC-based telemetry",
        clientCoordination: "Contractor (electrical), consultant customer (design), Summit (installation & commissioning)"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/charlotte-methane-banner.webp"
                    backgroundAlt="Methane Mitigation System with Cupolex & VIMS Integration"
                    ribbonText="FEATURED PROJECT"
                    title="Methane Mitigation System with Cupolex & VIMS Integration"
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
                                            <dt className="font-bold text-xl italic">System Area:</dt>
                                            <dd className="text-lg">{projectDetails.systemArea}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Building:</dt>
                                            <dd className="text-lg">{projectDetails.building}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Hazard Addressed:</dt>
                                            <dd className="text-lg">{projectDetails.hazardAddressed}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Components:</dt>
                                            <dd className="text-lg">{projectDetails.keyComponents}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Client Coordination:</dt>
                                            <dd className="text-lg">{projectDetails.clientCoordination}</dd>
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
                                        Summit&apos;s Remediation Division was contracted to install a complex methane mitigation system (MMS) for a new 7-story building in Charlotte, NC. The system was designed by a global environmental consulting and engineering firm to address methane intrusion concerns caused by an adjacent historic landfill. Summit&apos;s work included the installation of more than 15,000 square feet of Cupolex domed forming system, a perimeter vapor barrier, sub-slab extraction piping, and a fully integrated telemetry-based methane monitoring and alarm system.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        This project required the precise assembly of a highly engineered vapor intrusion mitigation system (VIMS) on an active construction site. The Cupolex domed forming system acts like a structural &quot;puzzle,&quot; requiring accurate placement, interlocking, and sequencing to create a continuous under-slab air space for methane collection. Additionally, the system had to integrate vapor barriers at all critical penetrations, elevator pits, and perimeter foundations, while incorporating a perforated extraction network capable of pulling vacuum through the Cupolex system and discharging vapors above the seventh floor roof line.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Installation of the Cupolex methane mitigation forming system (approx. 15,920 sq. ft.)</li>
                                        <li>Installation of perimeter vapor barriers, membrane seals, and protection for all sub-slab penetrations</li>
                                        <li>Installation of perforated extraction piping throughout the Cupolex system for methane capture</li>
                                        <li>Construction of a sub-slab depressurization system designed to vent to the roof of a 7-story building</li>
                                        <li>Integration of elevator pit and foundation vapor protection</li>
                                        <li>Supply and installation of a methane monitoring telemetry control panel</li>
                                        <li>Coordination with electrical team for rooftop sensors, differential pressure sensors, and power supply</li>
                                        <li>Planning and installation support for 24-hour methane monitoring with telemetry</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit coordinated closely with their customer&apos;s design report and construction drawings to sequence Cupolex installation with the broader building foundation schedule. The Cupolex system was installed in interlocking sections to create a continuous under-slab ventilation plenum. The team integrated vapor barrier materials at all vertical and horizontal penetrations, ensuring a sealed system that forces methane toward the designed extraction network. A perforated piping manifold was installed within the Cupolex air space, allowing a vacuum system to draw vapors upward for safe discharge above the roofline. Summit&apos;s control panel specialist installed the MMS telemetry panel, configured PLC logic, wired sensors, and commissioned the 24-hour methane alarm system.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit successfully installed an integrated methane mitigation system that meets all design and regulatory expectations for vapor intrusion protection. The completed system provides full sub-slab methane capture via Cupolex and extraction piping, long-term vapor barrier protection across the building footprint, remote continuous monitoring and alarm capability, and a safe foundation system for a multi-story residential development adjacent to a landfill.
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
