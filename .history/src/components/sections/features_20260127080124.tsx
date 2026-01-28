"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Map, Shield, Smartphone, HeartHandshake, Eye, Languages } from "lucide-react";

const features = [
    {
        title: "Danger Heat-Maps",
        description: "Real-time updates on stressful areas to ensure you stay in the safe zone.",
        icon: <Eye className="w-8 h-8 text-gold" />,
    },
    {
        title: "One-Click Booking",
        description: "Simplified logistics for guides, transport, and tickets in one authorized portal.",
        icon: <Smartphone className="w-8 h-8 text-gold" />,
    },
    {
        title: "Safety Reviews",
        description: "Our weighted system measures risk before beauty. Every review is traceable.",
        icon: <Shield className="h-8 w-8 text-gold" />,
    },
    {
        title: "Dialect Translation",
        description: "Live translation of Egyptian dialect to navigate social reality with ease.",
        icon: <Languages className="w-8 h-8 text-gold" />,
    },
    {
        title: "Personal Brand Guides",
        description: "We empower talented local guides, auditing them as much as their routes.",
        icon: <HeartHandshake className="w-8 h-8 text-gold" />,
    },
    {
        title: "Interactive Mood Paths",
        description: "AI that asks the right questions to build your 'fancy' or 'local' vibe.",
        icon: <Map className="w-8 h-8 text-gold" />,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-y border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gold mb-4">Features</h2>
                    <h3 className="text-3xl md:text-6xl font-bold text-white tracking-tight">
                        Measurement Over <br /> <span className="text-neutral-500">Star Ratings.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                            <p className="text-neutral-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
