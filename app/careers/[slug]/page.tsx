import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import Link from "next/link";
import { getPageBySlug, getPageImageUrl } from "@/lib/sanity-queries";
import { PortableText } from "@/components/sanity/PortableText";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const page = await getPageBySlug(resolvedParams.slug);

    if (!page) {
        return {
            title: "Page Not Found - Summit Drilling",
        };
    }

    return {
        title: page.metaTitle || `${page.title} - Summit Drilling Careers`,
        description: page.metaDescription || page.heroDescription,
    };
}

export default async function CareerSubPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const page = await getPageBySlug(resolvedParams.slug);

    if (!page) {
        notFound();
    }

    const imageUrl = getPageImageUrl(page);

    return (
        <>
            <Header />
            <main className="font-sans">
                {/* HERO SECTION */}
                <PageHeroBanner
                    backgroundImage={imageUrl}
                    backgroundAlt={page.title}
                    ribbonText={page.ribbonText || "Careers"}
                    title={page.title}
                    description={page.heroDescription || ""}
                    dividerColor="#a4c5c5"
                />

                {/* Main Content Section */}
                <section className="bg-[#a4c5c5] py-16 -mt-1">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl">
                            <div className="space-y-6 text-lg text-[#1A365D] leading-relaxed font-medium">
                                <PortableText value={page.content} />

                                {/* Contact Info - Common across pages */}
                                <p className="font-bold text-xl pt-4">
                                    Have questions? Reach out to our Vice President of Human Resources, Philip Valensi at <span className="text-[#913c20]">800-242-6648</span> or email your resume to <a href="mailto:Employment@SummitDrilling.com" className="text-[#913c20] underline hover:text-[#1A365D]">Employment@SummitDrilling.com</a>
                                </p>

                                {/* Dynamic CTA based on slug */}
                                <div className="pt-4">
                                    {page.slug.current === 'positions' ? (
                                        <Link
                                            href="https://app.hoopshr.com/companies/1323178/jobs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-8 py-4 rounded shadow-lg transition-transform hover:scale-105"
                                        >
                                            SEARCH ALL JOB OPENINGS on HOOPS &gt;&gt;
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/careers/positions"
                                            className="inline-block bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-8 py-4 rounded shadow-lg transition-transform hover:scale-105"
                                        >
                                            Learn more about our current open positions &gt;&gt;
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EOE SECTION - Common across pages */}
                <section className="bg-[#1A365D] py-12 text-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold italic mb-6">Equal Opportunity Employer</h2>
                        <p className="text-lg leading-relaxed font-medium text-white/90">
                            As an equal opportunity employer, Summit Drilling is committed to fostering a diverse work environment where our team members respect one another and share a commitment to our company&apos;s values, mission, and strategies. Summit Drilling provides equal employment to all team members without regard to race, color, religion, gender, national origin, age, disability, sexual orientation, veteran, or marital status.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
