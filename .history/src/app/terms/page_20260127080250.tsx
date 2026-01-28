"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Gavel, FileWarning, ShieldAlert, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-6xl mx-auto space-y-32">
                {/* Hero */}
                <div className="border-l border-gold/30 pl-8 md:pl-16 space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-[0.5em]">
                        <Gavel className="w-4 h-4" />
                        Sovereign Agreement v4.2
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                        Operational <br /> <span className="gold-gradient">Protocols.</span>
                    </h1>
                    <p className="text-zinc-500 text-xl font-medium max-w-2xl leading-relaxed italic">
                        "Accessing the NileVista Network constitutes an authorization of the following strategic infrastructure. Our protocols are designed for your absolute luxury and safety."
                    </p>
                </div>

                {/* Core Terms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Scale />, title: "Intelligence Layer", desc: "NileVista is an AI-driven auditing layer, providing intelligence for sovereign and luxury movement." },
                        { icon: <ShieldAlert />, title: "Safety Tiers", desc: "Safe-zones are predicated on real-time data. Deviation from AI paths is at the user's discretion but monitored." },
                        { icon: <AlertTriangle />, title: "Pricing Integrity", desc: "Our providers are rewarded based on transparent audits. Fair market parity is mandated for all transits." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-zinc-950 border border-white/5 flex flex-col gap-6 hover:border-gold/30 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">{item.title}</h3>
                            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Deep Clauses */}
                <div className="space-y-16">
                    {[
                        {
                            num: "01",
                            title: "The Merchant Accord",
                            content: "Any attempt to pay outside the NileVista disintermediated protocol for 'Diamond' or 'Elite' assets constitutes a breach of your verified coverage. Security is only guaranteed within our network."
                        },
                        {
                            num: "02",
                            title: "Predictive Modeling",
                            content: "While our AI Architect uses state-of-the-art predictive data, travel conditions in Greater Cairo can evolve. Users are advised to stay within AI-audited Green Zones for maximum security."
                        },
                        {
                            num: "03",
                            title: "Regulatory Parity",
                            content: "Users must report any merchant deviations immediately. NileVista providers are audited regularly on their 'Integrity Index' to maintain their network authorization."
                        }
                    ].map((section, idx) => (
                        <div key={idx} className="bg-white/[0.02] border border-white/5 p-12 rounded-[3.5rem] grid grid-cols-1 lg:grid-cols-12 gap-12 group hover:bg-gold/[0.02] transition-colors">
                            <div className="lg:col-span-2 border-l-4 border-gold/20 pl-6 group-hover:border-gold transition-colors">
                                <span className="text-7xl font-black text-white/5 italic group-hover:text-gold/20">{section.num}</span>
                            </div>
                            <div className="lg:col-span-10 space-y-6">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic tracking-widest">{section.title}</h2>
                                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Confirmation Action */}
                <div className="p-12 md:p-16 rounded-[4rem] bg-gold/5 border border-gold/20 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px]" />
                    <div className="space-y-4">
                        <div className="text-white font-black text-4xl tracking-tighter uppercase italic">I Accept the Protocol</div>
                        <p className="text-zinc-600 text-sm font-bold uppercase tracking-[0.2em] leading-relaxed max-w-xl">
                            By continuing your journey on the NileVista Network, you accept all terms of professional travel infrastructure and safety.
                        </p>
                    </div>
                    <CheckCircle2 className="w-24 h-24 text-gold animate-pulse shrink-0" />
                </div>
            </div>
        </div>
    );
}
