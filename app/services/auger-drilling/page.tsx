import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingSidebar from "@/components/drilling/DrillingSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/auger-drilling");

export default function AugerPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/services/drilling/hsa-banner.webp"
                    backgroundAlt="Summit Hollow Stem Auger Drilling"
                    ribbonText="SUMMIT SERVICES"
                    title="Auger Drilling"
                    description="Hollow stem auger drilling is the ideal method for advancing shallow boreholes in unconsolidated formations especially when soil sampling is required."
                />

                {/* Main Content Section */}
                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    For normal hole advancement, a pilot bit is inserted through the cutter head to drill the center of the hole. The drill rod is bolted to the inside of the drive cap with a rod-to-cap adapter so that the pilot bit can turn in tandem with the augers. This method allows for split spoon sampling, Shelby tube sampling, Dennison sampling, Hydro punch discrete water sampling, and rock coring to be performed while leaving the augers in place.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Drill rods are normally added each time an auger is added. In soft formations (dirt and sand), a tapered wooden plug may be inserted into the end of the cutter head to prevent material from going up inside the augers and eliminates the use of drill rod. When the hole is completed, the plug may be knocked out the bottom of the auger string. The next step is to insert the monitoring screen and casing, which is then grouted into place to prevent contamination from the top of the hole.
                                </p>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Scenarios of Use
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Hollow stem auger drilling is the ideal method for advancing shallow boreholes in unconsolidated formations especially when soil sampling is required during the advancement of the borehole.
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar - 1/3 width */}
                            <div className="lg:col-span-1">
                                <DrillingSidebar currentPage="auger" />
                            </div>
                        </div>

                        {/* Lauren DiVello Section - Full Width */}
                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                Experience Auger Drilling with Summit
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg font-bold">
                                Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate. Reach Lauren at <strong>609-238-2815</strong> to discuss your project needs. Or email <a href="mailto:LDivello@SummitDrilling.com" className="text-[#163058] underline hover:text-[#A04020]">LDivello@SummitDrilling.com</a> and she will reply promptly.
                            </p>
                        </div>
                    </div>
                </section>

                <DrillingRequestForm />
            </main>
            <Footer />
        </>
    );
}
