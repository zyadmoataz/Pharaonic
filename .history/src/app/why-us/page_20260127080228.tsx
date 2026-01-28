"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Globe, Rocket, Zap, Lock, BarChart3, Landmark, Users } from "lucide-react";
import Link from "next/link";

export default function WhyUs() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                <div className="text-center space-y-8">
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase">
                        The <span className="gold-gradient italic">NileVista</span> Advantage
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic">
                        "Your Egyptian discovery should be defined by wonder, not by negotiation."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Luxury Disintermediation",
                            desc: "We remove the 40%+ mark-ups hidden in traditional travel agencies. You pay the authorized market rate for luxury assets, directly.",
                            icon: <BarChart3 className="w-8 h-8 text-gold" />,
                            data: "Direct Pricing"
                        },
                        {
                            title: "Elite Safety Protocol",
                            desc: "Real-time green-zone routing and 24/7 digital monitoring. Our AI predicts and bypasses friction zones instantly.",
                            icon: <Shield className="w-8 h-8 text-gold" />,
                            data: "0.01% Risk Delta"
                        },
                        {
                            title: "Sovereign Anonymity",
                            desc: "Minimize your footprint as a high-value traveler. Move through Egypt with the same digital authority as a local resident.",
                            icon: <Lock className="w-8 h-8 text-gold" />,
                            data: "Total Privacy"
                        },
                        {
                            title: "Curated Expert Network",
                            desc: "Direct access to pre-vetted, elite guides and luxury assets. No street-hagglers, no commission traps, just pure merit.",
                            icon: <Users className="w-8 h-8 text-gold" />,
                            data: "Verified Experts"
                        },
                        {
                            title: "AI-Driven Precision",
                            desc: "Our algorithms analyze thousands of local pulse points to architect the most efficient and stunning transit paths.",
                            icon: <Zap className="w-8 h-8 text-gold" />,
                            data: "AI Logistics"
                        },
                        {
                            title: "Heritage Authorized",
                            desc: "Exclusive access to cultural sites and experiences often restricted to the public through our official liaison channels.",
                            icon: <Landmark className="w-8 h-8 text-gold" />,
                            data: "VIP Access"
                        }
                    ].map((card, i) => (
                        <div key={i} className="group p-12 rounded-[4rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 p-12 text-zinc-900 font-black text-9xl select-none group-hover:text-gold/5 transition-colors z-0 pointer-events-none truncate">{i + 1}</div>
                            <div className="relative z-10 space-y-10">
                                <div className="flex items-center justify-between">
                                    <div className="w-16 h-16 rounded-[2rem] bg-gold/10 flex items-center justify-center text-gold">{card.icon}</div>
                                    <div className="bg-gold/10 px-4 py-1.5 rounded-full text-gold text-[10px] font-black uppercase tracking-widest relative z-20 shadow-xl shadow-black">{card.data}</div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">{card.title}</h3>
                                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="space-y-16 py-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">The Market <span className="gold-gradient">Gap.</span></h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">A forensic side-by-side analysis of the NileVista Protocol.</p>
                    </div>

                    <div className="overflow-x-auto rounded-[3.5rem] border border-white/5 bg-[#050505] p-2 hover:border-gold/20 transition-all shadow-2xl">
                        <table className="w-full text-left border-collapse overflow-hidden rounded-[3rem]">
                            <thead>
                                <tr className="bg-white/[0.02]">
                                    <th className="py-10 px-10 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5">Feature</th>
                                    <th className="py-10 px-10 text-gold font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5 bg-gold/5">NileVista Network</th>
                                    <th className="py-10 px-10 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5">Legacy Agencies</th>
                                    <th className="py-10 px-10 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5">Street Hustle</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { f: "Pricing Model", g: "Audited Market Rates", t: "Double-Digit Commissions", s: "Variable (Haggle-Based)" },
                                    { f: "Safety Protocol", g: "AI Green-Zone Routing", t: "Standard Police Escort", s: "None (High Risk)" },
                                    { f: "Asset Quality", g: "Meritocratic Audit", t: "Contracted Sub-Agents", s: "Unverified / Random" },
                                    { f: "Identity", g: "Strategic Invisibility", t: "Group Tourist Status", s: "Target (Walking ATM)" },
                                    { f: "Fee Transparency", g: "100% Disintermediated", t: "Hidden Overheads", s: "Arbitrary" },
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                                        <td className="py-10 px-10 text-white font-black text-xs uppercase tracking-widest">{row.f}</td>
                                        <td className="py-10 px-10 text-gold font-black text-sm uppercase tracking-tighter italic bg-gold/[0.02]">{row.g}</td>
                                        <td className="py-10 px-10 text-zinc-600 font-medium text-xs uppercase tracking-tight">{row.t}</td>
                                        <td className="py-10 px-10 text-zinc-700 font-medium text-xs uppercase tracking-tight">{row.s}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
