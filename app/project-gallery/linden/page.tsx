import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function LindenProjectPage() {
    const projectDetails = {
        clientType: "Global engineering & environmental consulting firm",
        projectType: "Multi-method drilling, GPR, and injection well installation",
        technologiesUsed: "GPR, Sonic, Air Rotary, NQ coring, well development",
        numberOfLocations: "16",
        depthRange: "5 ft preclearance; drilling to 20–150 ft",
        notableDeliverable: "11+ open-hole injection wells"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/linden-banner.jpg"
                    backgroundAlt="GPR & Drilling – Subsurface Investigation"
                    ribbonText="FEATURED PROJECT"
                    title="GPR & Drilling – Subsurface Investigation"
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
                                            <dt className="font-bold text-xl italic">Project Type:</dt>
                                            <dd className="text-lg">{projectDetails.projectType}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Technologies Used:</dt>
                                            <dd className="text-lg">{projectDetails.technologiesUsed}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Number of Locations:</dt>
                                            <dd className="text-lg">{projectDetails.numberOfLocations}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Depth Range:</dt>
                                            <dd className="text-lg">{projectDetails.depthRange}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Notable Deliverable:</dt>
                                            <dd className="text-lg">{projectDetails.notableDeliverable}</dd>
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
                                        A global engineering & environmental consulting firm engaged Summit to perform a multi-technology subsurface investigation in Linden, NJ, supporting data collection for injection well installation and site development planning. The project included GPR preclearance, drilling across 16 locations, and the installation and development of multiple open-hole injection wells.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Although the project did not present technical subsurface complications, the site demanded careful execution due to high traffic, inclement weather, and demanding scheduling expectations. Maintaining safety and efficiency under these operational pressures was essential.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Ground Penetrating Radar (GPR) survey of 16 drilling locations</li>
                                        <li>Preclearance of 16 locations to 5 ft</li>
                                        <li>Sonic drilling to 20–35 ft for weathered and competent bedrock sampling</li>
                                        <li>Air rotary drilling: (10) locations advanced to 70 ft and cased 32–35 ft, completed as open-hole injection wells</li>
                                        <li>(1) location advanced to 150 ft and cased 32–35 ft</li>
                                        <li>(1) location advanced to 70 ft with NQ coring and reamed to 6&quot; diameter</li>
                                        <li>Well development</li>
                                        <li>Management and transport of investigation-derived waste (water and soil cuttings)</li>
                                        <li>Roll-off containers and frac tank coordination</li>
                                        <li>Permit variance support for open holes exceeding 25 ft</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit deployed a coordinated multi-rig strategy including: Sonic, Air Rotary, and Auger to efficiently meet varied drilling depths and sampling objectives. GPR was used up front to safely preclear the work zones. Each well was installed with proper casing lengths and left open for future injection work as required by the client. Field crews worked under tight site constraints, adjusting sequencing and protection zones to maintain safety and productivity despite traffic and weather challenges. Waste streams were contained and transported in compliance with project specifications.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The project was completed safely and to specification, with clean execution across 16 locations using multiple drilling technologies. Injection wells were installed and developed successfully, and all investigation-derived waste was managed and transported without incident. The customer praised the team&apos;s professionalism, efficiency, safety adherence, and collaborative approach, noting exceptional performance under challenging conditions.
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
