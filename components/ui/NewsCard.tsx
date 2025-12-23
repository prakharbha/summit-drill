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
            className="text-center"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden rounded-lg mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized={image.endsWith('.gif')}
                />
            </div>

            {/* Content */}
            <h3 className={`text-lg font-bold mb-3 line-clamp-2 px-2 ${isDark ? "text-white" : "text-[#1a365d]"}`}>
                {title}
            </h3>
            <p className={`text-sm line-clamp-3 mb-4 px-2 ${isDark ? "text-white/70" : "text-gray-600"}`}>
                {excerpt}
            </p>
            <Link
                href={`/${slug}`}
                className={`inline-block text-white text-sm font-bold italic tracking-wide rounded-sm px-5 py-2 transition-colors ${isDark
                    ? "bg-sky-500 hover:bg-sky-600"
                    : "bg-[#718f45] hover:bg-sky-500"
                    }`}
            >
                Read More &gt;&gt;
            </Link>
        </motion.article>
    );
}

export default NewsCard;
