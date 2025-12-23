import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function CharlotteAirportProjectPage() {
    const projectDetails = {
        containmentLength: "400+ linear feet",
        depth: "17–25 ft below ground surface",
        regulatoryCompliance: "FAA, AOA, TSA, NCDEQ",
        keyComplexity: "Construction within an active airfield adjacent to runway/taxiway",
        additionalInfrastructure: "Protection/encapsulation of active utilities",
        monitoring: "Post-construction monitoring wells installed to confirm wall performance"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/charlotte-airport-banner.webp"
                    backgroundAlt="Bentonite Hydraulic Cut-Off Wall Installation"
                    ribbonText="FEATURED PROJECT"
                    title="Bentonite Hydraulic Cut-Off Wall Installation"
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
                                            <dt className="font-bold text-xl italic">Containment Length:</dt>
                                            <dd className="text-lg">{projectDetails.containmentLength}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Depth:</dt>
                                            <dd className="text-lg">{projectDetails.depth}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Regulatory Compliance:</dt>
                                            <dd className="text-lg">{projectDetails.regulatoryCompliance}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Complexity:</dt>
                                            <dd className="text-lg">{projectDetails.keyComplexity}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Additional Infrastructure:</dt>
                                            <dd className="text-lg">{projectDetails.additionalInfrastructure}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Monitoring:</dt>
                                            <dd className="text-lg">{projectDetails.monitoring}</dd>
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
                                        Summit&apos;s Remediation Division was engaged by the City of Charlotte, with a global engineering firm serving as design engineer, and Charlotte Douglas International Airport overseeing compliance, to construct a bentonite-based hydraulic cut-off wall within an active and highly secured airport environment. The system was designed to prevent the migration of impacted groundwater toward a stream monitored by NCDEQ. The project took place adjacent to an active runway and taxiway and required strict adherence to FAA, AOA, TSA, and NCDEQ protocols, all while ensuring full continuity of airport operations.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Performing environmental construction inside an active airfield is inherently complex. The work zone sat directly beside critical aviation infrastructure and active utilities, requiring precise trenching, real-time coordination, and carefully sequenced construction practices. Strict federal and airport security requirements governed access, equipment movement, communication, and safety. Additionally, the shoreline-adjacent setting required reinforced staging areas, controlled excavation, and compliant handling of impacted soils.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Construction of 400+ linear feet of bentonite hydraulic cut-off wall (17–25 ft bgs)</li>
                                        <li>Site clearing, grading, and shoreline reinforcement to establish a stable work platform</li>
                                        <li>Excavation, backfilling, and transportation/disposal of impacted soils</li>
                                        <li>Trench-based containment wall installation around active airport subsurface utilities</li>
                                        <li>Restoration of disturbed areas, including backfilling, surface shaping, and final grading</li>
                                        <li>Installation of monitoring wells to evaluate hydraulic performance of the containment system</li>
                                        <li>Full compliance with FAA, AOA, TSA, NCDEQ, and airport-specific operational protocols</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit began by constructing a reinforced shoreline platform to maintain stability along the excavation corridor. Impacted soils were excavated, backfilled, and transported for proper disposal, ensuring environmental compliance at every stage. A trench-based hydraulic cut-off wall was then installed using bentonite slurry to create a continuous subsurface barrier. Crews worked with precision around sensitive, active airport utilities, encapsulating them within the wall alignment while preserving their function. Upon completion of the cut-off wall, Summit restored the work zone, regraded the shoreline, and reestablished safe operational conditions for the airport. Monitoring wells were then installed on both sides of the wall to verify hydraulic control and demonstrate regulatory compliance. Throughout the project, Summit maintained seamless coordination with airport operations, ensuring uninterrupted airfield activity.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit successfully delivered a fully engineered hydraulic containment system that met all design criteria and regulatory expectations. The project was completed safely, on schedule, and without impact to airport operations. Post-installation monitoring confirmed proper hydraulic function, demonstrating effective containment of impacted groundwater. The effort highlights Summit&apos;s capability to execute precise, large-scale environmental construction inside high-security, operationally sensitive environments.
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
