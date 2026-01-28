"use client";

import React from "react";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2 group", className)}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-gold/20" />
                <Compass className="relative z-10 text-black w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
                Guidly<span className="text-gold">.</span>
            </span>
        </div>
    );
};
