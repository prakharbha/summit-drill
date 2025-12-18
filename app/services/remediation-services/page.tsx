import { getPageMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = getPageMetadata("/services/remediation-services");

const remediationServices = [
  {
    title: "Remediation Systems",
    href: "/services/remediation-systems",
    image: "/images/remediation/systems-installation.jpg",
    subtitle: "Deep experience plus multi-regional delivery!",
    description: "Summit delivers end-to-end remediation system expertise from vapor mitigation and liner installations to complex treatment systems, O&M programs, and temporary water-handling solutions. Explore how our experienced multi-regional team supports safer sites, cleaner water, and more successful outcomes.",
    ctaText: "Our Remediation Systems Capabilities"
  },
  {
    title: "In-Situ Remediation",
    href: "/services/in-situ-remediation",
    image: "/images/remediation/in-situ.jpg",
    subtitle: "When immobilizing contaminants is the right approach!",
    description: "From ISS soil mixing to auger-based single-column stabilization, Summit applies field-proven in-situ technologies to restore soil integrity and control contaminant mobility. See how our specialized crews and equipment elevate project performance.",
    ctaText: "Our In-Situ Remediation Capabilities"
  },
  {
    title: "Injection Remediation",
    href: "/services/injection-remediation",
    image: "/images/remediation/injection.jpg",
    subtitle: "Need a more targeted approach for your injection project?",
    description: "Summit's injection services offer precise, controlled delivery of reagents into the subsurface through single and multi-port systems tailored to site-specific conditions. Learn how our approach maximizes contact, minimizes rebound, and improves remediation efficiency.",
    ctaText: "Our Injection Remediation Capabilities"
  },
  {
    title: "Barrier Walls",
    href: "/services/barrier-walls",
    image: "/images/remediation/barrier-walls.jpg",
    subtitle: "Strengthen site protection and long-term remediation goals!",
    description: "Summit's hydraulic cut-off and reactive and permeable barrier walls provide essential control of groundwater flow and treatment, preventing off-site migration and safeguarding adjacent properties. Learn how our advanced installation techniques enhance containment treatment across diverse site conditions.",
    ctaText: "Our Barrier Wall Capabilities"
  },
  {
    title: "Earthwork",
    href: "/services/earthwork-remediation",
    image: "/images/remediation/earthwork.jpg",
    subtitle: "Our full suite of earthwork and ex-situ remediation services is getting very deep!",
    description: "By combining heavy civil earthwork with specialized ex-situ remediation practices—such as soil excavation, trenching, stabilization, and engineered capping, Summit is making a major contribution to transforming contaminated sites into stable, compliant, and future-ready assets. Discover the depth of our remediation expertise.",
    ctaText: "Our Earthwork Capabilities"
  },
  {
    title: "Drilling Support",
    href: "/services/drilling-support",
    image: "/images/remediation/drilling-support.jpg",
    subtitle: "Creating stable working platforms that keep our drillers drilling and your projects advancing!",
    description: "From access road construction to heavy-duty matting systems, Summit delivers the infrastructure that enables drilling crews to work safely in challenging conditions. See how our support services reduce downtime and improve site productivity.",
    ctaText: "Our Drilling Support Capabilities"
  },
];

const specialtyApplications = [
  "Vapor Mitigation Systems",
  "Treatment Systems Installations",
  "Bucket/Paddle Soil Mixing",
  "Single Column Mixing",
  "Multi-Point Injection Systems",
  "Impermeable Barriers",
  "Ecological Restoration",
  "Engineering Cap Installation",
  "Access Roads/Ramp Installations",
];

export default function RemediationServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title="Remediation Services"
          description="Powered by strategic growth and unified leadership, Summit's talented remediation teams offer comprehensive, tech-forward solutions for complex sites."
          backgroundImage="/images/remediation/hero-banner.jpg"
          ribbonText="SUMMIT SERVICES"
        />

        {/* Intro Section */}
        <section className="py-16 bg-[#B5D48C]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold italic text-[#163058]">
                  Since 2022, Summit has invested more confidently in remediation services to expand value to customers and complement its industry-leading drilling capabilities.
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg font-bold">
                  By integrating top talent and a wide range of technology, Summit has restructured the division into a successful, multi-regional capability that is enabling customers to achieve site closure more quickly and efficiently.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Keys to their success point to Summit&apos;s technology-specific leaders and their efforts to cross train and unify their remediation talent from the North to South. This has benefitted customers, especially those who require a contractor with a strong geographic reach.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Summit&apos;s remediation division has become a trusted source by environmental consultants and engineers from New England to Florida. Their ability to integrate a diverse set of services into a seamless experience has added high levels of efficiency and satisfaction for customers by reducing the number of contractors needed to accomplish large and complex scopes of work.
                </p>

                <div className="pt-4">
                  <p className="text-gray-700 leading-relaxed text-lg font-bold mb-4">
                    Need a contractor partner with a proven track record and a big project capability?
                  </p>
                  <Link
                    href="/start-a-project"
                    className="inline-block bg-[#A04020] hover:bg-[#8a361b] text-white font-bold italic text-lg px-8 py-4 rounded shadow-lg transition-transform hover:scale-105"
                  >
                    Submit an RFP &gt;&gt;
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="bg-[#94B568] p-8 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src="/images/remediation-icon.webp"
                        alt="Remediation Services"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#923d21] tracking-widest uppercase">
                    Specialty<br />Applications
                  </h3>
                  <div className="w-full h-1 bg-[#923d21] mt-4 mx-auto max-w-[200px]"></div>
                </div>
                <ul className="space-y-3 text-[#1A365D] text-lg font-medium">
                  {specialtyApplications.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-3 text-[#1A365D]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Matching Drilling Page Design */}
        <section
          className="py-20 bg-[#52755b] text-white bg-no-repeat bg-cover bg-blend-multiply"
          style={{
            backgroundImage: "url('/images/drilling-types-bg.webp')",
            backgroundPosition: "bottom center"
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
              Learn More About Summit&apos;s Remediation Services:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {remediationServices.map((service) => (
                <div key={service.title} className="flex flex-col">
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
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold tracking-[0.10em] uppercase text-white font-work-sans z-10 pl-6 pr-6 text-center leading-none">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight text-white">
                      {service.subtitle}
                    </h3>
                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                    <Button asChild size="sm" className="bg-[#7A9A70] hover:bg-sky-500 text-white font-bold px-6 shadow-md mt-2">
                      <Link href={service.href}>
                        {service.ctaText} &gt;&gt;
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Lauren DiVello Contact Footer */}
            <div className="mt-24 pt-12 border-t border-white/10 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate.
                </h3>
                <p className="text-xl md:text-2xl font-bold">
                  Reach Lauren at <span className="text-[#A5D48C]">609-238-2815</span> to discuss your project needs. Or email{' '}
                  <a href="mailto:LDivello@SummitDrilling.com" className="text-[#A5D48C] underline hover:text-white transition-colors">
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
