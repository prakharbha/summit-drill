import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import GeophysicsSidebar from "@/components/geophysics/GeophysicsSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/borehole-geophysics");

export default function BoreholeGeophysicsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/geophysics/borehole-geophysics.webp"
          backgroundAlt="Summit Borehole Geophysics Services"
          ribbonText="SUMMIT SERVICES"
          title="Borehole Geophysics"
          description="Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications."
        />

        {/* Main Content Section */}
        <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Summit&apos;s geophysical professionals utilize a wide variety of technology, including:
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Optical Televiewer</li>
                    <li>Acoustic Televiewer</li>
                    <li>Caliper</li>
                    <li>Temperature/Fluid Resistivity</li>
                    <li>GR/SP/SPR</li>
                    <li>Heat Pulse Flowmeter</li>
                    <li>Full Wave Form Sonic</li>
                    <li>Well CAD</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Borehole Geophysics, also known as well logging or downhole geophysics, is a subsurface exploration technique used to obtain geophysical data from within boreholes or wells drilled. It involves the use of specialized instruments and sensors to collect data on geological, hydrogeological, and geophysical properties at various depths below the surface.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Key Applications
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This technology is conducted to gather information on the geologic and hydrogeologic interpretation in open boreholes. It is used to identify specific structural characteristics of the borehole (fractures, fracture zones, voids, bedding planes, etc.), lithology, water bearing zones, and vertical flow conditions to target for well construction purposes. It can also be used to identify areas of contaminant presence and its migration.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Borehole Geophysics
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Summit&apos;s geophysical professionals utilize a wide variety of technology, including:
                  </p>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-3">
                    <li><strong>Optical Televiewer</strong> – 360-degree visual color presentation of borehole conditions that include geologic structures (fractures, bedding planes, voids, etc.), lithology (color changes), and stratigraphic conditions. The strike and dip of individual fractures and bedding can be determined, and polar projection plots showing bulk strike and dip orientations over specified intervals can be generated. Borehole deviation logs can be generated from the data, as well. Can be used in air or water-filled boreholes.</li>
                    <li><strong>Acoustic Televiewer</strong> – Similar to the optical televiewer, however an acoustic signal is used as an energy source. Also used to locate fractures, bedding planes, etc., and the data can be used to determine strike and dip of these features. Polar projection plots can also be generated. Can be used in boreholes where some suspended sediment is present. Can be used in water-filled boreholes, but not air-filled boreholes.</li>
                    <li><strong>Caliper</strong> – provides a continuous record of borehole size versus depth in the borehole. Is often used to locate fractures or anomalous borehole wall conditions.</li>
                    <li><strong>Temperature/Fluid Resistivity</strong> – Fluid resistivity – delineating potential water-bearing zones. Changes in the slope of the responses may indicate a water entry, or water exit points in the borehole. Temperature – measures changes in water temperature which can also be correlated to water bearing zones. Again, changes in slope indicate potential water bearing zones.</li>
                    <li><strong>GR/SP/SPR</strong>
                      <ul className="mt-2 ml-4 space-y-2">
                        <li><strong>SP</strong> – Spontaneous Potential – measures natural difference between borehole and surface, most useful to determine electrochemical potential. Magnitude of deflection used to detect permeable zones, estimate clay content, and water salinity. Good as a lithology indicator.</li>
                        <li><strong>SPR</strong> – single point resistance – characterizes rock or sediment in the borehole by measuring the electrical resistance of the formations. It is a good lithologic indicator.</li>
                        <li><strong>GR</strong> – Natural Gamma Ray – good lithologic indicator. The data can identify and quantify the amounts of specific isotopes (potassium, thorium, and uranium) in boreholes. Used as a lithologic indicator to differentiate between fine-grained materials (e.g., clays and shales with high potassium content, etc.), and coarse-grained materials (e.g., sands and sandstones with a low potassium content, etc.). Can be used to infer depositional environments, and to correlate structural and stratigraphic features from borehole to borehole.</li>
                      </ul>
                    </li>
                    <li><strong>Heat Pulse Flowmeter</strong> – measures minute changes in vertical flow at specific depths. The data can indicate the presence of water-producing zones and water-thieving zones.</li>
                    <li><strong>Full Wave Form Sonic</strong> – Used to determine the integrity of grout in the annulus behind casing and to locate fracture zones and weathered zones in an open borehole. The data can be processed to generate acoustic porosity curves, as well.</li>
                    <li><strong>Well CAD software</strong> for processing and analysis of logging data.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications. It plays a significant role in environmental assessments and engineering projects, providing essential information for approach development and risk mitigation in subsurface activities.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <GeophysicsSidebar currentPage="borehole-geophysics" />
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
