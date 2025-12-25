import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";


export const metadata = getPageMetadata("/project-gallery/princeton-jct");

export default function PrincetonJctProjectPage() {
    const projectDetails = {
        projectDuration: "Approximately 9 years",
        projectType: "Long-term remediation support",
        wellTypes: "Injection wells and monitoring wells",
        drillingTechnologies: "Hollow stem auger, roto-sonic",
        keyStrength: "Continuity, adaptability, and long-term site familiarity",
        valueDelivered: "Consistent execution across multiple remediation phases"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/princeton-jct-banner.webp"
                    backgroundAlt="Long-Term Injection & Monitoring Well Program"
                    ribbonText="FEATURED PROJECT"
                    title="Long-Term Injection & Monitoring Well Program"
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
                                            <dt className="font-bold text-xl italic">Project Duration:</dt>
                                            <dd className="text-lg">{projectDetails.projectDuration}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Project Type:</dt>
                                            <dd className="text-lg">{projectDetails.projectType}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Well Types:</dt>
                                            <dd className="text-lg">{projectDetails.wellTypes}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Drilling Technologies:</dt>
                                            <dd className="text-lg">{projectDetails.drillingTechnologies}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Strength:</dt>
                                            <dd className="text-lg">{projectDetails.keyStrength}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Value Delivered:</dt>
                                            <dd className="text-lg">{projectDetails.valueDelivered}</dd>
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
                                        Summit has supported ongoing environmental investigation and remediation efforts at the former site of a petroleum industry support services company for nearly a decade. Over a nine-year period, Summit&apos;s field teams have repeatedly mobilized to install injection and monitoring wells using multiple drilling technologies. In addition to well installation, Summit consistently collected and presented continuous core soil samples for on-site review, allowing project managers to directly evaluate subsurface conditions and make informed, real-time decisions as remediation strategies evolved.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The site required long-term, phased subsurface work across heavily wooded sampling areas, including locations characterized by unstable and soft ground conditions. Limited access, dense vegetation, and variable surface stability required careful equipment selection, controlled mobilization, and adaptive drilling approaches to safely access target locations while maintaining borehole integrity. As remediation strategies evolved over time, Summit continuously adjusted drilling methods and well designs to meet changing technical requirements within these challenging site conditions.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Installation of multiple injection wells to support remedial treatment programs</li>
                                        <li>Installation of monitoring wells for groundwater assessment and performance tracking</li>
                                        <li>Collection of continuous core soil samples for subsurface characterization</li>
                                        <li>On-site presentation and review of core samples with client project managers</li>
                                        <li>Hollow stem auger drilling during early phases of site work</li>
                                        <li>Deployment of state-of-the-art roto-sonic drilling technology in later phases</li>
                                        <li>Repeat mobilizations over a nine-year project lifecycle</li>
                                        <li>Coordination with consultants and site stakeholders across multiple remediation phases</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit leveraged its familiarity with site conditions to select the most effective drilling technology for each phase of work. Early activities utilized hollow stem auger drilling where appropriate, while later phases increasingly relied on roto-sonic rigs to achieve higher-quality core recovery, improved borehole stability, and greater efficiency. By maintaining continuity of personnel and institutional knowledge, Summit was able to execute repeat scopes efficiently, minimize learning curves, and support adaptive remediation strategies without disruption.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Over nine years of continuous involvement, Summit successfully installed numerous injection and monitoring wells that supported the site&apos;s evolving remediation program. The long-standing relationship reflects Summit&apos;s reliability, technical versatility, and ability to deliver consistent results over extended project lifecycles. Summit&apos;s repeated selection for work at this site underscores client confidence in its drilling expertise and field execution.
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
