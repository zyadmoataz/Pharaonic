"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Globe, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-6xl mx-auto space-y-32">
                {/* Hero Section */}
                <div className="relative border-l border-gold/30 pl-8 md:pl-16 space-y-8 max-w-4xl">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-[0.5em]">
                        <Shield className="w-4 h-4" />
                        Institutional Grade Protection
                    </motion.div>
                    <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                        Financial <br /> <span className="gold-gradient">Sovereignty.</span>
                    </h1>
                    <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-2xl italic">
                        "Your transaction metadata is your own. We architect our network for total metadata scrubbing, ensuring your high-value movement remains invisible to legacy tracking."
                    </p>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Lock />, title: "Zero-Knowledge", desc: "Itineraries are encrypted at the edge. Even our architects cannot access PII without authorization." },
                        { icon: <Globe />, title: "Sovereign Servers", desc: "All data strictly resides on ministry-verified servers within Egyptian territory." },
                        { icon: <Eye />, title: "Metadata Scrub", desc: "Toggle 'Total Anonymity' to shred your digital footprint from merchant logs in real-time." },
                        { icon: <Server />, title: "Hashed Identity", desc: "Identity transmissions use 256-bit hashing before cold-storage archiving." }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-gold/30 transition-all duration-700 space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-gold/5 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Deep Protocol Sections */}
                <div className="space-y-40">
                    {[
                        {
                            num: "01",
                            title: "Strategic Collection",
                            content: "We collect only the operational data necessary to architect your safety. This includes verified identity (via Clerk), target transit zones, and asset preferences. We DO NOT monitor private communications or non-strategic movement patterns.",
                            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                        },
                        {
                            num: "02",
                            title: "Access Hierarchy",
                            content: "Authorized Ministry guides only receive your 'Deployment Name' and 'Security Tier'. They never have access to your home registry, financial depth, or digital wallet beyond the single-transaction authorization you provide.",
                            img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200"
                        },
                        {
                            num: "03",
                            title: "The Clean Slate",
                            content: "At any moment, you can initiate 'The Clean Slate' protocol. This will permanently de-authorize and shred all historical transit data from the NileVista network, leaving zero digital footprints of your Egyptian journey.",
                            img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
                        }
                    ].map((section, idx) => (
                        <div key={idx} className={cn("grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", idx % 2 === 1 && "lg:flex-row-reverse")}>
                            <div className="space-y-10 order-2 lg:order-1">
                                <span className="text-8xl font-black text-white/5 italic">{section.num}</span>
                                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic">{section.title}</h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">{section.content}</p>
                                <div className="w-20 h-1 bg-gold rounded-full" />
                            </div>
                            <div className="order-1 lg:order-2 aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
                                <img src={section.img} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt={section.title} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Checkboxish */}
                <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-4">
                        <FileCheck className="text-gold w-8 h-8" />
                        <div>
                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] mb-1">Architecture Certification</div>
                            <div className="text-white font-black text-xs uppercase tracking-widest">Last Infrastructure Audit: January 26, 2026</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
