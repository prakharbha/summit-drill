import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function GastoniaProjectPage() {
    const projectDetails = {
        purpose: "Prevent permanganate-impacted groundwater from migrating into a nearby stream",
        divisionsInvolved: "Remediation Division (with drilling support for well documentation)",
        prbLength: "120 linear feet (nonconsecutive)",
        trenchDepths: "12–17 feet",
        specialtyMaterials: "Washed silica sand, ground GAC",
        schedule: "Rapid response; work performed July–August 2025",
        regulatoryOversight: "NCDEQ and U.S. EPA"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/gastonia-banner.jpg"
                    backgroundAlt="Permeable Reactive Barrier (PRB) Installation"
                    ribbonText="FEATURED PROJECT"
                    title="Permeable Reactive Barrier (PRB) Installation"
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
                                            <dt className="font-bold text-xl italic">Purpose:</dt>
                                            <dd className="text-lg">{projectDetails.purpose}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Divisions Involved:</dt>
                                            <dd className="text-lg">{projectDetails.divisionsInvolved}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">PRB Length:</dt>
                                            <dd className="text-lg">{projectDetails.prbLength}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Trench Depths:</dt>
                                            <dd className="text-lg">{projectDetails.trenchDepths}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Specialty Materials:</dt>
                                            <dd className="text-lg">{projectDetails.specialtyMaterials}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Schedule:</dt>
                                            <dd className="text-lg">{projectDetails.schedule}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Regulatory Oversight:</dt>
                                            <dd className="text-lg">{projectDetails.regulatoryOversight}</dd>
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
                                        Summit&apos;s Remediation Division was contracted by a global engineering firm to perform the rapid installation of a permeable reactive barrier (PRB) at a Southeastern superfund site in response to an urgent groundwater issue. Potassium permanganate, previously injected as part of the remediation program, had migrated back to the surface and visibly entered a nearby stream, prompting immediate regulatory action by NCDEQ and the U.S. EPA. Summit mobilized quickly, sourcing specialty materials, preparing the site, and completing construction under accelerated deadlines while maintaining full compliance with regulatory oversight.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The project required fast, technically accurate corrective action under high visibility and active environmental concern. Crews needed to rapidly source and blend specialty media, excavate deep trench sections, and construct the PRB while preventing further discharge to the stream. An accelerated schedule, strict regulatory scrutiny, and sensitive site conditions added to project complexity.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Site clearing, light grading, and erosion & sediment control installation</li>
                                        <li>Access preparation and workspace stabilization</li>
                                        <li>Specialty procurement of washed silica sand and ground granulated activated carbon (GAC)</li>
                                        <li>On-site blending of filtration media</li>
                                        <li>Excavation of six PRB trenches (12–17 ft deep), totaling 120 nonconsecutive linear feet</li>
                                        <li>Installation of GAC/sand permeable media to intercept impacted groundwater</li>
                                        <li>Installation and documentation of casing within select PRB sections for sampling and recovery</li>
                                        <li>Return mobilization for site restoration, grading, and stabilization</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit began by preparing the site through clearing, light grading, and erosion control installation to ensure a safe and compliant work zone. Materials were rapidly sourced and blended on-site to create a custom reactive media mix capable of treating permanganate-impacted groundwater before it reached the stream. Crews excavated six trench locations to depths of 12–17 feet and placed 120 linear feet of PRB media in nonconsecutive sections, forming a permeable treatment pathway. Simultaneously, Summit documented well casing installations within portions of the barrier to support future groundwater recovery and performance monitoring. Following installation, Summit returned to complete final grading and stabilization, leaving the site fully restored and operational.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit successfully installed the PRB system under accelerated timelines, effectively addressing an active stream impact and restoring regulatory confidence in the site&apos;s containment measures. The project demonstrated Summit&apos;s ability to rapidly mobilize, manage specialty materials, and execute complex environmental construction under pressure. Based on performance, Summit was sourced for additional follow-on work at the superfund site.
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
