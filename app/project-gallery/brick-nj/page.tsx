import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function BrickNJProjectPage() {
    const projectDetails = {
        clientType: "Engineering firm & county infrastructure authority",
        projectType: "Storm sewer repair, well abandonment, utility investigation, monitoring well replacement",
        disciplinesUsed: "Geophysical, Drilling, Remediation",
        technologiesUsed: "RF, EM, GPR, DPT/Geoprobe, structural shoring systems",
        infrastructureRepaired: "18\" storm sewer line",
        contractStructure: "All work self-performed by Summit under one coordinated contract"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/brick-nj-banner.jpg"
                    backgroundAlt="Emergency Storm Sewer Repair Project"
                    ribbonText="FEATURED PROJECT"
                    title="Emergency Storm Sewer Repair"
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
                                            <dt className="font-bold text-xl italic">Disciplines Used:</dt>
                                            <dd className="text-lg">{projectDetails.disciplinesUsed}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Technologies Used:</dt>
                                            <dd className="text-lg">{projectDetails.technologiesUsed}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Infrastructure Repaired:</dt>
                                            <dd className="text-lg">{projectDetails.infrastructureRepaired}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Contract Structure:</dt>
                                            <dd className="text-lg">{projectDetails.contractStructure}</dd>
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
                                        Summit was contracted by One Atlas Engineering and Ocean County to address an urgent subsurface infrastructure issue involving a monitoring well that had unintentionally punctured an 18-inch storm sewer line beneath a county roadway. Summit delivered a complete investigation-to-restoration solution using its Geophysical, Drilling, and Remediation divisions—eliminating the need for additional subcontractors and ensuring efficient coordination from start to finish.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The damaged storm line restricted access for inspection and maintenance while the repair area was located directly beside an active two-lane county roadway. The project required traffic diversion, precision excavation, structural shoring, and seamless multi-division coordination to maintain roadway stability, public safety, and regulatory compliance throughout the work.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Subsurface utility investigation using RF, EM, and GPR</li>
                                        <li>Proper abandonment of an improperly installed monitoring well</li>
                                        <li>Roadway traffic control and diversion operations</li>
                                        <li>Shored excavation adjacent to active roadway</li>
                                        <li>Cutting and removal of existing well casing</li>
                                        <li>Clearing and repairing an 18&quot; storm sewer line (coupler & bentonite chip seal)</li>
                                        <li>Controlled backfilling and compaction with shoring removal</li>
                                        <li>Installation of a new monitoring well via direct-push Geoprobe drilling</li>
                                        <li>All services performed in-house under a single coordinated contract</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit began with a full geophysical investigation to map utilities and subsurface conditions around the compromised storm line. After confirming the location of the puncture, the Drilling Division abandoned the original monitoring well in place to prevent further interference. The Remediation Division then mobilized shoring systems, a mini excavator, and full roadway traffic control to safely manage traffic flow on the county road. A precision excavation was performed adjacent to the pavement without undermining the roadway. Crews removed the abandoned well, cleaned and cleared the storm sewer, and executed repairs with a mechanical coupler and bentonite seal. The excavation was then backfilled and compacted in controlled lifts while shoring was systematically removed. Once surface conditions were restored, Summit returned with its direct-push drilling team to install a new monitoring well in the remediated area, completing the system restoration.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit delivered a fully self-performed, multi-division solution that restored storm sewer integrity, resolved ongoing access issues, and reinstated a functional monitoring well—all with minimal public disruption. The coordinated approach reduced downtime, ensured structural roadway stability, maintained regulatory compliance, and significantly streamlined project delivery for customers.
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
