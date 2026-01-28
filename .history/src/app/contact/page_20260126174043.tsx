"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
    const [state, handleSubmit] = useForm("mnnjnnye");

    return (
        <div className="pt-32 pb-20 bg-[#050505] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                            Connect with <span className="text-gold">Guidly.</span>
                        </h1>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg">
                            Whether you're planning a corporate retreat or a solo expedition, our security and intelligence team is ready to assist.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-gold" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Enterprise Hotline</span>
                                    <span className="text-white text-xl font-bold tracking-tight">01012766890</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-gold" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Security Desk</span>
                                    <span className="text-white text-xl font-bold tracking-tight">security@guidly.ai</span>
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
                                    className="p-12 rounded-[3.5rem] bg-gold/5 border border-gold/20 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                                        <CheckCircle className="w-10 h-10 text-black" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Transmission Received</h2>
                                    <p className="text-neutral-400">Our team has received your inquiry. An Egyptian travel specialist will contact you within 24 hours.</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="text-gold text-sm font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="p-10 md:p-14 rounded-[3.5rem] bg-white/[0.02] border border-white/5 glass"
                                >
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="space-y-4">
                                            <label htmlFor="full-name" className="text-xs font-bold uppercase tracking-widest text-neutral-500 px-1">Identity</label>
                                            <input
                                                id="full-name"
                                                type="text"
                                                name="name"
                                                autoComplete="name"
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-neutral-500 px-1">Digital Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                required
                                                placeholder="email@example.com"
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700"
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                        </div>
                                        <div className="space-y-4">
                                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-neutral-500 px-1">Inquiry</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder="Describe your travel vision..."
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-3xl px-6 py-5 text-white focus:outline-none focus:border-gold/50 transition-all resize-none placeholder:text-neutral-700"
                                            ></textarea>
                                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="w-full py-6 bg-gold text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-50 group shadow-lg shadow-gold/10"
                                        >
                                            <span className="text-lg">Initialize Contact</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
