import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function PrincetonProjectPage() {
    const projectDetails = {
        siteType: "Collegiate athletic facility (artificial turf)",
        technology: "Sonic drilling",
        depthAchieved: "Up to 40 feet",
        duration: "Four days",
        keyRequirements: "Complete protection of high-value turf surface"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/princeton-banner.webp"
                    backgroundAlt="Sonic Drilling Investigation on Collegiate Athletic Field"
                    ribbonText="FEATURED PROJECT"
                    title="Sonic Drilling Investigation on Collegiate Athletic Field"
                />

                <section className="py-16 bg-[#a4c5c5]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
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
                                        <h4 className="font-bold text-[#1e3a8a] mb-4">
                                            Project Details
                                        </h4>
                                        <div className="w-full h-1 bg-[#923d21] mt-4 mx-auto max-w-[200px]"></div>
                                    </div>

                                    <dl className="space-y-4 text-[#1A365D]">
                                        <div>
                                            <dt className="font-bold text-xl italic">Site Type:</dt>
                                            <dd className="text-lg">{projectDetails.siteType}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Technology:</dt>
                                            <dd className="text-lg">{projectDetails.technology}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Depth Achieved:</dt>
                                            <dd className="text-lg">{projectDetails.depthAchieved}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Duration:</dt>
                                            <dd className="text-lg">{projectDetails.duration}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Requirements:</dt>
                                            <dd className="text-lg">{projectDetails.keyRequirements}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">
                                        Project Overview
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        A national environmental and geotechnical engineering consulting firm engaged Summit&apos;s Sonic Drilling Division to perform a high-resolution subsurface investigation on Princeton University&apos;s baseball field. The project required the advancement of sonic borings to depths of up to 40 feet to support environmental and geotechnical data needs. Work was performed using Sonic technology over a four-day drilling program.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The project took place directly on a collegiate athletic surface, an artificial turf baseball field, requiring exceptional care to avoid damage to the turf system, drainage layers, and sub-base materials. Limited access routes, strict university protection requirements, and the need to maintain field integrity elevated the complexity beyond that of a typical drilling assignment.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Sonic drilling of multiple borings up to 40 feet</li>
                                        <li>Continuous soil core collection for environmental and geotechnical evaluation</li>
                                        <li>Protective measures to safeguard artificial turf and sub-surface drainage systems</li>
                                        <li>Controlled equipment mobilization to prevent turf indentation or heat transfer</li>
                                        <li>Daily restoration and site protection during multi-day operations</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit implemented specialized turf protection protocols, including ground pads, equipment staging mats, and low-impact movement procedures to prevent disturbance to the synthetic playing surface. The Sonic rig was positioned with precision to minimize surface loading, and drilling fluids and cuttings were contained to avoid surface staining or drainage infiltration. Crews advanced sonic borings efficiently over the four-day schedule while maintaining continuous communication with the customer&apos;s project manager and Princeton facilities staff. All work zones were restored daily to maintain field usability and aesthetics.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        All sonic borings were successfully advanced to the required depths with zero impact to the artificial turf field. The project was completed on schedule, met all university protection requirements, and delivered high-quality subsurface data to support the engineering customer&apos;s project objectives. Summit&apos;s ability to operate sensitive equipment in a non-traditional, high-visibility environment reinforced the division&apos;s precision, care, and technical capability.
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
