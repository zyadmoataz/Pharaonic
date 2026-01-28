"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, MapPin, Sparkles, MessageSquare, CreditCard, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <div className="h-[100vh] w-full flex md:items-center md:justify-center bg-[#050505] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            import {Spotlight} from "@/components/ui/spotlight";
            import {BackgroundBeams} from "@/components/ui/background-beams";
            import {motion} from "framer-motion";
            import Link from "next/link";
            import {ShieldCheck, MapPin, Sparkles, MessageSquare, CreditCard, ArrowRight, BarChart3, Users} from "lucide-react";

            export function Hero() {
    return (
            <div className="h-[100vh] w-full flex md:items-center md:justify-center bg-black antialiased relative overflow-hidden group">
                <BackgroundBeams />

                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-[0.4em] mb-12 overflow-hidden relative group/btn">
                            <Sparkles className="w-3 h-3 animate-pulse" />
                            <span>Sovereign Protocol v4.0</span>
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                        </div>

                        <h1 className="text-6xl md:text-[12rem] font-black text-white tracking-tighter leading-[0.8] mb-12 select-none">
                            Egypt, <br />
                            <span className="gold-gradient italic">Upgraded.</span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16 px-4">
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
                                <BarChart3 className="text-gold w-6 h-6 mb-4" />
                                <div className="text-2xl font-black text-white tracking-tighter mb-1">$1.2B</div>
                                <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest leading-tight">Fragmented Capital <br />Abolished Annually</div>
                            </div>
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left relative overflow-hidden">
                                <Users className="text-gold w-6 h-6 mb-4" />
                                <div className="text-2xl font-black text-white tracking-tighter mb-1">74,291</div>
                                <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest leading-tight">Verified Sovereign <br />Transits Completed</div>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 blur-2xl rounded-full" />
                            </div>
                            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left">
                                <ShieldCheck className="text-gold w-6 h-6 mb-4" />
                                <div className="text-2xl font-black text-white tracking-tighter mb-1">0.02%</div>
                                <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest leading-tight">Security Incident <br />Deviation Rate</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="/ai-planner"
                                className="px-16 py-7 bg-white text-black rounded-3xl font-black text-xl hover:bg-gold hover:text-black transition-all shadow-[0_0_80px_rgba(212,175,55,0.2)] group flex items-center gap-4"
                            >
                                Initalize My Strategic Plan <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12">
                            {[
                                { label: "MINISTRY PARTNER", value: "Verified" },
                                { label: "DATA ENCRYPTION", value: "256-Bit" },
                                { label: "LIAISON STATUS", value: "Active" },
                                { label: "NETWORK UPTIME", value: "99.9%" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <span className="text-[10px] text-zinc-600 font-black tracking-[0.2em] mb-1">{item.label}</span>
                                    <span className="text-xs text-gold font-bold">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Background Decorative Graphic */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />
            </div>
            );
}
        </div>
    );
}
