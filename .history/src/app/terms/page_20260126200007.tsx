"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Gavel, FileWarning, ShieldAlert, CheckCircle2, AlertTriangle } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4 mt-20">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="space-y-6 text-left border-b border-white/5 pb-16">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                        <Gavel className="w-3 h-3" />
                        Sovereign Agreement v4.2
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                        Operational <span className="gold-gradient italic">Terms.</span>
                    </h1>
                    <p className="text-zinc-500 text-xl font-medium max-w-xl leading-relaxed">
                        Accessing the Guidly Network constitutes an authorization of the following strategic protocols. Read carefully. Ignorance of infrastructure is no excuse for friction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Scale />, title: "Disintermediation", desc: "You agree that Guidly is an auditing layer, not a direct carrier. We provide intelligence for your sovereign movement." },
                        { icon: <ShieldAlert />, title: "Safety Protocol", desc: "Authorized safe-zones are predicated on real-time data. Deviation from Guidly routes results in a 'Neutral Risk Status'." },
                        { icon: <AlertTriangle />, title: "Pricing Merit", desc: "Merchant abuse must be reported. We maintain a non-negotiation policy based on central-bank parity audits." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">{item.icon}</div>
                            <h3 className="text-xl font-black text-white tracking-tighter uppercase">{item.title}</h3>
                            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-16 mt-20 divide-y divide-white/5">
                    {[
                        {
                            num: "01",
                            title: "The Merchant Accord",
                            content: "Any attempt to pay outside the Guidly Card disintermediated protocol for 'Gold' or 'Global' assets constitutes a breach of your security coverage. Cash payments to unauthorized street agents are strictly at your own peril."
                        },
                        {
                            num: "02",
                            title: "AI Itinerary Liability",
                            content: "While our AI Architect uses 2026-level predictive modeling, cultural patterns in Greater Cairo can shift. Users must maintain 'Standard Operational Vigilance' even within AI-audited Green Zones."
                        },
                        {
                            num: "03",
                            title: "No-Haggle Compliance",
                            content: "Guidly providers are rewarded based on their 'Haggle-Free Index'. Users are requested to report any merchant deviations directly through the Operational Intelligence (Feedback) portal."
                        }
                    ].map((section, idx) => (
                        <div key={idx} className="py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="md:col-span-1 border-l-2 border-gold pl-4">
                                <span className="text-6xl font-black text-white/5 italic">{section.num}</span>
                            </div>
                            <div className="md:col-span-11 space-y-4">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">{section.title}</h2>
                                <p className="text-zinc-500 text-lg leading-relaxed font-medium">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-12 rounded-[3.5rem] bg-gold/5 border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-left space-y-2">
                        <div className="text-white font-black text-lg tracking-tighter uppercase">I have read the protocol</div>
                        <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest leading-relaxed">By continuing your deployment on Guidly, you accept all sovereign infrastructure terms.</p>
                    </div>
                    <CheckCircle2 className="w-16 h-16 text-gold" />
                </div>
            </div>
        </div>
    );
}
