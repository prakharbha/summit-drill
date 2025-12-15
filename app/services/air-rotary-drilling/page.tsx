import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingSidebar from "@/components/drilling/DrillingSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/air-rotary-drilling");

export default function AirRotaryPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/services/drilling/air-rotary-banner.jpg"
                    backgroundAlt="Summit Air Rotary Drilling"
                    ribbonText="SUMMIT SERVICES"
                    title="Air Rotary Drilling"
                    description="High-flow air is injected through the drill string, cooling the bit, evacuating rock cuttings from the borehole and stabilizing the borehole during drilling."
                />

                {/* Main Content Section */}
                <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    The air-rotary technique is much more efficient than other rock drilling techniques (i.e., cable tool) because the high-flow air constantly cleans the bottom of the borehole, which allows for consistent contact between the drill bit and intact bedrock.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    The size of the air compressor and borehole determine the achievable depth, since the compressor must maintain an up hole velocity of approximately 3,000 feet per minute to effectively remove the drill cuttings. In bedrock formations where cuttings removal is more difficult, foam can be added to the injected air to increase the viscosity and help lift cuttings from the borehole.
                                </p>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Scenarios of Use
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Air rotary drilling is the ideal method for advancing boreholes in consolidated bedrock formations.
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar - 1/3 width */}
                            <div className="lg:col-span-1">
                                <DrillingSidebar currentPage="air-rotary" />
                            </div>
                        </div>

                        {/* Lauren DiVello Section - Full Width */}
                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                Experience Air Rotary with Summit Drilling
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate. Reach Lauren at <strong>609-238-2815</strong> to discuss your project needs. Or email <a href="mailto:LDivello@SummitDrilling.com" className="text-[#163058] underline hover:text-[#A04020]">LDivello@SummitDrilling.com</a> and she will reply promptly.
                            </p>
                        </div>
                    </div>
                </section>

                <DrillingRequestForm />
            </main>
            <Footer hasDividerAbove />
        </>
    );
}
