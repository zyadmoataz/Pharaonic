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
        <div className="h-[50rem] rounded-md flex flex-col antialiased bg-[#050505] items-center justify-center relative overflow-hidden py-32 border-b border-white/5">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Real Voices, <span className="gold-gradient">Real Impact</span>
                </h2>
                <p className="text-neutral-400 max-w-sm mx-auto text-sm">
                    Direct feedback from travelers who experienced the reality of Egypt.
                    We translate their needs into our features.
                </p>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
            />
        </div>
    );
}
