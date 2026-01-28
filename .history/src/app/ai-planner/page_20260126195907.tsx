"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import {
    Sparkles, Calendar, MapPin, Shield, CheckCircle,
    ChevronRight, Wand2, User, Camera, ShoppingBag,
    Utensils, Landmark, Rocket, Star, Send, Lock,
    CreditCard, Globe, Info, AlertTriangle, FileText
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

const AIPage = () => {
    const { user } = useUser();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        city: "Cairo",
        budget: "Medium",
        duration: 7,
        hotelStars: 4,
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
        const activityTotal = formData.selectedActivities.reduce((sum, id) => {
            const item = activities_pool.find(a => a.id === id);
            return sum + (item?.priceRange[0] || 0);
        }, 0);
        const hotelTotal = (hotel_tiers.find(t => t.star === formData.hotelStars)?.pricePerNight[0] || 0) * formData.duration;
        return activityTotal + hotelTotal;
    };

    const totalEstimated = getEstimatedTotal();

    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 overflow-hidden relative">
            {/* Background Aesthetic */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(212,175,55,0.05)]"
                    >
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        Next-Gen Strategic Architect
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                        Design Your <span className="gold-gradient italic">Blueprint.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Planning Engine */}
                    <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[3.5rem] shadow-2xl overflow-hidden min-h-[700px]">
                        <div className="h-2 w-full bg-white/5 relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_20px_rgba(212,175,55,1)]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(step / 8) * 100}%` }}
                            />
                        </div>

                        <div className="p-10 md:p-20">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Enter Identity.</h2>
                                            <p className="text-zinc-500 text-lg uppercase tracking-widest font-bold">We personalize every audit trail.</p>
                                        </div>
                                        <div className="relative group">
                                            <User className="absolute left-8 top-1/2 -translate-y-1/2 text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
                                            <input
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="FullName / Codename"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-20 py-10 text-3xl text-white focus:outline-none focus:border-gold transition-all font-black"
                                            />
                                        </div>
                                        <button
                                            disabled={!formData.name}
                                            onClick={nextStep}
                                            className="w-full py-8 bg-white text-black rounded-3xl font-black text-2xl uppercase tracking-widest hover:bg-gold transition-all shadow-2xl disabled:opacity-20 translate-y-4"
                                        >
                                            Initalize Architect
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-black text-white tracking-tighter italic">Welcome, {formData.name}.</h2>
                                            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Target Destination Protocols</p>
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
                                            <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black">NEXT: ASSET SELECTION</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-6">
                                            <h2 className="text-4xl font-black text-white tracking-tighter italic">Select Assets ({formData.city})</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
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
                                                                <div className="text-white font-black tracking-tight">{a.name}</div>
                                                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">${a.priceRange[0]} - ${a.priceRange[1]}</div>
                                                            </div>
                                                        </div>
                                                        {formData.selectedActivities.includes(a.id) && <CheckCircle className="w-5 h-5 text-gold" />}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black">NEXT: LOGISTICS</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                        <div className="space-y-10">
                                            <h2 className="text-4xl font-black text-white tracking-tighter italic">Logistical Parameters</h2>
                                            <div className="space-y-6">
                                                <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] block">Duration (Days)</label>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {[3, 5, 7, 10, 14, 21].map(d => (
                                                        <button
                                                            key={d}
                                                            onClick={() => setFormData({ ...formData, duration: d })}
                                                            className={cn("p-6 rounded-3xl border font-black uppercase tracking-widest transition-all", formData.duration === d ? "bg-gold border-gold text-black shadow-xl" : "bg-white/5 border-white/10 text-zinc-600")}
                                                        >
                                                            {d} DAYS
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] block">Hotel Strategy</label>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    {hotel_tiers.map(t => (
                                                        <button
                                                            key={t.star}
                                                            onClick={() => setFormData({ ...formData, hotelStars: t.star })}
                                                            className={cn("p-8 rounded-[2.5rem] border text-left flex flex-col gap-6 transition-all", formData.hotelStars === t.star ? "bg-gold border-gold text-black" : "bg-white/5 border-white/10 text-zinc-500")}
                                                        >
                                                            <div className="flex gap-1">
                                                                {Array.from({ length: t.star }).map((_, i) => <Star key={i} className={cn("w-4 h-4", formData.hotelStars === t.star ? "fill-black" : "fill-gold")} />)}
                                                            </div>
                                                            <div>
                                                                <div className="text-xl font-black tracking-tighter mb-1 uppercase">{t.name}</div>
                                                                <div className="text-xs opacity-70 leading-relaxed italic">{t.desc}</div>
                                                                <div className="text-sm font-black mt-4">${t.pricePerNight[0]}+ / Night</div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevStep} className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black">BACK</button>
                                            <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black">EXECUTE AUDIT</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 5 && (
                                    <motion.div key="s5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-12">
                                        <div className="relative w-48 h-48 mx-auto">
                                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-4 border-dashed border-gold/40" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Shield className="w-20 h-20 text-gold animate-pulse" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-black text-white tracking-tighter">Strategic Audit in Progress...</h2>
                                            <p className="text-zinc-500 font-serif italic text-xl max-w-md mx-auto italic">"Dismantling regional friction... Cross-referencing {formData.name}'s parameters with the Ministry databases."</p>
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

                                {step === 6 && (
                                    <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Visa Authorization.</h2>
                                            <p className="text-zinc-500 uppercase tracking-widest font-bold">Standard Entry vs Strategic Express</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl" />
                                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                                    <FileText className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Electronic Visa (E-Visa)</h3>
                                                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">Standard government processing. Valid for 90 days. Single or multiple entry options.</p>
                                                </div>
                                                <button onClick={() => { setFormData({ ...formData, visaType: "E-Visa" }); nextStep(); }} className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black group-hover:bg-white group-hover:text-black transition-all">Select E-Visa</button>
                                            </div>
                                            <div className="p-10 rounded-[3rem] bg-gold/5 border border-gold/20 space-y-8 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl" />
                                                <div className="w-16 h-16 rounded-2xl bg-gold text-black flex items-center justify-center">
                                                    <Rocket className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Guidly Fast-Track</h3>
                                                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">Liaison-assisted entry. Arrive with pre-authorized clearance. No queue, no hassle.</p>
                                                </div>
                                                <button onClick={() => { setFormData({ ...formData, visaType: "Fast-Track" }); nextStep(); }} className="w-full py-5 bg-gold text-black rounded-2xl font-black hover:bg-white transition-all">Select Fast-Track ($45)</button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 7 && (
                                    <motion.div key="s7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                                        <div className="space-y-4">
                                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">Confirm Blueprint Deployment.</h2>
                                            <p className="text-zinc-500 uppercase tracking-widest font-bold">Estimated Operational Cost: ${totalEstimated}</p>
                                        </div>

                                        <div className="p-10 rounded-[3.5rem] border border-white/10 bg-white/[0.02] space-y-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8">
                                                <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1 text-right">Strategic Limit</div>
                                                <div className="text-xl font-black text-gold text-right">${totalEstimated + 500}</div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-gold text-black flex items-center justify-center font-black">ID</div>
                                                        <div>
                                                            <div className="text-white font-black tracking-tighter text-lg uppercase">{formData.name}</div>
                                                            <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Authorized Voyager</div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Plan Details</div>
                                                        <div className="text-sm text-zinc-400 font-medium">{formData.duration} Days in {formData.city} • {formData.hotelStars} Star Infrastructure</div>
                                                        <div className="text-sm text-zinc-400 font-medium">{formData.selectedActivities.length} Operations Selected • {formData.visaType} Protocol</div>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Digital Authorization</div>
                                                    <div className="space-y-4">
                                                        <input placeholder="Digital Signature" className="w-full bg-black border border-white/5 p-4 rounded-xl text-white outline-none focus:border-gold/50" />
                                                        <button
                                                            onClick={nextStep}
                                                            className="w-full py-5 bg-gold text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-xl shadow-gold/10"
                                                        >
                                                            Authorize Deployment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 8 && (
                                    <motion.div key="s8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-12">
                                        <div className="w-32 h-32 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_80px_rgba(212,175,55,0.4)] animate-pulse">
                                            <CheckCircle className="w-16 h-16 text-black" />
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Blueprint <br /><span className="gold-gradient italic">Authorized.</span></h2>
                                            <p className="text-zinc-500 text-xl font-medium max-w-xl mx-auto leading-relaxed">
                                                Congratulations Voyager. Your strategic path for {formData.duration} days has been cross-referenced and secured.
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                                            <button className="px-12 py-6 bg-white text-black font-black rounded-3xl hover:bg-gold transition-all shadow-2xl">Download Full Audit</button>
                                            <button
                                                onClick={() => window.location.href = "/card"}
                                                className="px-12 py-6 border border-white/10 text-white font-black rounded-3xl hover:bg-white/5 transition-all"
                                            >
                                                Deploy to Guidly Card
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Dynamic Intelligence Panel */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 sticky top-32">
                            <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10 border-b border-white/5 pb-4">Live Operational Intelligence</h3>

                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Est. Operational Cost</span>
                                        <span className="text-gold text-2xl font-black font-mono tracking-tighter italic">${totalEstimated}</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500"><Shield className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-white text-sm font-black tracking-tight uppercase">Audit: Clear</div>
                                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Safe-Zone Routes Encrypted</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><CreditCard className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-white text-sm font-black tracking-tight uppercase">Disintermediation</div>
                                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">-$342 in Agency Overheads Removed</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Globe className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-white text-sm font-black tracking-tight uppercase">Logistics Status</div>
                                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">{formData.duration} Day Infrastructure Locked</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        <AlertTriangle className="text-red-500 w-4 h-4" />
                                        <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Counter-Intel Warning</span>
                                    </div>
                                    <p className="text-zinc-600 text-[10px] leading-relaxed uppercase tracking-tighter font-bold">Standard street haggle rates are currently 280% higher than your authorized Guidly benchmark.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIPage;
