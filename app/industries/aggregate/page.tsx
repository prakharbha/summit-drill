import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import IndustriesSidebar from "@/components/industries/IndustriesSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/industries/aggregate");

export default function AggregatePage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/industries/aggregate-banner.jpg"
                    backgroundAlt="Summit Aggregate Drilling Services"
                    ribbonText="INDUSTRIES SERVED"
                    title="Aggregate Drilling Services"
                    description="Core insights that drive smarter, more profitable excavations"
                />

                <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    From coring accuracy to equipment uptime, Summit provides the data and daily production reliability quarry owners count on to assess reserves, reduce uncertainty, and confidently advance their mining plans.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    We support large quarry and test pit owners with expert coring services. Geotechnical drilling and sampling of aggregate materials such as sand, gravel, and stone determines material location and volume, two critical factors in terms of excavation planning and cost estimating.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Summit provides reliable core sampling that is used to determine the thickness of aggregate beds, as well as the amount of overburden present. Cores can be studied to determine the volume of materials for excavating. At the same time, core samples will help determine the amount of vegetation and topsoil covering the material beds.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    To ensure maximum uptime, Summit proactively maintains all equipment through their internal Fleet Maintenance and Management Division. This ensures our field crews can execute targeted amounts of core drilling per day with minimal to no disruption.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    If you need a proven team to help you with the assessment and growth of your quarry or sand pit operation, add Summit to your bid list today!
                                </p>
                            </div>

                            <div className="lg:col-span-1">
                                <IndustriesSidebar currentPage="aggregate" />
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
