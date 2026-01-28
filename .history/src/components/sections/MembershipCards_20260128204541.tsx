"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Star, Zap, Check, ArrowRight, CreditCard, Landmark, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const cards = [
    {
        tier: "Voyager",
        status: "Essential Access",
        price: "$500 USD Deposit",
        description: "The primary protocol for cashless exploration. Ideal for solo transits and city-wide mobility.",
        features: [
            "Free Licensed Transportation",
            "Emergency Liaison Access",
            "Verified Digital ID Wallet",
            "5% Cashback on All Sectors"
        ],
        icon: <Zap className="w-8 h-8" />,
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
        shadow: "shadow-blue-500/20",
        border: "border-blue-500/30",
        logic: "Converts cash-risk into digital safety. Direct bank integration."
    },
    {
        tier: "Elite",
        status: "Priority Protocol",
        price: "$2,500 USD Deposit",
        description: "Enhanced status for the strategic voyager. High-frequency transport and museum priority.",
        features: [
            "Armed Security Protocol on Call",
            "Priority Museum Entrances",
            "Daily Liaison Briefings",
            "Unlimited Airport Lounges"
        ],
        icon: <Star className="w-8 h-8" />,
        gradient: "from-amber-200 via-yellow-400 to-yellow-600",
        shadow: "shadow-gold/20",
        border: "border-gold/30",
        logic: "Strategic capital injection for maximum logistical privilege."
    },
    {
        tier: "Sovereign",
        status: "Executive Status",
        price: "$10,000 USD Deposit",
        description: "The ultimate implementation of Pharaonic status. Full-spectrum security and private assets.",
        features: [
            "Private Jet Liaison Hub",
            "Full-Time Security Escort",
            "24/7 Human Intelligence Handler",
            "Direct Central Bank Concierge"
        ],
        icon: <Shield className="w-8 h-8" />,
        gradient: "from-rose-500 via-red-600 to-red-800",
        shadow: "shadow-red-600/20",
        border: "border-red-600/30",
        logic: "Total economic integration. Reserved for high-value strategic deployments."
    }
];

export const MembershipCards = () => {
    return (
        <section className="py-48 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gold/[0.02] blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center space-y-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400"
                    >
                        <ShieldCheck className="w-4 h-4 text-gold" />
                        Economic Sovereignty Protocol 2026
                    </motion.div>

                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8] italic"
                        >
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Account.</span>
                        </motion.h2>
                        <p className="text-zinc-500 font-medium max-w-3xl mx-auto text-lg md:text-xl uppercase tracking-widest leading-relaxed border-x border-white/5 px-16 italic">
                            "Eliminate liquid liability. By architecting your capital into the Egyptian sector, you stabilize the node while gaining absolute logistical safety. <span className="text-zinc-300">Total parity engineering.</span>"
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.tier}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={cn(
                                "relative group p-12 rounded-[4rem] bg-zinc-950 border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col shadow-2xl overflow-hidden",
                                i === 1 && "border-gold/20"
                            )}
                        >
                            <div className="flex justify-between items-start mb-16">
                                <div className={cn(
                                    "w-24 h-24 rounded-3xl flex items-center justify-center text-zinc-950 text-2xl shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3",
                                    i === 0 ? "bg-zinc-200" : i === 1 ? "bg-gold" : "bg-white"
                                )}>
                                    {card.icon}
                                </div>
                                <div className="text-right space-y-1">
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">{card.status}</div>
                                    <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest justify-end">
                                        Layer 0{i + 1} <CreditCard className="w-3 h-3 text-gold" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-12">
                                <h3 className={cn(
                                    "text-5xl font-black tracking-tighter uppercase italic leading-none transition-colors duration-500",
                                    i === 1 ? "text-gold" : "text-white"
                                )}>
                                    {card.tier}
                                </h3>
                                <div className="text-2xl font-black text-zinc-400 font-mono tracking-tighter flex items-center gap-3">
                                    <Landmark className="w-5 h-5 text-gold/50" />
                                    {card.price}
                                </div>
                            </div>

                            <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed mb-16 border-l border-gold/30 pl-8 italic">
                                {card.description}
                            </p>

                            <div className="space-y-6 mb-20 flex-1">
                                {card.features.map(f => (
                                    <div key={f} className="flex items-center gap-5 group/item">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-white/10 bg-white/5 group-hover/item:border-gold/50 transition-colors duration-500">
                                            <Check className="w-3 h-3 text-gold" />
                                        </div>
                                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none group-hover/item:text-white transition-colors duration-500">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-12 border-t border-white/5 space-y-10">
                                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 group-hover:border-gold/10 transition-colors duration-700">
                                    <div className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.4em] mb-3">Protocol Utility</div>
                                    <div className="text-[10px] text-zinc-500 font-bold leading-relaxed uppercase tracking-widest">
                                        {card.logic}
                                    </div>
                                </div>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button className={cn(
                                            "w-full py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-700 hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4",
                                            i === 1 ? "bg-gold text-zinc-950" : "bg-white text-zinc-950 hover:bg-gold"
                                        )}>
                                            Initialize Transit Access <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <button
                                        onClick={() => window.location.href = `/checkout?type=card&tier=${card.tier}&price=${card.price.replace(/[^0-9]/g, '')}`}
                                        className={cn(
                                            "w-full py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-700 hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4",
                                            i === 1 ? "bg-gold text-zinc-950" : "bg-white text-zinc-950 hover:bg-gold"
                                        )}
                                    >
                                        Execute Deposit Protocol <ArrowRight className="w-4 h-4" />
                                    </button>
                                </SignedIn>
                            </div>

                            {/* Accent Gradients */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/[0.03] blur-[80px] rounded-full group-hover:bg-gold/[0.08] transition-colors duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
