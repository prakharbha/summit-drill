import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/in-situ-remediation");

export default function InSituRemediationPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/remediation/in-situ-banner.jpg"
                    backgroundAlt="Summit In-Situ Remediation"
                    ribbonText="SUMMIT SERVICES"
                    title="In-Situ Remediation"
                    description="From ISS soil mixing to auger-based single-column stabilization, Summit applies field-proven in-situ technologies to restore soil integrity and control contaminant mobility."
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        When immobilizing contaminants is the right approach!
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit delivers advanced in-situ remediation solutions that stabilize, solidify, or immobilize contaminants directly in the subsurface—reducing risk, improving safety, and supporting faster site recovery.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        With proven technologies such as ISS soil mixing and single-column auger/cutter mixing, our teams apply precise, engineered in-situ methods tailored to site conditions, contaminants, and regulatory objectives.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        In-situ remediation requires a high level of field control, equipment expertise, and the ability to adapt in real-time to subsurface conditions. Summit&apos;s crews bring decades of geotechnical and environmental experience, enabling them to execute mixing programs efficiently while maintaining strict quality assurance standards. Our multi-regional reach ensures consistent delivery across project locations, while our cross-trained personnel provide insights that improve constructability, treatment effectiveness, and cost predictability.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Customers gain the benefit of a deeply experienced partner capable of navigating technical challenges and ensuring successful outcomes in complex environments.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Summit in-situ remediation services include:
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">In-Situ Soil Solidification/Stabilization (ISS)</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Using bucket or paddle mixing techniques, Summit blends binding reagents into contaminated soils to enhance strength, reduce permeability, and immobilize contaminants. ISS creates a stabilized monolith suitable for redevelopment, capping, or future site improvements.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Single Column Mixing (SCM)/Auger/Cutter Mixing</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                SCM technologies allow precise column-based mixing of soils at depth using specialized augers or cutter-head equipment. This method delivers targeted reagent distribution and engineered structural improvements for deeper or more complex contamination zones.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit&apos;s in-situ expertise helps transform challenging subsurface conditions into stable, compliant, and redevelopment-ready environments. Contact our team to evaluate whether in-situ remediation is the right solution for your site.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <RemediationSidebar currentPage="in-situ-remediation" />
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
