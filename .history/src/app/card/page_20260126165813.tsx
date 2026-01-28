"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Shield, Smartphone, Globe, ArrowRight, Zap, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const CardPage = () => {
    return (
        <div className="min-h-screen bg-black pt-24 pb-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase">
                        <Zap className="w-3 h-3" />
                        Cashless Tourism Revolution
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        The <span className="text-gold">Guidly Card</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        Say goodbye to high ATM fees and currency exchange scams. One card, total freedom. Pay like a local, with the protection of an enterprise security network.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                <Shield className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Anti-Scam Protection</h3>
                                <p className="text-gray-500 text-sm">Every transaction is monitored by our security AI to spot unusual price spikes.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                <Globe className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Real Market Exchange</h3>
                                <p className="text-gray-500 text-sm">Get the official central bank rate. No hidden 10% tourist markups.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button className="px-8 py-4 bg-gold text-black font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                            Apply for Digital Card <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors">
                            Compare Physical Versions
                        </button>
                    </div>
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: -5 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 w-full max-w-md mx-auto aspect-[1.58/1] rounded-[24px] bg-gradient-to-br from-zinc-800 to-black p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full" />
                        <div className="flex justify-between items-start mb-12">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                                    <div className="w-6 h-6 text-gold">G</div>
                                </div>
                                <span className="text-white font-bold tracking-widest text-lg">GUIDLY</span>
                            </div>
                            <Smartphone className="text-gold/50 w-8 h-8" />
                        </div>

                        <div className="space-y-6">
                            <div className="w-14 h-10 bg-gradient-to-br from-gold to-yellow-600 rounded-lg shadow-inner" />
                            <div className="text-2xl md:text-3xl text-white font-mono tracking-widest">
                                4921 8273 0192 4827
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-tighter mb-1">Card Holder</div>
                                    <div className="text-sm text-white font-medium uppercase">Premium Voyager</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-tighter mb-1">Expiry</div>
                                    <div className="text-sm text-white font-medium">12 / 29</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-10 -right-5 md:-right-20 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[240px]"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CreditCard className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-white text-xs font-bold whitespace-nowrap">Payment Verified</span>
                        </div>
                        <div className="text-2xl text-white font-bold mb-1">$ 1,420.00</div>
                        <div className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest">Available Balance</div>
                    </motion.div>

                    {/* Background Decorative Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-zinc-900 rounded-full pointer-events-none opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-zinc-900 rounded-full pointer-events-none opacity-25" />
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900 pt-16">
                <div className="text-center md:text-left">
                    <Info className="w-6 h-6 text-gold mb-4 mx-auto md:mx-0" />
                    <h4 className="text-white font-bold mb-2">Accepted Everywhere</h4>
                    <p className="text-zinc-500 text-sm">Valid at all museums, government sites, and Guidly-Verified local merchants.</p>
                </div>
                <div className="text-center md:text-left">
                    <Info className="w-6 h-6 text-gold mb-4 mx-auto md:mx-0" />
                    <h4 className="text-white font-bold mb-2">Instant Freeze</h4>
                    <p className="text-zinc-500 text-sm">If you lose your card, freeze it instantly from the app with zero liability.</p>
                </div>
                <div className="text-center md:text-left">
                    <Info className="w-6 h-6 text-gold mb-4 mx-auto md:mx-0" />
                    <h4 className="text-white font-bold mb-2">Cashback Rewards</h4>
                    <p className="text-zinc-500 text-sm">Earn 3% Guidly Points back on all cultural site entries to use for future tours.</p>
                </div>
            </div>
        </div>
    );
};

export default CardPage;
