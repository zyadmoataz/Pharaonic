"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, MapPin, Shield, CheckCircle, ChevronRight, Wand2, User, Camera, ShoppingBag, Utensils, Landmarks, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const activities_pool = [
    { id: "pyramids", name: "Giza Pyramids", price: 50, category: "History", icon: <Landmarks className="w-4 h-4" /> },
    { id: "market", name: "Khan el-Khalili", price: 20, category: "Shopping", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "museum", name: "GEM Museum", price: 40, category: "Culture", icon: <Landmarks className="w-4 h-4" /> },
    { id: "nile", name: "Nile Dinner Cruise", price: 80, category: "Food", icon: <Utensils className="w-4 h-4" /> },
    { id: "saqqara", name: "Saqqara Step Pyramid", price: 45, category: "History", icon: <Landmarks className="w-4 h-4" /> },
    { id: "food-tour", name: "Hidden Cairo Food Tour", price: 35, category: "Food", icon: <Utensils className="w-4 h-4" /> },
];

const AIPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        budget: "Medium",
        duration: "7 Days",
        selectedActivities: [] as string[],
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => Math.max(1, s - 1));

    const toggleActivity = (id: string) => {
        setFormData(prev => ({
            ...prev,
            selectedActivities: prev.selectedActivities.includes(id)
                ? prev.selectedActivities.filter(a => a !== id)
                : [...prev.selectedActivities, id]
        }));
    };

    const totalPrice = formData.selectedActivities.reduce((sum, id) => {
        const item = activities_pool.find(a => a.id === id);
        return sum + (item?.price || 0);
    }, 0);

    return (
        <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase mb-6 tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                    >
                        <Sparkles className="w-3 h-3" />
                        Next-Gen Tourism Intelligence
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                        AI Trip <span className="text-gold">Architect.</span>
                    </h1>
                    <p className="text-neutral-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Design your elite Egyptian journey with real-time price benchmarks and security auditing.
                    </p>
                </div>

                <div className="bg-zinc-950 border border-white/5 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                            initial={{ width: "20%" }}
                            animate={{ width: `${(step / 6) * 100}%` }}
                        />
                    </div>

                    <div className="p-8 md:p-16">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-10"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Who are we planning for?</h2>
                                        <p className="text-neutral-500">Your name allows our AI to personalize your itinerary and security briefings.</p>
                                    </div>
                                    <div className="relative">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gold w-6 h-6" />
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-16 py-8 text-2xl text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-800 font-medium"
                                        />
                                    </div>
                                    <button
                                        disabled={!formData.name}
                                        onClick={nextStep}
                                        className="w-full py-6 bg-white text-black rounded-2xl font-bold text-xl hover:bg-gold transition-all disabled:opacity-30 disabled:hover:bg-white flex items-center justify-center gap-3 group shadow-xl"
                                    >
                                        Initalize Architect <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-10"
                                >
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-bold text-white capitalize">Welcome, {formData.name}</h2>
                                            <p className="text-neutral-500">Select activities for your custom program.</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest block">Est. Budget</span>
                                            <span className="text-gold text-3xl font-mono font-bold">${totalPrice}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                        {activities_pool.map((activity) => (
                                            <button
                                                key={activity.id}
                                                onClick={() => toggleActivity(activity.id)}
                                                className={cn(
                                                    "p-6 rounded-3xl border flex items-center justify-between transition-all group text-left",
                                                    formData.selectedActivities.includes(activity.id)
                                                        ? "border-gold bg-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                                                        : "border-white/5 bg-white/[0.02] hover:border-white/20"
                                                )}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                                                        formData.selectedActivities.includes(activity.id) ? "bg-gold text-black" : "bg-white/5 text-gold"
                                                    )}>
                                                        {activity.icon}
                                                    </div>
                                                    <div>
                                                        <span className="text-white font-bold block">{activity.name}</span>
                                                        <span className="text-neutral-500 text-xs uppercase tracking-tighter">{activity.category}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right flex flex-col items-end">
                                                    <span className="text-white font-mono font-bold">${activity.price}</span>
                                                    {formData.selectedActivities.includes(activity.id) && <CheckCircle className="w-4 h-4 text-gold mt-1" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-8 py-5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white hover:text-black transition-all">Back</button>
                                        <button
                                            disabled={formData.selectedActivities.length === 0}
                                            onClick={nextStep}
                                            className="flex-1 py-5 bg-gold text-black rounded-2xl font-bold text-lg hover:bg-white transition-all disabled:opacity-30 shadow-lg shadow-gold/10"
                                        >
                                            Next: Select Duration
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ... more steps to follow ... */}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {[
                        { icon: <Shield className="w-5 h-5" />, title: "Secure Checkout", desc: "Enterprise-grade encryption for all bookings." },
                        { icon: <MapPin className="w-5 h-5" />, title: "Vetted Locations", desc: "Green-zoned only. Avoid the local chaos." },
                        { icon: <Wand2 className="w-5 h-5" />, title: "Verified Prices", desc: "Real-time market tracking. No street markups." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4">{item.icon}</div>
                            <h4 className="text-white font-bold mb-2">{item.title}</h4>
                            <p className="text-neutral-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AIPage;
