"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AlertCircle, Zap, Shield, HelpCircle, ShoppingCart, Camera } from "lucide-react";
import { motion } from "framer-motion";

const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-black border border-white/5 relative overflow-hidden group/bento">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity" />
        <div className="flex items-center justify-center h-full">
            <Shield className="w-20 h-20 text-gold/20 group-hover/bento:scale-110 group-hover/bento:text-gold transition-all duration-500" />
        </div>
    </div>
);
const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-zinc-950 border border-white/5 relative overflow-hidden group/bento">
        <div className="absolute inset-0 flex items-center justify-center gap-2 p-4">
            {[1, 2, 3].map(i => (
                <motion.div
                    key={i}
                    animate={{ height: ["40%", "80%", "40%"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-4 bg-gold/30 rounded-full"
                />
            ))}
        </div>
    </div>
);
const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-gradient-to-tr from-zinc-900 to-black flex items-center justify-center border border-white/5 p-4 group/bento">
        <div className="text-center font-black text-gold text-5xl drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] group-hover/bento:scale-125 transition-transform duration-500 tracking-tighter uppercase italic">Fair</div>
    </div>
);
const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-zinc-950 border border-white/5 p-8 overflow-hidden relative">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gold shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
        <div className="space-y-2">
            <div className="h-2 w-full bg-white/5 rounded-full" />
            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
            <div className="h-2 w-1/2 bg-white/5 rounded-full" />
        </div>
    </div>
);

const items = [
    {
        title: "Systemic Fragmentation",
        description: "Abolishing the exclusionary patterns of traditional tourism through sovereign digital auditing.",
        header: <SkeletonOne />,
        icon: <AlertCircle className="h-5 w-5 text-gold" />,
        className: "md:col-span-2",
    },
    {
        title: "Digital Wasta",
        description: "Automated network bypassing that connects you directly to ministry-verified assets.",
        header: <SkeletonTwo />,
        icon: <Shield className="h-5 w-5 text-gold" />,
        className: "md:col-span-1",
    },
    {
        title: "Market Meritocracy",
        description: "Real-time fair-benchmark pricing that protects you from the informal sector's volatility.",
        header: <SkeletonThree />,
        icon: <ShoppingCart className="h-5 w-5 text-gold" />,
        className: "md:col-span-1",
    },
    {
        title: "Cognitive Archiving",
        description: "Proprietary AI modeling that predicts safety zones and architecturally sound travel paths.",
        header: <SkeletonFour />,
        icon: <Zap className="h-5 w-5 text-gold" />,
        className: "md:col-span-2",
    },
];

export function ProblemSection() {
    return (
        <section className="py-32 px-4 bg-[#050505]">
            <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.8] uppercase">
                    Enterprise <br /><span className="gold-gradient italic">Intelligence.</span>
                </h2>
                <p className="text-neutral-500 max-w-3xl text-2xl leading-relaxed font-medium">
                    Guidly is more than a platform; it's a <span className="text-white italic">Trust Infrastructure</span> designed to restore authority to the individual traveler.
                </p>
            </div>
            <BentoGrid className="max-w-7xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={cn(
                            item.className,
                            "rounded-[3.5rem] bg-[#0a0a0a] border-white/5 p-8 hover:border-gold/30 transition-all duration-500"
                        )}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}
