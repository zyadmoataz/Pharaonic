"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import {
    Sparkles, Calendar, MapPin, Shield, CheckCircle,
    ChevronRight, Wand2, User, Camera, ShoppingBag,
    Utensils, Landmark, Rocket, Star, Send, Lock,
    CreditCard, Globe, Info, AlertTriangle, FileText,
    Truck, Users as UsersIcon, HardHat, EyeOff
} from "lucide-react";
import { cn } from "@/lib/utils";

const activities_pool = [
    // Cairo
    { id: "pyramids", city: "Cairo", name: "Giza Pyramids Private Entry", priceRange: [120, 180], category: "History", icon: <Landmark className="w-5 h-5" /> },
    { id: "gem", city: "Cairo", name: "Grand Egyptian Museum (GEM)", priceRange: [60, 90], category: "Culture", icon: <Landmark className="w-5 h-5" /> },
    { id: "market", city: "Cairo", name: "Khan el-Khalili Disintermediated", priceRange: [45, 100], category: "Shopping", icon: <ShoppingBag className="w-5 h-5" /> },
    { id: "cairo-food", city: "Cairo", name: "Downtown Strategic Food Tour", priceRange: [55, 85], category: "Food", icon: <Utensils className="w-5 h-5" /> },

    // Luxor
    { id: "valley-kings", city: "Luxor", name: "Valley of the Kings (Royal)", priceRange: [150, 250], category: "History", icon: <Landmark className="w-5 h-5" /> },
    { id: "balloon", city: "Luxor", name: "Sunrise Hot Air Balloon", priceRange: [180, 220], category: "Adventure", icon: <Rocket className="w-5 h-5" /> },

    // Aswan
    { id: "abu-simbel", city: "Aswan", name: "Abu Simbel Flight Trip", priceRange: [450, 550], category: "History", icon: <Landmark className="w-5 h-5" /> },
    { id: "nubian", city: "Aswan", name: "Nubian Village Immersion", priceRange: [65, 80], category: "Culture", icon: <MapPin className="w-5 h-5" /> },
];

const hotel_tiers = [
    { star: 5, name: "Sovereign Luxury", pricePerNight: [250, 1200], desc: "Kempinski, Four Seasons, Marriott Mena House." },
    { star: 4, name: "Premium Strategic", pricePerNight: [120, 220], desc: "Steigenberger, Hilton, Sheraton." },
    { star: 3, name: "Combat Comfort", pricePerNight: [60, 110], desc: "Reliable boutique properties with verified security." },
];

const transport_tiers = [
    { id: "executive", name: "Executive Sedan", pricePerDay: 80, desc: "Private armored sedan with verified driver." },
    { id: "sovereign", name: "Sovereign Sprinter", pricePerDay: 150, desc: "Elite van with liaison and cold beverage protocol." },
    { id: "guardian", name: "Guardian Escort", pricePerDay: 400, desc: "Two-vehicle convoy with personal security liaison." },
];

