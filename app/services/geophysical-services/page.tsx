import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = getPageMetadata("/services/geophysical-services");

const geophysicsServices = [
  {
    title: "Utility Locating",
    href: "/services/utility-locating",
    image: "/images/geophysics/utility-locating.webp",
    subtitle: "Utility Locating – Prevent accidents and protect critical infrastructure!",
    description: "Utility locating is a critical process that helps prevent accidents, protect the environment, and ensure the efficient and safe execution of construction, excavation, drilling and maintenance activities.",
    ctaText: "Our Utility Locating Capabilities"
  },
  {
    title: "UST & Septic Detection",
    href: "/services/ust-septic-detection",
    image: "/images/geophysics/ust-septic-detection.webp",
    subtitle: "UST & Septic Detection – Environmental protection starts underground!",
    description: "The importance of locating USTs or detecting septic systems lies in the prevention of environmental contamination, protection of human health and safety, adherence to regulators, and potential cost savings.",
    ctaText: "Our UST & Septic Detection Services"
  },
  {
    title: "Borehole Geophysics",
    href: "/services/borehole-geophysics",
    image: "/images/geophysics/borehole-geophysics.webp",
    subtitle: "Borehole Geophysics – Characterize subsurface conditions with precision!",
    description: "Borehole geophysics is a valuable technique for characterizing subsurface conditions and obtaining data for a variety of geological, hydrogeological, and environmental applications.",
    ctaText: "Our Borehole Geophysics Capabilities"
  },
  {
    title: "Electrical Resistivity",
    href: "/services/electrical-resistivity",
    image: "/images/geophysics/electrical-resistivity.webp",
    subtitle: "Electrical Resistivity – Map the subsurface with electrical measurements!",
    description: "Electrical conductivity and resistivity measurements provide valuable information about the subsurface properties of materials, helping professionals make informed decisions.",
    ctaText: "Our Electrical Resistivity Services"
  },
  {
    title: "Seismic Refraction",
    href: "/services/seismic-refraction",
    image: "/images/geophysics/seismic-refraction.webp",
    subtitle: "Seismic Refraction – Study subsurface properties with seismic waves!",
    description: "Seismic Refraction is a valuable geophysical technique used to study subsurface properties and provide insights into the geological and geotechnical characteristics of an area.",
    ctaText: "Our Seismic Refraction Capabilities"
  },
];

export default function GeophysicalServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title="Geophysical Services"
          description="Summit's Geophysical Services and growing geophysics division provide a full array of real-time geophysical services to the environmental, engineering, and construction industries."
          backgroundImage="/images/geophysics/utility-locating-banner.webp"
          ribbonText="SUMMIT SERVICES"
        />

        {/* Intro Section */}
        <section className="py-16 bg-[#a4c5c5]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                Our multi-faceted approach includes:
              </h2>
              <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6">
                <li>Ground Penetrating Radar</li>
                <li>Radio Frequency Line Locating</li>
                <li>Electromagnetic Scanning</li>
                <li>Resistivity Profiling</li>
              </ul>

              <p className="text-gray-700 leading-relaxed text-lg">
                Our combination of equipment and experienced geophysicists enable us to detect private utilities, underground storage tanks (tank sweeps), drums, septic structures, borehole bedrock fractures, excavations, rebar and more.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Summit&apos;s geophysical services are supported by one of the industry&apos;s largest teams of full-time professional geologists and highly experienced geophysicists with multiple crews dispatched daily. Each crew is equipped with the latest in geophysical technology, including ground penetrating radar, electromagnetic scanning, radio frequency line locating equipment, and high-tech drones.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Our combination of equipment and experience is unequaled. Customers count on us for a wide range of services from near-surface infrastructure detection to precise downhole geophysics and logging. Summit is a trusted source for pre-drilling or pre-excavation clearance, private utilities, underground storage tanks (tank sweeps), drums, septic structures, rebar, landfill and buried waste delineation, karst terrain and bedrock mapping, and electrical resistivity profiling. Our multi-faceted geophysics division provides a full array of real-time geophysical services to the environmental, engineering, and construction industries.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg font-bold italic">
                For more information on our multi-faceted services approach, email Lauren DiVello at{" "}
                <a href="mailto:LDivello@summitdrilling.com" className="text-[#163058] underline hover:text-[#A04020]">
                  LDivello@summitdrilling.com
                </a>
                . You can also use our convenient Start-a-Project form below to provide details about your scope of work and upload reference documents. A Summit representative will respond promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - Matching Drilling Page Design */}
        <section
          className="py-20 bg-[#377d7e] text-white bg-no-repeat bg-cover bg-blend-multiply"
          style={{
            backgroundImage: "url('/images/drilling-types-bg.webp')",
            backgroundPosition: "bottom center"
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
              Explore Our Geophysical Services:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {geophysicsServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Ribbon Title */}
                  <div className="relative mb-4 self-start">
                    <div className="relative inline-block">
                      <Image
                        src="/images/ribbon.webp"
                        alt="Ribbon"
                        width={260}
                        height={55}
                        className="object-contain"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold italic tracking-[0.10em] text-white font-work-sans z-10 pl-6 pr-6 text-center leading-none">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">
                      {service.subtitle}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                    <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold px-6 py-2 text-sm shadow-md mt-2 w-fit rounded transition-colors">
                      {service.ctaText} &gt;&gt;
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Lauren DiVello Contact Footer */}
            <div className="mt-24 pt-12 border-t border-white/10 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate.
                </h3>
                <p className="text-xl md:text-2xl font-bold">
                  Reach Lauren at <span className="text-[#377d7e]">609-238-2815</span> to discuss your project needs. Or email{' '}
                  <a href="mailto:LDivello@SummitDrilling.com" className="text-[#377d7e] underline hover:text-white transition-colors">
                    LDivello@SummitDrilling.com
                  </a>{' '}
                  and she will reply promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <DrillingRequestForm />
      </main>
      <Footer />
    </>
  );
}
