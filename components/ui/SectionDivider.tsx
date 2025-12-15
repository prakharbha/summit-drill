"use client";

type DividerVariant = "mountain" | "wave" | "slant" | "peak";

interface SectionDividerProps {
    /** Type of divider shape */
    variant?: DividerVariant;
    /** Color of the divider - should match the section below */
    fillColor?: string;
    /** Height of the divider */
    height?: number;
    /** Whether to flip the divider vertically */
    flip?: boolean;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Reusable section divider component with SVG shapes
 * Use between sections for smooth visual transitions
 * 
 * Variants:
 * - mountain: Double peak mountain shape (like the Summit logo)
 * - wave: Smooth curved wave
 * - slant: Diagonal cut
 * - peak: Single center peak
 */
export function SectionDivider({
    variant = "mountain",
    fillColor = "#B5D48C",
    height = 100,
    flip = false,
    className = "",
}: SectionDividerProps) {
    const getPath = () => {
        switch (variant) {
            case "mountain":
                // Double mountain peaks - inspired by Summit logo
                return "M0,100 L0,60 L20,80 L35,20 L50,60 L65,40 L80,70 L100,50 L100,100 Z";
            case "wave":
                // Smooth wave curve
                return "M0,100 L0,50 Q25,0 50,50 T100,50 L100,100 Z";
            case "slant":
                // Diagonal cut from left to right
                return "M0,100 L0,0 L100,100 Z";
            case "peak":
                // Single center peak
                return "M0,100 L0,50 L50,0 L100,50 L100,100 Z";
            default:
                return "M0,100 L0,60 L35,20 L65,40 L100,50 L100,100 Z";
        }
    };

    return (
        <div
            className={`w-full overflow-hidden leading-none ${className}`}
            style={{
                height: `${height}px`,
                marginTop: flip ? 0 : `-${height}px`,
                marginBottom: flip ? `-${height}px` : 0,
                transform: flip ? "rotate(180deg)" : undefined,
            }}
        >
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
                style={{ display: "block" }}
            >
                <path d={getPath()} fill={fillColor} />
            </svg>
        </div>
    );
}

/**
 * Mountain silhouette divider - matches the Summit brand
 * A simple triangular peak pointing upward into the section above
 */
export function MountainDivider({
    fillColor = "#B5D48C",
    height = 50,
    className = "",
}: Omit<SectionDividerProps, "variant">) {
    return (
        <div
            className={`w-full relative z-20 ${className}`}
            style={{
                height: `${height}px`,
                marginTop: `-${height}px`,
                clipPath: "polygon(0 100%, 65% 0, 100% 100%)",
                backgroundColor: fillColor,
            }}
        />
    );
}
