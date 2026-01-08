import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import DrillingSidebar from "@/components/drilling/DrillingSidebar";
import GeophysicsSidebar from "@/components/geophysics/GeophysicsSidebar";
import RemediationSidebar from "@/components/remediation/RemediationSidebar";

import {
    getServiceBySlug,
    getAllServiceSlugs,
    getServiceImageUrl,
    getChildServices,
    SanityService
} from "@/lib/sanity-queries";

export async function generateStaticParams() {
    const slugs = await getAllServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);
    if (!service) return {};

    return {
        title: service.metaTitle || `${service.title} | Summit Drilling`,
        description: service.metaDescription || service.heroDescription,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const isParentPage = !service.parentService;
    const childServices = isParentPage ? await getChildServices(service._id) : [];

    // Determine which sidebar to use based on category
    const SidebarComponent =
        service.category === 'Drilling' ? DrillingSidebar :
            service.category === 'Geophysical' ? GeophysicsSidebar :
                service.category === 'Remediation' ? RemediationSidebar :
                    null;

    // Determine if parent page should have a sidebar (Drilling parent page does NOT have one in original design)
    const showParentSidebar = isParentPage && service.category !== 'Drilling';

    return (
        <>
            <Header />
            <main>
                <PageHeroBanner
                    title={service.title}
                    description={service.heroDescription || ""}
                    backgroundImage={getServiceImageUrl(service)}
                    ribbonText={service.ribbonText || "SUMMIT SERVICES"}
                    backgroundAlt={service.title}
                />

                {/* Main Content Section */}
                <section className="py-16 bg-[#a4c5c5] font-work-sans font-normal">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Content Column */}
                            <div className={`${(isParentPage && !showParentSidebar) ? 'lg:col-span-3' : 'lg:col-span-2'} space-y-8`}>

                                {/* Portable Text Content */}
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <PortableText
                                        value={service.content || []}
                                        components={{
                                            block: {
                                                normal: ({ children }) => <p className="text-gray-700 leading-relaxed text-lg mb-6">{children}</p>,
                                                h2: ({ children }) => <h2 className="text-2xl font-bold italic text-[#163058] mb-4 mt-8">{children}</h2>,
                                                h3: ({ children }) => <h3 className="text-xl font-bold text-[#163058] mb-3 mt-6">{children}</h3>,
                                            },
                                            list: {
                                                bullet: ({ children }) => <ul className="text-gray-700 leading-relaxed text-lg space-y-2 list-disc pl-6 mb-6">{children}</ul>,
                                            },
                                            listItem: {
                                                bullet: ({ children }) => <li>{children}</li>,
                                            }
                                        }}
                                    />
                                </div>

                                {/* Child Page Specific: Contact Section */}
                                {!isParentPage && (
                                    <div className="mt-12 pt-8 border-t border-[#163058]/20">
                                        <h2 className="text-2xl font-bold italic text-[#163058] mb-4">
                                            Experience {service.title} with Summit
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed text-lg font-bold">
                                            Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate. Reach Lauren at <strong className="text-[#163058]">609-238-2815</strong> to discuss your project needs. Or email <a href="mailto:LDivello@SummitDrilling.com" className="text-[#163058] underline hover:text-[#A04020]">LDivello@SummitDrilling.com</a> and she will reply promptly.
                                        </p>
                                    </div>
                                )}

                                {/* Parent Page Specific: RFP Link (only for Remediation in original, but good to have generally?) */}
                                {isParentPage && service.category === 'Remediation' && (
                                    <div className="pt-4">
                                        <p className="text-gray-700 leading-relaxed text-lg font-bold mb-4">
                                            Need a contractor partner with a proven track record and a big project capability?
                                        </p>
                                        <Link
                                            href="/start-a-project"
                                            className="inline-block bg-[#1a365d] hover:bg-[#132845] text-white font-bold italic text-lg px-8 py-4 rounded shadow-lg transition-transform hover:scale-105"
                                        >
                                            Submit an RFP &gt;&gt;
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar Column */}
                            {((!isParentPage && SidebarComponent) || showParentSidebar) && (
                                <div className="lg:col-span-1">
                                    {/* Parent Page Sidebar (Specialty Applications) */}
                                    {isParentPage && showParentSidebar && service.specialtyApplications && service.specialtyApplications.length > 0 && (
                                        <div className="bg-[#78a8a8] p-8 rounded-lg shadow-xl mb-8">
                                            <div className="text-center mb-6">
                                                <div className="flex justify-center mb-4">
                                                    <div className="relative w-24 h-24">
                                                        <Image
                                                            src="/images/remediation-icon.webp" // Use generic icon or specific if available
                                                            alt="Specialty Applications"
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#2a1109] tracking-widest uppercase">
                                                    Specialty<br />Applications
                                                </h3>
                                                <div className="w-full h-1 bg-[#2a1109] mt-4 mx-auto max-w-[200px]"></div>
                                            </div>
                                            <ul className="space-y-3 text-[#1A365D] text-lg font-medium">
                                                {service.specialtyApplications.map((item) => (
                                                    <li key={item} className="flex items-start">
                                                        <span className="mr-3 text-[#1A365D]">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Child Page Sidebar (Navigation) */}
                                    {!isParentPage && SidebarComponent && (
                                        <SidebarComponent currentPage={service.slug.current} />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Parent Page: Child Services Grid */}
                {isParentPage && childServices.length > 0 && (
                    <section
                        className="py-20 bg-[#377d7e] text-white bg-no-repeat bg-cover bg-blend-multiply"
                        style={{
                            backgroundImage: "url('/images/drilling-types-bg.webp')",
                            backgroundPosition: "bottom center"
                        }}
                    >
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
                                Explore Our {service.title}:
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                {childServices.map((child) => (
                                    <Link
                                        key={child._id}
                                        href={`/services/${child.slug.current}`}
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
                                                    {child.title}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Image Card */}
                                        <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                                            <Image
                                                src={getServiceImageUrl(child)}
                                                alt={child.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">
                                                {child.subtitle || child.title}
                                            </h3>
                                            <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                                {child.excerpt}
                                            </p>
                                            <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold px-6 py-2 text-sm shadow-md mt-2 w-fit rounded transition-colors">
                                                {child.ctaText || "Learn More"} &gt;&gt;
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Lauren DiVello Contact Footer (Parent Page) */}
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
                )}

                <DrillingRequestForm />
            </main>
            <Footer />
        </>
    );
}
