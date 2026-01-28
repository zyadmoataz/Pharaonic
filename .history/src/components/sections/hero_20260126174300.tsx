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
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-medium mb-8">
                        <Sparkles className="w-3 h-3" />
                        <span>Authorized by the Ministry of Tourism</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 tracking-tight leading-tight">
                        Egypt, <br /> <span className="gold-gradient">Without the Shock.</span>
                    </h1>

                    <p className="mt-8 font-normal text-base md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        Guidly transforms chaotic tourism into a clear, safe, and guided
                        human experience. Travel smarter with AI-driven paths, verified
                        guides, and real-time support.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <Link
                            href="/ai-planner"
                            className="px-8 py-4 bg-gold text-black rounded-xl font-bold hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        >
                            AI Architect
                        </Link>
                        <Link
                            href="/feedback"
                            className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            <MessageSquare className="w-4 h-4 text-gold" />
                            Elite Feedback
                        </Link>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 opacity-50">
                        <div className="flex flex-col items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-gold" />
                            <span className="text-xs uppercase tracking-widest font-semibold">Secure SOS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <MapPin className="w-6 h-6 text-gold" />
                            <span className="text-xs uppercase tracking-widest font-semibold">Local Insights</span>
                        </div>
                        <Link href="/card" className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
                            <CreditCard className="w-6 h-6 text-gold" />
                            <span className="text-xs uppercase tracking-widest font-semibold">Guidly Card</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
