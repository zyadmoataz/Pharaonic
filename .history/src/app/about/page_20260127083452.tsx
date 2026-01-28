"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Users, Target, Rocket, Zap, BarChart3, Lock } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Shield className="w-4 h-4" />
                        Our Vision
                    </motion.div>
                    <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85]">
                        The <span className="gold-gradient italic">NileVista</span> Spirit
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic">
                        "Egypt is not just a destination; it's a world within itself. We are the bridge between its ancient soul and modern luxury."
                    </p>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase">Revolutionizing Travel.</h2>
                        <div className="space-y-6 text-zinc-500 text-lg leading-relaxed font-medium">
                            <p>For decades, exploring Egypt has been a mix of awe-inspiring beauty and logistical challenges. At NileVista, we believe your journey should be focused on the wonder, not the worry.</p>
                            <p>We are a team of Egyptian locals and tech innovators who combined AI-driven planning with deep cultural roots. Our mission is simple: to provide a secure, transparent, and breathtakingly luxury experience for every visitor to our homeland.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">100%</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Transparency Audit</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">Verified</div>
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Local Expert Network</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                            <img
                                src="/team.jpg"
                                alt="NileVista Team"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <h4 className="text-white font-black text-2xl mb-1 tracking-tighter uppercase italic">The NileVista Team</h4>
                                <p className="text-xs text-gold uppercase tracking-[0.2em] font-black">Cairo HQ Operations</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: <Zap />, title: "Precision", desc: "Every itinerary is calculated with AI precision, balancing luxury and authenticity." },
                        { icon: <Lock />, title: "Security", desc: "Integrated payment cards and verified transits ensure your safety is never compromised." },
                        { icon: <BarChart3 />, title: "Reliability", desc: "No hidden fees, no street hagglings. Just clear, authorized benchmarks for everything." }
                    ].map((v, i) => (
                        <motion.div key={i} className="p-12 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/20 transition-all flex flex-col gap-8">
                            <div className="w-16 h-16 rounded-[2rem] bg-gold/10 flex items-center justify-center text-gold">{v.icon}</div>
                            <div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic uppercase">{v.title}</h3>
                                <p className="text-zinc-500 font-medium leading-relaxed">{v.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Global CTA */}
                <div className="pt-20">
                    <div className="p-16 rounded-[4rem] bg-gold flex flex-col items-center text-center gap-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.8] z-10">
                            Join the <br /><span className="italic">NileVista</span> Network
                        </h2>
                        <p className="text-black/70 text-lg font-medium max-w-2xl z-10 leading-relaxed">
                            Start planning your Egyptian journey with the only platform that puts your experience, safety, and luxury first.
                        </p>
                        <Link
                            href="/ai-planner"
                            className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-900 transition-all z-10 shadow-xl"
                        >
                            Build My Journey
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Fixed import for Link
import Link from "next/link";
