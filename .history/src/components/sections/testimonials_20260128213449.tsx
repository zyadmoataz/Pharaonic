"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        id: "t1",
        quote: "I’ve been into Egyptian history since I was a kid. Seeing Tutankhamun and Nefertiti where they belong was my main motivation. Dahab people are still my closest friends.",
        name: "Zührenur",
        title: "Dahab & Cairo Explorer",
    },
    {
        id: "t2",
        quote: "We really liked this country. Nature, climate, and the sea in Sharm El Sheikh are beautiful. We will come here often.",
        name: "Diana (Dasha)",
        title: "Vacationer from Russia",
    },
    {
        id: "t3",
        quote: "The chaos was hard at first, but I got used to it. I wish there was an app that showed real local places and helped you avoid tourist traps.",
        name: "Zührenur",
        title: "5 Cities Tour",
    },
    {
        id: "t4",
        quote: "Cleaning in hotels should be improved. Having people who could provide help in the Russian language would definitely make things easier.",
        name: "Diana",
        title: "Sharm El Sheikh Visitor",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-48 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gold/[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12 mb-32">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    Verified Voyager Intel
                </div>

                <div className="space-y-8">
                    <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">Impact.</span>
                    </h2>
                    <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-lg md:text-xl uppercase tracking-widest leading-relaxed italic border-x border-white/5 px-12">
                        "Direct telemetry from established voyagers. We leverage their field data to refine the <span className="text-zinc-300">Egyptian protocol.</span>"
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>
        </section>
    );
}
