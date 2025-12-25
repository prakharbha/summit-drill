import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";


export const metadata = getPageMetadata("/project-gallery/spartanburg-cap");

export default function SpartanburgCapProjectPage() {
    const projectDetails = {
        clientType: "Environmental engineering & consulting firm",
        projectType: "Engineering cap repair, shoreline stabilization, erosion control",
        disciplinesUsed: "Summit Remediation Division",
        keyQuantities: "200 linear feet of streambank restored",
        technologiesAndMaterials: "Riprap, stone, geo-cell grid, liner components",
        siteCharacteristics: "Dense woodland, limited access, storm-damaged embankment",
        completion: "Spring 2025"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/spartanburg-cap-banner.webp"
                    backgroundAlt="Engineering Cap Repair & Streambank Stabilization"
                    ribbonText="FEATURED PROJECT"
                    title="Engineering Cap Repair & Streambank Stabilization"
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
                                        <h3 className="text-2xl font-bold text-[#2a1109] tracking-widest uppercase">
                                            Project Details
                                        </h3>
                                        <div className="w-full h-1 bg-[#2a1109] mt-4 mx-auto max-w-[200px]"></div>
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
                                            <dt className="font-bold text-xl italic">Key Quantities:</dt>
                                            <dd className="text-lg">{projectDetails.keyQuantities}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Technologies & Materials:</dt>
                                            <dd className="text-lg">{projectDetails.technologiesAndMaterials}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Site Characteristics:</dt>
                                            <dd className="text-lg">{projectDetails.siteCharacteristics}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Completion:</dt>
                                            <dd className="text-lg">{projectDetails.completion}</dd>
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
                                        Summit&apos;s Remediation Division was contracted by a large engineering & environmental consulting firm to perform restoration and stabilization work on a compromised engineering cap system at a site in Spartanburg, SC. The multi-layer cap, designed to prevent historic contaminant impacts from migrating toward a nearby stream, had been damaged by significant storm events, resulting in embankment loss and exposure of the vegetative cover layer.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The affected area was located within dense woodlands, limiting access for heavy equipment and material delivery. Prior storm activity had destabilized approximately 200 linear feet of streambank, requiring precise reconstruction to restore containment integrity while tying into the existing engineered cap system.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Clearing, widening, and improving woodland trails for safe access</li>
                                        <li>Restoration of 200 linear feet of streambank</li>
                                        <li>Placement of stone, riprap, and grid materials to rebuild embankment</li>
                                        <li>Regrading slopes to support long-term stability and erosion control</li>
                                        <li>Integration of new materials with remaining undisturbed engineered cap</li>
                                        <li>Creation of conditions favorable for native vegetation regrowth</li>
                                        <li>Controlled backfilling and compaction with shoring removal</li>
                                        <li>Protection and reinforcement of multi-layer cap system (soil, stone, riprap, liner, geo-cell grid)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit began by upgrading an existing trail to safely mobilize tracked excavation equipment and deliver high-volume stone and construction materials to the remote repair area. Once access was established, crews reshaped the damaged embankment, installing stone, riprap, and geo-grid materials to rebuild the shoreline and stabilize the slope. The restored section was seamlessly integrated with the undisturbed portions of the engineered cap, ensuring consistent performance across the system. Regrading supported long-term structural stability while promoting natural re-vegetation to reinforce erosion protection over time.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The project was successfully completed in Spring 2025, restoring the streambank stabilization system to full function. Summit&apos;s work reestablished containment controls designed to prevent migration of historic contaminant impacts, improved long-term slope stability, and ensured the engineered cap could continue performing as intended.
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
