"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export default function DrillingTechniquesContent() {
    const services = [
        {
            title: "Sonic Drilling",
            description: "Advanced sonic technology for superior sample quality and speed in difficult formations. Ideal for environmental and geotechnical projects requiring continuous core samples.",
            features: ["Continuous core sampling", "Reduced waste generation", "Superior penetration rates", "Minimal deviation"]
        },
        {
            title: "Direct Push",
            description: "Efficient and minimally invasive probing for soil and groundwater sampling. Perfect for site investigations and initial characterization.",
            features: ["High-resolution sampling", "Minimal site disturbance", "Cost-effective", "Rapid data collection"]
        },
        {
            title: "Auger Drilling",
            description: "Traditional hollow-stem and solid-stem auger drilling for reliable soil sampling and well installation in unconsolidated formations.",
            features: ["Standard penetration testing", "Monitoring well installation", "Soil sampling", "Geotechnical investigation"]
        },
        {
            title: "Air Rotary",
            description: "Powerful pneumatic drilling for hard rock formations and deep borehole requirements. efficient cuttings removal and rapid penetration.",
            features: ["Hard rock penetration", "Deep borehole capability", "Water well drilling", "Geothermal installation"]
        }
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section using reusable PageHeroBanner */}
                <PageHeroBanner
                    backgroundImage="/images/drilling/hero-banner.webp"
                    backgroundAlt="Summit Drilling Rig Operation"
                    ribbonText="Summit Services"
                    title="Drilling"
                    description="In an industry where geology, risk and timelines intersect, seasoned insight becomes the most valuable piece of equipment on site"
                />

                {/* Specialty Applications Section */}
                <section className="pt-8 pb-20 bg-[#a4c5c5]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                            {/* Left Column: Text Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-6 text-gray-900">
                                <p className="text-xl md:text-2xl font-bold leading-relaxed text-[#1A365D]">
                                    You may think that drilling experience going back to the late 1950s has little relevance now. To a degree, there is some truth to that. Technology, applications, processes, have all advanced.
                                </p>

                                <p className="text-lg font-bold text-[#1A365D]">
                                    One thing however that nearly 6 decades of drilling did provide is crystalized knowledge. Knowing what geology is below the surface and drilling in it, from Maine to Florida, can be of great value.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    The knowledge transfer that has passed through the generations, across thousands of job sites, has manifested into an AI-like source for countless environmental consultants and geotechnical engineers. Summit is counted on for insights in approach development, rig technology requirements, sampling timeframes and safety parameters associated with specific locations and regions up and down the eastern U.S.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Today, Summit's drilling technology is one of the most comprehensive. From multiple drilling technologies to expertise in dealing with emerging contaminants, they have become a "Go To" source for large and complex projects. The more critical the scope of work, the more valuable Summit is to its customers.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Increasing their value further, Summit's growth has expanded their services platform enabling them to wrap support services around their drilling capabilities that had in the past required additional contractors. This is proving to be highly efficient for customers by reducing complexity in scheduling and contractor management.
                                </p>

                                <div className="pt-4">
                                    <Button asChild className="bg-[#A04020] hover:bg-[#8a361b] text-white font-bold text-lg px-8 py-6 rounded shadow-lg transition-transform hover:scale-105">
                                        <Link href="/contact">
                                            Submit a Proposal Online &gt;&gt;
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column: Specialty Applications Card */}
                            <div className="bg-[#78a8a8] p-8 md:p-12 rounded-lg shadow-xl">
                                <div className="text-center mb-8">
                                    {/* Icon Placeholder - using Lucide icon as substitute for the custom graphic */}
                                    <div className="flex justify-center mb-4">
                                        <div className="relative w-24 h-24">
                                            <Image
                                                src="/images/drillingsidebar-icon.webp"
                                                alt="Specialty Applications"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#923d21] tracking-widest uppercase">
                                        Specialty<br />Applications
                                    </h3>
                                    <div className="w-full h-1 bg-[#923d21] mt-4 mx-auto max-w-[200px]"></div>
                                </div>

                                <ul className="space-y-4 text-[#1A365D] text-lg font-medium">
                                    {[
                                        "Over water barge drilling",
                                        "Horizontal drilling",
                                        "Drilling & In-Situ injection",
                                        "Low clearance / Remote access",
                                        "Well decommissioning",
                                        "Geotechnical Investigations",
                                        "Cathodic systems services",
                                        "Dewatering services"
                                    ].map((item) => (
                                        <li key={item} className="flex items-start">
                                            <span className="mr-3 text-[#1A365D]">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Drilling Technologies Section */}
                <section
                    className="py-20 bg-[#377d7e] text-white bg-no-repeat bg-cover bg-blend-multiply"
                    style={{
                        backgroundImage: "url('/images/drilling-types-bg.webp')",
                        backgroundPosition: "bottom center"
                    }}
                >
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
                            Learn more about Summit&apos;s complete range of drilling technologies:
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                            {[
                                {
                                    title: "Sonic Drilling",
                                    href: "/services/sonic-drilling",
                                    image: "/images/drilling/sonic.webp",
                                    subtitle: "Sonic Drilling – The difference is our operators!",
                                    description: "Having a Sonic Rig and using it effectively in the field are 2 very different things. At Summit, our Sonic drillers have logged thousands of hours handling these sophisticated rigs and operate them like a fine instrument.",
                                    ctaText: "Industry Leading Sonic Capabilities"
                                },
                                {
                                    title: "Direct Push",
                                    href: "/services/direct-push",
                                    image: "/images/drilling/direct-push.webp",
                                    subtitle: "Direct Push – Fast, Efficient & Exceptionally Precise!",
                                    description: "There are no drilling technologies better suited to collect high-quality soil, groundwater, and soil-gas data quickly. Summit offers a large number of Probes with specialty tooling that will help you accelerate site characterization and remediation planning.",
                                    ctaText: "Our Broad Direct Push Capabilities"
                                },
                                {
                                    title: "Auger Drilling",
                                    href: "/services/auger-drilling",
                                    image: "/images/drilling/auger.webp",
                                    subtitle: "Hollow Stem Auger Drilling (HSA) – Go deeper in unconsolidated soils!",
                                    description: "Need stable, cased boreholes? How about track-mounted rigs for difficult to access locations? Summit's HSA rigs are diverse, dependable and a highly effective method for environmental and geotechnical investigations.",
                                    ctaText: "Our Auger Drilling Capabilities"
                                },
                                {
                                    title: "Air Rotary",
                                    href: "/services/air-rotary-drilling",
                                    image: "/images/drilling/air-rotary.webp",
                                    subtitle: "Air Rotary Drilling – Speed, Depth and clarity of geological formations!",
                                    description: "Summit's air rotary rigs and talented operators unequaled for deeper boring, bedrock investigations requiring high-productivity drilling. Need to penetrate hard rock?",
                                    ctaText: "Our Air Rotary Drilling Capabilities"
                                }
                            ].map((tech) => (
                                <div key={tech.title} className="flex flex-col">
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
                                                {tech.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Image Card */}
                                    <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                                        <Image
                                            src={tech.image}
                                            alt={tech.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold leading-tight">
                                            {tech.subtitle}
                                        </h3>
                                        <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                            {tech.description}
                                        </p>
                                        <Button asChild size="sm" className="bg-[#377d7e] hover:bg-sky-500 text-white font-bold px-6 shadow-md mt-2">
                                            <Link href={tech.href}>
                                                {tech.ctaText} &gt;&gt;
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Lauren DiVello Contact Footer */}
                        <div className="mt-24 pt-12 border-t border-white/10 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                    Summit&apos;s Lauren DiVello is a dedicated and experienced customer advocate.
                                </h3>
                                <p className="text-xl md:text-2xl font-bold">
                                    Reach Lauren at <span className="text-[#A5D48C]">609-238-2815</span> to discuss your project needs. Or email{' '}
                                    <a href="mailto:LDivello@SummitDrilling.com" className="text-[#A5D48C] underline hover:text-white transition-colors">
                                        LDivello@SummitDrilling.com
                                    </a>{' '}
                                    and she will reply promptly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Request Form Section */}
                <DrillingRequestForm />
            </main>
            <Footer />
        </>
    );
}
