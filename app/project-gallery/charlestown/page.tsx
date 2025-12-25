import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";


export const metadata = getPageMetadata("/project-gallery/charlestown");

export default function CharlestownProjectPage() {
    const projectDetails = {
        clientType: "Environmental engineering & federal infrastructure contractor",
        wellCount: "30 overburden wells",
        casingInstalled: "14 casings (20–80 ft; 5–10 ft into bedrock)",
        rockCoring: "Up to 150 ft",
        keyAdvantage: "Operational adaptability under fluctuating subsurface conditions",
        technology: "Sonic drilling"
    };

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/projects/charlestown-banner.webp"
                    backgroundAlt="Sonic Drilling – Overburden & Bedrock Wells"
                    ribbonText="FEATURED PROJECT"
                    title="Sonic Drilling – Overburden & Bedrock Wells"
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
                                            <dt className="font-bold text-xl italic">Well Count:</dt>
                                            <dd className="text-lg">{projectDetails.wellCount}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Casing Installed:</dt>
                                            <dd className="text-lg">{projectDetails.casingInstalled}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Rock Coring:</dt>
                                            <dd className="text-lg">{projectDetails.rockCoring}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Key Advantage:</dt>
                                            <dd className="text-lg">{projectDetails.keyAdvantage}</dd>
                                        </div>
                                        <div>
                                            <dt className="font-bold text-xl italic">Technology:</dt>
                                            <dd className="text-lg">{projectDetails.technology}</dd>
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
                                        A large US-based environmental firm engaged Summit to complete a large-scale sonic drilling and well installation program at a U.S. Army Corps of Engineers site in Charlestown, RI. The objective was to install overburden and bedrock wells across variable subsurface conditions to support environmental characterization and ongoing site evaluation. The project involved drilling more than 30 overburden wells and setting multiple deep steel casings, followed by rock coring to significant depths.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Challenge/Conditions:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Subsurface conditions varied widely across the site, creating unexpected fluctuations in drilling depths and casing requirements. These variations demanded real-time adjustments, flexible tooling, and rapid decision-making to maintain production. The federal project environment also required strict adherence to safety, documentation, and communication standards.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Services Provided:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg list-disc pl-6 space-y-1">
                                        <li>Sonic drilling of 30 overburden wells between 30 and 100 feet</li>
                                        <li>Installation of 14 steel casings between 20 and 80 feet, set 5–10 feet into competent bedrock</li>
                                        <li>Rock coring inside casing strings to depths of up to 150 feet</li>
                                        <li>Continuous subsurface characterization across variable geological conditions</li>
                                        <li>Onsite management of extra materials, casing, and tooling to prevent delays</li>
                                        <li>Professional communication with customer and U.S. Army Corps project representatives</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Solutions/Approach:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        To handle unpredictable bedrock elevations and rapidly changing borehole conditions, Summit mobilized with surplus casing, tooling, and sonic consumables. This proactive planning allowed the crew to adjust drilling depths, switch methods, and install casings without schedule interruption. The team executed the program with precision, documenting subsurface variability for the customer while maintaining field efficiency. Strong coordination between drilling staff and the customer&apos;s project manager ensured smooth workflow and immediate adaptation to evolving site needs.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-1">
                                        Outcome/Results:
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit completed all drilling, casing installations, and rock coring without delays despite significant variations in subsurface conditions. The customer provided exceptional feedback, noting that in more than 20 years of field oversight, this was one of the best drilling crews they had ever worked with. Professionalism, communication, preparedness, and technical execution were cited as key strengths. The project met all Army Corps requirements and delivered high-quality geological data across the full program area.
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
