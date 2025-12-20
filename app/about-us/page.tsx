import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/about-us");

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage="/images/about/hero-banner.jpg"
          backgroundAlt="Summit Drilling About Us"
          ribbonText="ABOUT US"
          title="Our Vision and Purpose"
          description="Summit's Vision is to serve as a trusted contractor to environmental professionals providing the high-quality subsurface data, drilling expertise, and remediation system support that enable consultants to design and implement effective cleanup strategies."
        />

        {/* Main Content Section */}
        <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-10">

                {/* Vision and Purpose */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Through this partnership, we help reduce risk, improve site outcomes, contribute to healthier communities and restored natural environments.
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Our Mission</strong> is built around delivering an exceptional customer experience, one grounded in safety, responsiveness, technical excellence, and genuine care. Every day, we commit ourselves to protecting the health and safety of our employees, clients, and the individuals living in or around impacted properties. This responsibility shapes every decision, procedure, and project we undertake.
                  </p>
                </div>

                {/* Environmental Responsibility */}
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Environmental Responsibility and Social Impact
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Our work</strong> extends beyond our services—it contributes to quality of life. Environmental restoration creates safer groundwater, cleaner soils, and revitalized properties that enable healthier, more sustainable communities. Summit embraces this impact as part of our social and environmental responsibility.
                  </p>
                </div>

                {/* Integrated Capabilities */}
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Integrated Capabilities, Multi-Regional Reach
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    As Summit has grown, so has the breadth and integration of our service capabilities. What began as a specialty drilling operation has evolved into a unified environmental services provider offering geophysical investigation, down-hole analytics, environmental and geotechnical drilling, treatment system installation, O&M programs, and full-scale remediation system support.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Serving clients from Maine to Florida,</strong> Summit delivers continuity across the entire project lifecycle. This reduces cost, accelerates schedules, simplifies communication, and enables faster site closure. The benefit is clear: a single contractor equipped to manage a broader scope of complex requirements, safely and efficiently.
                  </p>
                </div>

                {/* Moving Forward Together */}
                <div>
                  <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                    Moving Forward Together
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Summit exists to make a meaningful difference for our customers, our people, the environment, and for communities across an expanding geographic footprint. If you are looking for a partner with integrated capabilities, multi-regional reach, and a team that is approachable, appreciative, and eager to serve, we invite you to connect.
                  </p>
                  <p className="text-[#163058] leading-[1.75rem] text-[1.5rem] font-bold italic">
                    Together, we can explore new opportunities, deliver exceptional results, and advance the greater good through smarter, safer, more effective environmental solutions.
                  </p>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <div className="bg-[#8bad7d] p-8 sticky top-8 font-work-sans">
                  {/* Mountain Logo and Header */}
                  <div className="mb-6 pb-6 border-b-2 border-[#923d21]">
                    <Image
                      src="/images/mountain.webp"
                      alt="Summit Mountain"
                      width={200}
                      height={100}
                      className="w-1/2 h-auto object-contain mb-2"
                      style={{ filter: 'sepia(100%) saturate(300%) brightness(70%) hue-rotate(-10deg)' }}
                    />
                    <span className="block text-[#923d21] font-bold text-[1.5rem] tracking-[0.25rem] uppercase">
                      Summit&apos;s History
                    </span>
                  </div>

                  {/* Italic Title */}
                  <h3 className="text-[#923d21] text-[2rem] font-bold italic mb-6 leading-tight">
                    A Legacy Built on Hard Work and Integrity
                  </h3>

                  {/* Historical Image */}
                  <div className="mb-6">
                    <Image
                      src="/images/about/summit-history.jpg"
                      alt="Summit Drilling Historical Photo"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* History Text */}
                  <p className="text-[#923d21] leading-relaxed text-lg">
                    Summit&apos;s story spans nearly seven decades and honors the pioneering work of Robert Kreilick, Sr. and Donald Grahamer, who drilled test borings throughout the Northeast beginning in the 1950s. From the establishment of Summit Well &amp; Pump Co. in 1969 to the founding of Summit Drilling Company, Inc. in 1986, the company steadily built its reputation for quality and reliability. Over the years, strategic acquisitions and the addition of key talent have transformed Summit into a multi-regional industry leader.{" "}
                    <strong className="text-[1.5rem] leading-[1.75rem]">Although our fleet, equipment, and service lines have evolved, the values that shaped Summit&apos;s early days continue to guide us.</strong>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
