"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, BookOpen } from "lucide-react";

export function GlobalCTA() {
    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute  w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-[0.2em]">
                    <BookOpen className="w-4 h-4" />
                    Authorized Intelligence
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                    The Sovereign <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Guide Book.</span>
                </h2>

                <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Download the definitive tactical manual for the Egyptian territory. Includes secure zones, hidden sectors, and protocol requirements.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/guide.pdf"
                        download="Pharaonic_Guide_Book.pdf"
                        className="group relative px-10 py-5 bg-gold text-black rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-xl shadow-gold/10 flex items-center gap-3"
                    >
                        <Download className="w-5 h-5" />
                        Download Briefing
                    </a>
                    <Link href="/contact" className="px-10 py-5 bg-transparent border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all duration-300">
                        Contact Command
                    </Link>
                </div>
            </div>
        </section>
    );
}