const AIPage = () => {
    const { user } = useUser();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        city: "Cairo",
        budget: "Medium",
        duration: 0,
        hotelStars: 0,
        transport: "",
        groupSize: "Solo",
        selectedActivities: [] as string[],
        visaType: "E-Visa",
        visaStatus: "Pending",
    });

    useEffect(() => {
        if (user && !formData.name) {
            setFormData(prev => ({ ...prev, name: user.fullName || "" }));
        }
    }, [user]);

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

    const getEstimatedTotal = () => {
        if (formData.duration === 0) return 0;
        const activityTotal = formData.selectedActivities.reduce((sum, id) => {
            const item = activities_pool.find(a => a.id === id);
            return sum + (item?.priceRange[0] || 0);
        }, 0);
        const hotelPrice = hotel_tiers.find(t => t.star === formData.hotelStars)?.pricePerNight[0] || 0;
        const transportPrice = transport_tiers.find(t => t.id === formData.transport)?.pricePerDay || 0;

        return activityTotal + (hotelPrice + transportPrice) * formData.duration;
    };

    const totalEstimated = getEstimatedTotal();

    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(212,175,55,0.05)]"
                    >
                        <HardHat className="w-4 h-4 animate-pulse" />
                        Infrastructure Planning v4.2
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                        Elite Strategic <span className="gold-gradient italic">Blueprint.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[3.5rem] shadow-2xl overflow-hidden min-h-[850px]">
                        <div className="h-2 w-full bg-white/5 relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_20px_rgba(212,175,55,1)]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(step / 10) * 100}%` }}
                            />
                        </div>

                        <div className="p-10 md:p-20">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">1. Identity Signature</h2>
                                            <p className="text-zinc-500 text-lg font-bold">Authorized voyagers only. Enter your signature.</p>
                                        </div>
                                        <div className="relative group">
                                            <User className="absolute left-8 top-1/2 -translate-y-1/2 text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
                                            <input
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Full Signature / ID"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-20 py-10 text-3xl text-white focus:outline-none focus:border-gold transition-all font-black uppercase"
                                            />
                                        </div>
                                        <button
                                            disabled={!formData.name}
                                            onClick={nextStep}
                                            className="w-full py-8 bg-white text-black rounded-3xl font-black text-2xl uppercase tracking-widest hover:bg-gold transition-all shadow-2xl disabled:opacity-20"
                                        >
                                            Initalize Blueprint
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">2. Sector Authorization</h2>
                                            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Target Destination Protocol</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {["Cairo", "Luxor", "Aswan", "Red Sea"].map(c => (
                                                <button
                                                    key={c}
                                                    onClick={() => setFormData({ ...formData, city: c })}
                                                    className={cn(
                                                        "p-8 rounded-[2.5rem] border font-black uppercase tracking-widest transition-all",
                                                        formData.city === c ? "bg-gold border-gold text-black shadow-xl" : "bg-white/5 border-white/10 text-zinc-600"
                                                    )}
                                                >
                                                    {c}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase">Next: Logistical Detail</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-10">
                                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">3. Duration Profile</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                                {[3, 5, 7, 10, 14, 21].map(d => (
                                                    <button
                                                        key={d}
                                                        onClick={() => setFormData({ ...formData, duration: d })}
                                                        className={cn("p-6 rounded-3xl border font-black uppercase tracking-widest transition-all", formData.duration === d ? "bg-gold border-gold text-black shadow-xl scale-105" : "bg-white/5 border-white/10 text-zinc-600")}
                                                    >
                                                        {d} DAYS
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button disabled={formData.duration === 0} onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase disabled:opacity-20">Next: Assets</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-6">
                                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">4. Cultural Merits ({formData.city})</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
                                                {activities_pool.filter(a => a.city === formData.city || a.city === "Global").map(a => (
                                                    <button
                                                        key={a.id}
                                                        onClick={() => toggleActivity(a.id)}
                                                        className={cn(
                                                            "p-6 rounded-3xl border flex items-center justify-between transition-all group",
                                                            formData.selectedActivities.includes(a.id) ? "border-gold bg-gold/10" : "border-white/5 bg-white/[0.02]"
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", formData.selectedActivities.includes(a.id) ? "bg-gold text-black" : "bg-white/5 text-gold")}>
                                                                {a.icon}
                                                            </div>
                                                            <div className="text-left">
                                                                <div className="text-white font-black tracking-tight uppercase text-xs">{a.name}</div>
                                                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">${a.priceRange[0]} - ${a.priceRange[1]}</div>
                                                            </div>
                                                        </div>
                                                        {formData.selectedActivities.includes(a.id) && <CheckCircle className="w-5 h-5 text-gold" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase">Next: Infrastructure</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 5 && (
                                    <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-10">
                                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">5. Hotel Strategy</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {hotel_tiers.map(t => (
                                                    <button
                                                        key={t.star}
                                                        onClick={() => setFormData({ ...formData, hotelStars: t.star })}
                                                        className={cn("p-8 rounded-[2.5rem] border text-left flex flex-col gap-6 transition-all", formData.hotelStars === t.star ? "bg-gold border-gold text-black scale-105" : "bg-white/5 border-white/10 text-zinc-500")}
                                                    >
                                                        <div className="flex gap-1">
                                                            {Array.from({ length: t.star }).map((_, i) => <Star key={i} className={cn("w-4 h-4", formData.hotelStars === t.star ? "fill-black" : "fill-gold")} />)}
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-black tracking-tighter mb-1 uppercase italic">{t.name}</div>
                                                            <div className="text-[10px] opacity-70 leading-relaxed font-bold uppercase tracking-widest mb-4">{t.desc}</div>
                                                            <div className="text-sm font-black">${t.pricePerNight[0]}+ / NIGHT</div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button disabled={formData.hotelStars === 0} onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase disabled:opacity-20">Next: Transport</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 6 && (
                                    <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-10">
                                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">6. Transit Tier</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {transport_tiers.map(t => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => setFormData({ ...formData, transport: t.id })}
                                                        className={cn("p-10 rounded-[3rem] border text-left flex flex-col gap-6 transition-all", formData.transport === t.id ? "bg-gold border-gold text-black" : "bg-white/5 border-white/10 text-zinc-500 hover:border-white/20")}
                                                    >
                                                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                                                            {t.id === "executive" ? <Truck className="w-6 h-6" /> : t.id === "sovereign" ? <Rocket className="w-6 h-6" /> : <Shield className="w-6 h-6" />}
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-black tracking-tighter mb-1 uppercase italic">{t.name}</div>
                                                            <div className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-70">{t.desc}</div>
                                                            <div className="text-sm font-black">${t.pricePerDay} / DAY</div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button disabled={!formData.transport} onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase disabled:opacity-20">Next: Security Audit</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 7 && (
                                    <motion.div key="s7" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-12">
                                        <div className="relative w-48 h-48 mx-auto">
                                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-4 border-dashed border-gold/40" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <EyeOff className="w-20 h-20 text-gold animate-pulse" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Analyzing Green-Zone Corridors...</h2>
                                            <p className="text-zinc-500 font-serif italic text-xl max-w-md mx-auto italic">"Dismantling regional friction... Finalizing Sovereign deployment for {formData.name}."</p>
                                        </div>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 5, ease: "circIn" }}
                                            onAnimationComplete={nextStep}
                                            className="h-1 bg-gold rounded-full max-w-lg mx-auto shadow-[0_0_30px_rgba(212,175,55,1)]"
                                        />
                                    </motion.div>
                                )}

                                {step === 8 && (
                                    <motion.div key="s8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">8. Frontier Clearance</h2>
                                            <p className="text-zinc-500 uppercase tracking-widest font-bold">Standard Entry vs Strategic Express</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8 relative overflow-hidden group">
                                                <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest bg-white/5 px-4 py-1 rounded-full w-fit">Option Alpha</div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Electronic Visa (E-Visa)</h3>
                                                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">Standard government processing. Valid for 90 days. Single or multiple entry options.</p>
                                                </div>
                                                <button onClick={() => { setFormData({ ...formData, visaType: "E-Visa" }); nextStep(); }} className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase hover:bg-gold transition-all">Select E-Visa</button>
                                            </div>
                                            <div className="p-10 rounded-[3rem] bg-gold/5 border border-gold/20 space-y-8 relative overflow-hidden group">
                                                <div className="text-[10px] text-gold font-black uppercase tracking-widest bg-gold/10 px-4 py-1 rounded-full w-fit animate-pulse">Option Omega</div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Guidly Fast-Track</h3>
                                                    <p className="text-sm text-zinc-400 leading-relaxed font-bold italic uppercase tracking-tighter">Liaison-assisted entry. Arrive with pre-authorized clearance. No queue, no hassle.</p>
                                                </div>
                                                <button onClick={() => { setFormData({ ...formData, visaType: "Fast-Track" }); nextStep(); }} className="w-full py-5 bg-gold text-black rounded-2xl font-black hover:bg-white transition-all uppercase tracking-widest">Select Fast-Track ($45)</button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 9 && (
                                    <motion.div key="s9" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase">9. Deployment Authorization.</h2>
                                            <p className="text-zinc-500 uppercase tracking-widest font-bold">Total Strategic Footprint: ${totalEstimated}</p>
                                        </div>

                                        <div className="p-12 rounded-[4rem] border border-white/10 bg-[#050505] space-y-12 relative overflow-hidden">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                <div className="space-y-10">
                                                    <div className="flex items-center gap-6">
                                                        <div className="w-16 h-16 rounded-3xl bg-gold text-black flex items-center justify-center font-black text-xl italic shadow-2xl shadow-gold/20">ID</div>
                                                        <div>
                                                            <div className="text-3xl font-black text-white tracking-tighter uppercase italic">{formData.name}</div>
                                                            <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] mt-1">Authorized Blueprint v4.2</div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-8">
                                                        <div>
                                                            <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">Duration</div>
                                                            <div className="text-xl font-black text-white">{formData.duration} DAYS</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">Sector</div>
                                                            <div className="text-xl font-black text-white uppercase">{formData.city}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">Economy</div>
                                                            <div className="text-xl font-black text-white italic">${totalEstimated}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-2">Visa</div>
                                                            <div className="text-xl font-black text-white uppercase">{formData.visaType}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-8 bg-white/[0.02] p-10 rounded-[3rem] border border-white/10">
                                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs">Digital Encryption Key</h4>
                                                    <div className="space-y-4">
                                                        <input placeholder="ENTER PROTOCOL KEY (DEMO)" className="w-full bg-black border border-white/10 p-6 rounded-2xl text-white outline-none focus:border-gold font-mono text-center tracking-[0.5em]" />
                                                        <button
                                                            onClick={nextStep}
                                                            className="w-full py-6 bg-gold text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-2xl shadow-gold/20"
                                                        >
                                                            Lock In Blueprint
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 10 && (
                                    <motion.div key="s10" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-12">
                                        <div className="w-40 h-40 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_100px_rgba(212,175,55,0.4)] relative">
                                            <div className="absolute inset-0 rounded-full border-8 border-white/20 animate-ping" />
                                            <CheckCircle className="w-20 h-20 text-black relative z-10" />
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-8">Blueprint <br /><span className="gold-gradient italic">DEPLOYED.</span></h2>
                                            <p className="text-zinc-500 text-2xl font-medium max-w-xl mx-auto leading-relaxed italic">
                                                Your {formData.duration} day strategic plan for {formData.city} has been cross-referenced and authorized.
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                                            <button className="px-12 py-7 bg-white text-black font-black rounded-[2.5rem] hover:bg-gold transition-all shadow-2xl uppercase tracking-widest text-xl">Download Audit</button>
                                            <button
                                                onClick={() => window.location.href = "/card"}
                                                className="px-12 py-7 border border-white/10 text-white font-black rounded-[2.5rem] hover:bg-white/5 transition-all uppercase tracking-widest text-xl"
                                            >
                                                View Guidly Card
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8 h-full">
                        <div className="p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 sticky top-32 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_15px_rgba(212,175,55,1)]" />
                            <h3 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-12 flex items-center gap-3">
                                <Sparkles className="w-4 h-4 text-gold" /> Live Intel Briefing
                            </h3>

                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">Operational Budget</span>
                                        <div className="flex flex-col items-end">
                                            <span className="text-gold text-4xl font-black font-mono tracking-tighter italic shadow-gold/20 drop-shadow-lg">${totalEstimated}</span>
                                            {totalEstimated > 0 && <span className="text-[10px] text-zinc-700 font-black uppercase tracking-widest">Base Audit Included</span>}
                                        </div>
                                    </div>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: totalEstimated > 0 ? "85%" : "0%" }} className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><UsersIcon className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-white text-[10px] font-black tracking-[0.2em] uppercase">Disintermediation</div>
                                            <div className="text-zinc-600 text-[10px] font-bold uppercase mt-1">-$241 Removed in Commissions</div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><Shield className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-white text-[10px] font-black tracking-[0.2em] uppercase">Audit Trail</div>
                                            <div className="text-zinc-600 text-[10px] font-bold uppercase mt-1">Safe-Zone Routes Encrypted</div>
                                        </div>
                                    </div>
                                </div>

                                {formData.selectedActivities.length > 3 && (
                                    <div className="p-8 rounded-[2rem] bg-gold/5 border border-gold/20">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Zap className="text-gold w-4 h-4" />
                                            <span className="text-gold text-[10px] font-black uppercase tracking-widest italic">Optimization Active</span>
                                        </div>
                                        <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-tighter font-bold">Bundle reduction applied to {formData.selectedActivities.length} operational assets.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIPage;
