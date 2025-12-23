"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroBannerOverlay, ServiceRibbon } from "./HeroBannerOverlay";
import { MountainDivider } from "./MountainDivider";
import { ReactNode } from "react";

interface PageHeroBannerProps {
    /** Background image path */
    backgroundImage: string;
    /** Alt text for background image */
    backgroundAlt?: string;
    /** Ribbon text (e.g., "Summit Services") */
    ribbonText?: string;
    /** Page title (h1) */
    title: string;
    /** Description text below title */
    description?: string;
    /** Optional button/CTA element */
    button?: ReactNode;
    /** Optional children for additional content */
    children?: ReactNode;
    /** Custom height class (default: h-screen min-h-[700px]) */
    heightClass?: string;
    /** Whether to show the mountain logo */
    showMountainLogo?: boolean;
    /** Whether to show the mountain divider below the banner */
    showDivider?: boolean;
    /** Divider fill color (default: #a4c5c5) */
    dividerColor?: string;
    /** Divider height in pixels (default: 50) */
    dividerHeight?: number;
    /** Bottom margin for overlapping effect (default: 0) */
    dividerMarginBottom?: number;
}

/**
 * Reusable Page Hero Banner Component
 * Use this on all inner pages (not homepage) for consistent banner styling
 * 
 * Features:
 * - Full-screen hero with background image
 * - Gradient overlay for text readability
 * - Optional mountain logo, ribbon, title, description, and button
 * - Built-in mountain divider at the bottom
 * - Entrance animations
 */
export function PageHeroBanner({
    backgroundImage,
    backgroundAlt = "Hero Banner",
    ribbonText,
    title,
    description,
    button,
    children,
    heightClass = "h-screen min-h-[700px]",
    showMountainLogo = true,
    showDivider = true,
    dividerColor = "#a4c5c5",
    dividerHeight = 50,
    dividerMarginBottom = 0,
}: PageHeroBannerProps) {
    return (
        <>
            <section className={`relative ${heightClass} flex items-end pb-20 bg-[#163058]`}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt={backgroundAlt}
                        fill
                        className="object-cover"
                        priority
                        style={{ objectFit: "cover" }}
                        unoptimized={backgroundImage.endsWith('.gif')}
                    />
                    {/* Gradient Overlay */}
                    <HeroBannerOverlay />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-left"
                    >
                        {/* Mountain Logo */}
                        {showMountainLogo && (
                            <div className="w-[200px] h-auto relative mb-2">
                                <Image
                                    src="/images/mountain.webp"
                                    alt="Summit Mountain"
                                    width={200}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        )}

                        {/* Ribbon */}
                        {ribbonText && (
                            <div className="mb-3">
                                <ServiceRibbon text={ribbonText} />
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                            {title}
                        </h1>

                        {/* Description */}
                        {description && (
                            <p className="text-lg md:text-xl text-white font-medium leading-relaxed drop-shadow-md">
                                {description}
                            </p>
                        )}

                        {/* Button */}
                        {button && <div className="mt-6">{button}</div>}

                        {/* Additional Content */}
                        {children}
                    </motion.div>
                </div>
            </section>

            {/* Mountain Divider - integrated into banner */}
            {showDivider && (
                <div style={{ marginBottom: dividerMarginBottom ? `-${dividerMarginBottom}px` : undefined }}>
                    <MountainDivider fillColor={dividerColor} height={dividerHeight} />
                </div>
            )}
        </>
    );
}
