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
    const [votes, setVotes] = React.useState<Record<number, number>>({});
    const [voted, setVoted] = React.useState<Record<number, boolean>>({});

    const handleVote = (idx: number) => {
        if (voted[idx]) return;
        setVotes(prev => ({ ...prev, [idx]: (prev[idx] || 0) + 1 }));
        setVoted(prev => ({ ...prev, [idx]: true }));
    };

    return (
        <section className="py-48 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-32 space-y-8">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                        <Shield className="w-3 h-3 text-gold" />
                        Future Implementation Roadmap
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Horizon.</span>
                    </h2>
                    <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-lg md:text-xl uppercase tracking-widest leading-relaxed italic border-x border-white/5 px-16">
                        "Vote for the next phase of the <span className="text-zinc-300">Egyptian Protocol.</span> Client demand dictates development priority."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group p-12 rounded-[4rem] bg-zinc-950 border border-white/5 hover:border-gold/30 transition-all duration-700 shadow-2xl flex flex-col h-full"
                        >
                            <div className="mb-10 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                                {feature.icon}
                            </div>

                            <div className="space-y-6 flex-1">
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter italic group-hover:text-gold transition-colors duration-500">{feature.title}</h4>
                                <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-black text-white tracking-widest">{150 + (votes[idx] || 0)}</span>
                                    <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Protocol Votes</span>
                                </div>

                                <button
                                    onClick={() => handleVote(idx)}
                                    disabled={voted[idx]}
                                    className={cn(
                                        "px-8 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer shadow-2xl",
                                        voted[idx]
                                            ? "bg-gold text-zinc-950 scale-95 opacity-50"
                                            : "bg-white text-zinc-950 hover:bg-gold"
                                    )}
                                >
                                    {voted[idx] ? "Priority Logged" : "Cast Vote"}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
