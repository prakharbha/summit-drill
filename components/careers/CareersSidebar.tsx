"use client";

import Link from "next/link";
import Image from "next/image";

interface CareersSidebarProps {
    currentPage?: string;
}

const careersLinks = [
    { name: "Benefits", href: "/careers/benefits", slug: "benefits" },
    { name: "Positions", href: "/careers/positions", slug: "positions" },
    { name: "Your Career", href: "/careers/your-career", slug: "your-career" },
];

export default function CareersSidebar({ currentPage }: CareersSidebarProps) {
    return (
        <div className="space-y-4">
            {/* Sidebar Icon - using drilling icon as placeholder/style match */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/drillingsidebar-icon.webp"
                    alt="Careers at Summit"
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>

            {/* Back to Careers Link */}
            <Link
                href="/careers"
                className="block bg-[#A04020] hover:bg-[#8a361b] text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
            >
                Back to Careers &gt;&gt;
            </Link>

            {/* Other Career Links */}
            {careersLinks
                .filter((link) => link.slug !== currentPage)
                .map((link) => (
                    <Link
                        key={link.slug}
                        href={link.href}
                        className="block bg-[#377d7e] hover:bg-sky-500 text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
                    >
                        {link.name} &gt;&gt;
                    </Link>
                ))}
        </div>
    );
}
