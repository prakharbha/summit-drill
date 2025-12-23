import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/injection-remediation");

export default function InjectionRemediationPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage="/images/remediation/injection.webp"
                    backgroundAlt="Summit Injection Remediation"
                    ribbonText="SUMMIT SERVICES"
                    title="Injection Remediation"
                    description="Summit's injection remediation services offer precise, controlled delivery of reagents into the subsurface through single and multi-port systems tailored to site-specific conditions."
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Need a more targeted approach for your injection project?
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit provides precise, controlled injection remediation services using single-port and multi-port systems to deliver reagents directly into the subsurface for targeted contaminant reduction.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Our field teams design and execute injection programs that optimize reagent distribution, maximize contact with contamination, and support more predictable remediation outcomes across varied geological settings.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Effective injection remediation depends on accurate delivery, subsurface awareness, and the ability to adjust injection methods in real time. Summit&apos;s cross-trained drilling and remediation specialists bring the skill, equipment knowledge, and field judgment needed to achieve consistent, verifiable results.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Our teams understand how geology, pressure, flow, and reagent chemistry interact underground—insight that directly benefits consultants seeking efficiency and confidence in reagent-based treatment designs. With Summit, customers receive a partner capable of executing injections with precision and documented performance.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                        Summit injection services include:
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Single-Port Injection Systems</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Ideal for focused treatment zones; single-port wells deliver reagents to targeted depths and intervals to address discrete contamination layers or hot spots.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#163058]">Multi-Port Injection Systems</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                Designed for broader or more complex zones, multi-port systems allow for regulated delivery across multiple elevations, improving distribution and treatment efficiency while reducing surface disruption.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Summit&apos;s injection remediation programs bring precision, adaptability and proven field performance to every site. Contact us to discuss how injection technologies can support your remediation goals.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <RemediationSidebar currentPage="injection-remediation" />
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
