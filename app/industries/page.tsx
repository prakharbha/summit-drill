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
    subtitle: "Partnering with environmental professionals for over 40 years",
    description: "Consultants in need of environmental contracting services recognize that Summit is the go-to source for subsurface investigations and remediation services."
  },
  {
    title: "Geotechnical",
    href: "/industries/geotechnical",
    image: "/images/industries/geotechnical-banner.webp",
    subtitle: "We help you strengthen every project from the ground up",
    description: "From large construction projects to solar carports, Summit's geotechnical services offer talented and licensed drillers with decades of experience."
  },
  {
    title: "Cathodic",
    href: "/industries/cathodic",
    image: "/images/industries/cathodic-banner.webp",
    subtitle: "Drilling that helps protect what matters most",
    description: "Summit delivers precise cathodic protection boreholes that safeguard pipelines, tanks, and other buried infrastructure."
  },
  {
    title: "Aggregate",
    href: "/industries/aggregate",
    image: "/images/industries/aggregate-banner.webp",
    subtitle: "Core insights that drive smarter, more profitable excavations",
    description: "From coring accuracy to equipment uptime, Summit provides the data and daily production reliability quarry owners count on."
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
        />

        {/* Industries Grid */}
        <section className="py-20 bg-[#5e745d] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Explore Our Industry Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors"
                >
                  <div className="relative h-56">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-[#a4c5c5] font-medium text-sm mb-2">{industry.subtitle}</p>
                    <p className="text-white/80 text-sm mb-4">
                      {industry.description}
                    </p>
                    <span className="text-[#a4c5c5] font-bold italic group-hover:underline">
                      Learn More &gt;&gt;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#a4c5c5]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                Partner With Summit
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate. Reach Lauren at <strong>609-238-2815</strong> to discuss your project needs. Or email{" "}
                <a href="mailto:LDivello@summitdrilling.com" className="text-[#163058] underline hover:text-[#A04020]">
                  LDivello@SummitDrilling.com
                </a>{" "}
                and she will reply promptly.
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
