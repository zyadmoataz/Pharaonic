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
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase">Authority & Trust.</h2>
                        <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-medium">
                            <p>Visiting Egypt is a privilege that comes with complexities. At Pharaonic, we dissolve these complexities through authorized protocols.</p>
                            <p>We are the only platform offering direct government-approved licensing for drones, 24/7 security monitoring, and verified luxury access. Your safety is not a goal; it's our baseline.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">100%</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Money Back Guarantee</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">Verified</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Government Protocols</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                            <SafeImage
                                src="https://images.unsplash.com/photo-1544252890-a1e7e8e27ca6?auto=format&fit=crop&q=80&w=1200"
                                alt="Pharaonic Team"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <h4 className="text-white font-black text-2xl mb-1 tracking-tighter uppercase italic">Pharaonic Operations</h4>
                                <p className="text-xs text-gold uppercase tracking-[0.2em] font-black">Cairo HQ Command</p>
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
