import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/earthwork-remediation");

export default function EarthworkRemediationPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/remediation/earthwork-banner.webp"
                    backgroundAlt="Summit Earthwork Services"
                    ribbonText="SUMMIT SERVICES"
                    title="Earthwork"
                    description="Summit provides complete earthwork and ex-situ remediation services, from excavation to ecological restoration, designed to remove contaminants, rebuild site stability, and prepare properties for safe, future use."
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Our full suite of earthwork and ex-situ remediation services is getting deep!
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Our crews manage soil removal, testing, transportation, disposal, and site reconstruction with precision. We integrate civil, environmental, and geotechnical practices into one seamless delivery model.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Ex-situ remediation projects require heavy civil capability combined with environmental expertise—an intersection where Summit excels. Our teams understand how to manage contaminated materials safely, comply with transport and disposal regulations, and reconstruct site features to support long-term resilience.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        With multi-regional delivery and deep experience in challenging field conditions, Summit gives customers confidence that soil removal, stabilization, and site restoration will be executed efficiently and in full compliance. This reduces risk, improves project predictability, and supports redevelopment goals.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Summit earthwork services include:
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Excavation, Transportation &amp; Disposal of Impacted Soils</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Summit performs targeted or large-scale excavations, manages transportation logistics, and coordinates disposal at approved facilities, ensuring safe handling and regulatory compliance.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Test-Pitting/Trenching</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                We execute exploratory excavations to help consultants define subsurface conditions, locate utilities, characterize contamination, and validate conceptual site models.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Ecological Restoration/Shoreline Stabilization</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Summit restores natural environments through grading, planting, erosion-control installation, and shoreline reinforcement, supporting habitat recovery and long-term site resilience.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Engineering Cap Installation (Vegetative/Impervious/Other)</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                We install soil, geomembrane, vegetative, and composite cap systems to isolate impacted materials and meet regulatory closure requirements.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Ex-Situ Soil Mixing</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                For soils requiring off-line treatment, Summit uses mechanical mixing to homogenize materials with reagents that stabilize contaminants or adjust geotechnical properties.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit transforms contaminated sites into compliant, stable, and redevelopment-ready spaces. Connect with our team to plan your earthwork or ex-situ remediation project.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <RemediationSidebar currentPage="earthwork-remediation" />
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
