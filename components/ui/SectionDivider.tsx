import React from "react";

interface SectionDividerProps {
    className?: string;
    fill?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
    className,
    fill = "#52755b",
}) => {
    return (
        <svg
            className={className}
            viewBox="0 0 1280 60"
            width="100%"
            height="auto"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill={fill} d="m1280 402.22h-433.84-846.27v-345.68h1280.11z" />
            <path
                fill={fill}
                d="m676.21 14.39l84.76-13.54 132.65 20.46 69.65 0.4 109.38 28.05 159.71 31.78h-1232.42l257.96-22.31 155.77-24.28 60.71-2.93 56.39-6.24 51.99 3.27z"
            />
        </svg>
    );
};
