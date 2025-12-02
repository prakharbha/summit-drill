"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

export default function SonicDrillingPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/drilling-hero.jpg"
                            alt="Sonic Drilling Rig"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Blue Gradient Overlay (Top and Bottom) */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#004990]/90 via-transparent to-[#004990]/90 mix-blend-multiply opacity-80" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 z-10 relative mt-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl text-white text-left"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-sm px-4 py-1.5 mb-6 rounded-sm">
                                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M12 0L24 12H0L12 0Z" fill="currentColor" />
                                </svg>
                                <span className="text-sm font-bold tracking-widest uppercase">Summit Services</span>
                            </div>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                                Sonic Drilling
                            </h1>
                            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-md">
                                Behind every successful sonic project is a Summit driller who knows exactly how to optimize the rig to the geological conditions below it. <span className="">Summit provides its customers with an entire division of them.</span>
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Matters Section */}
                <section className="py-20 bg-[#B5D48C] relative overflow-hidden">
                    {/* Background Texture/Gradient Hint */}
                    <div className="absolute inset-0 bg-[url('/images/mountain.webp')] bg-no-repeat bg-right-bottom opacity-10 mix-blend-overlay pointer-events-none"></div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            {/* Main Content (8 cols) */}
                            <div className="lg:col-span-8 space-y-8 text-[#1A365D]">
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                    Experience matters when operating one of the industry’s most powerful drilling technologies.
                                </h2>

                                <div className="space-y-6 text-lg leading-relaxed font-medium">
                                    <p>
                                        Summit’s Sonic teams have become the most trusted. An overnight success? No. Our teams represent decades of sonic use that has led to an understanding of the subtleties of these rigs. This intangible quality differentiates use from others and is why we deliver the highest number of successful outcomes. Being a “Go To” source for environmental, geotechnical and aggregate industry professionals has been well earned.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-[#1A365D]">Sonic Basics</h3>
                                    <p className="text-lg leading-relaxed font-medium">
                                        Sonic drilling is a safe, clean and a low-impact environmental drilling technique. Roto Sonic Boreholes are drilled, cored and cased by rotating and vibrating the rod, core barrel and casing at resonant sonic frequencies. It is outstanding in its ability to provide continuous, undisturbed core samples through any geological formation—even the most difficult to drill terrain.
                                    </p>
                                    <p className="text-lg leading-relaxed font-medium">
                                        This highly efficient drilling method results in overall project cost savings for Summit customers due to a reduction in time personnel are required to be in the field. In addition, sonic drilling generates considerably less drill spoils than auger, mud or air rotary methods, saving additional project resources.
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Experience Sonic with Summit</h3>

                                    <div className="border-t border-[#1A365D]/20 pt-8">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#1A365D]">
                                            Summit’s Lauren DiVello is a dedicated and experienced customer advocate.
                                        </h3>
                                        <p className="text-xl md:text-2xl font-bold text-[#1A365D]">
                                            Reach Lauren at <span className="text-[#5e745d]">609-238-2815</span> to discuss your project needs. Or email{' '}
                                            <a href="mailto:LDivello@SummitDrilling.com" className="text-[#5e745d] underline hover:text-[#1A365D] transition-colors">
                                                LDivello@SummitDrilling.com
                                            </a>{' '}
                                            and she will reply promptly.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Navigation (4 cols) */}
                            <div className="lg:col-span-4 space-y-4">
                                <Button asChild className="w-full bg-[#A04020] hover:bg-[#8a361b] text-white font-bold text-lg py-6 justify-between px-6 shadow-md">
                                    <Link href="/services/drilling">
                                        Back to Drilling &gt;&gt;
                                    </Link>
                                </Button>

                                <Button asChild className="w-full bg-[#6B8E4E] hover:bg-[#5a7a3e] text-white font-bold text-lg py-6 justify-between px-6 shadow-md">
                                    <Link href="/services/direct-push">
                                        Direct Push &gt;&gt;
                                    </Link>
                                </Button>

                                <Button asChild className="w-full bg-[#6B8E4E] hover:bg-[#5a7a3e] text-white font-bold text-lg py-6 justify-between px-6 shadow-md">
                                    <Link href="/services/auger">
                                        Auger &gt;&gt;
                                    </Link>
                                </Button>

                                <Button asChild className="w-full bg-[#6B8E4E] hover:bg-[#5a7a3e] text-white font-bold text-lg py-6 justify-between px-6 shadow-md">
                                    <Link href="/services/air-rotary">
                                        Air Rotary &gt;&gt;
                                    </Link>
                                </Button>
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
