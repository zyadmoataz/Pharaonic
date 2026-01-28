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
    Compass,
    Activity,
    Wind,
    Sun,
    Landmark,
    Trees as Tree,
    Palmtree,
    Building2,
    Eye,
    Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";

const questions = [
    {
        id: "directive",
        title: "Operational Directive",
        question: "Select your primary objective for this deployment in Egypt.",
        options: [
            { id: "history", label: "Antiquity Audit", sub: "Priority on historical layers, temples, and pharaonic lineages.", icon: <Landmark /> },
            { id: "nature", label: "Frontier Extraction", sub: "Focus on Red Sea biodiversity or remote desert sectors.", icon: <Palmtree /> },
            { id: "luxury", label: "Static Recovery", sub: "High-tempo relaxation within sovereign luxury corridors.", icon: <Wind /> }
        ]
    },
    {
        id: "density",
        title: "Density Matrix",
        question: "Do you prefer high-energy social hubs or low-density secluded zones?",
        options: [
            { id: "high", label: "Vibrant Hubs", sub: "Exposure to urban velocity and high-population social centers.", icon: <Users /> },
            { id: "low", label: "Secluded Ops", sub: "Total environmental privacy and minimal human-traffic.", icon: <Eye /> }
        ]
    },
    {
        id: "tempo",
        title: "Operational Tempo",
        question: "Define the kinetic intensity of your daily roadmap.",
        options: [
            { id: "active", label: "Kinetic Velocity", sub: "High movement, diving, desert transit, and multi-sector steps.", icon: <Activity /> },
            { id: "passive", label: "Static Comfort", sub: "Minimal logistics, curated transit, and static observation.", icon: <Sun /> }
        ]
    },
    {
        id: "terrain",
        title: "Preferred Terrain",
        question: "Select the primary environmental sector for synchronization.",
        options: [
            { id: "maritime", label: "Maritime Layer", sub: "Red Sea sectors and aquatic infrastructure.", icon: <Waves /> },
            { id: "desert", label: "Oasis Frontier", sub: "Remote desert geology and nomadic architectures.", icon: <Tree /> },
            { id: "urban", label: "Metropolis Layer", sub: "Modern technological hubs and city-state centers.", icon: <Building2 /> }
        ]
    }
];

const destinations = [
    {
        name: "Cairo",
        tag: "The Strategic Hub",
        desc: "The hyper-active heart of Egypt. Ideal for those who thrive in historical density and urban complexity.",
        image: "/pyramids.webp",
        famousPlaces: ["Giza Plateau", "Grand Egyptian Museum", "Khan El-Khalili"],
        activities: ["Pyramid Entry Audit", "Liaison Guided Bazaar", "Nightly Nile Analysis"],
        attributes: { directive: "history", density: "high", tempo: "active", terrain: "urban" }
    },
    {
        name: "Luxor & Aswan",
        tag: "The Ancient Corridor",
        desc: "A concentrated historical sector where the Nile serves as the primary tactical artery. Best for true antiquity focus.",
        image: "/luxor.webp",
        famousPlaces: ["Karnak Temple", "Valley of the Kings", "Philae Temple"],
        activities: ["Royal Tomb Audits", "Felucca Drift Logistics", "High-Dam Technical View"],
        attributes: { directive: "history", density: "low", tempo: "passive", terrain: "maritime" } // maritime because of Nile
    },
    {
        name: "Siwa Oasis",
        tag: "The Shadow Sector",
        desc: "Total digital invisibility. A remote desert sanctuary for those requiring extreme seclusion and raw nature.",
        image: "/siwa.webp",
        famousPlaces: ["Salt Lakes", "Oracle Temple", "Shali Fortress"],
        activities: ["Salt Lake Buoyancy Ops", "Deep Desert Transit", "Eco-Luxury Quarantine"],
        attributes: { directive: "luxury", density: "low", tempo: "passive", terrain: "desert" }
    },
    {
        name: "Dahab",
        tag: "The Serene Frontier",
        desc: "A low-density sanctuary for maritime purists and tactical explorers. The Blue Hole corridor offers peerless aquatic audit opportunities.",
        image: "/market.webp",
        famousPlaces: ["The Blue Hole", "Blue Lagoon", "Wadi Gnai"],
        activities: ["Freediving Mastery", "Canyon Logistics", "Coastal Wind Analysis"],
        attributes: { directive: "nature", density: "low", tempo: "active", terrain: "maritime" }
    },
    {
        name: "Sharm El-Sheikh",
        tag: "The Elite Coast",
        desc: "The sovereign standard for coastal luxury and international grade security. High-tempo social luxury.",
        image: "/sharm.webp",
        famousPlaces: ["Ras Mohammed", "Soho Square", "Naama Bay"],
        activities: ["Private Yacht Ops", "Marine Park Audit", "High-End Casino Transit"],
        attributes: { directive: "luxury", density: "high", tempo: "passive", terrain: "maritime" }
    },
    {
        name: "Hurghada / El Gouna",
        tag: "The Versatile Sector",
        desc: "A multi-modal Red Sea hub balancing modern infrastructure with high-fidelity aquatic access.",
        image: "/sharm.webp",
        famousPlaces: ["Giftun Island", "El Gouna Marina", "Old Town"],
        activities: ["Kitesurfing Deployment", "Desert Buggy Logic", "Submarine Recon"],
        attributes: { directive: "nature", density: "high", tempo: "active", terrain: "maritime" }
    }
];

