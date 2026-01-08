import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getPageBySlug, getPageImageUrl, getSidebarImageUrl } from "@/lib/sanity-queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("health-safety");
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.heroDescription,
  };
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold italic text-[#163058] mb-4">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed text-lg mb-4">{children}</p>
    ),
  },
};

export default async function HealthSafetyPage() {
  const page = await getPageBySlug("health-safety");

  if (!page) {
    notFound();
  }

  const heroImage = getPageImageUrl(page);
  const sidebarImage = getSidebarImageUrl(page);

  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          backgroundImage={heroImage}
          backgroundAlt={page.title}
          ribbonText={page.ribbonText || "SUMMIT"}
          title={page.title}
          description={page.heroDescription || ""}
        />

        {/* Main Content Section */}
        <section className="py-16 pb-24 bg-[#a4c5c5] font-work-sans font-normal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2 space-y-2">
                {page.content && <PortableText value={page.content} components={components} />}
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <div className="bg-[#78a8a8] p-8 sticky top-8 font-work-sans">
                  {/* Mountain Logo and Header */}
                  <div className="mb-6 pb-6 border-b-2 border-[#2a1109]">
                    <Image
                      src="/images/dark-mountain.webp"
                      alt="Summit Mountain"
                      width={200}
                      height={100}
                      className="w-1/2 h-auto object-contain mb-2"
                    />
                    {page.sidebar?.title && (
                      <span className="block text-[#2a1109] font-bold text-[1.5rem] tracking-[0.25rem] uppercase">
                        {page.sidebar.title}
                      </span>
                    )}
                  </div>

                  {/* Training List from Sanity */}
                  {page.sidebar?.listItems && (
                    <ul className="space-y-2 text-[#1A365D] text-base mb-8">
                      {page.sidebar.listItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-[#2a1109] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sidebar Image if exists */}
                  {sidebarImage && (
                    <div className="mb-6">
                      <Image
                        src={sidebarImage}
                        alt="Sidebar Image"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {/* Practices Section - Hardcoded for now as it wasn't in the initial seed/schema plan for multiple lists */}
                  <div className="pt-6 border-t-2 border-[#2a1109]">
                    <span className="block text-[#2a1109] font-bold text-[1.25rem] tracking-[0.15rem] uppercase mb-4">
                      Safety Practices & Field Protocols
                    </span>
                    <ul className="space-y-2 text-[#1A365D] text-base">
                      {[
                        "Onsite Safety Reviews & Audits",
                        "Daily Rig Checklists",
                        "Weekly & Quarterly Safety Meetings",
                        "Customer Safety Plan Review",
                        "Summit Safety Plan Review",
                        "Task-Specific Documentation Review",
                        "Tailgate Meetings",
                        "Utility Mark-Out Investigations",
                        "Medical Surveillance & Drug/Alcohol Screening",
                        "Vehicle & Rig Safety Inspections",
                        "DOT Emissions & Roadway Compliance",
                        "Emergency Stops, Back-Up Alarms & On-Rig Equipment"
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="mr-2 text-[#2a1109] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
