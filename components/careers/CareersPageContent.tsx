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
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] italic mb-2">
                                A Culture of Service. What we promise:
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1A365D] mb-8 italic">
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
                <section
                    className="py-20 bg-[#52755b] text-white bg-no-repeat bg-cover bg-blend-multiply"
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
                            <div className="flex flex-col">
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
                                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                                    <Image src="/images/careers/benefits.jpg" alt="Benefits" fill className="object-cover" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold leading-tight">More than great benefits – it's a great place to belong</h3>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        Companies talk about taking care of their people all of the time. At Summit, it's about teamwork. It's a company value and how we work every day.
                                    </p>
                                    <h4 className="text-xl font-bold leading-tight">Our benefits wrap around you!</h4>
                                    <Button className="bg-[#7A9A70] hover:bg-sky-500 text-white font-bold px-6 shadow-md mt-2">
                                        Read more &gt;&gt;
                                    </Button>
                                </div>
                            </div>

                            {/* Career Column */}
                            <div className="flex flex-col">
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
                                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                                    <Image src="/images/careers/path.jpg" alt="Career Path" fill className="object-cover" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold leading-tight">A path to growth</h3>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        Training. Development. Mentorship. Your Opportunity. Your path. Let's walk it together!
                                    </p>
                                    <h4 className="text-xl font-bold leading-tight">At Summit, you can earn while you learn!</h4>
                                    <Button className="bg-[#7A9A70] hover:bg-sky-500 text-white font-bold px-6 shadow-md mt-2">
                                        Read more &gt;&gt;
                                    </Button>
                                </div>
                            </div>

                            {/* Positions Column */}
                            <div className="flex flex-col">
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
                                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                                    <Image src="/images/careers/positions.jpg" alt="Positions" fill className="object-cover" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold leading-tight">Company-wide Opportunities</h3>
                                    <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                        Summit has open positions across all service lines and within our office administration.
                                    </p>
                                    <h4 className="text-xl font-bold leading-tight">Learn what's needed now!</h4>
                                    <Button className="bg-[#7A9A70] hover:bg-sky-500 text-white font-bold px-6 shadow-md mt-2">
                                        Read more &gt;&gt;
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Phil Valensi Contact */}
                        <div className="text-center md:text-left">
                            <p className="text-xl md:text-2xl font-bold">
                                Summit's Phil Valensi is a dedicated and experienced career-building advocate.
                                Reach Phil at <span className="text-[#A5D48C]">800-424-6648</span> to discuss your career path at Summit. Or email your resume to <a href="mailto:PValensi@SummitDrilling.com" className="text-[#A5D48C] underline hover:text-white">PValensi@SummitDrilling.com</a> and he will reply promptly.
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
