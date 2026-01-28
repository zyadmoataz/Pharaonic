"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Shield } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xbdoykqk");

    return (
        <div className="pt-40 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-16"
                    >
                        <div className="space-y-8">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                                <Shield className="w-4 h-4" />
                                Diplomatic Channel Open
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                                Reach <br /><span className="gold-gradient text-[1.1em]">Signal.</span>
                            </h1>
                            <p className="text-zinc-500 text-xl leading-relaxed max-w-lg font-medium italic border-l-2 border-gold/40 pl-8">
                                "Whether you're planning a corporate retreat or a solo expedition, our local intelligence team is ready to architect your journey."
                            </p>
                        </div>

                        {/* Office Locations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4 group hover:border-gold/20 transition-all">
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">HQ Sector: Giza</div>
                                <div className="space-y-2">
                                    <h4 className="text-white font-black uppercase text-lg tracking-tighter">Cairo Command</h4>
                                    <p className="text-zinc-500 text-xs font-medium leading-relaxed italic">
                                        The Grand Egyptian Museum Complex,<br />
                                        Giza Plateau, Egypt
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-widest pt-4 border-t border-white/5">
                                    <MapPin className="w-3 h-3" /> Area 01 Authorized
                                </div>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4 group hover:border-gold/20 transition-all">
                                <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Uplink: Mayfair</div>
                                <div className="space-y-2">
                                    <h4 className="text-white font-black uppercase text-lg tracking-tighter">London Liaison</h4>
                                    <p className="text-zinc-500 text-xs font-medium leading-relaxed italic">
                                        Sovereign House, Piccadilly,<br />
                                        London, UK
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-widest pt-4 border-t border-white/5">
                                    <Globe className="w-3 h-3" /> Global Node Active
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8">
                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.01] border border-white/5">
                                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">Secure Voice Line</div>
                                    <div className="text-white text-sm font-black tracking-widest">+20 (0) 10 900 PHARAONIC</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-16 rounded-[4rem] bg-gold/5 border-2 border-gold/20 text-center space-y-8 backdrop-blur-3xl"
                                >
                                    <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                                        <CheckCircle className="w-12 h-12 text-black" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Signal Received</h2>
                                        <p className="text-zinc-400 font-medium italic">"Transmission acknowledged. A strategic liaison will authorize your request within 12 standard operating hours."</p>
                                    </div>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] hover:bg-gold hover:text-black transition-all"
                                    >
                                        Establish New Connection
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gold/10 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity" />
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="p-10 md:p-14 rounded-[4rem] bg-[#050505]/40 border border-white/10 backdrop-blur-3xl relative"
                                    >
                                        <form onSubmit={handleSubmit} className="space-y-10">
                                            <div className="space-y-6">
                                                <div className="space-y-4">
                                                    <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Full Strategic Name</label>
                                                    <input
                                                        id="full-name"
                                                        type="text"
                                                        name="name"
                                                        autoComplete="name"
                                                        required
                                                        placeholder="Sovereign Identity"
                                                        className="w-full bg-white/[0.03] border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-zinc-800 font-bold"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Digital Uplink (Email)</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        autoComplete="email"
                                                        required
                                                        placeholder="liaison-node@secure.com"
                                                        className="w-full bg-white/[0.03] border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-zinc-800 font-bold"
                                                    />
                                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] font-bold mt-1 uppercase ml-4" />
                                                </div>
                                                <div className="space-y-4">
                                                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Briefing Details</label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        required
                                                        rows={5}
                                                        placeholder="Detail your operational requirements..."
                                                        className="w-full bg-white/[0.03] border border-white/5 rounded-[2.5rem] px-8 py-6 text-white focus:outline-none focus:border-gold/50 transition-all resize-none placeholder:text-zinc-800 font-bold"
                                                    ></textarea>
                                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] font-bold mt-1 uppercase ml-4" />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="w-full py-8 bg-white text-black rounded-3xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gold transition-all disabled:opacity-50 group shadow-2xl shadow-white/5 text-xs"
                                            >
                                                <span>Initialize Sequence</span>
                                                <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                            </button>

                                            <div className="text-center pt-4">
                                                <p className="text-zinc-700 text-[8px] font-black uppercase tracking-[0.4em]">
                                                    Encrypted by Pharaonic Protocol v4.2
                                                </p>
                                            </div>
                                        </form>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
                </div >
            </div >
        </div >
    );
}
