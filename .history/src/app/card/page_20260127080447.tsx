"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Shield, Smartphone, Globe, ArrowRight, Zap, Info, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const CardTiers = [
    {
        name: "Standard Gold",
        slug: "gold",
        price: "Complimentary with Booking",
        advantages: ["Seamless Cashless Transit", "5% Luxury Dining Credit", "24/7 Standard SOS Protocol"],
        limit: "$2,000",
        color: "from-amber-600 to-amber-900",
        icon: <Shield className="w-6 h-6" />
    },
    {
        name: "Premium Platinum",
        slug: "platinum",
        price: "$49 / Journey",
        advantages: ["Airport Fast-Track Access", "10% Elite Rewards Credit", "Priority Security Concierge"],
        limit: "$10,000",
        color: "from-zinc-400 to-zinc-700",
        icon: <Zap className="w-6 h-6" />
    },
    {
        name: "NileVista Elite",
        slug: "elite",
        price: "$199 / Journey",
        advantages: ["Personal Lifestyle Manager", "Uncapped Liquidity Access", "Government Liaison Protocol"],
        limit: "Sovereign / Uncapped",
        color: "from-gold to-yellow-900",
        icon: <CreditCard className="w-6 h-6" />
    }
];

const CardPage = () => {
    const [selectedTier, setSelectedTier] = useState("gold");

    const activeTier = CardTiers.find(t => t.slug === selectedTier) || CardTiers[0];

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                            <Lock className="w-3 h-3" />
                            Monetary Security Protocol v5.0
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase italic">
                            Amnesty From <br /><span className="gold-gradient">The Friction.</span>
                        </h1>
                        <p className="text-zinc-500 text-xl leading-relaxed max-w-xl font-medium italic">
                            "Navigating Cairo with physical currency is an obsolete invitation to systemic friction. NileVista cards grant you absolute digital authority, shielding your assets while unveiling the spirit of the Nile."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button
                                onClick={() => window.location.href = '/ai-planner'}
                                className="px-12 py-6 bg-gold text-black font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-2xl shadow-gold/20 uppercase tracking-widest text-sm"
                            >
                                START AI PLANNING <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <motion.div
                            key={selectedTier}
                            initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className={cn(
                                "relative z-10 w-full max-w-md mx-auto aspect-[1.58/1] rounded-[3rem] p-12 shadow-2xl border border-white/20 overflow-hidden bg-gradient-to-br",
                                activeTier.color
                            )}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
                            <div className="flex justify-between items-start mb-16">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center border border-white/20 backdrop-blur-md">
                                        <div className="w-6 h-6 bg-gold rounded-sm rotate-45" />
                                    </div>
                                    <span className="text-white font-black tracking-[0.3em] text-[10px] uppercase">NileVista Sovereign</span>
                                </div>
                                <Shield className="text-white/40 w-10 h-10" />
                            </div>
                            <div className="text-3xl text-white font-mono tracking-[0.2em] mb-12 drop-shadow-2xl">
                                **** **** **** {selectedTier === 'gold' ? '8274' : selectedTier === 'platinum' ? '1109' : '0001'}
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-white/50 uppercase font-black tracking-widest mb-1">{activeTier.name}</div>
                                    <div className="text-lg text-white font-black tracking-tight uppercase italic">Elite Voyager</div>
                                </div>
                                <Smartphone className="w-8 h-8 text-white/40" />
                            </div>

                            {/* Scanning Animation */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-1 bg-white/20 blur-sm pointer-events-none"
                            />
                        </motion.div>

                        {/* Aura Shadow */}
                        <div className={cn("absolute inset-0 blur-[100px] opacity-20 transition-all", activeTier.color)} />
                    </div>
                </div>

                {/* Tiers section */}
                <div className="space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">Monetary <span className="gold-gradient">Asset Tiers.</span></h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto font-black uppercase tracking-[0.3em] text-[10px]">Strategic security levels calibrated for the ultimate discovery.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CardTiers.map((tier, idx) => (
                            <motion.div
                                key={tier.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedTier(tier.slug)}
                                className={cn(
                                    "group relative cursor-pointer p-12 rounded-[4rem] transition-all flex flex-col items-center text-center overflow-hidden border",
                                    selectedTier === tier.slug ? "bg-white/[0.05] border-gold/50 shadow-2xl shadow-gold/5" : "bg-zinc-950 border-white/5 hover:border-gold/20"
                                )}
                            >
                                <div className={cn("w-20 h-20 rounded-[2.5rem] flex items-center justify-center mb-10 bg-gradient-to-br text-white shadow-2xl", tier.color)}>
                                    {tier.icon}
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">{tier.name}</h3>
                                <p className="text-gold font-black mb-10 tracking-[0.2em] uppercase text-sm">{tier.price}</p>

                                <ul className="space-y-6 mb-12 text-left w-full flex-1">
                                    {tier.advantages.map(adv => (
                                        <li key={adv} className="flex items-center gap-4 text-xs text-zinc-500 font-black uppercase tracking-tight">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                            {adv}
                                        </li>
                                    ))}
                                    <li className="pt-6 border-t border-white/5 text-[10px] text-zinc-700 uppercase font-black tracking-[0.3em] text-center">
                                        Liquidity Limit: {tier.limit}
                                    </li>
                                </ul>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = `/checkout?type=card&tier=${tier.slug}`;
                                    }}
                                    className={cn(
                                        "w-full py-6 rounded-2xl font-black uppercase tracking-widest transition-all text-[10px]",
                                        selectedTier === tier.slug ? "bg-gold text-black shadow-xl shadow-gold/20" : "bg-white/5 text-zinc-600 border border-white/5 hover:bg-white/10"
                                    )}
                                >
                                    {selectedTier === tier.slug ? "PROCEED TO AUTHORIZATION" : "SELECT PROTOCOL"}
                                </button>

                                <div className="absolute top-0 right-0 p-8 text-white/5 text-8xl font-black select-none italic">{idx + 1}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="p-16 md:p-24 rounded-[5rem] bg-zinc-950/50 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                    <div className="space-y-6 max-w-2xl text-center md:text-left z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">Why NileVista <span className="gold-gradient">Monetary Protocol?</span></h2>
                        <p className="text-zinc-500 text-lg font-medium leading-relaxed italic">
                            Legacy banking in the region often exposes high-value travelers to unnecessary attention and commission leakage. NileVista cards act as your sovereign digital barrier, ensuring you pay only the authorized, audited rate for every luxury asset.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 z-10">
                        <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 text-center group-hover:border-gold/20 transition-all">
                            <div className="text-4xl font-black text-white mb-2 italic">0%</div>
                            <div className="text-[10px] text-zinc-600 uppercase font-black tracking-widest leading-tight">Commission Leakage</div>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 text-center group-hover:border-gold/20 transition-all">
                            <div className="text-4xl font-black text-white mb-2 italic">100%</div>
                            <div className="text-[10px] text-zinc-600 uppercase font-black tracking-widest leading-tight">Anonymity Shield</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;
