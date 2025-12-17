import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import IndustriesSidebar from "@/components/industries/IndustriesSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/industries/geotechnical");

export default function GeotechnicalPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/industries/geotechnical-banner.jpg"
                    backgroundAlt="Summit Geotechnical Services"
                    ribbonText="INDUSTRIES SERVED"
                    title="Geotechnical Services"
                    description="We help you strengthen every project from the ground up"
                />

                <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    From large construction projects to solar carports, Summit&apos;s geotechnical services offer talented and licensed drillers, a diverse equipment fleet of truck and track mounted rigs, and decades of project management experience in all types of geological conditions.
                                </p>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Our Geotech Services include:
                                    </h2>
                                    <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                                        <li>Standard penetration testing and soil borings</li>
                                        <li>Rock Coring NQ and HQ</li>
                                        <li>Piezometers</li>
                                        <li>Inclinometers</li>
                                        <li>Extensometers</li>
                                        <li>Vibrating wire piezometers</li>
                                        <li>Undisturbed Sampling-Shelby Tube Samples</li>
                                        <li>Vane Shear Testing</li>
                                        <li>Packer Testing</li>
                                        <li>Test Pits</li>
                                        <li>Permeability &amp; Infiltration testing</li>
                                    </ul>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Summit brings over 50 years of drilling experience to multiple industries, such as major petroleum, commercial construction, railroads, highway projects, telecommunications, and renewable energy.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    We&apos;ll contribute to your approach and provide a prompt and cost-effective proposal. Count on Summit for An Exceptional Experience.
                                </p>
                            </div>

                            <div className="lg:col-span-1">
                                <IndustriesSidebar currentPage="geotechnical" />
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <p className="text-gray-700 leading-relaxed text-lg font-bold">
                                Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate. Reach Lauren at <strong>609-238-2815</strong> to discuss your project needs. Or email{" "}
                                <a href="mailto:LDivello@summitdrilling.com" className="text-[#163058] underline hover:text-[#A04020]">
                                    LDivello@SummitDrilling.com
                                </a>{" "}
                                and she will reply promptly.
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
