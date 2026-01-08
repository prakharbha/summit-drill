"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { SanityPage, getPageImageUrl } from "@/lib/sanity-queries";
import { PortableText, PortableTextComponents } from "@portabletext/react";

interface CareersPageContentProps {
    page: SanityPage;
}

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] italic mb-2">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-bold text-[#1A365D] mb-8 italic">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="mb-6">{children}</p>
        ),
    },
};

export default function CareersPageContent({ page }: CareersPageContentProps) {
    const positionsList = [
        "Early Career Apprentice Field Positions",
        "Drilling Positions",
        "Geophysical Services",
        "Remediation Services",
        "Fleet Maintenance & Management",
        "Corporate/Office Administration",
        "Business Development/Sales"
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const heroImage = getPageImageUrl(page);

    return (
        <>
            <Header />
            <main className="font-sans">

                {/* HERO SECTION - Standard Component */}
                <PageHeroBanner
                    backgroundImage={heroImage}
                    backgroundAlt={page.title}
                    ribbonText={page.ribbonText}
                    title={page.title}
                    description={page.heroDescription}
                    dividerColor={page.dividerColor}
                />

                {/* LIGHT GREEN SECTION - Culture (Dynamic Content) */}
                <section className="bg-[#a4c5c5] py-16 -mt-1 relative z-0">
                    {/* -mt-1 to fix sub-pixel gap from hero clip */}
                    <div className="container mx-auto px-4 lg:px-8">
                        <div>
                            {page.content && (
                                <div className="space-y-6 text-lg text-[#1A365D] leading-relaxed font-medium">
                                    <PortableText value={page.content} components={components} />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* DARK GREEN SECTION - Expectations & Grid */}
                <section
                    className="py-20 bg-[#377d7e] text-white bg-no-repeat bg-cover bg-blend-multiply"
                    style={{
                        backgroundImage: "url('/images/drilling-types-bg.webp')",
                        backgroundPosition: "bottom center"
                    }}
                >
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
                            What we expect from ourselves and from you
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed font-medium text-white/90 mb-16">
                            <p>
                                Working together effectively requires professionalism in personal conduct and effort – being forthcoming and transparent is key. Unintentional mistakes should be an opportunity for learning and improvement if discussed honestly. They can be, and should be, a big part of learning and advancement.
                            </p>
                            <p>
                                We expect our conversations to be civil and supported by the truth. We are all human and susceptible to bad days. When cooler heads prevail, we can create a clear shared understanding and strive towards consistently positive outcomes.
                            </p>
                        </div>

                        {/* 3 Column Grid - Matching Geophysical Services style */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-20">
                            {/* Benefits Column */}
                            <Link href="/careers/benefits" className="flex flex-col group cursor-pointer">
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
                                        <span className="absolute inset-0 flex items-center justify-start text-[1.75rem] font-bold italic tracking-[0.05em] text-white font-work-sans z-10 pl-6 pr-6 leading-none">
                                            Benefits
                                        </span>
                                    </div>
                                </div>
                                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                                    <Image src="/images/careers/benefits.webp" alt="Benefits" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">More than great benefits – it's a great place to belong</h3>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        Companies talk about taking care of their people all of the time. At Summit, it's about teamwork. It's a company value and how we work every day.
                                    </p>
                                    <h4 className="text-xl font-bold leading-tight">Our benefits wrap around you!</h4>
                                    <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold italic px-6 py-2 shadow-md mt-2 rounded transition-colors">
                                        Read More &gt;&gt;
                                    </span>
                                </div>
                            </Link>

                            {/* Career Column */}
                            <Link href="/careers/your-career" className="flex flex-col group cursor-pointer">
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
                                        <span className="absolute inset-0 flex items-center justify-start text-[1.75rem] font-bold italic tracking-[0.05em] text-white font-work-sans z-10 pl-6 pr-6 leading-none">
                                            Your Career
                                        </span>
                                    </div>
                                </div>
                                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                                    <Image src="/images/careers/path.webp" alt="Career Path" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">A path to growth</h3>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        Training. Development. Mentorship. Your Opportunity. Your path. Let's walk it together!
                                    </p>
                                    <h4 className="text-xl font-bold leading-tight">At Summit, you can earn while you learn!</h4>
                                    <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold italic px-6 py-2 shadow-md mt-2 rounded transition-colors">
                                        Learn More &gt;&gt;
                                    </span>
                                </div>
                            </Link>

                            {/* Positions Column */}
                            <Link href="/careers/positions" className="flex flex-col group cursor-pointer">
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
                                        <span className="absolute inset-0 flex items-center justify-start text-[1.75rem] font-bold italic tracking-[0.05em] text-white font-work-sans z-10 pl-6 pr-6 leading-none">
                                            Positions
                                        </span>
                                    </div>
                                </div>
                                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                                    <Image src="/images/careers/positions.webp" alt="Positions" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-sky-300 transition-colors">Company-wide Opportunities</h3>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        Summit has open positions across all service lines and within our office administration.
                                    </p>
                                    <h4 className="text-xl font-bold leading-tight">Learn what's needed now!</h4>
                                    <span className="inline-block bg-[#377d7e] group-hover:bg-sky-500 text-white font-bold italic px-6 py-2 shadow-md mt-2 rounded transition-colors">
                                        Open Positions &gt;&gt;
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Phil Valensi Contact */}
                        <div className="text-center md:text-left">
                            <p className="text-xl md:text-2xl font-bold">
                                Summit's Phil Valensi is a dedicated and experienced career-building advocate.
                                Reach Phil at <span className="text-[#377d7e]">800-242-6648</span> to discuss your career path at Summit. Or email your resume to <a href="mailto:PValensi@SummitDrilling.com" className="text-[#377d7e] underline hover:text-white">PValensi@SummitDrilling.com</a> and he will reply promptly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* EOE SECTION - Dark Blue */}
                <section className="bg-[#1A365D] py-12 text-white relative">
                    {/* Section Separator Effect could go here if needed, consistent with brand */}
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold italic mb-6">EquaI Opportunity Employer</h2>
                        <p className="text-lg leading-relaxed font-medium text-white/90">
                            As an equal opportunity employer, Summit Drilling is committed to fostering a diverse work environment where our team members respect one another and share a commitment to our company’s values, mission, and strategies. Summit Drilling provides equal employment to all team members without regard to race, color, religion, gender, national origin, age, disability, sexual orientation, veteran, or marital status.
                        </p>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
}
