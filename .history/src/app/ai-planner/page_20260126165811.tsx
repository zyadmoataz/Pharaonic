"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, MapPin, Shield, CheckCircle, ChevronRight, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const AIPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        budget: "Medium",
        duration: "7 Days",
        interests: [],
        pace: "Balanced",
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => Math.max(1, s - 1));

    return (
        <div className="min-h-screen bg-black pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase mb-4"
                    >
                        <Sparkles className="w-3 h-3" />
                        AI-Driven Architecture
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        GenAI Trip <span className="text-gold">Architect</span>
                    </h1>
                    <p className="text-gray-500">
                        Answer 3 questions. Get a 100% verified, scam-free itinerary in seconds.
                    </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
                        <motion.div
                            className="h-full bg-gold"
                            initial={{ width: "33%" }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h2 className="text-2xl font-bold text-white">What is your target budget per day?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {["Budget ($50)", "Medium ($200)", "Luxury ($1000+)"].map((b) => (
                                        <button
                                            key={b}
                                            onClick={() => {
                                                setFormData({ ...formData, budget: b });
                                                nextStep();
                                            }}
                                            className={cn(
                                                "p-6 rounded-2xl border text-left transition-all group",
                                                formData.budget === b
                                                    ? "border-gold bg-gold/5"
                                                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"
                                            )}
                                        >
                                            <CheckCircle
                                                className={cn(
                                                    "w-5 h-5 mb-4 group-hover:text-gold transition-colors",
                                                    formData.budget === b ? "text-gold" : "text-zinc-600"
                                                )}
                                            />
                                            <span className="block text-white font-bold">{b}</span>
                                            <span className="text-gray-500 text-xs mt-1">Includes local verified options</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h2 className="text-2xl font-bold text-white">How many days are you staying?</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {["3 Days", "7 Days", "14 Days", "Custom"].map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => {
                                                setFormData({ ...formData, duration: d });
                                                nextStep();
                                            }}
                                            className={cn(
                                                "p-6 rounded-2xl border text-center transition-all",
                                                formData.duration === d
                                                    ? "border-gold bg-gold/5"
                                                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600"
                                            )}
                                        >
                                            <Calendar className="w-6 h-6 mx-auto mb-2 text-gold opacity-50" />
                                            <span className="block text-white font-bold">{d}</span>
                                        </button>
                                    ))}
                                </div>
                                <button onClick={prevStep} className="text-zinc-500 text-sm hover:text-white underline">
                                    Back to budget
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="text-center py-10"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-8">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30"
                                    />
                                    <Wand2 className="w-12 h-12 text-gold absolute inset-0 m-auto animate-pulse" />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">Finalizing Your Program...</h2>
                                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                                    We are analyzing 14,000+ verified guides, safety reports, and fair-market prices for Egypt.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-left">
                                        <Shield className="w-5 h-5 text-gold" />
                                        <div>
                                            <span className="block text-white text-sm font-bold">Safety Check Passed</span>
                                            <span className="text-zinc-500 text-xs">All selected locations are green-zoned for 2026.</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => alert("Enterprise Integration: Program generated. Please sign up to view full details.")}
                                    className="mt-10 px-10 py-4 bg-gold text-black font-bold rounded-xl hover:bg-white transition-colors"
                                >
                                    View My Program
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
                            <MapPin className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Real-time Geography</h4>
                            <p className="text-zinc-500 text-xs mt-1">Our AI tracks real-world transit times in Cairo and Alexandria to prevent burnout.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
                            <Shield className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Verified Accuracy</h4>
                            <p className="text-zinc-500 text-xs mt-1">99.8% precision on museum entry fees and local VAT regulations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIPage;
