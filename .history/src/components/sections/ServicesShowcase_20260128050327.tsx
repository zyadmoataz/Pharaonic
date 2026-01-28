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
        href: "/ai-planner",
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
        <section className="py-32 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                            Comprehensive <span className="text-gold">Ecosystem.</span>
                        </h2>
                        <p className="text-zinc-500 text-lg font-medium italic">
                            From legal authorization to daily execution, Pharaonic covers every aspect of your Egyptian journey.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <Link key={service.title} href={service.href} className="group relative block h-[500px] rounded-[3rem] overflow-hidden border border-white/10">
                            <SafeImage
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-gold text-black flex items-center justify-center mb-6 shadow-lg shadow-gold/20">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight italic mb-4">{service.title}</h3>
                                <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-3 text-gold text-xs font-black uppercase tracking-widest">
                                    {service.action} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
