"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Shield, Smartphone, Globe, ArrowRight, Zap, Info, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const CardTiers = [
    {
        name: "Gold Standard",
        slug: "gold",
        price: "Free with Plan",
        advantages: ["Cashless Transit Scopes", "5% Dining Cashback", "Standard Security SOS"],
        limit: "$2,000",
        color: "from-amber-600 to-amber-900",
        icon: <Shield className="w-6 h-6" />
    },
    {
        name: "Platinum Elite",
        slug: "platinum",
        price: "$49 / Month",
        advantages: ["Airport Fast-Track", "10% Luxury Cashback", "Priority Security Guardian"],
        limit: "$10,000",
        color: "from-zinc-400 to-zinc-700",
        icon: <Zap className="w-6 h-6" />
    },
    {
        name: "Global Sovereign",
        slug: "sovereign",
        price: "$199 / Month",
        advantages: ["Personal Concierge", "Uncapped Transactions", "Ministry Liaison Service"],
        limit: "Uncapped",
        color: "from-gold to-yellow-900",
        icon: <CreditCard className="w-6 h-6" />
    }
];

const CardPage = () => {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-[0.2em]">
                            <Lock className="w-3 h-3" />
                            Monetary Security Protocol
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
                            Abolish <span className="gold-gradient">The Hassle.</span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-xl font-medium">
                            Walking with cash in Cairo is an invitation to fragmentation. Our sovereign cards allow you to move with total invisibility, bypassing the "Walking ATM" syndrome.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button
                                onClick={() => window.location.href = '/ai-planner'}
                                className="px-10 py-5 bg-gold text-black font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-2xl shadow-gold/20"
                            >
                                Initalize My Strategic Plan <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-zinc-600 text-sm italic">*You must have an active personalized itinerary to authorize a Guidly Card.</p>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 50 }}
                            animate={{ opacity: 1, scale: 1, rotate: -5, y: 0 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="relative z-10 w-full max-w-md mx-auto aspect-[1.58/1] rounded-[2.5rem] bg-gradient-to-br from-gold to-yellow-900 p-12 shadow-[0_50px_100px_-20px_rgba(212,175,55,0.3)] border border-white/20 overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full" />
                            <div className="flex justify-between items-start mb-16">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center border border-white/20 backdrop-blur-md">
                                        <span className="text-white font-black text-xl">G</span>
                                    </div>
                                    <span className="text-white font-black tracking-[0.3em] text-sm uppercase">Guidly</span>
                                </div>
                                <Shield className="text-white/40 w-10 h-10" />
                            </div>
                            <div className="text-3xl text-white font-mono tracking-[0.2em] mb-12 drop-shadow-lg">
                                **** **** **** 8274
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-black/50 uppercase font-black tracking-widest mb-1">Elite Cardholder</div>
                                    <div className="text-lg text-white font-black tracking-tight">SOVEREIGN VOYAGER</div>
                                </div>
                                <Smartphone className="w-8 h-8 text-black/40" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tiers section */}
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic">Select Your Asset Tier</h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto">Different levels of protection for different levels of ambition. Choose wisely.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CardTiers.map((tier, idx) => (
                            <motion.div
                                key={tier.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-[3.5rem] hover:border-gold/30 transition-all flex flex-col items-center text-center overflow-hidden"
                            >
                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity", tier.color)} />
                                <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 bg-gradient-to-br text-white shadow-2xl", tier.color)}>
                                    {tier.icon}
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">{tier.name}</h3>
                                <p className="text-gold font-bold mb-8 italic">{tier.price}</p>
                                <ul className="space-y-4 mb-10 text-left w-full">
                                    {tier.advantages.map(adv => (
                                        <li key={adv} className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                            {adv}
                                        </li>
                                    ))}
                                    <li className="pt-4 border-t border-white/5 text-xs text-zinc-600 uppercase font-bold tracking-widest text-center">
                                        Strategic Limit: {tier.limit}
                                    </li>
                                </ul>
                                <button className="w-full py-5 bg-white/[0.03] text-white border border-white/10 rounded-2xl font-black hover:bg-gold hover:text-black hover:border-gold transition-all">
                                    Authorize Tier
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;
