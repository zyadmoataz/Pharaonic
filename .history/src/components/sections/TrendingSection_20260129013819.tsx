"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, ArrowUpRight, Radio, ChevronLeft, ChevronRight } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const trending_spots = [
    {
        id: "gem",
        name: "Grand Egyptian Museum",
        sector: "Giza Sector",
        status: "Peak Interest",
        description: "The world's largest archaeological treasury, now fully authorized for 2026 audits.",
        image: "/grand museum.webp", // GEM Local
        growth: "+840%"
    },
    {
        id: "nac",
        name: "Signature Tower",
        sector: "New Capital",
        status: "Technical Hub",
        description: "Africa's tallest architecture, the primary node for modern Egyptian administration.",
        image: "/aswan.webp", // Aswan/Signature Tower Hub Placeholder Local
        growth: "+220%"
    },
    {
        id: "el-gouna",
        name: "Sovereign Gouna",
        sector: "Red Sea",
        status: "Maritime Elite",
        description: "The private Riviera. Low-density lagoon living with total maritime security.",
        image: "/sharm.webp", // Sharm/Red Sea Local
        growth: "+150%"
    },
    {
        id: "siwa",
        name: "Siwa Oasis",
        sector: "Western Desert",
        status: "Secluded Intel",
        description: "Off-grid luxury within the Oracle's domain. Salt lakes and high-fidelity isolation.",
        image: "/siwa.webp", // Siwa Local
        growth: "+310%"
    }
];

export function TrendingSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-48 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/[0.03] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/[0.02] blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                            <Radio className="w-3 h-3 text-gold animate-pulse" />
                            Live Market Intelligence
                        </div>
                        <h2 className="text-6xl md:text-[8rem] font-bold text-white tracking-tight uppercase leading-[0.9]">
                            Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Analytics.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 flex-1">
                        <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-sm leading-relaxed uppercase tracking-widest border-l border-gold/30 pl-10">
                            "Real-time telemetry of high-interest Egyptian nodes. Authorized for your 2026 deployment."
                        </p>

                        <div className="flex gap-6">
                            <button
                                onClick={() => scroll("left")}
                                aria-label="Scroll left"
                                className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-xl group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                aria-label="Scroll right"
                                className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-xl group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Area */}
            <div
                ref={scrollRef}
                className="flex gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide px-6 md:px-[calc((100vw-80rem)/2)] pb-20 custom-scrollbar-hide"
            >
                {trending_spots.map((spot, i) => (
                    <motion.div
                        key={spot.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="min-w-[350px] md:min-w-[500px] group snap-center"
                    >
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 bg-zinc-950 shadow-2xl transition-all duration-700 group-hover:border-gold/30 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                            <SafeImage src={spot.image} alt={spot.name} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0" />

                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="absolute top-10 left-10 right-10 flex justify-between items-start z-20">
                                <div className="px-6 py-2.5 rounded-full bg-zinc-950/60 backdrop-blur-xl border border-white/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                                    {spot.sector}
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <div className="flex items-center gap-2 text-gold text-lg font-bold uppercase tracking-tight">
                                        <ArrowUpRight className="w-4 h-4" />
                                        {spot.growth}
                                    </div>
                                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Volume Index</div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 left-12 right-12 space-y-6 z-20">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.3em]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                        {spot.status}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-tight group-hover:text-gold transition-colors duration-500">
                                        {spot.name}
                                    </h3>
                                </div>
                                <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-widest max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    {spot.description}
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
