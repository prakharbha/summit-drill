import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingSidebar from "@/components/drilling/DrillingSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/direct-push");

export default function DirectPushPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/services/drilling/dpt-banner.jpg"
                    backgroundAlt="Summit Direct Push Drilling"
                    ribbonText="SUMMIT SERVICES"
                    title="Direct Push Drilling"
                    description="Summit offers a variety of direct push drilling equipment including truck mounted and all-terrain units for collecting high-quality samples with minimal site impact."
                />

                {/* Main Content Section */}
                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    These probes allow for the collection of soil, groundwater and vapor samples with minimal impact to the site. Summit&apos;s direct push fleet can manage any site access issues and the most diverse subsurface geological conditions.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    For example, many of Summit&apos;s direct push drilling rigs convert to hollow stem augers which enable well installation where needed. Compared to conventional drilling, direct push drilling is less labor intensive, offers quicker setup time, and generates less drill cuttings. Direct push tooling is also easier to decontaminate and maintain.
                                </p>
                            </div>

                            {/* Sidebar - 1/3 width */}
                            <div className="lg:col-span-1">
                                <DrillingSidebar currentPage="direct-push" />
                            </div>
                        </div>

                        {/* Lauren DiVello Section - Full Width */}
                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                Experience Direct Push Drilling with Summit
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
