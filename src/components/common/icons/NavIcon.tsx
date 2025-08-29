// components/common/ui/NavIcon.tsx
"use client";

import React from "react";
import IKImageWrapper from "@/components/media/IKImageWrapper";

interface NavIconProps {
    path: string;
    alt: string;
    width?: number;
    height?: number;
    count?: number;
}

const NavIcon: React.FC<NavIconProps> = ({
    path,
    alt,
    width = 24,
    height = 24,
    count,
}) => {
    console.log("Rendering NavIcon with path:", path, "and count:", count);
    return (
        <div className="relative">
            <IKImageWrapper path={path} alt={alt} width={width} height={height} />
            {/* {count && count > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-iconBlue rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {count}
                </span>
            )} */}
        </div>
    );
};

export default NavIcon;
