import React from "react";

interface MountainDividerProps {
    fillColor?: string;
    height?: number;
    className?: string;
}

/**
 * Mountain silhouette divider - matches the Summit brand
 * A simple triangular peak pointing upward into the section above
 * RESTORED FROM GIT HISTORY
 */
export const MountainDivider: React.FC<MountainDividerProps> = ({
    fillColor = "#B5D48C",
    height = 50,
    className = "",
}) => {
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
};