export default function AIGenerator() {
    const [step, setStep] = useState(0); // 0: Intro, 1-4: Questions, 5: Processing, 6: Results
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [logs, setLogs] = useState<string[]>([]);
    const [results, setResults] = useState<any[]>([]);

    const startGenerator = () => setStep(1);

    const handleAnswer = (questionId: string, optionId: string) => {
        const newAnswers = { ...answers, [questionId]: optionId };
        setAnswers(newAnswers);
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            setStep(5);
            runSimulation(newAnswers);
        }
    };

    const runSimulation = (finalAnswers: Record<string, string>) => {
        const simulationLogs = [
            "[INIT] INITIALIZING PERSONA DISCOVERY PROTOCOL...",
            "[SCAN] ANALYZING BIOMETRIC PREFERENCE PATTERNS...",
            "[DATA] CROSS-REFERENCING WITH 112 STRATEGIC DATA NODES...",
            "[AUDIT] SCRUBBING REGIONAL DENSITY TELEMETRY...",
            "[CORE] CALCULATING ENVIRONMENTAL SYNERGY RATIOS...",
            "[SYS] GENERATING DUAL RECOMMENDATION BLUEPRINT..."
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < simulationLogs.length) {
                setLogs(prev => [...prev, simulationLogs[i]]);
                i++;
            } else {
                clearInterval(interval);
                calculateResults(finalAnswers);
            }
        }, 600);
    };

    const calculateResults = (finalAnswers: Record<string, string>) => {
        // Scoring engine
        const scored = destinations.map(dest => {
            let score = 0;
            if (dest.attributes.directive === finalAnswers.directive) score += 40;
            if (dest.attributes.density === finalAnswers.density) score += 20;
            if (dest.attributes.tempo === finalAnswers.tempo) score += 20;
            if (dest.attributes.terrain === finalAnswers.terrain) score += 20;
            return { ...dest, score };
        });

        const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 2);
        setResults(sorted);
        setTimeout(() => setStep(6), 800);
    };

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
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
                                <Sparkles className="w-4 h-4" /> Deep Intelligence Unit
                            </div>
                            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter italic uppercase leading-[0.8] mb-10">
                                Engineer Your <br /><span className="gold-gradient">Sovereign Path.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed italic">
                                "Our AI Persona Engine calculates your inherent physiological and social preferences to recommend the exact Egyptian sectors for your next high-fidelity deployment."
                            </p>
                            <button
                                onClick={startGenerator}
                                className="group relative px-12 py-6 bg-gold text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Initialize Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

                    {step >= 1 && step <= 4 && (
                        <motion.div
                            key={`q-${step}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="max-w-4xl mx-auto space-y-12"
                        >
                            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                                <div>
                                    <div className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2">Node 0{step} Synchronizing</div>
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">{questions[step - 1].title}</h2>
                                </div>
                                <div className="text-zinc-800 font-black text-7xl italic opacity-50 tracking-tighter">{step}/{questions.length}</div>
                            </div>

                            <p className="text-2xl text-white font-medium italic border-l-4 border-gold pl-6 py-2 bg-gold/5">
                                {questions[step - 1].question}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {questions[step - 1].options.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleAnswer(questions[step - 1].id, opt.id)}
                                        className="group p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:border-gold/50 hover:bg-white/[0.05] transition-all text-left relative overflow-hidden flex flex-col items-start justify-between min-h-[300px]"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            {React.cloneElement(opt.icon as React.ReactElement<any>, { size: 28 })}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{opt.label}</h3>
                                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                                                {opt.sub}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 5 && (
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
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Synthesizing Blueprint.</h2>
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

                    {step === 6 && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-16"
                        >
                            <div className="text-center space-y-4">
                                <div className="text-gold text-xs font-black uppercase tracking-[0.5em]">Dual Reconnaissance Findings</div>
                                <h2 className="text-6xl font-black text-white italic tracking-tighter uppercase leading-tight">Your Optimal <br /> Egyptian <span className="gold-gradient">Sectors.</span></h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                {results.map((result, idx) => (
                                    <motion.div
                                        key={result.name}
                                        initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="bg-[#0a0a0a] border border-white/5 rounded-[4rem] overflow-hidden group hover:border-gold/30 transition-all duration-500"
                                    >
                                        <div className="aspect-[16/10] overflow-hidden relative">
                                            <SafeImage src={result.image} alt={result.name} className="w-full h-full group-hover:scale-110 transition-transform duration-[2s]" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent " />
                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em]">{result.tag}</span>
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-gold fill-gold" />)}
                                                    </div>
                                                </div>
                                                <h3 className="text-5xl font-black text-white italic tracking-tighter uppercase">{result.name}</h3>
                                            </div>
                                        </div>

                                        <div className="p-10 space-y-10">
                                            <p className="text-zinc-400 text-lg font-medium leading-relaxed italic">
                                                "{result.desc}"
                                            </p>

                                            <div className="grid grid-cols-2 gap-8">
                                                <div className="space-y-6">
                                                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                                        <MapPin className="w-4 h-4 text-gold" /> Key Zones
                                                    </h4>
                                                    <div className="flex flex-col gap-2">
                                                        {result.famousPlaces.map((place: string) => (
                                                            <div key={place} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 border-l border-white/10 pl-4">{place}</div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                                        <Zap className="w-4 h-4 text-gold" /> Activities
                                                    </h4>
                                                    <div className="flex flex-col gap-2">
                                                        {result.activities.map((act: string) => (
                                                            <div key={act} className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-2 italic">
                                                                <div className="w-1 h-1 rounded-full bg-gold" /> {act}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => window.location.href = `/personalized-plan?city=${result.name}`}
                                                className="w-full py-6 bg-white/[0.03] border border-white/10 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-all flex items-center justify-center gap-4 group/btn"
                                            >
                                                Deploy Liaison <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-center pt-8">
                                <button
                                    onClick={() => setStep(0)}
                                    className="px-12 py-6 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gold transition-all shadow-2xl shadow-white/5"
                                >
                                    Recalibrate Discovery Protocol
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background elements */}
            <div className="fixed bottom-0 left-0 p-12 opacity-10 pointer-events-none hidden lg:block">
                <div className="text-[180px] font-black italic uppercase leading-[0.7] text-white tracking-tighter">SOVEREIGN.<br />INTELLIGENCE.</div>
            </div>
        </div>
    );
}
