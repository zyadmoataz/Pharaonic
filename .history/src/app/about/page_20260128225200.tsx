"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Users, Target, Rocket, Zap, BarChart3, Lock } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Shield className="w-4 h-4" />
                        Sovereign Authority
                    </motion.div>
                    <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85] uppercase">
                        The <span className="text-gold italic">Pharaonic</span> Oath
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
                        "We are the guardians of your Egyptian gateway. A fusion of ancient hospitality and sovereign-grade logistics."
                    </p>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase">Mission <span className="gold-gradient">Authorization.</span></h2>
                        <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-medium">
                            <p>Pharaonic was founded on a singular directive: to engineer a frictionless gateway to Egyptian heritage. We believe that high-value travel should be defined by discovery, not by administrative or logistical friction.</p>
                            <p>By leveraging real-time intelligence and government-grade liaison protocols, we provide our members with a sovereign layer of security and pricing transparency. We don't just guide you through Egypt; we authorize your experience.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic shadow-[0_0_20px_rgba(255,255,255,0.1)]">100%</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Price Parity Audit</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic shadow-[0_0_20px_rgba(255,255,255,0.1)]">Verified</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Liaison Licensure</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gold/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity" />
                        <div className="aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group-hover:border-gold/30 transition-all">
                            <SafeImage
                                src="/pyramids.webp"
                                alt="Pharaonic Operations Sector"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000 contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-white font-black text-3xl mb-1 tracking-tighter uppercase italic">Sector 01: Giza</h4>
                                <p className="text-xs text-gold uppercase tracking-[0.3em] font-black">Primary Operational Zone</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Zap />, title: "Precision", desc: "AI-driven itineraries optimized for traffic, weather, and open hours." },
                        { icon: <Lock />, title: "Security", desc: "Encrypted payments and vetted security personnel for Elite members." },
                        { icon: <BarChart3 />, title: "Transparency", desc: "No hidden costs. All fees are transparently displayed and authorized." }
                    ].map((v, i) => (
                        <motion.div key={i} className="p-12 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/20 transition-all flex flex-col gap-8">
                            <div className="w-16 h-16 rounded-[2rem] bg-gold/10 flex items-center justify-center text-gold">{v.icon}</div>
                            <div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic uppercase">{v.title}</h3>
                                <p className="text-zinc-500 font-medium leading-relaxed">{v.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
