"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, ArrowUpRight, Radio } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const trending_spots = [
    {
        id: "gem",
        name: "Grand Egyptian Museum",
        sector: "Giza Sector",
        status: "Peak Interest",
        description: "The world's largest archaeological treasury, now fully authorized for 2026 audits.",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1200", // GEM Vibe (Cairo)
        growth: "+840%"
    },
    {
        id: "nac",
        name: "Signature Tower",
        sector: "New Capital",
        status: "Technical Hub",
        description: "Africa's tallest architecture, the primary node for modern Egyptian administration.",
        image: "https://images.unsplash.com/photo-1568322422724-978f7823c98c?auto=format&fit=crop&q=80&w=1200", // Modern Cairo/NAC Vibe
        growth: "+220%"
    },
    {
        id: "el-gouna",
        name: "Sovereign Gouna",
        sector: "Red Sea",
        status: "Maritime Elite",
        description: "The private Riviera. Low-density lagoon living with total maritime security.",
        image: "https://images.unsplash.com/photo-1544783311-fcda95811779?auto=format&fit=crop&q=80&w=1200", // Red Sea Luxury
        growth: "+150%"
    },
    {
        id: "siwa",
        name: "Siwa Oasis",
        sector: "Western Desert",
        status: "Secluded Intel",
        description: "Off-grid luxury within the Oracle's domain. Salt lakes and high-fidelity isolation.",
        image: "https://images.unsplash.com/photo-1504904128521-2e2e9275bd94?auto=format&fit=crop&q=80&w=1200", // Siwa Oasis / Salt Lakes
        growth: "+310%"
    }
];

export function TrendingSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-zinc-950">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.4em]">
                            <Sparkles className="w-3 h-3" />
                            Trend Analysis 2026
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                            Market <span className="gold-gradient">Gains.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-lg font-medium max-w-sm leading-relaxed border-l-2 border-gold/30 pl-8 italic">
                        "Real-time telemetry of high-interest Egyptian nodes. Authorized for your 2026 deployment."
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Area */}
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-[calc((100vw-80rem)/2)] pb-10">
                {trending_spots.map((spot, i) => (
                    <motion.div
                        key={spot.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="min-w-[320px] md:min-w-[450px] group snap-center"
                    >
                        <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-all group-hover:border-gold/30">
                            <SafeImage src={spot.image} alt={spot.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 group-hover:rotate-1" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold text-[8px] font-black uppercase tracking-widest">
                                    {spot.sector}
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <div className="flex items-center gap-1 text-green-500 text-[10px] font-black uppercase">
                                        <ArrowUpRight className="w-3 h-3" />
                                        {spot.growth}
                                    </div>
                                    <div className="text-zinc-500 text-[8px] font-black uppercase tracking-widest">Traffic Vol</div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 right-10 space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-tight">
                                        {spot.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-[0.2em]">
                                        <Radio className="w-3 h-3 animate-pulse" />
                                        {spot.status}
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                                    {spot.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
