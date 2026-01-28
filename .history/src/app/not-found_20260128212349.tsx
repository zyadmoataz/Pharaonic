"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Map as MapIcon, ShieldAlert } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Archival Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950 pointer-events-none" />

            {/* Ambient Red Alert Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/[0.05] blur-[150px] rounded-full pointer-events-none animate-pulse" />

            <div className="max-w-xl w-full text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-black uppercase tracking-[0.4em]">
                        <ShieldAlert className="w-4 h-4" />
                        Systemic Authentication Failure
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">
                        Lost in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">Necropolis.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <p className="text-zinc-400 font-medium text-lg uppercase tracking-widest leading-relaxed">
                        "The sector you are attempting to decrypt does not exist in our archival records. Sector indices have been purged."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/5">
                        <Link
                            href="/"
                            className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Command
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-4 px-8 py-4 bg-zinc-900 text-white border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                        >
                            <MapIcon className="w-4 h-4 text-gold" />
                            Request Liaison
                        </Link>
                    </div>
                </motion.div>

                {/* Technical Footnote */}
                <div className="pt-12 flex items-center justify-center gap-8 grayscale opacity-20 pointer-events-none">
                    <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-white">Error Code: 0x404_Purged</div>
                    <div className="w-1 h-1 rounded-full bg-white" />
                    <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-white">Pharaonic OS v2.0</div>
                </div>
            </div>
        </div>
    );
}
