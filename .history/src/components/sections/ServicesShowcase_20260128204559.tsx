"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Sparkles, Map } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const services = [
    {
        title: "Official Permits",
        description: "Secure authorized licenses for drones and professional media equipment before arrival.",
        href: "/licenses",
        icon: <Plane className="w-6 h-6" />,
        image: "/verified-guide.webp",
        action: "Request License"
    },
    {
        title: "AI Trip Architect",
        description: "Design a hyper-personalized itinerary based on your interests, safety profile, and budget.",
        href: "/personalized-plan",
        icon: <Sparkles className="w-6 h-6" />,
        image: "/ai.webp",
        action: "Build Itinerary"
    },
    {
        title: "Curated Expeditions",
        description: "Book pre-verified premium tour packages with sovereign-grade logistics included.",
        href: "/recommendations",
        icon: <Map className="w-6 h-6" />,
        image: "/sharm.webp",
        action: "Explore Plans"
    }
];

export const ServicesShowcase = () => {
    return (
        <section className="py-48 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold/[0.03] blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="space-y-8 max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                            <Sparkles className="w-3 h-3 text-gold" />
                            Sovereign Logistics Network
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                            Tactical <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Ecosystem.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium uppercase tracking-[0.2em] leading-relaxed italic border-l border-gold/30 pl-10">
                            "From legal authorization to daily execution, we cover every aspect of your Egyptian mission."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative block h-[600px] rounded-[4rem] overflow-hidden border border-white/5 bg-zinc-950 shadow-2xl transition-all duration-700 hover:border-gold/30 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <SafeImage
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="absolute bottom-0 left-0 right-0 p-12 space-y-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="w-16 h-16 rounded-[2rem] bg-gold text-zinc-950 flex items-center justify-center shadow-2xl shadow-gold/20 transform group-hover:rotate-6 transition-transform duration-700">
                                    {service.icon}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic leading-none group-hover:text-gold transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                                    {service.action}
                                    <div className="w-8 h-px bg-gold/30 group-hover:w-12 transition-all duration-500" />
                                    <ArrowRight className="w-4 h-4 transition-all duration-500 group-hover:translate-x-2" />
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/30 rounded-tr-[4rem] transition-all duration-700" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
    );
};
