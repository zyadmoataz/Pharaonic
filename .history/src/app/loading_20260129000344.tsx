"use client";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

            <div className="relative">
                {/* Central Eye of Horus Animation (Simplified SVG) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-32 h-32 flex items-center justify-center"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                        <path
                            d="M50 20 C20 20 10 50 10 50 C10 50 20 80 50 80 C80 80 90 50 90 50 C90 50 80 20 50 20 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <circle cx="50" cy="50" r="12" fill="currentColor" />
                    </svg>
                </motion.div>

                {/* Spinning Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-r-2 border-gold/20 rounded-full"
                />
            </div>

            <div className="mt-16 text-center space-y-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                >
                    <div className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Initializing Egyptian Protocol</div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-white/10" />
                        <div className="text-[9px] font-bold text-gold uppercase tracking-[0.2em] animate-pulse">Syncing Archival Data</div>
                        <div className="h-[1px] w-12 bg-white/10" />
                    </div>
                </motion.div>

                {/* Technical "Log" Lines */}
                <div className="max-w-[200px] mx-auto space-y-1 opacity-30">
                    <div className="text-[7px] text-zinc-400 font-bold uppercase tracking-[0.1em] text-left">&gt;&gt; Decrypting sector 4... OK</div>
                    <div className="text-[7px] text-zinc-400 font-bold uppercase tracking-[0.1em] text-left">&gt;&gt; Synchronizing liaison... OK</div>
                    <div className="text-[7px] text-zinc-400 font-bold uppercase tracking-[0.1em] text-left">&gt;&gt; Loading heritage assets... </div>
                </div>
            </div>

            {/* Scanning Line overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent h-20 w-full animate-scan pointer-events-none" />
        </div>
    );
}
