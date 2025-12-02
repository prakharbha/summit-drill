"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Lauren DiVello",
        title: "VP of Sales & Business Development",
        image: "/images/summit-logo.png", // Placeholder
    },
    {
        id: 2,
        name: "John Doe",
        title: "Project Manager",
        image: "/images/summit-logo.png", // Placeholder
    },
    {
        id: 3,
        name: "Jane Smith",
        title: "Operations Director",
        image: "/images/summit-logo.png", // Placeholder
    },
    {
        id: 4,
        name: "Mike Johnson",
        title: "Senior Driller",
        image: "/images/summit-logo.png", // Placeholder
    },
    {
        id: 5,
        name: "Sarah Williams",
        title: "Safety Coordinator",
        image: "/images/summit-logo.png", // Placeholder
    },
    {
        id: 6,
        name: "David Brown",
        title: "Field Supervisor",
        image: "/images/summit-logo.png", // Placeholder
    },
];

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Helper to get visible items (circular)
    const getVisibleItems = () => {
        const items = [];
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
            items.push({ ...TEAM_MEMBERS[index], offset: i });
        }
        return items;
    };

    return (
        <section
            className="relative bg-[#4d7c55] py-8 z-20 -mt-1"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    We Are Responsible for Your Experience
                </h2>

                <div className="relative flex items-center justify-center h-[400px]">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 lg:left-12 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 lg:right-12 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                    >
                        <ChevronRight size={40} />
                    </button>

                    {/* Carousel Items */}
                    <div className="flex items-center justify-center w-full overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            {getVisibleItems().map((item) => (
                                <motion.div
                                    key={`${item.id}-${item.offset}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, x: 100 * item.offset }}
                                    animate={{
                                        opacity: item.offset === 0 ? 1 : 0.5,
                                        scale: item.offset === 0 ? 1.2 : 0.8,
                                        x: item.offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 150), // Adjust spacing based on screen size if possible, or just fixed
                                        zIndex: item.offset === 0 ? 10 : 5 - Math.abs(item.offset),
                                    }}
                                    transition={{ duration: 0.5, type: "spring" }}
                                    className="absolute flex flex-col items-center justify-center"
                                >
                                    <div
                                        className={`relative rounded-full overflow-hidden border-4 transition-colors duration-300 ${item.offset === 0 ? "border-white w-48 h-48 lg:w-64 lg:h-64" : "border-transparent w-32 h-32 lg:w-40 lg:h-40 grayscale"
                                            }`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Overlay for Active Item */}
                                        {item.offset === 0 && (
                                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center">
                                                <h3 className="text-lg lg:text-xl font-bold">{item.name}</h3>
                                                <p className="text-xs lg:text-sm">{item.title}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
