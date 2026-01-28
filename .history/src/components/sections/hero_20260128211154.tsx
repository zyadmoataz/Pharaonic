"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";

export const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
            {/* Ambient Lighting - Hero Specific */}
            <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold/[0.02] blur-[150px] rounded-full pointer-events-none animate-pulse" />

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-zinc-950/98 backdrop-blur-[50px] flex items-center justify-center p-6 md:p-12"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
                                <source src="/hero.mp4" type="video/mp4" />
                            </video>
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-zinc-950/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group/close z-50"
                            >
                                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                            </button>
                            <div className="absolute bottom-12 left-12 z-50 space-y-2">
                                <div className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Tactical Observation Deck</div>
                                <h3 className="text-white text-3xl font-bold uppercase tracking-tight">Giza Sector - Live Feed</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl group cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-gold transition-colors duration-500">
                                Sovereign Protocol Active v2.0
                            </span>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-6xl md:text-9xl font-bold text-white tracking-tight leading-[0.9] uppercase"
                            >
                                Ancient <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Logistics.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-lg md:text-xl text-zinc-400 font-medium max-w-xl leading-relaxed uppercase tracking-widest"
                            >
                                Secure your licenses, verify your transport, and execute your Egyptian protocol with <span className="text-zinc-200">sovereign-grade intelligence.</span>
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex flex-wrap gap-4">
                                <Link href="/recommendations" className="px-10 py-5 bg-white text-zinc-950 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold transition-all duration-700 shadow-2xl flex items-center gap-4 cursor-pointer">
                                    Verified Plans <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="/ai-generator" className="px-10 py-5 bg-zinc-900 text-white border border-white/10 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all duration-700 flex items-center gap-4 cursor-pointer">
                                    AI Discovery <Sparkles className="w-4 h-4 text-gold" />
                                </Link>
                            </div>
                        </motion.div>

                        <div className="flex items-center gap-12 pt-12 border-t border-white/5">
                            <div className="space-y-1">
                                <div className="text-4xl font-black text-white tracking-tighter italic">4.9/5</div>
                                <div className="text-[9px] uppercase font-bold text-zinc-600 tracking-[0.3em]">Security Index</div>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div className="space-y-1">
                                <div className="text-4xl font-black text-white tracking-tighter italic">12k+</div>
                                <div className="text-[9px] uppercase font-bold text-zinc-600 tracking-[0.3em]">Permits Cleared</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block cursor-pointer group"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
                        <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                            <SafeImage
                                src="/pyramids.webp"
                                alt="Technical Observation"
                                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2000ms]"
                                priority
                            />
                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 shadow-[0_0_20px_2px_rgba(212,175,55,0.5)] animate-scan z-20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                            {/* Overlay UI */}
                            <div className="absolute bottom-8 left-8 right-8 p-8 bg-zinc-950/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center text-zinc-950 shadow-lg shadow-gold/20">
                                        <Play className="w-4 h-4 fill-current ml-1" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Sector 4 Observation</div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                            <div className="text-[8px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Live Feed Active</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* High-tech accents */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-gold/30 rounded-tr-[3rem] pointer-events-none" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-gold/30 rounded-bl-[3rem] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
