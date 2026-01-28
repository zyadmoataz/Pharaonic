"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Globe, Rocket, Zap, Lock, BarChart3, Landmark } from "lucide-react";
import Link from "next/link";

export default function WhyUs() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="text-center space-y-8">
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8]">
                        The <span className="gold-gradient italic">Authorized.</span> Advantage
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic">
                        "Your Egypt experience should be a discovery, not a negotiation."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Disintermediated Pricing",
                            desc: "We remove the 42% mark-up that traditional agencies bake into their packages. You pay the authorized market rate, directly.",
                            icon: <BarChart3 className="w-8 h-8 text-gold" />,
                            data: "-40% Overhead"
                        },
                        {
                            title: "Sovereign Security",
                            desc: "Private SOS monitoring and green-zone routing. Our AI predicts and bypasses informal friction zones in real-time.",
                            icon: <Shield className="w-8 h-8 text-gold" />,
                            data: "0.02% Incident Rate"
                        },
                        {
                            title: "Identity Protection",
                            desc: "Minimize your visibility as a 'tourist'. Our protocols allow you to move with the same digital authority as a local resident.",
                            icon: <Lock className="w-8 h-8 text-gold" />,
                            data: "Full Anonymity"
                        },
                        {
                            title: "Liaison Network",
                            desc: "Direct access to verified Ministry guides and assets. No street-haggle, no commission traps, just pure merit.",
                            icon: <Users className="w-8 h-8 text-gold" />,
                            data: "Verified 2026"
                        }
                    ].map((card, i) => (
                        <div key={i} className="group p-12 rounded-[4rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 text-zinc-800 font-black text-7xl select-none group-hover:text-gold/5 transition-colors">{i + 1}</div>
                            <div className="relative z-10 space-y-10">
                                <div className="flex items-center justify-between">
                                    <div className="w-16 h-16 rounded-[2rem] bg-gold/10 flex items-center justify-center">{card.icon}</div>
                                    <div className="bg-gold/10 px-4 py-1.5 rounded-full text-gold text-[10px] font-black uppercase tracking-widest">{card.data}</div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">{card.title}</h3>
                                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-20 rounded-[4rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Ready for Deployment?</h2>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="/ai-planner" className="px-16 py-7 bg-gold text-black rounded-3xl font-black text-xl hover:bg-white transition-all shadow-2xl shadow-gold/20 uppercase tracking-widest">Initalize Planner</Link>
                        <Link href="/contact" className="px-16 py-7 border border-white/10 text-white rounded-3xl font-black text-xl hover:bg-white/5 transition-all uppercase tracking-widest">Consult Liaison</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
