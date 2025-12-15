import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingSidebar from "@/components/drilling/DrillingSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/sonic-drilling");

export default function SonicDrillingPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/services/drilling/sonic-banner.jpg"
                    backgroundAlt="Summit Sonic Drilling"
                    ribbonText="SUMMIT SERVICES"
                    title="Sonic Drilling"
                    description="Behind every successful sonic project is a Summit driller who knows exactly how to optimize the rig to the geological conditions below it. Summit provides its customers with an entire division of them."
                />

                {/* Main Content Section */}
                <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Experience matters when operating one of the industry&apos;s most powerful drilling technologies.
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit&apos;s Sonic teams have become the most trusted. An overnight success? No. Our teams represent decades of sonic use that has led to an understanding of the subtleties of these rigs. This intangible quality differentiates us from others and is why we deliver the highest number of successful outcomes. Being a &quot;Go To&quot; source for environmental, geotechnical and aggregate industry professionals is well earned.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Sonic Basics
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Sonic drilling or roto-sonic is a safe, clean and a low-impact environmental drilling technique. Roto Sonic Boreholes are drilled, cored and cased by rotating and vibrating the rod, core barrel and casing at resonant sonic frequencies. It is outstanding in its ability to provide continuous, undisturbed core samples through any geological formation – even the most-difficult-to-drill terrain.
                                    </p>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    This highly efficient drilling method results in overall project cost savings for Summit customers due to a reduction in time personnel are required to be in the field. In addition, sonic drilling generates considerably less drill spoils than auger, mud or air rotary methods, saving additional project resources.
                                </p>
                            </div>

                            {/* Sidebar - 1/3 width */}
                            <div className="lg:col-span-1">
                                <DrillingSidebar currentPage="sonic" />
                            </div>
                        </div>

                        {/* Lauren DiVello Section - Full Width */}
                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                Experience Sonic with Summit Drilling
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
