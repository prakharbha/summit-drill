import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import IndustriesSidebar from "@/components/industries/IndustriesSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/industries/environmental");

export default function EnvironmentalPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/industries/environmental-banner.jpg"
                    backgroundAlt="Summit Environmental Services"
                    ribbonText="INDUSTRIES SERVED"
                    title="Environmental Services"
                    description="Partnering with environmental professionals for over 40 years"
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Consultants in need of environmental contracting services recognize that Summit is the go-to source for subsurface investigations and remediation services.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    From Maine to Florida, Summit offers the industry&apos;s most comprehensive, effective and efficient geophysical, drilling and remediation services. Their dedicated, experienced environmental field talent deliver the most effective integrated solutions regardless of site conditions.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Leading environmental contracting companies, such as Summit, deliver crews that combine technical expertise and rigorous health and safety training with the practical experience needed to address virtually any environmental requirement. With a strong emphasis on project management and quality control, clients are ensured to have their needs met efficiently and cost effectively.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Summit utilizes state-of-the-art environmental technologies to support their geophysical, drilling and remediation solutions while providing industry-leading expertise to their multi-regional customers ensuring exceptional results.
                                </p>
                            </div>

                            <div className="lg:col-span-1">
                                <IndustriesSidebar currentPage="environmental" />
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
