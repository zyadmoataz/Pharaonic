"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

export function GlobalCTA() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 -z-10" />
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                            Ready to Secure your <span className="text-gold">Egyptian Journey?</span>
                        </h2>
                        <p className="text-neutral-500 max-w-md">
                            Speak with a verified travel architect today. No street scams, no hidden fees, just pure discovery.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <Link
                            href="/contact"
                            className="px-8 py-5 bg-gold text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-gold/20"
                        >
                            Contact Expert <ArrowRight className="w-4 h-4" />
                        </Link>
                        <div className="px-8 py-5 bg-white/[0.03] border border-white/5 text-white rounded-2xl font-bold flex items-center justify-center gap-3">
                            <PhoneCall className="w-5 h-5 text-gold" />
                            01012766890
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
