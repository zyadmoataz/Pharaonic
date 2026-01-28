"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Landmark, MapPin, Compass, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const historical_sites = [
    {
        id: "luxor-temple",
        name: "Luxor Temple Complex",
        location: "East Bank, Luxor",
        coordinates: "25.6995° N, 32.6391° E",
        period: "New Kingdom",
        image: "/luxor.webp", // Luxor Local
        security: "Sector Alpha"
    },
    {
        id: "abu-simbel",
        name: "Abu Simbel Temples",
        location: "Aswan Sector",
        coordinates: "22.3372° N, 31.6258° E",
        period: "Ramesside Era",
        image: "/aswan.webp", // Abu Simbel Local
        security: "Deep Desert Shield"
    },
    {
        id: "valley-kings",
        name: "Valley of the Kings",
        location: "West Bank, Luxor",
        coordinates: "25.7402° N, 32.6014° E",
        period: "XVIII-XX Dynasties",
        image: "/valley of kings.webp", // Valley of Kings Local
        security: "Subterranean Auth"
    },
    {
        id: "karnak",
        name: "Karnak Precinct",
        location: "North Luxor",
        coordinates: "25.7188° N, 32.6586° E",
        period: "Multi-Dynastic",
        image: "/karnk temple.webp", // Karnak Local
        security: "Authorized Corridor"
    }
];

export function HistoricalSection() {
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
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="space-y-16 mb-24">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                        <Landmark className="w-4 h-4 text-gold" />
                        Heritage Telemetry Control
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <h2 className="text-6xl md:text-[8rem] font-bold text-white tracking-tight uppercase leading-[0.9]">
                            Ancient <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Nodes.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 flex-1">
                            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-widest border-l border-gold/30 pl-10 max-w-sm">
                                "Mapping the legacy through a technical lens. Vetted for structural integrity and archival fidelity."
                            </p>

                            <div className="flex gap-6">
                                <button
                                    onClick={() => scroll("left")}
                                    className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-xl group"
                                >
                                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-xl group"
                                >
                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {historical_sites.map((site, i) => (
                        <motion.div
                            key={site.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group flex flex-col p-10 rounded-[3.5rem] bg-zinc-950 border border-white/5 hover:border-gold/30 transition-all duration-700 shadow-2xl h-full"
                        >
                            <div className="aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden mb-10 relative border border-white/5 shadow-inner">
                                <SafeImage src={site.image} alt={site.name} className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700" />
                                <div className="absolute top-6 right-6 p-3 rounded-2xl bg-zinc-950/60 backdrop-blur-xl border border-white/10 z-10">
                                    <ShieldCheck className="w-4 h-4 text-gold" />
                                </div>
                            </div>

                            <div className="space-y-8 flex-1 flex flex-col">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">
                                        <Compass className="w-3.5 h-3.5 text-gold/70" />
                                        {site.period}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight uppercase leading-snug group-hover:text-gold transition-colors duration-500">
                                        {site.name}
                                    </h3>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            <MapPin className="w-3 h-3 text-gold" />
                                        </div>
                                        <div className="text-[11px] text-zinc-300 font-bold uppercase tracking-[0.2em]">
                                            {site.location}
                                        </div>
                                    </div>
                                    <div className="text-[9px] text-zinc-600 font-mono tracking-tighter uppercase">
                                        COORDS // {site.coordinates}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em]">
                                        <span className="text-zinc-600">Classification</span>
                                        <span className="text-gold group-hover:translate-x-1 transition-transform duration-500">{site.security}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
