"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";

export function LiaisonCallout() {
    return (
        <section className="py-32 relative overflow-hidden bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-[4rem] overflow-hidden bg-black border border-white/5 aspect-[16/7] md:aspect-[21/7] group">
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                        <SafeImage src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1200" alt="Liaison Office" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                    <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-20 space-y-8 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                            <UserCheck className="w-4 h-4" />
                            Authorized Human Intelligence
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                                Choose Your <br /><span className="gold-gradient">Liaison.</span>
                            </h2>
                            <p className="text-zinc-400 font-medium leading-relaxed italic border-l-2 border-gold/30 pl-8">
                                "Generic tourism is a failure of intelligence. Select a merit-audited liaison to manage your Egyptian protocol with sovereign precision."
                            </p>
                        </div>

                        <Link href="/liaisons" className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-gold transition-all shadow-2xl">
                            Enter Liaison Nexus <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="absolute bottom-10 right-10 hidden lg:block">
                        <div className="p-6 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 space-y-4 max-w-[200px]">
                            <div className="flex items-center gap-3">
                                <Shield className="w-4 h-4 text-gold" />
                                <div className="text-[10px] text-white font-black uppercase tracking-widest">Vetted 100%</div>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gold animate-pulse" />
                            </div>
                            <div className="text-[8px] text-zinc-500 font-bold uppercase tracking-tighter">
                                Direct Liaison Communication Authorized
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
