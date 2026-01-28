"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Users,
    Waves,
    Zap,
    CheckCircle,
    ArrowRight,
    MapPin,
    Star,
    Shield,
    Info,
    EyeOff,
    Compass,
    Activity,
    Wind,
    Sun
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";

const questions = [
    {
        id: "crowd",
        title: "Population Density Preference",
        question: "Do you prefer vibrant, crowded social hubs or serene, secluded sanctuaries?",
        options: [
            { id: "crowded", label: "Vibrant Hubs", sub: "I thrive in energy and high-traffic social environments.", icon: <Users /> },
            { id: "secluded", label: "Secluded Ops", sub: "Priority on privacy and low human-density zones.", icon: <Shield /> }
        ]
    },
    {
        id: "environment",
        title: "Environmental Profile",
        question: "Select your primary operative environment for this deployment.",
        options: [
            { id: "sea", label: "Maritime Layer", sub: "Deep blue horizons and aquatic biodiversity focus.", icon: <Waves /> },
            { id: "city", label: "Urban Sector", sub: "Technological hubs and modern Egyptian infrastructure.", icon: <Zap /> }
        ]
    },
    {
        id: "vibe",
        title: "Atmospheric Pulse",
        question: "What is the desired tempo of your expedition?",
        options: [
            { id: "adventure", label: "High Tempo", sub: "Active exploration, diving, and tactical desert transit.", icon: <Activity /> },
            { id: "relaxation", label: "Low Tempo", sub: "Recovery-focused, high-luxury, and static comfort.", icon: <Wind /> }
        ]
    }
];

const recommendations = {
    sharm: {
        name: "Sharm El-Sheikh",
        tag: "The Elite Coast",
        desc: "The ultimate intersection of Red Sea luxury and international-grade security. Ideal for those seeking high-end infrastructure with vibrant social energy.",
        image: "/sharm.webp",
        famousPlaces: ["Ras Mohammed National Park", "Naama Bay", "Soho Square"],
        activities: ["World-class Scuba Diving", "Desert Safari Logistics", "Private Yacht Expeditions"],
        logic: (answers: any) => answers.environment === "sea" && answers.crowd === "crowded"
    },
    dahab: {
        name: "Dahab",
        tag: "The Serene Frontier",
        desc: "A low-density, high-purity maritime sanctuary. Perfect for the 'digital nomad' vibe and those who prefer raw nature over polished luxury.",
        image: "/sharm.webp",
        famousPlaces: ["The Blue Hole", "Blue Lagoon", "Mount Sinai Corridor"],
        activities: ["Shore-side Windsurfing", "Canyon Exploration", "Freediving Mastery"],
        logic: (answers: any) => answers.environment === "sea" && answers.crowd === "secluded"
    },
    hurghada: {
        name: "Hurghada",
        tag: "The Strategic Gateway",
        desc: "A multi-sector maritime hub offering a balance of luxury resorts and accessible adventure. The most versatile sector for all-around Egyptian experience.",
        image: "/sharm.webp",
        famousPlaces: ["Giftun Island", "The Marina", "El Gouna Extension"],
        activities: ["Snorkeling Audits", "Glass Bottom Boat Transit", "Kitesurfing Deployment"],
        logic: (answers: any) => answers.environment === "city" || (answers.vibe === "adventure" && answers.crowd === "crowded")
    }
};

