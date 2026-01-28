"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className, size = "md" }: { className?: string, size?: "sm" | "md" | "lg" }) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-14 h-14"
    };

    return (
        <div className={cn("flex items-center gap-2 group", className)}>
            <div className={cn("relative flex items-center justify-center transition-all", sizeClasses[size])}>
                {/* Golden Glow */}
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full group-hover:bg-gold/40 transition-all duration-700" />

                {/* Geometric Pharaoh / Eye of Horus Hybrid SVG */}
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full relative z-10 drop-shadow-2xl"
                >
                    {/* Head / Mask Outline */}
                    <path
                        d="M50 5 L85 30 L85 70 L50 95 L15 70 L15 30 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gold/20"
                    />

                    {/* Stylized Pharaonic Headdress (Nemes) Lines */}
                    <path d="M50 15 L80 35 V65 L50 85 L20 65 V35 L50 15Z" fill="url(#gold-gradient)" />
                    <path d="M30 40 Q50 30 70 40" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M35 55 Q50 45 65 55" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M45 70 Q50 65 55 70" stroke="black" strokeWidth="2" strokeLinecap="round" />

                    {/* Strategic Eye Symbol */}
                    <circle cx="50" cy="50" r="12" fill="black" />
                    <circle cx="50" cy="50" r="5" fill="#D4AF37" className="animate-pulse" />

                    <defs>
                        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="50%" stopColor="#F9E231" />
                            <stop offset="100%" stopColor="#8A6623" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <span className={cn("font-black tracking-tighter text-white uppercase italic", size === "sm" ? "text-lg" : size === "md" ? "text-2xl" : "text-3xl")}>
                NileVista<span className="text-gold">.</span>
            </span>
        </div>
    );
};
