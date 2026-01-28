"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, CreditCard, ChevronRight, CheckCircle, Rocket, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CheckoutPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        passport: "",
        arrivalDate: "",
        visaType: "Tourist",
    });

    const nextStep = () => setStep(s => s + 1);

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-4">
            <div className="max-w-xl mx-auto">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold/10">
                                <motion.div
                                    className="h-full bg-gold"
                                    initial={{ width: "33%" }}
                                    animate={{ width: "33%" }}
                                />
                            </div>

                            <div className="mb-10 text-center">
                                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Landmark className="w-8 h-8 text-gold" />
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">E-Visa Verification</h1>
                                <p className="text-neutral-500 text-sm">Secure authorization for your Egyptian expedition.</p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                                <div className="space-y-2">
                                    <label htmlFor="checkout-name" className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Full Identity</label>
                                    <input
                                        id="checkout-name"
                                        name="checkout-name"
                                        type="text"
                                        required
                                        placeholder="Enter your name as per passport"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="passport" className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Passport Number</label>
                                    <input
                                        id="passport"
                                        name="passport"
                                        type="text"
                                        required
                                        placeholder="e.g. A1234567"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all"
                                        value={formData.passport}
                                        onChange={(e) => setFormData({ ...formData, passport: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="arrival" className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Arrival Date</label>
                                        <input
                                            id="arrival"
                                            name="arrival"
                                            type="date"
                                            required
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all color-scheme-dark"
                                            value={formData.arrivalDate}
                                            onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="visa-type" className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Visa Type</label>
                                        <select
                                            id="visa-type"
                                            name="visa-type"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all appearance-none"
                                            value={formData.visaType}
                                            onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                                        >
                                            <option value="Tourist" className="bg-zinc-950">Tourist</option>
                                            <option value="Business" className="bg-zinc-950">Business</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 bg-gold text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-gold/10 mt-4"
                                >
                                    Initialize Security Scan <ChevronRight className="w-5 h-5" />
                                </button>
                            </form>

                            <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
                                <div className="flex items-center gap-1">
                                    <Lock className="w-3 h-3 text-gold" />
                                    <span className="text-[10px] uppercase font-bold tracking-tighter text-white">256-Bit SSL</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Shield className="w-3 h-3 text-gold" />
                                    <span className="text-[10px] uppercase font-bold tracking-tighter text-white">Gov Authorized</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-16 text-center shadow-2xl space-y-10"
                        >
                            <div className="relative w-32 h-32 mx-auto">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-4 border-dashed border-gold/20"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Shield className="w-12 h-12 text-gold" />
                                </motion.div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-white tracking-tight">Verifying Credentials...</h2>
                                <p className="text-neutral-500 text-sm max-w-xs mx-auto">
                                    Cross-referencing passport <b>{formData.passport}</b> with Egyptian Ministry of Tourism databases.
                                </p>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                onAnimationComplete={nextStep}
                                className="h-1 bg-gold rounded-full max-w-xs mx-auto shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                            />
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-16 text-center shadow-2xl space-y-10"
                        >
                            <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                                <Rocket className="w-12 h-12 text-black" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Verified & Ready!</h1>
                                <p className="text-neutral-400 text-lg leading-relaxed">
                                    Welcome aboard, <b>{formData.name}</b>. Your Egyptian visa and enterprise safety program have been successfully initialized.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => window.location.href = `/checkout?status=authorized&tier=${formData.visaType}`}
                                    className="px-10 py-5 bg-gold text-black font-black rounded-2xl hover:bg-white transition-all shadow-xl shadow-gold/20 uppercase tracking-widest text-sm"
                                >
                                    Proceed to Payment
                                </button>
                                <Link
                                    href="/"
                                    className="text-neutral-500 hover:text-white transition-colors py-2"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CheckoutPage;
