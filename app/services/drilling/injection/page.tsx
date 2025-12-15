import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingSidebar from "@/components/drilling/DrillingSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

export const metadata: Metadata = {
    title: "Drilling & Injection - Summit Drilling, LLC",
    description: "In-situ remediation support with custom injection solutions. From chemical oxidation to thermal remediation preparation.",
};

export default function InjectionPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/services/drilling/injection-banner.jpg"
                    backgroundAlt="Summit Drilling & Injection Services"
                    ribbonText="SUMMIT SERVICES"
                    title="Drilling & Injection"
                    description="Summit's Injection Division offers consultants enabling technology, decades of experience and expertly trained personnel."
                />

                {/* Main Content Section */}
                <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-8">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    From chemical oxidation to thermal remediation preparation and support, Summit&apos;s Injection Division supports a broad range of in-situ remediation projects.
                                </p>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Benefit from:
                                    </h2>
                                    <ul className="space-y-3 text-gray-700 text-lg">
                                        <li className="flex items-start">
                                            <span className="mr-3 text-[#163058] font-bold">•</span>
                                            A custom designed injection skid
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-3 text-[#163058] font-bold">•</span>
                                            Multiple manifolds enable you to inject multiple points simultaneously
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-3 text-[#163058] font-bold">•</span>
                                            15 years of experience injecting a full spectrum of Regenesis products
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-3 text-[#163058] font-bold">•</span>
                                            ORC, ORC-A, PlumeStop, PersulfOX, HRC, HRC-X, HRC Primer, Metals Remediation Compound (MRC), sodium permanganate, potassium permanganate, iron powders and more
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-3 text-[#163058] font-bold">•</span>
                                            Injection Division supported by our large fleet of Geoprobe and Sonic equipment
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-3 text-[#163058] font-bold">•</span>
                                            Deep experience and full range of drilling technology available to support Thermal Remediation technologies
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar - 1/3 width */}
                            <div className="lg:col-span-1">
                                <DrillingSidebar currentPage="injection" />
                            </div>
                        </div>

                        {/* Lauren DiVello Section - Full Width */}
                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                Experience Drilling & Injection with Summit
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
