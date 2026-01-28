"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Shield, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";

export const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020202]">
            {/* Video Modal Overlay */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black isolation-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="https://videos.pexels.com/video-files/4205790/4205790-hd_1920_1080_25fps.mp4" type="video/mp4" />
                            </video>
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all group/close z-50"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </button>
                            <div className="absolute bottom-10 left-10 z-50">
                                <div className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2">Authenticated Intelligence</div>
                                <div className="text-white text-2xl font-black uppercase italic tracking-tighter">Giza Sector Observation</div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Beams Effect... */}
            <div className="absolute inset-0 pointer-events-none">
                {/* ... existing beams ... */}
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent rotate-45 blur-sm" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent -rotate-45 blur-sm" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                                Official Tourism Protocol v2.0
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase italic"
                            >
                                Ancient <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Authority.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-zinc-400 font-medium max-w-xl leading-relaxed border-l-2 border-gold/30 pl-6 italic"
                            >
                                Secure your licenses, verify your transport, and execute your Egyptian itinerary with sovereign-grade logistics.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/ai-planner" className="px-10 py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center gap-2">
                                Launch Planner <ArrowRight className="w-4 h-4" />
                            </Link>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <Play className="w-4 h-4 text-gold fill-current" />
                                View Live Feed
                            </button>
                        </motion.div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                            <div>
                                <div className="text-3xl font-black text-white">4.9/5</div>
                                <div className="text-[10px] uppercase font-bold text-zinc-600 tracking-wider">Security Rating</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <div className="text-3xl font-black text-white">12k+</div>
                                <div className="text-[10px] uppercase font-bold text-zinc-600 tracking-wider">Permits Issued</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative hidden lg:block cursor-pointer group isolation-isolate"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full opacity-40 group-hover:opacity-70 transition-opacity" />
                        <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 scale-100 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl shadow-black bg-zinc-900 transform-gpu backface-hidden" style={{ maskImage: '-webkit-radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
                            <SafeImage
                                src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=2000"
                                alt="Technical Observation"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                priority
                            />
                            {/* Scanning Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0)_50%,rgba(212,175,55,0.1)_50%)] bg-[length:100%_4px] animate-scan opacity-20" />

                            {/* Overlay UI */}
                            <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black text-white uppercase tracking-wider">Live Telemetry</div>
                                        <div className="text-[10px] text-gold font-bold uppercase tracking-widest">Sector 4 ACTIVE</div>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-gold animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes scan {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }
                .animate-scan {
                    animation: scan 10s linear infinite;
                }
            `}</style>
        </div>
    );
};
