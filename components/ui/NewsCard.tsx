"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface NewsCardProps {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    index?: number;
    variant?: "dark" | "light";
}

/**
 * Reusable news card component with two variants:
 * - dark: for dark backgrounds (white text, sky blue button)
 * - light: for light backgrounds (dark text, green button)
 * 
 * Features hover effects similar to project gallery cards:
 * - Entire card is clickable
 * - Image scales on hover
 * - Title color changes on hover
 * - Button background changes on hover
 */
export function NewsCard({
    slug,
    title,
    excerpt,
    image,
    index = 0,
    variant = "dark",
}: NewsCardProps) {
    const isDark = variant === "dark";

    return (
        <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
        >
            <Link
                href={`/${slug}`}
                className="flex flex-col text-center group cursor-pointer"
            >
                {/* Image */}
                <div className="relative h-52 overflow-hidden rounded-lg mb-4 border-4 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized={image.endsWith('.gif')}
                    />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-bold mb-3 line-clamp-2 px-2 transition-colors ${isDark
                    ? "text-white group-hover:text-sky-300"
                    : "text-[#1a365d] group-hover:text-[#377d7e]"}`}>
                    {title}
                </h3>
                <p className={`text-sm line-clamp-3 mb-4 px-2 ${isDark ? "text-white/70" : "text-gray-600"}`}>
                    {excerpt}
                </p>
                <span
                    className={`inline-block text-white text-sm font-bold italic tracking-wide rounded-sm px-5 py-2 transition-colors mx-auto ${isDark
                        ? "bg-sky-500 group-hover:bg-sky-600"
                        : "bg-[#718f45] group-hover:bg-sky-500"
                        }`}
                >
                    Read More &gt;&gt;
                </span>
            </Link>
        </motion.article>
    );
}

export default NewsCard;
