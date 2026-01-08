import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { getPageBySlug, getPageImageUrl, getSidebarImageUrl } from "@/lib/sanity-queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("about-us");
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
    h3: ({ children }) => (
      <h3 className="text-[#163058] leading-[1.75rem] text-[1.5rem] font-bold italic mt-6">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed text-lg mb-4">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },
};

const sidebarComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[#2a1109] leading-relaxed text-lg mb-4">{children}</p>
    ),
  },
};

export default async function AboutUsPage() {
  const page = await getPageBySlug("about-us");

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
          ribbonText={page.ribbonText || "ABOUT US"}
          title={page.title}
          description={page.heroDescription || ""}
        />

        {/* Main Content Section */}
        <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
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
                    <span className="block text-[#2a1109] font-bold text-[1.5rem] tracking-[0.25rem] uppercase">
                      Summit&apos;s History
                    </span>
                  </div>

                  {/* Sidebar Title */}
                  {page.sidebar?.title && (
                    <h3 className="text-[#2a1109] text-[2rem] font-bold italic mb-6 leading-tight">
                      {page.sidebar.title}
                    </h3>
                  )}

                  {/* Sidebar Image */}
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

                  {/* Sidebar Content */}
                  {page.sidebar?.content && (
                    <PortableText value={page.sidebar.content} components={sidebarComponents} />
                  )}
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
