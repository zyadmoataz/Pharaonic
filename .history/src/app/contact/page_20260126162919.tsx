"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                            Get in <span className="gold-gradient">Touch.</span>
                        </h1>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg">
                            Have questions about safety, permits, or AI planning? Our team is
                            here to help you navigate Egypt with confidence.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-all">
                                    <Mail className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</h4>
                                    <p className="text-white font-medium">support@guidly.eg</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-all">
                                    <MessageCircle className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">WhatsApp</h4>
                                    <p className="text-white font-medium">+20 123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-gold/30 transition-all">
                                    <MapPin className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Headquarters</h4>
                                    <p className="text-white font-medium">New Cairo, Egypt</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5"
                    >
                        <form action="https://formspree.io/f/mnnjnnye" method="POST" className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="How can we help you?"
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-gold text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gold-light transition-all"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
