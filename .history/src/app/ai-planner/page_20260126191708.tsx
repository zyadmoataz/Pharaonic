"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/nextjs";
import { Sparkles, Calendar, MapPin, Shield, CheckCircle, ChevronRight, Wand2, User, Camera, ShoppingBag, Utensils, Landmark, Rocket, Star, Send, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const activities_pool = [
    // Cairo
    { id: "pyramids", city: "Cairo", name: "Giza Pyramids Private Tour", price: 120, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "gem", city: "Cairo", name: "Grand Egyptian Museum (GEM)", price: 60, category: "Culture", icon: <Landmark className="w-4 h-4" /> },
    { id: "market", city: "Cairo", name: "Khan el-Khalili & Old Cairo", price: 45, category: "Shopping", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "cairo-food", city: "Cairo", name: "Downtown Hidden Food Tour", price: 55, category: "Food", icon: <Utensils className="w-4 h-4" /> },
    { id: "citadel", city: "Cairo", name: "Saladin Citadel & Mosque", price: 40, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "nile-dinner", city: "Cairo", name: "Luxury Nile Dinner Cruise", price: 95, category: "Entertainment", icon: <Utensils className="w-4 h-4" /> },

    // Luxor
    { id: "valley-kings", city: "Luxor", name: "Valley of the Kings (Royal)", price: 150, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "karnak", city: "Luxor", name: "Karnak Temple Complex", price: 50, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "balloon", city: "Luxor", name: "Sunrise Hot Air Balloon", price: 180, category: "Adventure", icon: <Rocket className="w-4 h-4" /> },
    { id: "hatshepsut", city: "Luxor", name: "Temple of Hatshepsut", price: 40, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "luxor-museum", city: "Luxor", name: "Luxor Museum of Ancient Art", price: 30, category: "Culture", icon: <Landmark className="w-4 h-4" /> },

    // Aswan
    { id: "philae", city: "Aswan", name: "Philae Temple Private Entry", price: 80, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "nubian", city: "Aswan", name: "Nubian Village Immersion", price: 65, category: "Culture", icon: <MapPin className="w-4 h-4" /> },
    { id: "abu-simbel", city: "Aswan", name: "Abu Simbel Flight Trip", price: 450, category: "History", icon: <Rocket className="w-4 h-4" /> },
    { id: "felucca", city: "Aswan", name: "Private Felucca at Sunset", price: 70, category: "Adventure", icon: <MapPin className="w-4 h-4" /> },
    { id: "aswan-dam", city: "Aswan", name: "High Dam & Unfinished Obelisk", price: 35, category: "Sightseeing", icon: <Landmark className="w-4 h-4" /> },

    // Alexandria
    { id: "lib-alex", city: "Alexandria", name: "Bibliotheca Alexandrina", price: 25, category: "Culture", icon: <Landmark className="w-4 h-4" /> },
    { id: "qaitbay", city: "Alexandria", name: "Qaitbay Citadel (Fort)", price: 20, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "catacombs", city: "Alexandria", name: "Kom el Shoqafa Catacombs", price: 30, category: "History", icon: <Landmark className="w-4 h-4" /> },
    { id: "alex-food", city: "Alexandria", name: "Mediterranean Seafood Experience", price: 85, category: "Food", icon: <Utensils className="w-4 h-4" /> },

    // Hurghada / Sharm
    { id: "diving", city: "Red Sea", name: "Elite Scuba Diving Session", price: 130, category: "Adventure", icon: <Camera className="w-4 h-4" /> },
    { id: "safari", city: "Red Sea", name: "Private Desert Quad Safari", price: 90, category: "Adventure", icon: <MapPin className="w-4 h-4" /> },
    { id: "giftun", city: "Red Sea", name: "Giftun Island Private Yacht", price: 200, category: "Luxury", icon: <MapPin className="w-4 h-4" /> },
    { id: "ras-mkt", city: "Red Sea", name: "Old Market Local Treasures", price: 20, category: "Shopping", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "st-catherine", city: "Red Sea", name: "Mt. Sinai & St. Catherine", price: 110, category: "History", icon: <Landmark className="w-4 h-4" /> },

    // Dahab
    { id: "blue-hole", city: "Dahab", name: "Blue Hole Snorkeling", price: 60, category: "Adventure", icon: <Camera className="w-4 h-4" /> },
    { id: "canyon", city: "Dahab", name: "Coloured Canyon Trek", price: 80, category: "Adventure", icon: <MapPin className="w-4 h-4" /> },
    { id: "bedouin", city: "Dahab", name: "Bedouin Oasis Dinner", price: 50, category: "Food", icon: <Utensils className="w-4 h-4" /> },
];

const AIPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        city: "Cairo",
        budget: "Medium",
        duration: 7, // Changed to number
        hotelStars: 4, // Added hotel stars
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
    }, 0) + (formData.hotelStars === 5 ? 200 : formData.hotelStars === 4 ? 100 : 50) * formData.duration;

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

                                    <div className="flex justify-between items-end gap-4 overflow-x-auto pb-4 no-scrollbar">
                                        {Array.from(new Set(activities_pool.map(a => a.city))).map((city) => (
                                            <button
                                                key={city}
                                                onClick={() => setFormData({ ...formData, city })}
                                                className={cn(
                                                    "px-6 py-2 rounded-full border text-sm font-bold whitespace-nowrap transition-all",
                                                    formData.city === city
                                                        ? "bg-gold border-gold text-black"
                                                        : "bg-white/5 border-white/10 text-neutral-500 hover:border-white/20"
                                                )}
                                            >
                                                {city}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                        {activities_pool.filter(a => a.city === formData.city).map((activity) => (
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

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-6">
                                        <label className="text-3xl font-bold text-white block">Define your stay length?</label>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            {[3, 5, 7, 10, 14, 21].map((days) => (
                                                <button
                                                    key={days}
                                                    onClick={() => setFormData({ ...formData, duration: days })}
                                                    className={cn(
                                                        "p-6 rounded-[2rem] border font-bold transition-all",
                                                        formData.duration === days ? "bg-gold border-gold text-black shadow-lg shadow-gold/20" : "bg-white/5 border-white/10 text-neutral-400"
                                                    )}
                                                >
                                                    {days} Days
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <label className="text-3xl font-bold text-white block">Hotel Luxury Tier</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    onClick={() => setFormData({ ...formData, hotelStars: star })}
                                                    className={cn(
                                                        "p-8 rounded-[2.5rem] border text-left flex flex-col gap-4 transition-all",
                                                        formData.hotelStars === star ? "bg-gold border-gold text-black shadow-xl shadow-gold/20" : "bg-white/5 border-white/10 text-neutral-400"
                                                    )}
                                                >
                                                    <div className="flex gap-1">
                                                        {Array.from({ length: star }).map((_, i) => (
                                                            <Star key={i} className={cn("w-5 h-5", formData.hotelStars === star ? "text-black fill-black" : "text-gold fill-gold")} />
                                                        ))}
                                                    </div>
                                                    <div>
                                                        <span className="text-xl font-black block">{star} Star Experience</span>
                                                        <span className="text-xs uppercase tracking-widest opacity-60">
                                                            {star === 5 ? "Elite Sovereign Luxury" : star === 4 ? "Premium Standard" : "Comfort & Reliability"}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-8 py-5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white hover:text-black transition-all">Back</button>
                                        <button
                                            onClick={nextStep}
                                            className="flex-1 py-8 bg-black text-white border border-white/10 rounded-3xl font-bold text-xl hover:bg-gold hover:text-black hover:border-gold transition-all"
                                        >
                                            Calculate Strategic Cost
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="text-center py-10 space-y-8"
                                >
                                    <div className="relative w-40 h-40 mx-auto">
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
                                            <Shield className="w-16 h-16 text-gold" />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-bold text-white tracking-tight">Enterprise Security Audit...</h2>
                                        <p className="text-neutral-500 max-w-sm mx-auto italic font-serif">
                                            "Dismantling the paradox of friction... Cross-referencing {formData.name}'s path with the Tourist Guide Syndicate database."
                                        </p>
                                    </div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4, ease: "easeInOut" }}
                                        onAnimationComplete={nextStep}
                                        className="h-1 bg-gold rounded-full max-w-xs mx-auto shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                                    />
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-10"
                                >
                                    <div className="flex justify-between items-center bg-gold/5 p-6 rounded-3xl border border-gold/20 mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Elite Program Confirmed</h2>
                                            <p className="text-neutral-500 text-sm">Secure your spot for {formData.duration} in Egypt.</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-gold text-3xl font-mono font-bold">${totalPrice}</span>
                                            <span className="text-neutral-600 text-[10px] block uppercase font-black">All Inclusive</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                placeholder="Cardholder Name"
                                                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none"
                                                defaultValue={formData.name}
                                            />
                                            <input
                                                placeholder="Card Number (Fake for Demo)"
                                                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            <input placeholder="MM/YY" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" />
                                            <input placeholder="CVC" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none" />
                                            <button
                                                onClick={nextStep}
                                                className="col-span-2 md:col-span-1 bg-gold text-black font-bold rounded-2xl hover:bg-white transition-all shadow-lg shadow-gold/20"
                                            >
                                                Finalize Payment
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-center text-neutral-600 text-xs tracking-tighter uppercase">Guaranteed security by Guidly Enterprise Network</p>
                                </motion.div>
                            )}

                            {step === 6 && (
                                <motion.div
                                    key="step6"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10 space-y-10"
                                >
                                    <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                                        <Rocket className="w-12 h-12 text-black" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Welcome Aboard, {formData.name}!</h2>
                                        <p className="text-neutral-400 text-lg max-w-md mx-auto leading-relaxed">
                                            Your {formData.duration} elite program has been initialized. Check your digital wallet for the verified credentials.
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                                        <button className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gold transition-all">Download Itinerary</button>
                                        <button
                                            onClick={() => window.location.href = '/card'}
                                            className="px-10 py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
                                        >
                                            View My Guidly Card
                                        </button>
                                    </div>
                                </motion.div>
                            )}
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
