import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import IndustriesSidebar from "@/components/industries/IndustriesSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/industries/cathodic");

export default function CathodicPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/industries/cathodic-banner.jpg"
                    backgroundAlt="Summit Cathodic Drilling Services"
                    ribbonText="INDUSTRIES SERVED"
                    title="Cathodic Drilling Services"
                    description="Drilling that helps protect what matters most"
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Summit delivers precise cathodic protection boreholes that safeguard pipelines, tanks, and other buried infrastructure to reduce corrosion risks, extend asset life, and help operators avoid costly failures.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    A cathodic protection system, and more specifically cathodic protection system installation, is all about protecting critical infrastructure, especially for oil or gas pipelines where premature erosion can result in serious costs and environmental impacts.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Summit understands the importance of effective and efficient cathodic protection well drilling so that protective systems can be installed that will extend the life and safety of underground infrastructure. More than experience alone, Summit&apos;s field crews are all OSHA and HAZMAT certified. We do more than check off boxes when it comes to health and safety, we&apos;ve embraced it as part of our corporate culture.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    If you need cathodic drilling, let Summit help you protect your critical infrastructure. We are experts at cathodic drilling boreholes and cathodic protection system installation.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    We&apos;ll contribute to your approach and provide a prompt and cost-effective proposal. Count on Summit for An Exceptional Experience.
                                </p>
                            </div>

                            <div className="lg:col-span-1">
                                <IndustriesSidebar currentPage="cathodic" />
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
