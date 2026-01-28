"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Users, Target, Rocket, Zap, BarChart3, Lock } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Shield className="w-4 h-4" />
                        Our Doctrine
                    </motion.div>
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8]">
                        The <span className="gold-gradient italic">Trust.</span> Layer
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                        Guidly isn't a travel agency. It's a meritocratic auditing network for the world's most vibrant tourism corridor.
                    </p>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase">Dismantling the Paradox.</h2>
                        <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-medium">
                            <p>Tourism in Egypt has historically been governed by a "Walking ATM" syndrome—a systemic fragmentation where intermediaries extract value without contribution.</p>
                            <p>We built Guidly to disintermediate this economy. By combining AI-driven price benchmarks with a verified liaison network, we ensure that trust is no longer a luxury—it's the standard infrastructure.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">$1.2B</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Inefficiency Removed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">74k+</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Verified Transits</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[4rem] bg-gold/5 border border-gold/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.02]" />
                            <Globe className="w-64 h-64 text-gold/20 animate-spin-slow" />
                            <div className="absolute bottom-10 inset-x-10 p-10 bg-black/60 backdrop-blur-3xl rounded-[3rem] border border-white/10">
                                <h4 className="text-white font-black text-xl mb-2 tracking-tighter uppercase">Authorized Scale</h4>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">2026 Sovereign Deployment Network</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Zap />, title: "Meritocracy", desc: "Rewarding authorized local providers who maintain non-exclusionary benchmarks." },
                        { icon: <Lock />, title: "Invisibility", desc: "Moving through Egypt with total strategic anonymity using our cashless protocols." },
                        { icon: <BarChart3 />, title: "Transparency", desc: "Real-time auditing of every transaction against authorized central-bank indices." }
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
