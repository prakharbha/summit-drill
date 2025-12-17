import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import GeophysicsSidebar from "@/components/geophysics/GeophysicsSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/ust-septic-detection");

export default function USTSepticDetectionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/geophysics/ust-septic-detection.jpg"
          backgroundAlt="Summit UST & Septic Detection Services"
          ribbonText="SUMMIT SERVICES"
          title="UST & Septic Detection"
          description="The importance of locating USTs or detecting septic systems lies in the prevention of environmental contamination, protection of human health and safety, adherence to regulators, and potential cost savings."
        />

        {/* Main Content Section */}
        <section className="py-16 bg-[#B5D48C] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Summit&apos;s geophysical professionals utilize a wide variety of technology
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>EM61</li>
                    <li>EM31</li>
                    <li>Fisher TW-6 electromagnetic instrument</li>
                    <li>Ground Penetrating Radar (GPR)</li>
                    <li>Radio Frequency (RF) line locator</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Locating underground storage tanks (USTs) and detecting septic systems is of significant importance due to the potential risks and benefits associated with their identification, management, or removal. There are several reasons to consider these services, including: environmental protection, environmental remediation, health and safety, regulatory compliance, and property transaction and development.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Key Applications
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Full property sweeps for orphaned/unknown USTs</li>
                    <li>Known UST footprint and orientation delineation</li>
                    <li>Septic structure detection (sub-grade tanks, distribution boxes, leach fields, laterals, and other piping, etc.)</li>
                    <li>Property transactions and/or unknown source evaluations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Tech/Instrumentation/Tools
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>EM61</li>
                    <li>EM31</li>
                    <li>Fisher TW-6 electromagnetic instrument</li>
                    <li>Ground Penetrating Radar (GPR)</li>
                    <li>Radio Frequency (RF) line locator</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The importance of locating USTs or detecting septic systems lies in the prevention of environmental contamination, protection of human health and safety, adherence to regulators, and potential cost savings. It is a proactive measure that not only mitigates risks but also facilitates responsible property management and development.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <GeophysicsSidebar currentPage="ust-septic-detection" />
              </div>
            </div>

            {/* Lauren DiVello Section - Full Width */}
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
