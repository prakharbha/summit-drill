import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import IndustriesSidebar from "@/components/industries/IndustriesSidebar";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { getIndustryBySlug, getAllIndustrySlugs, getIndustryImageUrl } from "@/lib/sanity-queries";
import { PortableText } from "@/components/sanity/PortableText";

// Generate static params for all industries
export async function generateStaticParams() {
    const slugs = await getAllIndustrySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const industry = await getIndustryBySlug(resolvedParams.slug);

    if (!industry) {
        return {
            title: "Industry Not Found - Summit Drilling",
        };
    }

    return {
        title: industry.metaTitle || `${industry.title} - Summit Drilling`,
        description: industry.metaDescription || industry.excerpt,
    };
}

export default async function IndustryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const industry = await getIndustryBySlug(resolvedParams.slug);

    if (!industry) {
        notFound();
    }

    const imageUrl = getIndustryImageUrl(industry);

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    backgroundImage={imageUrl}
                    backgroundAlt={industry.title}
                    ribbonText={industry.ribbonText || "INDUSTRIES SERVED"}
                    title={industry.title}
                    description={industry.heroDescription}
                />

                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                {industry.content && industry.content.length > 0 && (
                                    <div className="text-gray-700 leading-relaxed text-lg space-y-6">
                                        <PortableText value={industry.content} />
                                    </div>
                                )}
                            </div>

                            <div className="lg:col-span-1">
                                <IndustriesSidebar currentPage={resolvedParams.slug} />
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#163058]/20">
                            <p className="text-gray-700 leading-relaxed text-lg font-bold">
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
