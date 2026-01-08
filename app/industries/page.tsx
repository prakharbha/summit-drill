import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import Image from "next/image";
import Link from "next/link";
import { getAllIndustries, getIndustryImageUrl, getPageBySlug, getPageImageUrl, SanityIndustry } from "@/lib/sanity-queries";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("industries");
  if (!page) return {};

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.heroDescription,
  };
}

export default async function IndustriesPage() {
  const [page, industries] = await Promise.all([
    getPageBySlug("industries"),
    getAllIndustries()
  ]);

  if (!page) {
    notFound();
  }

  const heroImage = getPageImageUrl(page);

  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title={page.title}
          description={page.heroDescription}
          backgroundImage={heroImage}
          ribbonText={page.ribbonText}
          dividerColor={page.dividerColor}
        />

        {/* Industries Grid */}
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
              {industries.map((industry: SanityIndustry) => (
                <Link
                  key={industry._id}
                  href={`/industries/${industry.slug.current}`}
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
                        {industry.title.replace(' Services', '').replace(' Drilling', '').replace(' Protection', '')}
                      </span>
                    </div>
                  </div>

                  {/* Image Card */}
                  <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                    <Image
                      src={getIndustryImageUrl(industry)}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized={getIndustryImageUrl(industry).includes('cdn.sanity.io')}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">
                      {industry.subtitle || industry.title}
                    </h3>
                    {industry.excerpt && (
                      <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                        {industry.excerpt}
                      </p>
                    )}
                    <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold px-6 py-2 text-sm shadow-md mt-2 w-fit rounded transition-colors">
                      {industry.ctaText || 'Learn More'} &gt;&gt;
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
