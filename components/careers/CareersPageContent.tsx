"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export default function CareersPageContent() {
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

    return (
        <>
            <Header />
            <main className="font-sans">

                {/* HERO SECTION - Standard Component */}
                <PageHeroBanner
                    backgroundImage="/images/careers/hero.jpg"
                    backgroundAlt="Summit Drilling Team"
                    ribbonText="Careers"
                    title="You Matter Here"
                    description="We enthusiastically welcome new talent to the Summit team and treat all, new members and long-standing contributors, with respect."
                    dividerColor="#B5D48C"
                />

                {/* LIGHT GREEN SECTION - Culture */}
                <section className="bg-[#B5D48C] py-16 -mt-1 relative z-0">
                    {/* -mt-1 to fix sub-pixel gap from hero clip */}
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] italic mb-2">
                                A Culture of Service. What we promise:
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1A365D] mb-8">
                                We listen with patience and empathy.
                            </h3>

                            <div className="space-y-6 text-lg text-[#1A365D] leading-relaxed font-medium">
                                <p>
                                    Our goal is to be responsive and to follow up in a timely manner to your questions with the answers you need. From understanding details about our comprehensive benefits, to building your career direction, we are here to support you.
                                </p>
                                <p>
                                    We invite open discussion to establish a full understanding of your goals, needs or situations. We will be accessible for you and provide an open door to revisit conversations to ensure a mutual understanding and a positive path forward.
                                </p>
                                <p className="font-bold text-2xl">
                                    At Summit, you are our customer
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DARK GREEN SECTION - Expectations & Grid */}
                <section className="bg-[#5e745d] py-20 text-white">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-5xl mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold italic mb-6">
                                What we expect from ourselves and from you
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed font-medium text-white/90">
                                <p>
                                    Working together effectively requires professionalism in personal conduct and effort – being forthcoming and transparent is key. Unintentional mistakes should be an opportunity for learning and improvement if discussed honestly. They can be, and should be, a big part of learning and advancement.
                                </p>
                                <p>
                                    We expect our conversations to be civil and supported by the truth. We are all human and susceptible to bad days. When cooler heads prevail, we can create a clear shared understanding and strive towards consistently positive outcomes.
                                </p>
                            </div>
                        </div>

                        {/* 3 Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {/* Benefits Column */}
                            <div className="flex flex-col">
                                <div className="border border-white/50 px-4 py-2 uppercase font-bold text-xl italic mb-4 self-start rounded-r-lg border-l-4 border-l-white bg-white/10">
                                    Benefits
                                </div>
                                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6 border-2 border-white/20">
                                    <Image src="/images/careers/benefits.jpg" alt="Benefits" fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-bold italic mb-2">More than great benefits – it’s a great place to belong</h3>
                                <p className="text-sm leading-relaxed mb-6 text-white/80 flex-grow">
                                    Companies talk about taking care of their people all of the time. At Summit, it’s about teamwork. It’s a company value and how we work every day. <strong>Our benefits wrap around you!</strong>
                                </p>
                                <div>
                                    <Button
                                        onClick={() => scrollToSection('benefits')}
                                        className="bg-[#7A9A70] hover:bg-[#6b8a61] text-white font-bold italic px-6 py-2 rounded shadow-md"
                                    >
                                        Read more &gt;&gt;
                                    </Button>
                                </div>
                            </div>

                            {/* Career Column */}
                            <div className="flex flex-col">
                                <div className="border border-white/50 px-4 py-2 uppercase font-bold text-xl italic mb-4 self-start rounded-r-lg border-l-4 border-l-white bg-white/10">
                                    Your Career
                                </div>
                                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6 border-2 border-white/20">
                                    <Image src="/images/careers/path.jpg" alt="Career Path" fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-bold italic mb-2">A path to growth</h3>
                                <p className="text-sm leading-relaxed mb-6 text-white/80 flex-grow">
                                    Training. Development. Mentorship. Your Opportunity. Your path. Let’s walk it together! <strong>At Summit, you can earn while you learn!</strong>
                                </p>
                                <div>
                                    <Button
                                        onClick={() => scrollToSection('career-path')}
                                        className="bg-[#7A9A70] hover:bg-[#6b8a61] text-white font-bold italic px-6 py-2 rounded shadow-md"
                                    >
                                        Learn more &gt;&gt;
                                    </Button>
                                </div>
                            </div>

                            {/* Positions Column */}
                            <div className="flex flex-col">
                                <div className="border border-white/50 px-4 py-2 uppercase font-bold text-xl italic mb-4 self-start rounded-r-lg border-l-4 border-l-white bg-white/10">
                                    Positions
                                </div>
                                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6 border-2 border-white/20">
                                    <Image src="/images/careers/positions.jpg" alt="Positions" fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-bold italic mb-2">Company-wide Opportunities</h3>
                                <p className="text-sm leading-relaxed mb-6 text-white/80 flex-grow">
                                    Summit has open positions across all service lines and within our office administration. <strong>Learn what’s needed now!</strong>
                                </p>
                                <div>
                                    <Button
                                        onClick={() => scrollToSection('positions')}
                                        className="bg-[#7A9A70] hover:bg-[#6b8a61] text-white font-bold italic px-6 py-2 rounded shadow-md"
                                    >
                                        Open Positions &gt;&gt;
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Phil Valensi Contact */}
                        <div className="text-center md:text-left max-w-4xl">
                            <p className="text-xl md:text-2xl font-bold">
                                Summit’s Phil Valensi is a dedicated and experienced career-building advocate.
                                Reach Phil at <span className="text-[#A5D48C]">800-424-6648</span> to discuss your career path at Summit. Or email your resume to <a href="mailto:PValensi@SummitDrilling.com" className="text-[#A5D48C] underline hover:text-white">PValensi@SummitDrilling.com</a> and he will reply promptly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* EOE SECTION - Dark Blue */}
                <section className="bg-[#1A365D] pt-16 pb-32 text-white relative">
                    {/* Section Separator Effect could go here if needed, consistent with brand */}
                    <div className="container mx-auto px-4 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold italic mb-6">EquaI Opportunity Employer</h2>
                        <p className="text-lg leading-relaxed font-medium text-white/90 max-w-5xl">
                            As an equal opportunity employer, Summit Drilling is committed to fostering a diverse work environment where our team members respect one another and share a commitment to our company’s values, mission, and strategies. Summit Drilling provides equal employment to all team members without regard to race, color, religion, gender, national origin, age, disability, sexual orientation, veteran, or marital status.
                        </p>
                    </div>
                </section>

                {/* DETAILED SECTIONS (Hidden by default or below? Keeping below for "Read More") */}
                <div className="bg-gray-100">
                    {/* BENEFITS DETAIL */}
                    <section id="benefits" className="py-20 border-b border-gray-300">
                        <div className="container mx-auto px-4 lg:px-8">
                            <h2 className="text-3xl font-bold text-[#1A365D] mb-8">Benefits Detail</h2>
                            <div className="grid lg:grid-cols-2 gap-12 text-[#1A365D] items-center">
                                <div>
                                    <Image src="/images/careers/benefits.jpg" alt="Benefits" width={600} height={400} className="rounded-lg shadow-lg" />
                                </div>
                                <div className="space-y-4 text-lg">
                                    <p>At Summit, people are more than their job titles, they’re valued members of a close-knit team that looks out for one another. New team members quickly discover a culture built on respect, collaboration, and genuine support.</p>
                                    <p>Summit is a growing industry leader offering competitive compensation, a 401(K)-retirement plan, including a generous employer match, healthcare benefits, including dental and vision, a values-based and team-oriented work culture, skills and training development.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CAREER PATH DETAIL */}
                    <section id="career-path" className="py-20 border-b border-gray-300">
                        <div className="container mx-auto px-4 lg:px-8">
                            <h2 className="text-3xl font-bold text-[#1A365D] mb-8">Career Path Detail</h2>
                            <div className="grid lg:grid-cols-2 gap-12 text-[#1A365D] items-center">
                                <div className="space-y-4 text-lg order-2 lg:order-1">
                                    <p>Summit always welcomes the best and brightest and we are committed in training and developing the next wave of Summit team members. We welcome talented individuals who are just starting out to people with some work experience from related fields.</p>
                                    <p>Our programs are comprehensive and designed to support our people in their advancement. For example, we offer a unique Driller Apprentice Training Program that includes a comprehensive list of health and safety programs and equipment operating licensure opportunities.</p>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <Image src="/images/careers/path.jpg" alt="Career Path" width={600} height={400} className="rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* POSITIONS DETAIL */}
                    <section id="positions" className="py-20 pb-48">
                        <div className="container mx-auto px-4 lg:px-8">
                            <h2 className="text-3xl font-bold text-[#1A365D] mb-8">Positions Detail</h2>
                            <div className="prose max-w-none text-[#1A365D]">
                                <p className="text-xl mb-6">We provide employment opportunities company-wide including:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {positionsList.map((position, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded shadow-sm border border-gray-200 font-bold">
                                            {position}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Button asChild size="lg" className="bg-[#923d21] hover:bg-[#7a321b] text-white">
                                        <a href="https://hoops.com" target="_blank" rel="noopener noreferrer">SEARCH ALL JOB OPENINGS on HOOPS &gt;&gt;</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </main>
            <Footer hasDividerAbove />
        </>
    );
}
