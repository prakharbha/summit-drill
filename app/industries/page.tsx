import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";

export const metadata = getPageMetadata("/industries");

const industries = [
  {
    title: "Environmental",
    href: "/industries/environmental",
    image: "/images/industries/environmental-banner.webp",
    subtitle: "Environmental – Partnering with environmental professionals for over 40 years!",
    description: "Consultants in need of environmental contracting services recognize that Summit is the go-to source for subsurface investigations and remediation services.",
    ctaText: "Our Environmental Expertise"
  },
  {
    title: "Geotechnical",
    href: "/industries/geotechnical",
    image: "/images/industries/geotechnical-banner.webp",
    subtitle: "Geotechnical – We help you strengthen every project from the ground up!",
    description: "From large construction projects to solar carports, Summit's geotechnical services offer talented and licensed drillers with decades of experience.",
    ctaText: "Our Geotechnical Expertise"
  },
  {
    title: "Cathodic",
    href: "/industries/cathodic",
    image: "/images/industries/cathodic-banner.webp",
    subtitle: "Cathodic – Drilling that helps protect what matters most!",
    description: "Summit delivers precise cathodic protection boreholes that safeguard pipelines, tanks, and other buried infrastructure.",
    ctaText: "Our Cathodic Expertise"
  },
  {
    title: "Aggregate",
    href: "/industries/aggregate",
    image: "/images/industries/aggregate-banner.webp",
    subtitle: "Aggregate – Core insights that drive smarter, more profitable excavations!",
    description: "From coring accuracy to equipment uptime, Summit provides the data and daily production reliability quarry owners count on.",
    ctaText: "Our Aggregate Expertise"
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title="Industries Served"
          description="Summit serves diverse industries with specialized drilling, geophysics, and remediation solutions. Our multi-regional reach and technical expertise make us the trusted partner for environmental, geotechnical, cathodic, and aggregate projects."
          backgroundImage="/images/industries/environmental-banner.webp"
          ribbonText="SUMMIT DRILLING"
          dividerColor="#377d7e"
        />

        {/* Industries Grid - Matching Geophysical Services Design */}
        <section
          className="py-20 bg-[#377d7e] text-white bg-no-repeat bg-cover bg-blend-multiply"
          style={{
            backgroundImage: "url('/images/drilling-types-bg.webp')",
            backgroundPosition: "bottom center"
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
              Explore Our Industry Expertise:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
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
                        {industry.title}
                      </span>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">
                      {industry.subtitle}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                      {industry.description}
                    </p>
                    <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold px-6 py-2 text-sm shadow-md mt-2 w-fit rounded transition-colors">
                      {industry.ctaText} &gt;&gt;
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
                  Reach Lauren at <a href="tel:609-238-2815" className="text-sky-300 hover:text-white transition-colors">609-238-2815</a> to discuss your project needs. Or email{' '}
                  <a href="mailto:LDivello@SummitDrilling.com" className="text-sky-300 underline hover:text-white transition-colors">
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