export default function AIGenerator() {
    const [step, setStep] = useState(0); // 0: Intro, 1-3: Questions, 4: Processing, 5: Results
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [logs, setLogs] = useState<string[]>([]);
    const [result, setResult] = useState<any>(null);

    const startGenerator = () => setStep(1);

    const handleAnswer = (questionId: string, optionId: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionId }));
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            setStep(4);
            runSimulation();
        }
    };

    const runSimulation = () => {
        const simulationLogs = [
            "[INIT] INITIALIZING PERSONA DISCOVERY PROTOCOL...",
            "[SCAN] ANALYZING BIOMETRIC PREFERENCE PATTERNS...",
            "[DATA] CROSS-REFERENCING WITH 42 EGYPTIAN SECTOR DATABASES...",
            "[AUDIT] SCRUBBING CROWD DENSITY REAL-TIME TELEMETRY...",
            "[CORE] CALCULATING OPTIMAL ENVIRONMENTAL SYNERGY...",
            "[SYS] GENERATING STRATEGIC RECOMMENDATION..."
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < simulationLogs.length) {
                setLogs(prev => [...prev, simulationLogs[i]]);
                i++;
            } else {
                clearInterval(interval);
                calculateResult();
            }
        }, 800);
    };

    const calculateResult = () => {
        let selected = recommendations.hurghada; // Default
        if (recommendations.sharm.logic(answers)) selected = recommendations.sharm;
        else if (recommendations.dahab.logic(answers)) selected = recommendations.dahab;

        setResult(selected);
        setTimeout(() => setStep(5), 1000);
    };

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="text-center space-y-12"
                        >
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                                <Sparkles className="w-4 h-4" /> Strategic Intel Service
                            </div>
                            <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-[0.8] mb-10">
                                Discover Your <br /><span className="gold-gradient">Sovereign Path.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed italic">
                                "If you do not yet understand your own requirements, our AI Generator will architect a persona-based deployment strategy tailored to your innate preferences."
                            </p>
                            <button
                                onClick={startGenerator}
                                className="group relative px-12 py-6 bg-gold text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Initialize Discovery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-white"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ type: "tween" }}
                                />
                            </button>
                        </motion.div>
                    )}

                    {step >= 1 && step <= 3 && (
                        <motion.div
                            key={`q-${step}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-12"
                        >
                            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                                <div>
                                    <div className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2">Phase 0{step}</div>
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">{questions[step - 1].title}</h2>
                                </div>
                                <div className="text-zinc-700 font-black text-6xl italic opacity-50">{step}/3</div>
                            </div>

                            <p className="text-2xl text-white font-medium italic border-l-4 border-gold pl-6 py-2 bg-gold/5">
                                {questions[step - 1].question}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {questions[step - 1].options.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleAnswer(questions[step - 1].id, opt.id)}
                                        className="group p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:border-gold/50 hover:bg-white/[0.05] transition-all text-left relative overflow-hidden"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            {React.cloneElement(opt.icon as React.ReactElement<any>, { size: 32 })}
                                        </div>
                                        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{opt.label}</h3>
                                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                                            {opt.sub}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 space-y-12"
                        >
                            <div className="relative w-64 h-64 mx-auto">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-4 border-dashed border-gold/30"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Compass className="w-20 h-20 text-gold animate-pulse" />
                                </div>
                            </div>

                            <div className="space-y-6 max-w-lg mx-auto">
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Synthesizing Persona.</h2>
                                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl space-y-3 h-40 overflow-hidden text-left font-mono text-[10px] text-zinc-500">
                                    {logs.map((log, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={cn(log?.includes('[SYS]') ? "text-gold" : "")}
                                        >
                                            {log}
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-2 h-4 bg-gold ml-1 translate-y-1"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 5 && result && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="w-full md:w-1/2 aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/10 relative group">
                                    <SafeImage src={result.image} alt={result.name} className="w-full h-full group-hover:scale-105 duration-[2s] ease-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent " />
                                    <div className="absolute bottom-10 left-10">
                                        <div className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-2">Recommended Sector</div>
                                        <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase">{result.name}</h2>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 space-y-10 py-6">
                                    <div>
                                        <h3 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">{result.tag}</h3>
                                        <p className="text-zinc-400 text-lg font-medium leading-relaxed italic">
                                            "{result.desc}"
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                            <MapPin className="w-4 h-4 text-gold" /> Key Operative Zones
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {result.famousPlaces.map((place: string) => (
                                                <span key={place} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">{place}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                            <Zap className="w-4 h-4 text-gold" /> Tactical Activities
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-4">
                                            {result.activities.map((act: string) => (
                                                <li key={act} className="flex items-center gap-4 group">
                                                    <div className="w-2 h-2 rounded-full bg-gold/50 group-hover:scale-150 transition-transform" />
                                                    <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">{act}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-10 flex gap-4">
                                        <button
                                            onClick={() => window.location.href = `/personalized-plan`}
                                            className="px-10 py-6 bg-gold text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 shadow-2xl shadow-gold/20"
                                        >
                                            Architect Itinerary <ArrowRight className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setStep(0)}
                                            className="px-10 py-6 bg-white/[0.03] border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
                                        >
                                            Restart Audit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background elements */}
            <div className="fixed bottom-0 left-0 p-12 opacity-10 pointer-events-none">
                <div className="text-[150px] font-black italic uppercase leading-[0.7] text-white tracking-tighter">PERSONA.<br />DISCOVERY.</div>
            </div>
        </div>
    );
}
