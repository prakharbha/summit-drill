import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import GeophysicsSidebar from "@/components/geophysics/GeophysicsSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/electrical-resistivity");

export default function ElectricalResistivityPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/geophysics/electrical-resistivity.jpg"
          backgroundAlt="Summit Electrical Resistivity Services"
          ribbonText="SUMMIT SERVICES"
          title="Electrical Resistivity"
          description="Electrical conductivity and resistivity measurements provide valuable information about the subsurface properties of materials, helping professionals make informed decisions in a wide range of applications, from environmental assessments and resource exploration to civil engineering and archeology."
        />

        {/* Main Content Section */}
        <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Summit&apos;s geophysical professionals utilize a wide variety of field applications, including:
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Identify near surface geologic and hydrogeologic features</li>
                    <li>Bedrock surface, clay layers, cavities/sinkholes/voids, karstic features, depth to groundwater, and possible contaminant presence</li>
                    <li>Property/infrastructure development</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Electrical Resistivity measures the electrical resistivity of subsurface materials. It is predominantly used for environmental and geotechnical studies to assess soil and groundwater contamination, locate buried infrastructure and study geological formations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Key Applications
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Identify near surface geologic and hydrogeologic features and existing subsurface conditions.</li>
                    <li>Bedrock surface, clay layers, cavities/sinkholes/voids, karstic features, depth to groundwater, possible contaminant presence. Cross-sectional images of the subsurface are generated to typical depths of 100 feet or more.</li>
                    <li>Property/infrastructure development, used prior to, or in conjunction with geotechnical borings.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Tech/Instrumentation/Tools
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    AGI SuperSting R8IP Earth Resistivity Meter – measures voltage drop of an induced electrical current across numerous electrodes as it travels through an electrically heterogeneous subsurface. EarthImager processing software is used to generate cross-sectional electrical resistivity images.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Electrical conductivity and resistivity measurements provide valuable information about the subsurface properties of materials, helping professionals make informed decisions in a wide range of applications, from environmental assessments and resource exploration to civil engineering and archeology. These measurements aid in understanding the physical and chemical characteristics of the Earth&apos;s subsurface and contribute to more effective problem-solving.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <GeophysicsSidebar currentPage="electrical-resistivity" />
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
