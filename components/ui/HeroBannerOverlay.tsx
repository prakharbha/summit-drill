"use client";

interface HeroBannerOverlayProps {
    /** 
     * Gradient colors configuration
     * Dark blue at start, Light blue at 50%, fades to transparent
     */
    darkBlue?: string;
    lightBlue?: string;
}

/**
 * Gradient overlay for hero banners
 * Creates gradient bars at top and bottom that fade to transparent
 * Use this on all page hero sections for consistent branding
 */
export function HeroBannerOverlay({
    darkBlue = "#162f58",
    lightBlue = "#0b87c6",
}: HeroBannerOverlayProps) {
    return (
        <>
            {/* Top overlay - dark to lighter to transparent going down */}
            <div
                className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none mix-blend-multiply"
                style={{
                    background: `linear-gradient(to bottom, ${darkBlue} 0%, ${lightBlue} 50%, transparent 100%)`,
                }}
            />
            {/* Bottom overlay - solid #163058 for first 23% from bottom, then fade to transparent */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none mix-blend-multiply"
                style={{
                    background: `linear-gradient(to top, #163058 0%, #163058 33%, rgba(22, 48, 88, 0.7) 55%, rgba(22, 48, 88, 0.3) 75%, transparent 100%)`,
                }}
            />
        </>
    );
}

interface ServiceRibbonProps {
    /** Text to display in the ribbon */
    text: string;
    /** Optional custom width for the ribbon image */
    width?: number;
    /** Optional custom height for the ribbon image */
    height?: number;
}

/**
 * Ribbon badge component for hero sections
 * Displays text over the ribbon.webp image with dark overlay for readability
 * Use this for service category labels on page banners
 */
export function ServiceRibbon({
    text,
    width = 200,
    height = 40,
}: ServiceRibbonProps) {
    return (
        <div className="relative inline-block">
            <img
                src="/images/ribbon.webp"
                alt="Ribbon"
                width={width}
                height={height}
                className="object-contain"
            />
            {/* Overlay removed as per request - built into image */}
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold tracking-[0.15em] uppercase text-white font-work-sans z-10">
                {text}
            </span>
        </div>
    );
}
