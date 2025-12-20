"use client";

import Link from "next/link";
import Image from "next/image";

interface GeophysicsSidebarProps {
    currentPage?: string;
}

const geophysicsServices = [
    { name: "Utility Locating", href: "/services/utility-locating", slug: "utility-locating" },
    { name: "UST & Septic Detection", href: "/services/ust-septic-detection", slug: "ust-septic-detection" },
    { name: "Borehole Geophysics", href: "/services/borehole-geophysics", slug: "borehole-geophysics" },
    { name: "Electrical Resistivity", href: "/services/electrical-resistivity", slug: "electrical-resistivity" },
    { name: "Seismic Refraction", href: "/services/seismic-refraction", slug: "seismic-refraction" },
];

export default function GeophysicsSidebar({ currentPage }: GeophysicsSidebarProps) {
    return (
        <div className="space-y-4">
            {/* Sidebar Icon */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/geophysics-icon.webp"
                    alt="Geophysical Services"
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>

            {/* Back to Geophysics Link */}
            <Link
                href="/services/geophysical-services"
                className="block bg-[#A04020] hover:bg-[#8a361b] text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
            >
                Back to Geophysics &gt;&gt;
            </Link>

            {/* Other Geophysics Services */}
            {geophysicsServices
                .filter((service) => service.slug !== currentPage)
                .map((service) => (
                    <Link
                        key={service.slug}
                        href={service.href}
                        className="block bg-[#377d7e] hover:bg-sky-500 text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
                    >
                        {service.name} &gt;&gt;
                    </Link>
                ))}
        </div>
    );
}
