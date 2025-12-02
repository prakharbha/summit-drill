"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";

export default function ProjectGalleryPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/drilling-hero.jpg"
                            alt="Project Gallery"
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
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl text-white text-left"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 border border-[#7A9A70] px-6 py-2 mb-8 rounded-sm">
                                <svg width="30" height="15" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M12 0L24 12H0L12 0Z" fill="currentColor" />
                                </svg>
                                <span className="text-base font-bold tracking-[0.2em] uppercase text-[#B5D48C]">Project Gallery</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                                Our Featured Projects
                            </h1>
                            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-3xl drop-shadow-md mb-10">
                                Explore how Summit Drilling delivers excellence across a wide range of complex projects and challenging environments.
                            </p>

                            <div className="mt-16">
                                <p className="text-lg md:text-xl font-bold text-white max-w-3xl">
                                    Scroll down to view our project portfolio.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Green Shape Hint */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-24 bg-[#5e745d] z-10"
                        style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)", height: "100px", marginBottom: "-50px" }}
                    ></div>
                </section>

                {/* Project Gallery Grid Section */}
                <section className="py-20 bg-[#5e745d] text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Project Gallery</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <div key={index} className="flex flex-col">
                                    {/* Image Card */}
                                    <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                                        <Image
                                            src="/images/drilling-hero.jpg" // Dummy image
                                            alt={`Project ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold leading-tight">
                                            {index % 2 === 0 ? "Much Lorem ipsum dolor sit consectetuer adipiscing elit" : "Ipsum dolor sit consectetuer adipiscing elit, sed diam"}
                                        </h3>
                                        <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ipsum dolor sit amet.
                                        </p>
                                        <Button asChild size="sm" className="bg-[#6B8E4E] hover:bg-[#5a7a3e] text-white font-bold px-6 shadow-md mt-2 w-fit">
                                            <Link href="#">
                                                Read the Full Story &gt;&gt;
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ))}
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
