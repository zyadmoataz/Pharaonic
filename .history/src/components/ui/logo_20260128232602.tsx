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
        <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
            <div className={cn(
                "relative rounded-full bg-zinc-900 flex items-center justify-center  shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:border-gold/60 transition-all duration-700",
                size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : size === "lg" ? "w-16 h-16" : "w-20 h-20"
            )}>
                <div className="absolute inset-0 bg-gold/5 rounded-full animate-pulse" />
                <img
                    src="/logo.png"
                    alt="Pharaonic"
                    className="w-[100%] h-[100%] object-cover relative z-10 brightness-110 contrast-125 group-hover:scale-110 transition-transform duration-700 rounded-2xl"
                />
            </div>
            <div className="flex flex-col -space-y-1">
                <span className={cn(
                    "font-black tracking-[0.1em] uppercase text-white transition-colors duration-500",
                    "font-serif", // We'll map this to Cinzel in CSS
                    size === "sm" ? "text-lg" : size === "md" ? "text-xl" : size === "lg" ? "text-4xl" : "text-5xl"
                )}>
                    PHARAONIC
                </span>
                <span className={cn(
                    "font-bold tracking-[0.3em] uppercase text-gold/80 italic",
                    size === "sm" ? "text-[8px]" : size === "md" ? "text-[10px]" : size === "lg" ? "text-sm" : "text-base"
                )}>
                    Authorized Guide
                </span>
            </div>
        </div>
    );
};
