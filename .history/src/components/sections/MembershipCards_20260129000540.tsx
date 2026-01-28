"use client";

import { motion } from "framer-motion";
import { Shield, Star, Zap, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const cards = [
    {
        tier: "Voyager",
        status: "Digital Base",
        price: "$199",
        description: "Essential sovereign identity for the modern traveler. Automated logistics and connectivity.",
        features: [
            "Official 5G Tourist SIM (100GB)",
            "Digital ID Wallet & Visa Sync",
            "24/7 Emergency Support Liaison",
            "Automated VAT Refund Protocol"
        ],
        icon: <Zap className="w-8 h-8" />,
        gradient: "from-zinc-500/10 via-zinc-500/5 to-transparent",
        accent: "bg-zinc-500",
        logic: "Entry-level digital bridge for short-term visitors."
    },
    {
        tier: "Premium",
        status: "Priority Logistics",
        price: "$899",
        description: "Advanced maneuverability through the Egyptian sector. Fast-track entry and private transit.",
        features: [
            "All Voyager Heritage Benefits",
            "Luxury Private Driver Transitions",
            "Museum Skip-the-Line Protocol",
            "Elite Airport Lounge Access"
        ],
        icon: <Star className="w-8 h-8" />,
        gradient: "from-gold/10 via-gold/5 to-transparent",
        accent: "bg-gold",
        logic: "Balanced professional travel for historical immersion."
    },
    {
        tier: "Heritage",
        status: "Elite Sovereignty",
        price: "$2,499",
        description: "The ultimate archaeological access tier. Personal experts and high-security deployment.",
        features: [
            "All Premium Sector Benefits",
            "Personal 24/7 Egyptologist Handler",
            "Armed Security Detail (Optional)",
            "Private Archive & Tomb Access"
        ],
        icon: <Shield className="w-8 h-8" />,
        gradient: "from-white/10 via-white/5 to-transparent",
        accent: "bg-white",
        logic: "Maximum archival security for HNW individuals."
    }
];

const comparisonData = [
    { feature: "Connectivity", voyager: "100GB 5G", premium: "Unlimited 5G", heritage: "Satellite Link" },
    { feature: "Transport", voyager: "Self-Guided", premium: "Private Driver", heritage: "SUV + Armed Detail" },
    { feature: "Support", voyager: "Chatbot + App", premium: "Priority Liaison", heritage: "Personal Egyptologist" },
    { feature: "Site Access", voyager: "Standard", premium: "Skip-the-Line", heritage: "Exclusive Private Hours" },
    { feature: "Security", voyager: "Digital", premium: "Safe-Zones", heritage: "Close Protection" },
];

export const MembershipCards = () => {
    return (
        <section className="py-24 md:py-48 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gold/[0.02] blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center space-y-10 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500"
                    >
                        <ShieldCheck className="w-4 h-4 text-gold" />
                        Official Membership Protocols
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-[7rem] font-bold text-white tracking-tight uppercase leading-[1.1]"
                        >
                            Sovereign <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Cards.</span>
                        </motion.h2>
                        <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-lg uppercase tracking-widest leading-relaxed">
                            Select your level of logistical immunity into the heart of Egypt's civilization.
                        </p>
                    </div>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-40">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.tier}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={cn(
                                "group relative p-10 rounded-[3rem] bg-zinc-950/40 backdrop-blur-3xl border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col shadow-2xl overflow-hidden",
                                i === 1 && "border-gold/20 bg-gold/[0.01]"
                            )}
                        >
                            {/* Inner Glow */}
                            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-700 group-hover:opacity-100", card.gradient)} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className={cn(
                                        "w-20 h-20 rounded-2xl flex items-center justify-center text-zinc-950 shadow-2xl transition-all duration-700 group-hover:scale-110",
                                        i === 0 ? "bg-zinc-400" : i === 1 ? "bg-gold" : "bg-white"
                                    )}>
                                        {card.icon}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{card.status}</div>
                                        <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mt-1">L{i + 1} System</div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-10">
                                    <h3 className={cn(
                                        "text-4xl font-black tracking-tight uppercase transition-colors duration-500",
                                        i === 1 ? "text-gold" : "text-white"
                                    )}>
                                        {card.tier}
                                    </h3>
                                    <div className="text-3xl font-black text-white/90 font-mono tracking-tighter">
                                        {card.price} <span className="text-xs text-zinc-500 font-sans tracking-widest">USD</span>
                                    </div>
                                </div>

                                <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed mb-12 min-h-[44px]">
                                    {card.description}
                                </p>

                                <div className="space-y-5 mb-16 h-48">
                                    {card.features.map(f => (
                                        <div key={f} className="flex items-start gap-4">
                                            <Check className="w-3 h-3 text-gold mt-0.5 shrink-0" />
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-tight">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <button className={cn(
                                                "w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-4 cursor-pointer",
                                                i === 1 ? "bg-gold text-zinc-950 shadow-gold/20" : "bg-white text-zinc-950 hover:bg-gold shadow-white/5"
                                            )}>
                                                Initiate Access <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <button
                                            onClick={() => window.location.href = `/checkout?type=card&tier=${card.tier}&price=${card.price.replace(/[^0-9]/g, '')}`}
                                            className={cn(
                                                "w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-4 cursor-pointer",
                                                i === 1 ? "bg-gold text-zinc-950 shadow-gold/20" : "bg-white text-zinc-950 hover:bg-gold shadow-white/5"
                                            )}
                                        >
                                            Verify Identity <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </SignedIn>
                                    <div className="text-center">
                                        <span className="text-[8px] text-zinc-600 font-bold uppercase tracking-[0.2em]">{card.logic}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[3rem] bg-white/[0.01] border border-white/5 p-1 px-8 md:px-16"
                >
                    <div className="py-16 overflow-x-auto scrollbar-hide">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="pb-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Protocol Comparison</th>
                                    <th className="pb-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Voyager</th>
                                    <th className="pb-8 text-[10px] font-black uppercase tracking-[0.4em] text-gold px-12">Premium</th>
                                    <th className="pb-8 text-[10px] font-black uppercase tracking-[0.4em] text-white text-right">Heritage</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                                        <td className="py-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">{row.feature}</td>
                                        <td className="py-8 text-[10px] font-bold uppercase tracking-widest text-zinc-300">{row.voyager}</td>
                                        <td className="py-8 text-[10px] font-bold uppercase tracking-widest text-gold px-12">{row.premium}</td>
                                        <td className="py-8 text-[10px] font-bold uppercase tracking-widest text-white text-right">{row.heritage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
