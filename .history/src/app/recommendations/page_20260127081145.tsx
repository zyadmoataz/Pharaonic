"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, MapPin, Calendar, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const pre_defined_plans = [
    {
        id: "cairo-vanguard",
        name: "Cairo Vanguard",
        duration: 3,
        cities: ["Cairo"],
        advantages: ["Fast-Track GEM Entry", "Private Pyramid Audit", "Zamalek Safe-Zone Base"],
        program: "A surgical 3-day extraction of Cairo's most significant cultural assets. We've optimized the transit routes between Giza, GEM, and Saqqara to ensure you miss the traffic and the hustle.",
        price: 850,
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1200",
        badge: "Highest Density"
    },
    {
        id: "nile-heritage",
        name: "Nile Heritage",
        duration: 7,
        cities: ["Cairo", "Luxor", "Aswan"],
        advantages: ["Private Dahabiya Transit", "Valley of the Kings Access", "Nubian Liaison Protocol"],
        program: "The definitive Egyptian sovereign experience. This multi-sector deployment covers the entire Nile corridor using private chartered rail and river assets. No group buses, no standard tours.",
        price: 2450,
        image: "https://images.unsplash.com/photo-1544945582-33303172e242?auto=format&fit=crop&q=80&w=1200",
        badge: "Strategic Masterpiece"
    },
    {
        id: "red-sea-shield",
        name: "Red Sea Shield",
        duration: 5,
        cities: ["Hurghada", "Sharm El-Sheikh"],
        advantages: ["Private Yacht Charter", "Deep-Sea Security Detail", "Luxury Infrastructure"],
        program: "High-level relaxation mapped through the Red Sea's most secured maritime corridors. Includes private transport via domestic air and executive beach-front liaison support.",
        price: 1800,
        image: "https://images.unsplash.com/photo-1510009489794-352fba39bc0b?auto=format&fit=crop&q=80&w=1200",
        badge: "Elite Security"
    }
];

export default function RecommendationsPage() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Sparkles className="w-4 h-4" />
                        Strategic Selection
                    </motion.div>
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8]">
                        Curated <span className="gold-gradient italic">Paths.</span>
                    </h1>
                    <p className="text-zinc-500 text-2xl font-serif max-w-2xl mx-auto leading-relaxed italic border-l border-gold/30 pl-8">
                        "For those who prefer authorized certainty over custom architecture. These plans are pre-audited for maximum strategic efficiency."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {pre_defined_plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all overflow-hidden"
                        >
                            <div className="aspect-[16/10] w-full relative overflow-hidden">
                                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold text-[10px] font-black uppercase tracking-widest">{plan.badge}</div>
                                <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-gold text-black text-xs font-black uppercase tracking-widest shadow-2xl shadow-gold/20">${plan.price} EST</div>
                            </div>
                            <div className="p-10 space-y-8 flex-1 flex flex-col">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">{plan.name}</h2>
                                        <div className="flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
                                            <Calendar className="w-4 h-4 text-gold" /> {plan.duration} DAYS
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {plan.cities.map(c => (
                                            <span key={c} className="text-[10px] text-zinc-600 font-black uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{c} Sector</span>
                                        ))}
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">"{plan.program}"</p>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5 pb-2">Operational Assets</h4>
                                    <ul className="space-y-4">
                                        {plan.advantages.map(adv => (
                                            <li key={adv} className="flex items-start gap-3 text-[10px] text-zinc-400 font-black uppercase tracking-widest">
                                                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                                                {adv}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => window.location.href = `/checkout?type=plan&total=${plan.price}&cities=${plan.cities.join(',')}&tier=Tour`}
                                    className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-gold transition-all text-xs mt-8 shadow-xl shadow-white/5"
                                >
                                    INITIALIZE DEPLOYMENT
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="p-20 rounded-[4rem] bg-gold/5 border border-gold/20 flex flex-col items-center text-center space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Need Full Customization?</h2>
                    <p className="text-zinc-500 text-xl font-medium max-w-xl">Our AI Architect can build a multi-city sovereign program tailored to your exact signature.</p>
                    <Link href="/ai-planner" className="px-16 py-7 bg-gold text-black rounded-3xl font-black text-xl hover:bg-white transition-all shadow-2xl shadow-gold/20 uppercase tracking-widest">Open AI Architect</Link>
                </div>
            </div>
        </div>
    );
}
