"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export function TopHeader() {
    return (
        <div className="w-full bg-zinc-950 border-b border-white/5 text-zinc-400 py-2.5 px-4 overflow-hidden relative group z-[60]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span>Your Ultimate Guide to Egypt</span>
                </div>
                <div className="hidden md:block w-px h-3 bg-white/10" />
                <div className="flex items-center gap-1.5">
                    <span className="text-zinc-500">Global Launch Protocol:</span>
                    <Link href="/feedback" className="text-white hover:text-gold flex items-center gap-1 transition-colors">
                        Active Feedback Loop <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
}
