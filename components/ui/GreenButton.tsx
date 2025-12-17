"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface GreenButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

/**
 * Consistent green button component used throughout the site
 * Default styling: green background, sky-blue hover, bold italic text, 1rem font size
 */
export function GreenButton({ href, children, className = "" }: GreenButtonProps) {
    return (
        <Button
            asChild
            className={`bg-[#718f45] hover:bg-sky-500 text-white text-base font-bold italic tracking-wide rounded-sm px-6 ${className}`}
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
}

export default GreenButton;
