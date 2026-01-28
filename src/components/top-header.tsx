"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export function TopHeader() {
    return (
        <div className="w-full bg-gold text-black py-2.5 px-4 overflow-hidden relative group">
            <div className="max-w-7xl mx-auto flex justify-center items-center gap-3 text-sm font-bold tracking-tight">
                <MessageSquare className="w-4 h-4 animate-bounce" />
                <span>Help us architect the future of tourism. </span>
                <Link href="/feedback" className="flex items-center gap-1 hover:underline underline-offset-4 decoration-2">
                    Fill Global Intelligence Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
        </div>
    );
}
