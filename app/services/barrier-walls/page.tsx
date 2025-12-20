import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/barrier-walls");

export default function BarrierWallsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/remediation/barrier-walls-banner.jpg"
                    backgroundAlt="Summit Barrier Wall Installation"
                    ribbonText="SUMMIT SERVICES"
                    title="Cut-Off Barrier Walls"
                    description="Summit installs high-performance hydraulic, reactive, and impermeable barrier walls designed to control groundwater flow and isolate contaminants with precision and reliability."
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Strengthen site protection and long-term remediation goals!
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Our field teams apply proven construction methods to create subsurface containment systems that prevent migration, protect adjacent properties, and support long-term remediation strategies.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Barrier wall systems must perform flawlessly, often for decades. Summit&apos;s experience with diverse soils, groundwater conditions, and installation technologies allows us to construct dependable containment systems that stand up to regulatory demands and real-world site dynamics.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Our ability to mobilize across multiple regions with consistent quality and safety standards offers significant value to consultants seeking more predictable results and minimized project risk. With Summit, customers gain a partner skilled in both engineering requirements and the practical realities of constructing subsurface isolation systems.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Summit barrier wall services include:
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Reactive Barrier Walls</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                These systems incorporate treatment media into the subsurface, allowing groundwater to passively interact with reactive materials that neutralize, bind, or degrade contaminants as water flows through.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Impermeable Barrier Walls</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Designed to halt groundwater flow entirely, impermeable walls utilize slurry, membrane, or other low-permeability materials to create a continuous hydraulic cut-off. These solutions prevent off-site migration, contain plumes, and support long-term remediation designs.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit builds containment systems that deliver long-term groundwater control and remediation certainty. Speak with our team to discuss the best barrier wall solution for your site.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <RemediationSidebar currentPage="barrier-walls" />
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <p className="text-gray-700 leading-relaxed text-lg font-bold">
                                For more information on our multi-faceted services approach, email Lauren DiVello at <a href="mailto:LDivello@summitdrilling.com" className="text-[#163058] underline hover:text-[#A04020]">LDivello@summitdrilling.com</a>. You can also use our convenient Start-a-Project form below to provide details about your scope of work and upload reference documents. A Summit representative will respond promptly.
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
