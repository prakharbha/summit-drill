import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export default function SpartanburgSonicProjectPage() {
    const projectDetails = {
        vapLocations: "6",
        maximumDepthAchieved: "300 ft bgs",
        samplingMethods: "Temporary screen, packer assembly, submersible pump",
        analyticalMethods: "Groundwater VOCs – USEPA Method 8260D, Soil grain size – ASTM D6913, Organic carbon – ASTM D2974-87",
        keyDifferentiator: "Tool recovery and deep drilling expertise under extreme conditions",
        fieldLeadership: "Lead sonic driller with specialized VAP experience"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/spartanburg-sonic-banner.webp"
                    backgroundAlt="Deep Vertical Aquifer Profile (VAP) Investigation"
                    ribbonText="FEATURED PROJECT"
                    title="Deep Vertical Aquifer Profile (VAP) Investigation"
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
                                            <dt className="font-bold text-xl italic">VAP Locations:</dt>
                                            <dd className="text-lg">{projectDetails.vapLocations}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Maximum Depth Achieved:</dt>
                                            <dd className="text-lg">{projectDetails.maximumDepthAchieved}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Sampling Methods:</dt>
                                            <dd className="text-lg">{projectDetails.samplingMethods}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Analytical Methods:</dt>
                                            <dd className="text-lg">{projectDetails.analyticalMethods}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Differentiator:</dt>
                                            <dd className="text-lg">{projectDetails.keyDifferentiator}</dd>
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
                                        A leading global engineering firm engaged Summit to perform a deep vertical aquifer profile (VAP) investigation at a complex site in Spartanburg, SC. The objective of the program was to generate high-resolution vertical profiles of volatile organic compounds (VOCs) in groundwater to better understand contaminant distribution within deep saprolite, fractured bedrock, and potential preferential water-bearing zones. The work involved advancing multiple deep borings using roto-sonic drilling and collecting discrete soil and groundwater samples at targeted depth intervals.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The project required drilling to depths of up to 200 feet below ground surface, but site conditions ultimately required advancement to nearly 300 feet at certain locations. Tight silts and variable subsurface conditions caused multiple instances of tooling becoming locked in the borehole at depths exceeding 200 feet. These conditions posed significant operational risks, including the potential loss of large-diameter sonic tooling, while still requiring completion of precise sampling objectives.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Roto-sonic drilling at six VAP locations</li>
                                        <li>Advancement of borings to competent bedrock or maximum depths (up to 300 ft bgs)</li>
                                        <li>Detailed soil classification based on color, lithology, grain size, texture, and moisture</li>
                                        <li>Soil screening above the water table using photoionization detector (PID) for VOCs</li>
                                        <li>Collection of up to five discrete groundwater samples per location using temporary well screen, packer assembly, and submersible pump</li>
                                        <li>Targeted sampling at just below the water table, presumed preferential water-bearing (PWR) zones, and top of competent bedrock or terminal depth</li>
                                        <li>Measurement and documentation of field parameters (pH, DO, ORP, conductivity)</li>
                                        <li>Sample handling, preservation, and chain-of-custody shipment to laboratories</li>
                                        <li>Boring abandonment using neat cement grout in accordance with SCDES requirements</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit deployed an experienced sonic drilling crew led by a driller highly specialized in VAP sampling and deep drilling applications. When tooling became locked within tight silt zones at extreme depths, the team applied controlled recovery techniques to safely retrieve both 6-inch and 8-inch tooling without compromising borehole integrity or losing equipment. Field personnel worked closely with the customer&apos;s geologist to dynamically select additional sampling intervals based on observed lithology and permeability, biasing data collection toward the most effective transport zones. This collaborative, adaptive approach ensured the project remained technically sound despite subsurface challenges.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit successfully completed all VAP borings and sampling activities, recovering all tooling and delivering the depth-specific soil and groundwater data required by the customer. Despite drilling significantly deeper than originally anticipated, the project remained productive and met the client&apos;s investigative objectives. The successful execution reinforced Summit&apos;s capability to perform high-risk, deep sonic drilling and VAP investigations under demanding subsurface conditions.
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
