import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import GeophysicsSidebar from "@/components/geophysics/GeophysicsSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services/seismic-refraction");

export default function SeismicRefractionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/geophysics/seismic-refraction.webp"
          backgroundAlt="Summit Seismic Refraction Services"
          ribbonText="SUMMIT SERVICES"
          title="Seismic Refraction"
          description="Seismic Refraction is a valuable geophysical technique used to study subsurface properties and provide insights into the geological and geotechnical characteristics of an area."
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
                    <li>Good estimates for depths to bedrock, consolidated beds and groundwater</li>
                    <li>Determining the approximate velocities of geologic materials</li>
                    <li>Rock rippability</li>
                    <li>Detecting intrusive geologic bodies</li>
                    <li>Identifying structural features</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Seismic Refraction is a geophysical technique used to study subsurface properties of the Earth, specifically the distribution of seismic velocity within near-surface geologic layers. Seismic waves travel through the Earth at different velocities depending on the properties of the materials encountered. Generally speaking, waves travel faster through dense or ridged materials and slower through less dense or malleable material. By analyzing the refractions of these waves, geophysicists can map subsurface structures and identify potential infrastructure and underground assets.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Key Applications
                  </h2>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                    <li>Good estimates for depths to (a) bedrock (overburden thickness), (b) consolidated beds, and (c) groundwater. Good for generating 2-D profiles that show bedrock topography and lateral changes in compressional and shear wave velocity.</li>
                    <li>Determine the approximate velocities of geologic materials, which may be related to rock type, water saturation, degree of weathering, and the presence of faults, fractures, and weathered zones (low velocities)</li>
                    <li>Estimation of Poisson&apos;s Ratio for geotechnical purposes</li>
                    <li>Rock rippability (ease of mechanical excavation)</li>
                    <li>Detecting intrusive geologic bodies.</li>
                    <li>Identifying structural features.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Tech/Instrumentation/Tools
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Geometrics – Geode 24-channel seismograph with 4-Hz or 14 Hz geophones, and a 12-16-pound hammer source. SeisImager 2D and SeisImager SW processing software are used to generate 2-D compressional and shear wave velocity images of the subsurface.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Seismic Refraction is a valuable geophysical technique used to study subsurface properties and provide insights into the geological and geotechnical characteristics of an area. Its applications are diverse and include site investigations for construction to environmental assessments. By better understanding the subsurface, professionals can make more informed decisions to ensure the safety and success of their various projects.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <GeophysicsSidebar currentPage="seismic-refraction" />
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
