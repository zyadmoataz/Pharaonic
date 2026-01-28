"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

export function TopHeader() {
    return (
        <div className="w-full bg-black border-b border-white/5 text-zinc-500 py-1.5 px-4 overflow-hidden relative z-[70]">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase">
                {/* Left Status */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)] animate-pulse" />
                        <span className="text-white">System Status: <span className="text-gold">Authorized</span></span>
                    </div>
                    <div className="hidden md:block w-px h-3 bg-white/10" />
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-zinc-600">Secure Access:</span>
                        <span className="text-zinc-300 italic">256-bit Proto3</span>
                    </div>
                </div>

                {/* Center Marquee Intelligence Feed */}
                <div className="flex-1 flex justify-center overflow-hidden mx-10 group/marquee">
                    <div className="flex gap-12 whitespace-nowrap animate-scroll hover:[animation-play-state:paused] cursor-default">
                        {[
                            "Airport Sector [CAI]: Normal Flow",
                            "Giza Protocol: High Traffic Observed",
                            "Luxor Heritage Gates: Optimized Entry Path Active",
                            "Currency Buffer: +0.02% Stability Peak",
                            "Weather Intelligence: 24°C High Contrast",
                            "Sovereign Permit Clearance: 19ms Average",
                            "Global Transit Grid: Fully Operational"
                        ].map((msg, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-zinc-700">•</span>
                                <span className="group-hover/marquee:text-gold transition-colors">{msg}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-3">
                        <span className="text-zinc-600 italic">Global Time:</span>
                        <span className="text-zinc-300 uppercase tracking-tighter">EG {new Date().toLocaleTimeString('en-EG', { hour12: false, hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Cairo' })}</span>
                    </div>
                    <Link href="/feedback" className="text-white hover:text-gold flex items-center gap-2 transition-all group/link">
                        <span className="hidden sm:inline italic">Intel Feedback</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
        </div>
    );
}
