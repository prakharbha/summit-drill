import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/remediation-systems");

export default function RemediationSystemsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/remediation/systems-banner.webp"
                    backgroundAlt="Summit Remediation Systems Installation"
                    ribbonText="SUMMIT SERVICES"
                    title="Remediation Systems Installation"
                    description="Summit delivers end-to-end remediation system expertise, from vapor mitigation and liner installations to complex treatment systems, O&M programs, and temporary water-handling solutions."
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Benefit from their experience and multi-regional delivery!
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        With decades of applied field experience, deep cross-trained talent, and seamless coordination across multiple regions, Summit ensures that every remediation system is installed safely, correctly, and ready to perform.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Remediation systems require precision and hands-on technical expertise, areas where Summit&apos;s integrated teams excel. Their crews have installed hundreds of systems across varied geologies and regulatory frameworks, often working alongside environmental consultants to refine treatment designs, streamline installation schedules, and anticipate field conditions before they become challenges.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Because Summit operates with multi-regional reach and consistent quality standards, customers benefit from more predictable outcomes, reduced project risk, and a single partner capable of supporting long-term system performance.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Summit remediation services include:
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Vapor Mitigation Systems and Liner Installation</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Summit installs sub-slab depressurization systems, vapor barriers, geomembrane liners, and other mitigation technologies designed to block or redirect vapor intrusion pathways. Our teams handle surface preparation, barrier placement, sealing, and system tie-ins to ensure durable protection for new or existing structures.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Treatment System Installation</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                We construct and install groundwater and soil treatment systems ranging from small modular units to large, multi-stage treatment solutions. This includes mechanical, electrical, and process piping installation; building and pad construction; equipment placement; system start-up; and integration of pumps, filtration, air stripping, carbon systems, and advanced treatment technologies.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Treatment System Operation and Maintenance (O&amp;M)</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Summit provides O&amp;M services to keep remediation systems performing reliably and in compliance with regulatory requirements. Our technicians handle routine inspections, sampling, system adjustments, media changeouts, troubleshooting, reporting, and optimization to maintain operational continuity throughout a system&apos;s lifecycle.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Temporary Treatment Systems</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                For dewatering, construction support, or short-term remediation needs, Summit deploys temporary treatment systems tailored to site flow rates, contaminant profiles, and discharge requirements. These systems can include filtration, settling, carbon, resin, or chemical treatment components, along with full support for permitted discharge and waste handling.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit provides the experience and technical depth needed to deliver reliable, compliant performance. Connect with our team to discuss your remediation system needs and begin planning your next project with confidence.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <RemediationSidebar currentPage="remediation-systems" />
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
