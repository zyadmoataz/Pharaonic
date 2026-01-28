"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
    const sizeClasses = {
        sm: "h-6 text-xl",
        md: "h-8 text-2xl",
        lg: "h-12 text-4xl",
        xl: "h-16 text-6xl"
    };

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn("text-gold fill-current", size === "sm" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-16 h-16")}
            >
                <path d="M12 2L2 22H22L12 2Z" fillOpacity="0.2" />
                <path d="M12 6L4.5 21H19.5L12 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 9L7 19H17L12 9Z" fill="currentColor" />
                <path d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="4" r="1.5" fill="currentColor" />
            </svg>
            <span className={cn("font-black tracking-tighter uppercase font-serif", sizeClasses[size])}>
                Pharaonic<span className="text-gold">.</span>
            </span>
        </div>
    );
};
