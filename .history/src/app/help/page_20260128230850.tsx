"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, HelpCircle, Shield, CreditCard, Camera } from "lucide-react";

const faqs = [
    {
        q: "Is Pharaonic an official government entity?",
        a: "Pharaonic is a sovereign-grade enterprise platform authorized to facilitate safety, logistics, and heritage access in coordination with official tourism ministries.",
        icon: <Shield className="w-5 h-5 text-gold" />,
    },
    {
        q: "How does the Emergency Sequence work?",
        a: "The 'Initialize Emergency Sequence' protocol provides prioritized 24/7 connectivity to Pharaonic response teams and local authorities, sharing real-time encrypted telemetry.",
        icon: <HelpCircle className="w-5 h-5 text-gold" />,
    },
    {
        q: "Can Pharaonic authorize drone/photography permits?",
        a: "Yes. Our licensing department manages the technical submission and tracking of permits for professional equipment across all authorized zones in the Nile Valley.",
        icon: <Camera className="w-5 h-5 text-gold" />,
    },
    {
        q: "How are Sovereign Payments processed?",
        a: "All payments are processed through tokenized, audited market benchmarks, bypassing legacy friction and ensuring direct-to-asset settlement with fixed pricing.",
        icon: <CreditCard className="w-5 h-5 text-gold" />,
    },
];

export default function HelpPage() {
    return (
        <div className="pt-40 pb-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24 space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                        <HelpCircle className="w-4 h-4" />
                        Operational Assistance
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                        Help <span className="gold-gradient">Nexus.</span>
                    </h1>
                    <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto italic border-x border-gold/20 px-12">
                        "Access the knowledge base for the Pharaonic Protocol. Clarifying the intersection of heritage and security."
                    </p>

                    <div className="mt-16 relative max-w-xl mx-auto group">
                        <div className="absolute inset-0 bg-gold/10 blur-3xl opacity-0 group-focus-within:opacity-40 transition-opacity" />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-gold transition-colors w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Identify your query..."
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-white focus:outline-none focus:border-gold/50 transition-all font-bold placeholder:text-zinc-800 relative"
                        />
                    </div>
                </motion.div>

                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all group cursor-pointer"
                        >
                            <div className="flex items-start gap-8">
                                <div className="p-4 rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">{faq.icon}</div>
                                <div>
                                    <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase italic">{faq.q}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 p-12 rounded-[3.5rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 flex flex-col items-center text-center gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Still need <span className="gold-gradient">Intelligence?</span></h2>
                        <p className="text-zinc-500 text-sm font-medium italic">Our strategic liaison team is active 24/7 for direct operational support.</p>
                    </div>
                    <Link href="/contact" className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gold transition-all shadow-xl shadow-white/5">
                        Establish Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
