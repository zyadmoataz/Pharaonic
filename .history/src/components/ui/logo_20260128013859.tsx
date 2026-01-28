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
            <div className={cn(
                "rounded-full bg-black overflow-hidden flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]",
                size === "sm" ? "w-6 h-6" : size === "md" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-16 h-16"
            )}>
                <img
                    src="/logo.png"
                    alt="Pharaonic Logo"
                    className="w-full h-full object-cover scale-150"
                />
            </div>
            <span className={cn("font-black tracking-tighter uppercase font-serif", sizeClasses[size])}>
                Pharaonic<span className="text-gold">.</span>
            </span>
        </div>
    );
};
