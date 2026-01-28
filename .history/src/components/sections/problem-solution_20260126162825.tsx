"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AlertCircle, Zap, Shield, HelpCircle, ShoppingCart, Camera } from "lucide-react";
import { motion } from "framer-motion";

const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 p-4 flex-col justify-center">
        <div className="w-full h-2 bg-red-900/20 rounded-full mb-2" />
        <div className="w-3/4 h-2 bg-red-900/20 rounded-full mb-2" />
        <div className="w-1/2 h-2 bg-red-900/30 rounded-full" />
    </div>
);
const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-900/10 to-blue-800/20 border border-white/5 flex-items-center justify-center p-4">
        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center animate-pulse">
            <Shield className="w-6 h-6 text-blue-500" />
        </div>
    </div>
);
const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gold/10 to-gold/20 border border-white/5 flex items-center justify-center p-4">
        <div className="text-center font-bold text-gold text-2xl">$$$</div>
    </div>
);
const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative z-10 flex gap-2 h-full items-end">
            <div className="w-4 h-1/2 bg-gold/50 rounded-t-lg" />
            <div className="w-4 h-3/4 bg-gold/70 rounded-t-lg" />
            <div className="w-4 h-full bg-gold rounded-t-lg" />
            <div className="w-4 h-2/3 bg-gold/40 rounded-t-lg" />
        </div>
    </div>
);

const items = [
    {
        title: "The Chaos Factor",
        description: "Fragmentation in current platforms leaves travel unmanaged, leading to vulnerability to scams.",
        header: <SkeletonOne />,
        icon: <AlertCircle className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Digital Defense",
        description: "Direct SOS connectivity and verified safety trails for every journey.",
        header: <SkeletonTwo />,
        icon: <Shield className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Fair Market",
        description: "Scan to pay fixed prices. No bargaining, no scams, just authentic treasures.",
        header: <SkeletonThree />,
        icon: <ShoppingCart className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "AI Driven Paths",
        description: "Determines your mood, budget, and style to offer a perfectly tailored program.",
        header: <SkeletonFour />,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-2",
    },
];

export function ProblemSection() {
    return (
        <section className="py-20 px-4 bg-[#050505]">
            <div className="max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    The Solution to <span className="text-gold uppercase tracking-widest text-xl">The Void</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
                    Current platforms assume order where chaos exists. We bridge the technology gap
                    with local logic and enterprise security.
                </p>
            </div>
            <BentoGrid>
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}
