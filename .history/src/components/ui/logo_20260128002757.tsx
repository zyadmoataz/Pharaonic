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
            <img
                src="/favicon.png"
                alt="Pharaonic Logo"
                className={cn(
                    "object-contain",
                    size === "sm" ? "w-6 h-6" :
                        size === "md" ? "w-8 h-8" :
                            size === "lg" ? "w-12 h-12" :
                                "w-16 h-16"
                )}
            />
            <span className={cn("font-black tracking-tighter uppercase font-serif", sizeClasses[size])}>
                Pharaonic<span className="text-gold">.</span>
            </span>
        </div>
    );
};
