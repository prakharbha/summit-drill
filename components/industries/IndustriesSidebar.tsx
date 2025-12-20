"use client";

import Link from "next/link";
import Image from "next/image";

interface IndustriesSidebarProps {
    currentPage?: string;
}

const industries = [
    { name: "Environmental", href: "/industries/environmental", slug: "environmental" },
    { name: "Geotechnical", href: "/industries/geotechnical", slug: "geotechnical" },
    { name: "Cathodic", href: "/industries/cathodic", slug: "cathodic" },
    { name: "Aggregate", href: "/industries/aggregate", slug: "aggregate" },
];

export default function IndustriesSidebar({ currentPage }: IndustriesSidebarProps) {
    return (
        <div className="space-y-4">
            {/* Sidebar Icon */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/industries-icon.webp"
                    alt="Industries Served"
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>

            {/* Back to Industries Link */}
            <Link
                href="/industries"
                className="block bg-[#A04020] hover:bg-[#8a361b] text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
            >
                All Industries &gt;&gt;
            </Link>

            {/* Other Industries */}
            {industries
                .filter((industry) => industry.slug !== currentPage)
                .map((industry) => (
                    <Link
                        key={industry.slug}
                        href={industry.href}
                        className="block bg-[#377d7e] hover:bg-sky-500 text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
                    >
                        {industry.name} &gt;&gt;
                    </Link>
                ))}
        </div>
    );
}
