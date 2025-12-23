"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DrillingRequestForm from "@/components/drilling/DrillingRequestForm";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export default function FeaturedProjectPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section using PageHeroBanner */}
                <PageHeroBanner
                    backgroundImage="/images/drilling-hero.webp"
                    backgroundAlt="Airport Earth Work Project"
                    ribbonText="Featured Project"
                    title="Airport Earth Work"
                    description="This active North Carolina project required a team that could work safely around a critical transportation facility. But that's not all!"
                    button={
                        <Button asChild className="bg-[#6B8E4E] hover:bg-[#5a7a3e] text-white font-bold text-lg px-8 py-6 shadow-lg rounded-md">
                            <Link href="/project-gallery/airport-earth-work">
                                Read the Full Story &gt;&gt;
                            </Link>
                        </Button>
                    }
                    dividerColor="#5e745d"
                />

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
                                            src="/images/drilling-hero.webp" // Dummy image
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
