"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, MapPin, Sparkles, MessageSquare, CreditCard } from "lucide-react";

export function Hero() {
    return (
        <div className="h-[100vh] w-full flex md:items-center md:justify-center bg-[#050505] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-[0.3em] mb-10 overflow-hidden relative group">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>Trust Infrastructure 2.0</span>
                        <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>

                    <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-8">
                        Egypt, <br />
                        <span className="gold-gradient italic">Upgraded.</span>
                    </h1>

                    <p className="font-medium text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Ancient history meets <span className="text-white underline underline-offset-8 decoration-gold/50">Modern Trust.</span>
                        We dismantle the "wasta" barrier and "siege mentality" with a meritocratic digital ecosystem.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="/ai-planner"
                            className="px-12 py-6 bg-black text-white border border-white/10 rounded-[2rem] font-black text-xl hover:bg-gold hover:text-black hover:border-gold transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)] group flex items-center gap-3"
                        >
                            Initalize Architect <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/card"
                            className="px-12 py-6 bg-gold text-black rounded-[2rem] font-black text-xl hover:bg-white transition-all shadow-2xl shadow-gold/20 flex items-center gap-3 group"
                        >
                            Authorize Card <CreditCard className="group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
                        {[
                            { icon: <ShieldCheck className="text-gold" />, label: "Guardian Shield" },
                            { icon: <MapPin className="text-gold" />, label: "Direct Access" },
                            { icon: <MessageSquare className="text-gold" />, label: "Meritocratic" },
                            { icon: <Sparkles className="text-gold" />, label: "No-Haggle" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                whileHover={{ opacity: 1 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background Aesthetic Blur */}
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
            <div className="absolute top-48 -right-48 w-80 h-80 bg-neutral-500/5 blur-[100px] rounded-full" />
        </div>
    );
}
