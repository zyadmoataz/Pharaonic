"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, BookOpen } from "lucide-react";

export function GlobalCTA() {
    return (
        <section className="py-32 md:py-48 bg-zinc-950 relative overflow-hidden border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gold/[0.01] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    Strategic Doctrine V2.0
                </div>

                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight uppercase leading-[0.85]">
                    The Sovereign <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic">Tactical Brief.</span>
                </h2>

                <p className="text-zinc-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
                    Access the definitive manual for the Egyptian territory. <br />
                    <span className="text-zinc-400 italic">Secure zones, verified liaisons, and protocol bypasses.</span>
                </p>

                <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="/guide.pdf"
                        download="Pharaonic_Protocol_V2.pdf"
                        className="group relative px-12 py-5 bg-white text-zinc-950 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold transition-all duration-700 shadow-2xl flex items-center gap-4"
                    >
                        <Download className="w-4 h-4" />
                        Download Briefing
                    </a>
                    <Link href="/contact" className="px-12 py-5 bg-transparent border border-white/10 text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/5 transition-all duration-700 backdrop-blur-xl">
                        Consult Experts
                    </Link>
                </div>
            </div>
        </section>
    );
}
