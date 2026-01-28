"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AlertCircle, Zap, Shield, HelpCircle, ShoppingCart, Camera } from "lucide-react";
import { motion } from "framer-motion";

const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 relative overflow-hidden group/bento">
        <img src="/safety-dashboard.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/bento:scale-110 transition-transform duration-500" alt="Safety Dashboard" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);
const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 relative overflow-hidden group/bento">
        <img src="/verified-guide.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/bento:scale-110 transition-transform duration-500" alt="Verified Guide" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);
const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 p-4">
        <div className="text-center font-bold text-gold text-3xl drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">$ FAIR</div>
    </div>
);
const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative z-10 flex gap-2 h-full items-end">
            <motion.div animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-4 bg-gold/50 rounded-t-lg" />
            <motion.div animate={{ height: ["60%", "90%", "60%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-4 bg-gold/70 rounded-t-lg" />
            <motion.div animate={{ height: ["80%", "100%", "80%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-4 bg-gold rounded-t-lg" />
            <motion.div animate={{ height: ["50%", "80%", "50%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-4 bg-gold/40 rounded-t-lg" />
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
