"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Sparkles, ArrowRight, MapPin, Compass } from "lucide-react";

export function Hero() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black antialiased relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
            <BackgroundBeams />

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em] mb-8 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gold/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>Experience Egypt v5.0</span>
                    </div>

                    <h1 className="text-5xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85] mb-8 select-none">
                        Unveil the <br />
                        <span className="gold-gradient italic">Hidden Nile.</span>
                    </h1>

                    <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                        NileVista is your luxury gateway to the ancient world. Advanced AI-driven itineraries,
                        sovereign safety protocols, and exclusive access to Egypt's most guarded treasures.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-20">
                        <Link
                            href="/ai-planner"
                            className="px-12 py-6 bg-gold text-black rounded-2xl font-black text-lg hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] flex items-center gap-4 group"
                        >
                            Start AI Planning <Compass className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                        </Link>
                        <Link
                            href="/recommendations"
                            className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center gap-4 group"
                        >
                            View Curated Tours <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-12">
                        {[
                            { icon: <MapPin className="w-4 h-4" />, label: "OPERATIONAL CITIES", value: "All Egyptian Sectors" },
                            { icon: <ShieldCheck className="w-4 h-4" />, label: "SECURITY RATING", value: "Sovereign Elite" },
                            { icon: <Sparkles className="w-4 h-4" />, label: "PLATFORM STATUS", value: "Operational" },
                            { icon: <ArrowRight className="w-4 h-4" />, label: "LIAISON UPTIME", value: "99.9% Efficiency" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="flex items-center gap-2 text-zinc-600 mb-2">
                                    {item.icon}
                                    <span className="text-[10px] font-black tracking-[0.2em]">{item.label}</span>
                                </div>
                                <span className="text-sm text-gold font-bold italic tracking-tighter">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
    );
}
