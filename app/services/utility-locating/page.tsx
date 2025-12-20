import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import GeophysicsSidebar from "@/components/geophysics/GeophysicsSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/utility-locating");

export default function UtilityLocatingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/geophysics/utility-locating-banner.jpg"
          backgroundAlt="Summit Utility Locating Services"
          ribbonText="SUMMIT SERVICES"
          title="Utility Locating"
          description="Utility locating is a critical process that helps prevent accidents, protect the environment, and ensure the efficient and safe execution of construction, excavation, drilling and maintenance activities."
        />

        {/* Main Content Section */}
        <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Summit&apos;s geophysical professionals utilize a wide variety of technology
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Radio Frequency (RF) line locator</li>
                    <li>Fisher TW-6 electromagnetic instrument</li>
                    <li>Ground Penetrating Radar (GPR)</li>
                    <li>Duct Rodder (fiberglass wrapped tracing line)</li>
                    <li>EM61, EM31 electromagnetic instruments</li>
                    <li>Sub-meter GPS</li>
                    <li>Drone aerial to memorialize the mark outs</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Utility locating or detection, is the process of identifying and marking the location of buried utility lines and infrastructure beneath the ground. These utilities can include various types of pipes, cables, and conduits that provide essential services such as water supply, sewage, electricity, telecommunications, natural gas, and more. The primary purpose of utility locating is to prevent damage to these underground utilities during construction, excavation, or drilling activities.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Key Applications
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li><strong>Summit Private Utility Location:</strong> We address everything that is not covered by a one-call such as, water from valve to meter, sanitary sewer from cleanout to building, storm sewers, privately run electric lines, floor drains, oil/water separators and septic.</li>
                    <li><strong>Preferrable Pathway Evaluations:</strong> This involves the identification of utility corridors typically at the entrance of a building. Our services help customers target vapor intrusion investigations.</li>
                    <li><strong>Gas Stations</strong></li>
                    <li><strong>One Call Mark Out Confirmations:</strong> As many consultants and engineers know, One Calls are not always accurate as utility companies may not clip on to the utility and frequently use plans that are not as comprehensive compared to &quot;as-builts&quot;.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Tech/Instrumentation/Tools
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Summit&apos;s geophysical professionals utilize a wide variety of technology, including:
                  </p>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Radio Frequency (RF) line locator</li>
                    <li>Fisher TW-6 electromagnetic instrument</li>
                    <li>Ground Penetrating Radar (GPR)</li>
                    <li>Duct Rodder (fiberglass wrapped tracing line)</li>
                    <li>EM61, EM31 electromagnetic instruments</li>
                    <li>Sub-meter GPS</li>
                    <li>Drone aerial to memorialize the mark outs</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Utility locating is a critical process that helps prevent accidents, protect the environment, and ensure the efficient and safe execution of construction, excavation, drilling and maintenance activities.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <GeophysicsSidebar currentPage="utility-locating" />
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
