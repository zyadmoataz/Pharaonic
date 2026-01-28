"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Download, Share2 } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-zinc-950 border border-white/5 rounded-[4rem] p-12 md:p-20 text-center space-y-10 shadow-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent" />

                    <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                        <CheckCircle className="w-12 h-12 text-black" />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">Protocol <br /><span className="gold-gradient">Authorized.</span></h1>
                        <p className="text-zinc-500 text-lg font-medium leading-relaxed italic">
                            Your transaction has been verified across the NileVista Network. Tactical deployment of your assets is now in effect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link
                            href="/ai-planner"
                            className="p-6 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-gold/10"
                        >
                            VIEW ITINERARY <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button className="p-6 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10">
                            DOWNLOAD RECEIPT <Download className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex items-center justify-center gap-6">
                        <button className="text-zinc-600 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                            <Share2 className="w-3 h-3" /> Share Journey
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
