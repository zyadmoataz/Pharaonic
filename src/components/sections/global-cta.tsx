"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

export function GlobalCTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#020202]">
            <div className="absolute inset-0 bg-gold/5 -z-10" />
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
                >
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                            Ready to Experience<br /><span className="gold-gradient italic">Ancient Egypt?</span>
                        </h2>
                        <p className="text-neutral-500 max-w-md font-medium">
                            Speak with a certified travel architect today. No street scams, no hidden fees, just pure luxury discovery.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <Link
                            href="/contact"
                            className="px-10 py-6 bg-gold text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-gold/20"
                        >
                            CONSULT EXPERTS <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
