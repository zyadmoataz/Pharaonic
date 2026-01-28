"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Sparkles, ArrowRight, MapPin, Compass } from "lucide-react";

export function Hero() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8
            }
        })
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#020202] antialiased relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[3000ms]"
                    alt="Sovereign Egypt"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202]" />
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gold" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>

            <BackgroundBeams />

            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-32 md:pt-0">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-12 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gold/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>Authorized Digital Liaison v2.4</span>
                    </motion.div>

                    <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-black text-white tracking-tighter leading-[0.85] mb-12 select-none uppercase italic">
                        <motion.span custom={1} variants={textVariants} initial="hidden" animate="visible">Experience</motion.span> <br />
                        <motion.span custom={2} variants={textVariants} initial="hidden" animate="visible" className="gold-gradient">The Sovereign.</motion.span>
                    </h1>

                    <motion.p
                        custom={3} variants={textVariants} initial="hidden" animate="visible"
                        className="max-w-2xl text-zinc-500 text-lg md:text-2xl font-medium mb-16 leading-relaxed italic"
                    >
                        "Bypass the systemic friction of mass tourism. NileVista provides bespoke itineraries and authorized disintermediation for the elite voyagers."
                    </motion.p>

                    <motion.div
                        custom={4} variants={textVariants} initial="hidden" animate="visible"
                        className="flex flex-col sm:flex-row gap-6 mb-24"
                    >
                        <Link
                            href="/ai-planner"
                            className="px-10 md:px-16 py-6 md:py-8 bg-gold text-black rounded-3xl font-black text-lg md:text-xl hover:bg-white transition-all shadow-[0_0_80px_rgba(212,175,55,0.2)] flex items-center justify-center gap-6 group relative overflow-hidden"
                        >
                            <span className="relative z-10">INITIALIZE PLANNER</span>
                            <Compass className="w-6 h-6 md:w-8 h-8 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                        <Link
                            href="/recommendations"
                            className="px-10 md:px-16 py-6 md:py-8 bg-white/5 border border-white/10 text-white rounded-3xl font-black text-lg md:text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-6 group"
                        >
                            <span>CURATED PATHS</span>
                            <ArrowRight className="w-6 h-6 md:w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full border-t border-white/5 pt-16"
                    >
                        {[
                            { icon: <MapPin className="w-4 h-4" />, label: "GREEN ZONES", value: "Verified Paths" },
                            { icon: <ShieldCheck className="w-4 h-4" />, label: "SECURITY TIER", value: "Elite Protocol" },
                            { icon: <Sparkles className="w-4 h-4" />, label: "STATUS", value: "Authorized Early Access" },
                            { icon: <Compass className="w-4 h-4" />, label: "BYPASS LOGIC", value: "Direct Intermediation" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left group">
                                <div className="flex items-center gap-3 text-zinc-600 mb-2 md:mb-3 group-hover:text-gold transition-colors">
                                    <div className="p-2 rounded-lg bg-white/5">{item.icon}</div>
                                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase">{item.label}</span>
                                </div>
                                <span className="text-sm md:text-md text-white font-black italic tracking-tighter uppercase group-hover:text-gold transition-colors">{item.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-20" />
        </div>
    );
}
