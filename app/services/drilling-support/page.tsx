import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/drilling-support");

export default function DrillingSupportPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/remediation/drilling-support-banner.jpg"
                    backgroundAlt="Summit Drilling Support Services"
                    ribbonText="SUMMIT SERVICES"
                    title="Drilling Support"
                    description="Summit provides essential drilling support services, including site access construction, road and ramp installation, and large matting systems, to ensure safe, efficient, and reliable field operations."
                />

                <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Creating access and stable working platforms that keep our drillers drilling and your projects advancing!
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        By creating access, stabilizing ground conditions, and improving mobility, our support services help drilling crews work more productively in challenging terrains and environmentally sensitive areas.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Safe access is fundamental to successful drilling and remediation projects. Summit&apos;s ability to rapidly construct stable roads, entrances, ramps, and heavy-duty matting platforms minimizes downtime, protects equipment, and reduces environmental disturbance.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Our teams understand the unique access demands of drilling operations and tailor solutions to site constraints, weather conditions, and regulatory objectives. Customers gain a partner who ensures that drilling operations start smoothly, stay on schedule, and maintain compliance from the moment equipment arrives.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Summit drilling support services include:
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Road/Construction Entrance/Ramp Installation</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Summit builds stabilized access points, temporary roads, and engineered ramps that allow equipment and personnel to move safely and efficiently across any job site.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Large Matting Installation</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                We deploy durable, load-bearing mats to create stable work surfaces in soft, uneven, or environmentally sensitive areas to support rigs, vehicles, and staging operations.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit delivers access solutions that keep drilling operations safe, productive, and compliant. Reach out to our team to plan your site access or drilling support needs.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <RemediationSidebar currentPage="drilling-support" />
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
