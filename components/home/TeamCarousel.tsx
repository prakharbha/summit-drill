"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TEAM_MEMBERS = [
    { id: 1, name: "Ron Bucca", title: "CEO", image: "/images/team/ron-bucca-ceo.webp" },
    { id: 2, name: "Matthew Vetter", title: "COO", image: "/images/team/matthew-vetter-coo.webp" },
    { id: 3, name: "Joel Bernstein", title: "Senior VP", image: "/images/team/joel-bernstein-sr-vp.webp" },
    { id: 4, name: "Joan Baer", title: "VP Operations", image: "/images/team/joan-baer-vp-operations.webp" },
    { id: 5, name: "Jack Byer", title: "VP Operations", image: "/images/team/jack-byer-vice-president-operations.webp" },
    { id: 6, name: "Joey Negro", title: "VP Remediation", image: "/images/team/joey-negro-vp-remediation.webp" },
    { id: 7, name: "Lauren DiVello", title: "VP of Sales", image: "/images/team/lauren-divello-vp-of-sales.webp" },
    { id: 8, name: "Dermot Dillon", title: "VP Major Accounts", image: "/images/team/dermot-dillon-vice-president-major-accounts.webp" },
    { id: 9, name: "Pete Byer", title: "Head of Corp Dev", image: "/images/team/pete-byer-head-of-corp-dev.webp" },
    { id: 10, name: "Ben Shaffer", title: "Director of Health & Safety", image: "/images/team/ben-shaffer-director-of-health-safety.webp" },
    { id: 11, name: "Jerry Aquino", title: "Director of Fleet Services", image: "/images/team/jerry-aquino-director-of-fleet-services.webp" },
    { id: 12, name: "Trevor Quinn", title: "Director of IT", image: "/images/team/trevor-quinn-director-it.webp" },
    { id: 13, name: "Brian Moriarty", title: "Project Manager", image: "/images/team/brian-moriarty-project-manager.webp" },
    { id: 14, name: "Ed Ruger", title: "Project Manager", image: "/images/team/ed-ruger-project-manager.webp" },
    { id: 15, name: "Jessica Parell", title: "Project Manager", image: "/images/team/jessica-parell-pm.webp" },
    { id: 16, name: "Katie West", title: "Project Manager", image: "/images/team/katie-west-proj-mangr.webp" },
    { id: 17, name: "Yecenia DeTorrice", title: "Project Manager", image: "/images/team/yecenia-detorrice-pm.webp" },
    { id: 18, name: "Mary Holmes", title: "Project Administrator", image: "/images/team/mary-holmes-project-administrator.webp" },
    { id: 19, name: "Abigail George", title: "Accounts Receivable Manager", image: "/images/team/abigail-george-accounts-receiveable-manager.webp" },
    { id: 20, name: "Glenn Brennan", title: "Geophysicist", image: "/images/team/glenn-brennan-geophysicist.webp" },
    { id: 21, name: "Mike Wilson", title: "Drilling Field Supervisor", image: "/images/team/mike-wilson-drilling-field-supervisor.webp" },
    { id: 22, name: "Richey Lamire", title: "Drilling Field Supervisor", image: "/images/team/richey-lamire-drilling-field-supervisor.webp" },
    { id: 23, name: "Zach Thompson", title: "Drilling Field Supervisor", image: "/images/team/zach-thompson-drilling-field-super.webp" },
    { id: 24, name: "Christian Tormen", title: "Driller", image: "/images/team/christian-tormen-driller.webp" },
    { id: 25, name: "Matt Jelinski", title: "Driller", image: "/images/team/matt-jelinski-driller.webp" },
];

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
    const spacing = typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 180;

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
    };



    // Helper to get visible items (circular)
    const getVisibleItems = () => {
        const items = [];
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
            items.push({ ...TEAM_MEMBERS[index], offset: i });
        }
        return items;
    };

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? spacing * 3 : -spacing * 3,
            opacity: 0,
        }),
        center: (offset: number) => ({
            x: offset * spacing,
            opacity: offset === 0 ? 1 : 0.7,
            scale: offset === 0 ? 1.0 : 0.85,
            zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
        }),
        exit: (dir: number) => ({
            x: dir > 0 ? -spacing * 3 : spacing * 3,
            opacity: 0,
        }),
    };

    return (
        <section className="relative bg-[#4d7c55] py-4 z-20 -mt-1">
            <div className="container mx-auto px-4 text-center">
                <SectionHeading variant="white">
                    We Are Responsible for Your Experience
                </SectionHeading>

                <div className="relative flex items-center justify-center h-[320px]">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 lg:left-12 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                        aria-label="Previous team member"
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 lg:right-12 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                        aria-label="Next team member"
                    >
                        <ChevronRight size={40} />
                    </button>

                    {/* Carousel Items */}
                    <div className="flex items-center justify-center w-full overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            {getVisibleItems().map((item) => {
                                const isActive = item.offset === 0;
                                const isHovered = hoveredId === item.id && !isActive;

                                return (
                                    <motion.div
                                        key={item.id}
                                        custom={item.offset}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute flex flex-col items-center cursor-pointer"
                                        onMouseEnter={() => setHoveredId(item.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        <div
                                            className={`relative rounded-full overflow-hidden border-4 transition-all duration-300 w-40 h-40 lg:w-48 lg:h-48 ${isActive
                                                ? "border-white"
                                                : `border-white/30 ${isHovered ? "" : "grayscale"}`
                                                }`}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Text below image for active item */}
                                        {isActive && (
                                            <div className="mt-4 text-center text-white">
                                                <h3 className="text-xl lg:text-2xl font-bold">{item.name}</h3>
                                                <p className="text-sm lg:text-base opacity-90">{item.title}</p>
                                            </div>
                                        )}
                                        {/* Text below image for hovered inactive item */}
                                        {isHovered && (
                                            <div className="absolute top-full mt-2 text-center text-white whitespace-nowrap">
                                                <h3 className="text-sm lg:text-base font-semibold">{item.name}</h3>
                                                <p className="text-xs opacity-80">{item.title}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
