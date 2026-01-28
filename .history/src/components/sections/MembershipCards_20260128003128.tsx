"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Plane, Gem, Star, Zap, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
    {
        tier: "Voyager",
        price: "$500 USD Deposit",
        description: "Entry-level authorized status via direct Egyptian bank deposit. A win-win for secure transit.",
        features: ["Free Airport Shuttle", "Verified Local SIM", "10% Discount on Trains", "Emergency Liaison Auth"],
        icon: <Zap className="w-8 h-8" />,
        gradient: "from-blue-400 via-indigo-500 to-purple-600",
        shadow: "shadow-indigo-500/20",
        border: "border-indigo-500/30",
        recommendation: "Travel Essential"
    },
    {
        tier: "Elite",
        price: "$2,000 USD Deposit",
        description: "Priority status for frequent explorers. High-frequency transport and museum access.",
        features: ["Unlimited VIP Lounge", "Fast-Track Immigration", "Daily Liaison Briefing", "Free Site Entrances"],
        icon: <Star className="w-8 h-8" />,
        gradient: "from-amber-200 via-yellow-400 to-yellow-600",
        shadow: "shadow-gold/20",
        border: "border-gold/30",
        recommendation: "Most Authorized"
    },
    {
        tier: "Sovereign",
        price: "$10,000 USD Deposit",
        description: "Maximum strategic integration. Full-spectrum security and private logistics.",
        features: ["Private Jet Liaison", "Armed Security Escort", "24/7 Human Handler", "Bank Priority Support"],
        icon: <Shield className="w-8 h-8" />,
        gradient: "from-rose-500 via-red-600 to-red-800",
        shadow: "shadow-red-600/20",
        border: "border-red-600/30",
        recommendation: "Legacy Status"
    }
];

export const MembershipCards = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center space-y-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        <Zap className="w-3 h-3" />
                        Status Recognition Protocol
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.8]"
                    >
                        Economic <span className="text-gold">Sovereignty.</span>
                    </motion.h2>
                    <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-xl italic leading-relaxed">
                        Pharaonic cards are powered by direct deposits into the Egyptian banking sector. This win-win protocol stabilizes the economy while providing you with unparalleled logistics, free transportation, and authorized security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.tier}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "relative group p-8 rounded-[3rem] bg-zinc-950/80 backdrop-blur-xl border-2 hover:scale-105 transition-all duration-500 flex flex-col h-full",
                                card.border,
                                card.shadow
                            )}
                        >
                            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br", card.gradient)} />

                            <div className="flex justify-between items-start mb-8">
                                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br text-black text-2xl shadow-lg", card.gradient)}>
                                    {card.icon}
                                </div>
                                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-black tracking-widest text-zinc-400">
                                    {card.recommendation}
                                </span>
                            </div>

                            <h3 className={cn("text-3xl font-black tracking-tighter uppercase italic mb-2 bg-gradient-to-r bg-clip-text text-transparent", card.gradient)}>
                                {card.tier}
                            </h3>
                            <div className="text-lg font-bold text-white mb-6">{card.price} <span className="text-sm font-medium text-zinc-500">/ Trip Spend</span></div>
                            <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8">{card.description}</p>

                            <div className="space-y-4 mb-8 flex-1">
                                {card.features.map(f => (
                                    <div key={f} className="flex items-center gap-3">
                                        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br", card.gradient)}>
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wide">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:brightness-110 shadow-lg text-black bg-gradient-to-r",
                                card.gradient
                            )}>
                                Apply for Status
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
