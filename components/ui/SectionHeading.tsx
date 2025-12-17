"use client";

interface SectionHeadingProps {
    children: React.ReactNode;
    /** Color variant based on background */
    variant?: "dark" | "light" | "white";
    className?: string;
}

/**
 * Consistent section heading component used throughout the site
 * Fixed font size of 2.5rem (40px), with color variants for different backgrounds
 */
export function SectionHeading({
    children,
    variant = "dark",
    className = "",
}: SectionHeadingProps) {
    const colorClasses = {
        dark: "text-[#1e3a8a]", // Dark blue for light backgrounds
        light: "text-[#0e2a47]", // Slightly different dark for green backgrounds
        white: "text-white", // White for dark backgrounds
    };

    return (
        <h2
            className={`text-[2.5rem] leading-tight font-extrabold ${colorClasses[variant]} ${className}`}
            style={{ fontStyle: 'italic' }}
        >
            {children}
        </h2>
    );
}

export default SectionHeading;
