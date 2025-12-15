"use client";

import Link from "next/link";

interface DrillingSidebarProps {
    currentPage?: string;
}

const drillingServices = [
    { name: "Sonic Drilling", href: "/services/drilling/sonic", slug: "sonic" },
    { name: "Direct Push", href: "/services/drilling/direct-push", slug: "direct-push" },
    { name: "Auger", href: "/services/drilling/auger", slug: "auger" },
    { name: "Air Rotary", href: "/services/drilling/air-rotary", slug: "air-rotary" },
    { name: "Drilling & Injection", href: "/services/drilling/injection", slug: "injection" },
];

export default function DrillingSidebar({ currentPage }: DrillingSidebarProps) {
    return (
        <div className="space-y-4">
            {/* Back to Drilling Link */}
            <Link
                href="/services/drilling"
                className="block bg-[#A04020] hover:bg-[#8a361b] text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
            >
                Back to Drilling &gt;&gt;
            </Link>

            {/* Other Drilling Services */}
            {drillingServices
                .filter((service) => service.slug !== currentPage)
                .map((service) => (
                    <Link
                        key={service.slug}
                        href={service.href}
                        className="block bg-[#6B8E23] hover:bg-[#5a7a1e] text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
                    >
                        {service.name} &gt;&gt;
                    </Link>
                ))}
        </div>
    );
}
