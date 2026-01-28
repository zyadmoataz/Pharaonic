"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, MapPin, Compass, ShieldCheck } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const historical_sites = [
    {
        id: "luxor-temple",
        name: "Luxor Temple Complex",
        location: "East Bank, Luxor",
        coordinates: "25.6995° N, 32.6391° E",
        period: "New Kingdom",
        image: "https://images.unsplash.com/photo-1544945582-33303172e242?auto=format&fit=crop&q=80&w=1200",
        security: "Sector Alpha"
    },
    {
        id: "abu-simbel",
        name: "Abu Simbel Temples",
        location: "Aswan Sector",
        coordinates: "22.3372° N, 31.6258° E",
        period: "Ramesside Era",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1200",
        security: "Deep Desert Shield"
    },
    {
        id: "valley-kings",
        name: "Valley of the Kings",
        location: "West Bank, Luxor",
        coordinates: "25.7402° N, 32.6014° E",
        period: "XVIII-XX Dynasties",
        image: "https://images.unsplash.com/photo-1547014762-3a94fb4df60a?auto=format&fit=crop&q=80&w=1200",
        security: "Subterranean Auth"
    },
    {
        id: "karnak",
        name: "Karnak Precinct",
        location: "North Luxor",
        coordinates: "25.7188° N, 32.6586° E",
        period: "Multi-Dynastic",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=1200",
        security: "Authorized Corridor"
    }
];

export function HistoricalSection() {
    return (
        <section className="py-32 relative bg-black">
            {/* Visual Separation Graphic */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="space-y-12 mb-20 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.4em]">
                        <Landmark className="w-4 h-4 text-gold" />
                        Heritage Telemetry
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <h2 className="text-5xl md:text-[8rem] font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                            Ancient <span className="text-gold">Nodes.</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-zinc-500 text-xl font-medium leading-relaxed italic border-l-2 border-gold/30 pl-8">
                                "Mapping the legacy through a technical lens. Our historical sectors are vetted for both structural integrity and archival fidelity."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {historical_sites.map((site, i) => (
                        <motion.div
                            key={site.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col p-8 rounded-[3rem] bg-zinc-950 border border-white/5 hover:border-gold/30 transition-all shadow-2xl h-full"
                        >
                            <div className="aspect-square w-full rounded-[2rem] overflow-hidden mb-8 relative">
                                <SafeImage src={site.image} alt={site.name} className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105" />
                                <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                                    <ShieldCheck className="w-4 h-4 text-gold" />
                                </div>
                            </div>

                            <div className="space-y-6 flex-1 flex flex-col">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[8px] text-zinc-600 font-black uppercase tracking-widest">
                                        <Compass className="w-3 h-3" />
                                        Period: {site.period}
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-tight group-hover:text-gold transition-colors">
                                        {site.name}
                                    </h3>
                                </div>

                                <div className="space-y-3 flex-1">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4 text-gold shrink-0" />
                                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">
                                            {site.location}
                                        </div>
                                    </div>
                                    <div className="text-[8px] text-zinc-700 font-mono tracking-tighter">
                                        COORDS: {site.coordinates}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-zinc-600">Secure Protocol</span>
                                        <span className="text-gold">{site.security}</span>
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
