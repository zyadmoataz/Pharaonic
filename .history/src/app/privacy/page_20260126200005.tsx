"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Globe, FileCheck } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4 mt-20">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="space-y-6 text-left border-b border-white/5 pb-16">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                        <Shield className="w-3 h-3" />
                        Sovereign Data Protection
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                        Privacy <span className="gold-gradient italic">Governance.</span>
                    </h1>
                    <p className="text-zinc-500 text-xl font-medium max-w-xl leading-relaxed">
                        At Guidly Analytics Research, we treat your travel data as a strategic asset. Our privacy protocols are designed for total invisibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { icon: <Lock />, title: "Zero-Knowledge Planning", desc: "Your itineraries are encrypted at the edge. Even our AI architects cannot access personally identifiable data without your strategic authorization." },
                        { icon: <Globe />, title: "Sovereignty Compliance", desc: "We adhere strictly to the 2026 Egyptian Data Sovereignty Act. Your transit data never leaves authorized ministry-verified servers." },
                        { icon: <Eye />, title: "Invisibility Toggle", desc: "Toggle 'Total Anonymity' in your Guidly Card settings to scrub your metadata from public merchant databases." },
                        { icon: <Server />, title: "Encrypted Archiving", desc: "Feedback and intelligence transmissions are hashed and archived in secured cold-storage to prevent unauthorized cultural tracking." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">{item.icon}</div>
                            <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{item.title}</h3>
                            <p className="text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-invert max-w-none 
                    prose-h2:text-4xl prose-h2:font-black prose-h2:tracking-tighter prose-h2:text-white prose-h2:uppercase prose-h2:italic
                    prose-p:text-zinc-500 prose-p:text-lg prose-p:leading-relaxed
                    space-y-16 mt-20
                ">
                    <section>
                        <h2>1. Strategic Data Collection</h2>
                        <p>We collect only the operational data necessary to architect your safety. This includes verified identity (via Clerk), target transit zones, and asset preferences. We DO NOT monitor private communications or non-strategic movement patterns.</p>
                    </section>
                    <section>
                        <h2>2. Liasion Access Protocols</h2>
                        <p>Authorized Ministry guides only receive your 'Deployment Name' and 'Security Tier'. They never have access to your home registry, financial depth, or digital wallet beyond the single-transaction authorization you provide.</p>
                    </section>
                    <section>
                        <h2>3. The Right to scrubbing</h2>
                        <p>At any moment, you can initiate 'The Clean Slate' protocol. This will permanently de-authorize and shred all historical transit data from the Guidly network, leaving zero digital footprints of your Egyptian journey.</p>
                    </section>
                </div>

                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <FileCheck className="text-gold w-6 h-6" />
                        <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">Last System Audit: January 26, 2026</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
