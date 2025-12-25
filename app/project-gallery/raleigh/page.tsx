import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";


export const metadata = getPageMetadata("/project-gallery/raleigh");

export default function RaleighProjectPage() {
    const projectDetails = {
        totalWellsInstalled: "10 (3 Type II, 7 Type III)",
        totalFootage: "910 linear feet",
        depthRange: "25'–170'",
        drillingMethod: "Air Rotary",
        schedulePerformance: "33 days vs. 40-day estimate",
        keyValueDelivered: "Accelerated completion, cost control, and avoidance of change orders",
        fieldLeadership: "Multi-crew coordination under dedicated drilling supervision"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/raleigh-banner.webp"
                    backgroundAlt="Multi-Depth Monitoring Well Installation"
                    ribbonText="FEATURED PROJECT"
                    title="Multi-Depth Monitoring Well Installation"
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
                                            <dt className="font-bold text-xl italic">Total Wells Installed:</dt>
                                            <dd className="text-lg">{projectDetails.totalWellsInstalled}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Total Footage:</dt>
                                            <dd className="text-lg">{projectDetails.totalFootage}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Depth Range:</dt>
                                            <dd className="text-lg">{projectDetails.depthRange}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Drilling Method:</dt>
                                            <dd className="text-lg">{projectDetails.drillingMethod}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Schedule Performance:</dt>
                                            <dd className="text-lg">{projectDetails.schedulePerformance}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Value Delivered:</dt>
                                            <dd className="text-lg">{projectDetails.keyValueDelivered}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Field Leadership:</dt>
                                            <dd className="text-lg">{projectDetails.fieldLeadership}</dd>
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
                                        Summit was contracted by a global engineering firm to drill and install a comprehensive network of Type II and Type III monitoring wells in Raleigh, NC. The scope included ten total monitoring wells installed to depths ranging from 25 to 170 feet below ground surface to support ongoing groundwater characterization at a challenging, variable subsurface site. All work was performed under an expedited schedule.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        This site presented high variability in depth to bedrock and inconsistent groundwater yields across fractured rock zones, conditions Summit had encountered during previous drilling programs at the location. The project was quoted on a footage/production basis, making efficiency critical to success. Additionally, the work was awarded in early Q2 with a tight completion window before year-end, requiring careful crew coordination and schedule compression to avoid delays and cost overruns that had impacted earlier efforts at the site.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Air rotary drilling and installation of three (3) Type II monitoring wells (Depths: 25–50 ft)</li>
                                        <li>Construction: 2&quot; SCH 40 PVC riser with 0.010 machine-slotted screen</li>
                                        <li>Air rotary drilling and installation of seven (7) Type III monitoring wells (Depths: 70–170 ft)</li>
                                        <li>Construction: 6&quot; SCH 40 PVC surface casing socketed into bedrock</li>
                                        <li>Grouted and cured prior to drilling to terminal depth</li>
                                        <li>Installation of 2&quot; SCH 40 PVC monitoring well with 0.010 slotted screen</li>
                                        <li>Completion of all wells with 2&apos; x 2&apos; concrete pads and flush-mounted covers</li>
                                        <li>Containment of liquid IDW in frac tanks supplied by Summit&apos;s customer</li>
                                        <li>Containment of soil cuttings in 55-gallon drums</li>
                                        <li>Coordination with customer for transport of drums and liquid IDW</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        To meet the aggressive schedule and maintain production efficiency, Summit mobilized two coordinated drilling crews, one from Bridgewater and one from Fort Mill, working concurrently under centralized field supervision. This approach allowed Summit to manage variability in drilling conditions without downtime and to adapt rapidly to changing bedrock depths and water-bearing fractures. Strong field leadership ensured consistent communication between crews, customer representatives, and project management, allowing production targets to be maintained while meeting all construction and documentation requirements.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Through proactive staffing and disciplined field execution, Summit completed the scope seven days ahead of schedule, finishing a 40-day project in just 33 days. The project avoided the significant change orders that had impacted prior drilling efforts at the site and successfully met their customer&apos;s accelerated timeline. The project also highlighted the value of experienced field supervision, with Summit&apos;s Drilling Field Supervisor playing a key role in managing multiple crews from different offices and maintaining consistent performance across the site.
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
