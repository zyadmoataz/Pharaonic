"use client";

import React from "react";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export const Logo = ({ className, size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-14 h-14"
    };
    const iconSizes = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8"
    };

    return (
        <div className={cn("flex items-center gap-2 group", className)}>
            <div className={cn("relative flex items-center justify-center transition-all", sizeClasses[size])}>
                <div className="absolute inset-0 bg-gold rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-gold/20" />
                <Compass className={cn("relative z-10 text-black group-hover:scale-110 transition-transform duration-500", iconSizes[size])} />
            </div>
            <span className={cn("font-bold tracking-tighter text-white", size === "sm" ? "text-lg" : size === "md" ? "text-2xl" : "text-3xl")}>
                NileVista<span className="text-gold">.</span>
            </span>
        </div>
    );
};
