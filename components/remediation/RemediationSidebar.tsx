"use client";

import Link from "next/link";
import Image from "next/image";

interface RemediationSidebarProps {
    currentPage?: string;
}

const remediationServices = [
    { name: "Remediation Systems", href: "/services/remediation-systems", slug: "remediation-systems" },
    { name: "In-Situ Remediation", href: "/services/in-situ-remediation", slug: "in-situ-remediation" },
    { name: "Injection Remediation", href: "/services/injection-remediation", slug: "injection-remediation" },
    { name: "Barrier Walls", href: "/services/barrier-walls", slug: "barrier-walls" },
    { name: "Earthwork", href: "/services/earthwork-remediation", slug: "earthwork-remediation" },
    { name: "Drilling Support", href: "/services/drilling-support", slug: "drilling-support" },
];

export default function RemediationSidebar({ currentPage }: RemediationSidebarProps) {
    return (
        <div className="space-y-4">
            {/* Sidebar Icon */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/remediation-icon.webp"
                    alt="Remediation Services"
                    width={120}
                    height={120}
                    className="object-contain"
                />
            </div>

            {/* Back to Remediation Link */}
            <Link
                href="/services/remediation-services"
                className="block bg-[#A04020] hover:bg-[#8a361b] text-white font-bold italic text-xl px-6 py-4 rounded-lg shadow-lg transition-all hover:scale-[1.02]"
            >
                Back to Remediation &gt;&gt;
            </Link>

            {/* Other Remediation Services */}
            {remediationServices
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
