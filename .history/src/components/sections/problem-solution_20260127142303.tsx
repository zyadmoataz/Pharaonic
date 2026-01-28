"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AlertCircle, Zap, Shield, HelpCircle, ShoppingCart, Camera, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SafeImage } from "../SafeImage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-zinc-900 border border-white/5 relative overflow-hidden group/bento p-6">
        <SafeImage src="/chaos.png" alt="Fragmentation" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/bento:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="space-y-1">
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-black">Fragmentation Index</div>
                <div className="text-4xl font-black text-white italic tracking-tighter">64.2%</div>
            </div>
            <div className="flex items-end justify-between">
                <Shield className="w-12 h-12 text-gold opacity-50 group-hover/bento:opacity-100 transition-opacity" />
                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "64%" }} className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,1)]" />
                </div>
            </div>
        </div>
    </div>
);
const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-zinc-950 border border-white/5 relative overflow-hidden group/bento p-6">
        <SafeImage src="/verified-guide.png" alt="Guide" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/bento:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10">
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-black mb-1">Response Time</div>
            <div className="text-3xl font-black text-white tracking-tighter">1.4s</div>
        </div>
    </div>
);
const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-zinc-900 flex items-center justify-center border border-white/5 p-4 group/bento relative overflow-hidden">
        <SafeImage src="/market.png" alt="Market" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/bento:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="text-center relative z-10">
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-black mb-2">Authorized Rate</div>
            <div className="font-black text-gold text-5xl drop-shadow-[0_0_25px_rgba(212,175,55,1)] group-hover/bento:scale-125 transition-transform duration-500 tracking-tighter uppercase italic">Fair</div>
        </div>
    </div>
);
const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[2.5rem] bg-zinc-950 border border-white/5 p-8 overflow-hidden relative group/bento">
        <SafeImage src="/safety-dashboard.png" alt="Safety" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/bento:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gold shadow-[0_0_20px_rgba(212,175,55,1)]" />
        <div className="flex justify-between items-start relative z-10">
            <div className="space-y-4">
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-black">Memory Integrity</div>
                <div className="space-y-2">
                    <div className="h-1.5 w-40 bg-gold/20 rounded-full" />
                    <div className="h-1.5 w-32 bg-gold/50 rounded-full" />
                    <div className="h-1.5 w-48 bg-white/10 rounded-full" />
                </div>
            </div>
            <Cpu className="w-10 h-10 text-gold group-hover/bento:rotate-90 transition-transform duration-700" />
        </div>
    </div>
);

const items = [
    {
        title: "Systemic Fragmentation",
        description: "Egypt's tourism sector loses $1.2B annually to informal commissions. We unify 47+ disjointed government protocols into a single audit stream.",
        header: <SkeletonOne />,
        icon: <AlertCircle className="h-5 w-5 text-gold" />,
        className: "md:col-span-2",
    },
    {
        title: "Digital Wasta",
        description: "Bypass the dependency network. Our direct ministry liaisons ensure authorization without the standard 'connection tax'.",
        header: <SkeletonTwo />,
        icon: <Shield className="h-5 w-5 text-gold" />,
        className: "md:col-span-1",
    },
    {
        title: "Market Meritocracy",
        description: "Eliminating the 'Tourist Multiplier'. Standardized central-bank parity on all cultural and logistical assets.",
        header: <SkeletonThree />,
        icon: <ShoppingCart className="h-5 w-5 text-gold" />,
        className: "md:col-span-1",
    },
    {
        title: "Cognitive Archiving",
        description: "Proprietary AI models analyze 10,000+ safety signals per second to architect hazard-free corridors across Greater Cairo.",
        header: <SkeletonFour />,
        icon: <Zap className="h-5 w-5 text-gold" />,
        className: "md:col-span-2",
    },
];

export function ProblemSection() {
    return (
        <section className="py-32 px-4 bg-[#050505] relative">
            {/* Added subtle separation element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

            <div className="max-w-7xl mx-auto mb-20 text-center md:text-left relative z-10">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.8] uppercase select-none">
                    Luxury <br /><span className="gold-gradient italic">Intelligence.</span>
                </h2>
                <p className="text-zinc-400 max-w-3xl text-2xl leading-relaxed font-medium mb-12 italic border-l-2 border-gold pl-6">
                    Pharaonic is more than a platform; it's a <span className="text-white">Trust Infrastructure</span> designed to restore authority to the elite voyager.
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
                            "rounded-[3.5rem] bg-[#020202] border-white/5 p-8 hover:border-gold/30 transition-all duration-500 shadow-2xl"
                        )}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}
