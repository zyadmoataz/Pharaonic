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
        <section className="py-32 relative overflow-hidden bg-black">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.4em]"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Economic Sovereignty Protocol 2026
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-[9rem] font-black text-white tracking-tighter uppercase leading-[0.8] italic"
                        >
                            The <span className="gold-gradient">Card.</span>
                        </motion.h2>
                        <p className="text-zinc-500 font-medium max-w-3xl mx-auto text-xl italic leading-relaxed border-x border-gold/10 px-12">
                            "Eliminate the liability of physical currency. By depositing USD into the Egyptian banking sector, you stabilize the node while gaining absolute logistical safety. A win-win protocol for the modern voyager."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.tier}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "relative group p-10 rounded-[4rem] bg-zinc-950 border-2 hover:translate-y-[-12px] transition-all duration-700 flex flex-col shadow-2xl overflow-hidden",
                                card.border,
                                card.shadow
                            )}
                        >
                            {/* Animated Background Gradient Overlay */}
                            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-gradient-to-br", card.gradient)} />

                            <div className="flex justify-between items-start mb-12">
                                <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center bg-gradient-to-br text-black text-2xl shadow-xl", card.gradient)}>
                                    {card.icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{card.status}</div>
                                    <div className="flex items-center gap-1 text-white font-black uppercase text-xs mt-1">
                                        Layer 01 <CreditCard className="w-3 h-3 text-gold" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-10">
                                <h3 className={cn("text-5xl font-black tracking-tighter uppercase italic leading-none transition-colors", i === 1 ? "text-gold" : "text-white")}>
                                    {card.tier}
                                </h3>
                                <div className="text-2xl font-black text-white/50 font-mono tracking-tighter flex items-center gap-2">
                                    <Landmark className="w-5 h-5" />
                                    {card.price}
                                </div>
                            </div>

                            <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-12 border-l-2 border-gold/20 pl-6 italic">
                                {card.description}
                            </p>

                            <div className="space-y-4 mb-14 flex-1">
                                {card.features.map(f => (
                                    <div key={f} className="flex items-center gap-4 group/item">
                                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-white/5 group-hover/item:border-gold/30 transition-colors")}>
                                            <Check className="w-3 h-3 text-gold" />
                                        </div>
                                        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest leading-none group-hover/item:text-white transition-colors">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 border-t border-white/5 space-y-8">
                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mb-2">Protocol Utility</div>
                                    <div className="text-[10px] text-zinc-400 font-bold leading-relaxed">
                                        {card.logic}
                                    </div>
                                </div>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button className={cn(
                                            "w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:scale-[1.02] shadow-2xl text-black flex items-center justify-center gap-3",
                                            i === 1 ? "bg-gold" : "bg-white hover:bg-gold"
                                        )}>
                                            Login to Initialize Deposit <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <button
                                        onClick={() => window.location.href = `/checkout?type=card&tier=${card.tier}&price=${card.price.replace(/[^0-9]/g, '')}`}
                                        className={cn(
                                            "w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:scale-[1.02] shadow-2xl text-black flex items-center justify-center gap-3",
                                            i === 1 ? "bg-gold" : "bg-white hover:bg-gold"
                                        )}
                                    >
                                        Initialize Secure Deposit <ArrowRight className="w-4 h-4" />
                                    </button>
                                </SignedIn>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
