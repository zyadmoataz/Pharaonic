"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Smartphone, User, Globe, Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const FeedbackPage = () => {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState({
        name: "",
        age: "",
        country: "",
        duration: "",
        cities: "",
        firstTime: "",
        purpose: "",
        excitedAbout: "",
        bestPart: "",
        difficultPart: "",
        transportProblems: "",
        missingFeature: "",
        appMustHave: "",
        wouldPay: "",
        visitAgain: "",
    });

    const questions = [
        { id: "q1", label: "Is this your first time visiting Egypt?", key: "firstTime", type: "radio", options: ["Yes", "No"] },
        { id: "q2", label: "What was the main purpose of your visit?", key: "purpose", type: "text", placeholder: "e.g. Vacation, Business, Culture" },
        { id: "q3", label: "What were you most excited about before coming?", key: "excitedAbout", type: "textarea" },
        { id: "q4", label: "What was the best part of your experience?", key: "bestPart", type: "textarea" },
        { id: "q5", label: "What was the most difficult or frustrating part?", key: "difficultPart", type: "textarea" },
        { id: "q6", label: "Did you face any problems with transportation or language?", key: "transportProblems", type: "textarea" },
        { id: "q7", label: "What do you feel is missing for tourists in Egypt?", key: "missingFeature", type: "textarea" },
        { id: "q8", label: "What should a tourist helper app definitely include?", key: "appMustHave", type: "textarea" },
        { id: "q9", label: "Would you pay for a trusted digital service to make your trip easier?", key: "wouldPay", type: "radio", options: ["Yes", "No", "Maybe"] },
        { id: "q10", label: "After your experience, would you visit Egypt again?", key: "visitAgain", type: "radio", options: ["Yes", "No", "Possibly"] },
    ];

    const nextStep = () => setStep(s => s + 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(answers),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errorData = await response.json();
                console.error('Strategic Layer Error:', errorData);
                setError(errorData.detail || 'Transmission denied by Strategic Layer.');
            }
        } catch (err: any) {
            console.error('Connection Error:', err);
            setError('Global connection timeout. Tactical relay offline.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="feedback-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3.5rem] p-8 md:p-16 shadow-2xl"
                        >
                            <div className="mb-12">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                                    Global <span className="text-gold">Intelligence.</span>
                                </h1>
                                <p className="text-neutral-500 text-lg">Help us architect a better future for Egyptian tourism.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-12">
                                {/* Basic Info Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                    <h3 className="col-span-1 md:col-span-2 text-gold font-bold uppercase tracking-widest text-xs mb-2">Basic Info</h3>
                                    <div className="space-y-2">
                                        <label htmlFor="fb-name" className="text-xs text-neutral-500 uppercase tracking-widest ml-1">Name</label>
                                        <input id="fb-name" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" value={answers.name} onChange={e => setAnswers({ ...answers, name: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="fb-age" className="text-xs text-neutral-500 uppercase tracking-widest ml-1">Age</label>
                                        <input id="fb-age" type="number" required placeholder="Age" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" value={answers.age} onChange={e => setAnswers({ ...answers, age: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="fb-country" className="text-xs text-neutral-500 uppercase tracking-widest ml-1">Country</label>
                                        <input id="fb-country" required placeholder="Country of Residence" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" value={answers.country} onChange={e => setAnswers({ ...answers, country: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="fb-stay" className="text-xs text-neutral-500 uppercase tracking-widest ml-1">Duration of Stay</label>
                                        <input id="fb-stay" required placeholder="e.g. 10 Days" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" value={answers.duration} onChange={e => setAnswers({ ...answers, duration: e.target.value })} />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label htmlFor="fb-cities" className="text-xs text-neutral-500 uppercase tracking-widest ml-1">Cities Visited</label>
                                        <input id="fb-cities" required placeholder="e.g. Cairo, Luxor, Aswan" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" value={answers.cities} onChange={e => setAnswers({ ...answers, cities: e.target.value })} />
                                    </div>
                                </div>

                                {/* Deep Questions */}
                                <div className="space-y-10">
                                    <h3 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Detailed Feedback</h3>
                                    {questions.map((q, idx) => (
                                        <motion.div
                                            key={q.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="space-y-4"
                                        >
                                            <label className="text-xl font-bold text-white flex items-start gap-4">
                                                <span className="text-gold opacity-30 text-xs mt-1.5">{idx + 1}</span>
                                                {q.label}
                                            </label>

                                            {q.type === "radio" ? (
                                                <div className="flex flex-wrap gap-4 pt-2">
                                                    {q.options?.map(opt => (
                                                        <button
                                                            key={opt}
                                                            type="button"
                                                            onClick={() => setAnswers({ ...answers, [q.key]: opt })}
                                                            className={cn(
                                                                "px-8 py-4 rounded-2xl border font-bold transition-all",
                                                                answers[q.key as keyof typeof answers] === opt
                                                                    ? "bg-gold border-gold text-black shadow-lg shadow-gold/20"
                                                                    : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/20"
                                                            )}
                                                        >
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : q.type === "textarea" ? (
                                                <textarea
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white focus:border-gold/50 outline-none transition-all min-h-[160px] resize-none"
                                                    onChange={e => setAnswers({ ...answers, [q.key]: e.target.value })}
                                                    placeholder="Share your thoughts..."
                                                />
                                            ) : (
                                                <input
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-gold/50 outline-none transition-all"
                                                    onChange={e => setAnswers({ ...answers, [q.key]: e.target.value })}
                                                    placeholder={q.placeholder}
                                                />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-8 bg-gold text-black rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-gold/10 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-3">
                                            Archiving Intel... <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin" />
                                        </span>
                                    ) : (
                                        <>
                                            Transmit Intelligence <Send className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                {error && (
                                    <p className="text-red-500 font-bold text-center mt-4">
                                        {typeof error === 'string' ? error : "Transmission failed. Please verify connection to the Strategic Layer."}
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-950 border border-white/5 rounded-[4rem] p-20 text-center shadow-2xl space-y-12"
                        >
                            <div className="w-32 h-32 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_80px_rgba(212,175,55,0.4)] animate-pulse">
                                <CheckCircle className="w-16 h-16 text-black" />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Thank You, {answers.name.split(' ')[0]}!</h2>
                                <p className="text-neutral-400 text-xl leading-relaxed max-w-lg mx-auto">
                                    Your data has been fed into our AI model to optimize safe transit routes and guide auditing for all future explorers.
                                </p>
                            </div>
                            <div className="flex justify-center gap-6">
                                <button onClick={() => window.location.href = '/'} className="px-12 py-6 bg-white text-black font-bold rounded-2xl hover:bg-gold transition-all">Back to Reality</button>
                                <button onClick={() => window.location.reload()} className="px-12 py-6 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">Submit Another Feedback</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FeedbackPage;
