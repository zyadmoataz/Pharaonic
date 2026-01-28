"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield,
    Camera,
    Plane,
    CreditCard,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
    Calendar,
    FileText,
    Clock,
    Sparkles
} from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const licenseTypes = [
    {
        id: "drone",
        title: "Aerial Intelligence (Drone)",
        description: "Authorized permit for recreational and professional UAV operations in approved zones.",
        icon: <Plane className="w-6 h-6" />,
        price: "$250",
        processingTime: "10-14 Days",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "media",
        title: "Professional Media Capture",
        description: "Permit for tripod use and professional camera gear inside Pyramids, Temples, and Museums.",
        icon: <Camera className="w-6 h-6" />,
        price: "$150",
        processingTime: "5-7 Days",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "archaeological",
        title: "Private Archaeological Access",
        description: "Specialized authorization for after-hours or restricted area access to historical sites.",
        icon: <Shield className="w-6 h-6" />,
        price: "$500",
        processingTime: "21-30 Days",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1200"
    }
];

export default function LicensesPage() {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        passportNumber: "",
        nationality: "",
        arrivalDate: "",
        equipmentModel: "",
        serialNumber: ""
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const selectedLicense = licenseTypes.find(l => l.id === selectedType);

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                        <Shield className="w-3 h-3" />
                        Official Regulatory Clearance
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8]"
                    >
                        Secure Your <span className="text-gold">Authorization.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto italic"
                    >
                        Navigate Egyptian regulations with ease. Obtain authorized permits for specialized activities before your arrival.
                    </motion.p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-16 relative px-8">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="relative z-10 flex flex-col items-center gap-3">
                            <motion.div
                                className={cn(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all border-2",
                                    step >= s ? "bg-gold border-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]" : "bg-zinc-950 border-white/10 text-zinc-500"
                                )}
                                animate={step === s ? { scale: 1.15 } : { scale: 1 }}
                            >
                                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
                            </motion.div>
                            <span className={cn(
                                "text-[8px] font-black uppercase tracking-widest",
                                step >= s ? "text-gold" : "text-zinc-600"
                            )}>
                                {s === 1 ? "Select" : s === 2 ? "Profile" : s === 3 ? "Gear" : "Authorize"}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Form Content */}
                <div className="bg-zinc-950/50 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-8 md:p-12 min-h-[500px] flex flex-col">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {licenseTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setSelectedType(type.id)}
                                            className={cn(
                                                "group relative flex flex-col text-left p-6 rounded-[2.5rem] border-2 transition-all overflow-hidden h-full",
                                                selectedType === type.id ? "bg-gold/5 border-gold shadow-[0_0_40px_rgba(212,175,55,0.1)]" : "bg-white/5 border-white/5 hover:border-white/10"
                                            )}
                                        >
                                            {/* Background Image */}
                                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                                <SafeImage src={type.image} alt={type.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                                            </div>

                                            <div className="relative z-10">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className={cn(
                                                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all backdrop-blur-md",
                                                    selectedType === type.id ? "bg-gold text-black" : "bg-black/40 border border-white/10 text-gold"
                                                )}>
                                                    {type.icon}
                                                </div>
                                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 italic drop-shadow-lg">{type.title}</h3>
                                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium drop-shadow-md">{type.description}</p>
                                                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-[8px] text-zinc-400 uppercase font-black tracking-widest">Fees</span>
                                                        <span className="text-lg font-black text-white">{type.price}</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-[8px] text-zinc-400 uppercase font-black tracking-widest">Efficiency</span>
                                                        <div className="flex items-center gap-1 text-gold text-xs font-black italic">
                                                            <Clock className="w-3 h-3" /> {type.processingTime}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-end pt-8">
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <button
                                                disabled={!selectedType}
                                                className="group px-12 py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all disabled:opacity-50 disabled:grayscale"
                                            >
                                                Login to Initiate Protocol <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <button
                                            disabled={!selectedType}
                                            onClick={nextStep}
                                            className="group px-12 py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all disabled:opacity-50 disabled:grayscale"
                                        >
                                            Initiate Protocol <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </SignedIn>
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Full Legal Identity</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="AS PER PASSPORT"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Passport Document ID</label>
                                        <input
                                            name="passportNumber"
                                            value={formData.passportNumber}
                                            onChange={handleInputChange}
                                            placeholder="X00000000"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Nation of Origin</label>
                                        <input
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleInputChange}
                                            placeholder="UNITED KINGDOM"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Entry Vector (Arrival Date)</label>
                                        <input
                                            name="arrivalDate"
                                            type="date"
                                            value={formData.arrivalDate}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between pt-8 mt-auto">
                                    <button onClick={prevStep} className="text-zinc-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-all">Back: Selection</button>
                                    <button
                                        disabled={!formData.fullName || !formData.passportNumber}
                                        onClick={nextStep}
                                        className="group px-12 py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all disabled:opacity-50"
                                    >
                                        Authorize Payload <ArrowRight className="w-4 h-4" />
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
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Equipment Model/Variant</label>
                                        <input
                                            name="equipmentModel"
                                            value={formData.equipmentModel}
                                            onChange={handleInputChange}
                                            placeholder="DJI MAVIC 3 PRO / SONY A7R V"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">Registry Serial Number</label>
                                        <input
                                            name="serialNumber"
                                            value={formData.serialNumber}
                                            onChange={handleInputChange}
                                            placeholder="SN: 1234567890"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
                                        />
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/10 flex gap-6 mt-8">
                                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                                        <AlertCircle className="w-6 h-6 text-gold" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Aeronautical Compliance Note</h4>
                                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                            All aerial assets must be registered with the Civil Aviation Authority. Ensure your device is updated with ID broadcasting capabilities enabled.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-8 mt-auto">
                                    <button onClick={prevStep} className="text-zinc-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-all">Back: Identity</button>
                                    <button
                                        disabled={!formData.equipmentModel || !formData.serialNumber}
                                        onClick={nextStep}
                                        className="group px-12 py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white transition-all disabled:opacity-50"
                                    >
                                        Final Verification <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Selected Briefing</h4>
                                            <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative group">
                                                <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0 border border-white/10">
                                                    {selectedLicense && (
                                                        <SafeImage src={selectedLicense.image} alt={selectedLicense.title} className="w-full h-full object-cover" />
                                                    )}
                                                </div>
                                                <div className="relative z-10">
                                                    <div className="text-white font-black uppercase tracking-tight italic text-lg">{selectedLicense?.title}</div>
                                                    <div className="text-[10px] text-gold font-bold">{selectedLicense?.price} Execution Fee</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-3xl bg-white/5 border border-white/5">
                                                <div className="text-[8px] text-zinc-500 uppercase font-black mb-1">Authorization Window</div>
                                                <div className="text-xs text-white font-bold">{selectedLicense?.processingTime}</div>
                                            </div>
                                            <div className="p-4 rounded-3xl bg-white/5 border border-white/5">
                                                <div className="text-[8px] text-zinc-500 uppercase font-black mb-1">Status</div>
                                                <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Verified
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Authorized Payment</h4>
                                            <div className="space-y-4">
                                                <div className="relative">
                                                    <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5" />
                                                    <input
                                                        placeholder="4444 4444 4444 4444"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-16 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-800"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input
                                                        placeholder="MM / YY"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-800"
                                                    />
                                                    <input
                                                        placeholder="CVC"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-800"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <button
                                        onClick={() => window.location.href = "/"}
                                        className="w-full py-6 bg-gold text-black rounded-3xl font-black uppercase tracking-[0.4em] text-xs hover:bg-white transition-all shadow-2xl shadow-gold/20"
                                    >
                                        Authorize & Issue Permit
                                    </button>
                                    <p className="text-center text-[8px] text-zinc-600 uppercase font-black tracking-[0.2em] mt-6">
                                        By authorizing, you agree to the Egyptian Regulatory Protocol & Site-Specific Safety Mandates.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* FAQ/Info */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="text-gold"><Calendar className="w-6 h-6" /></div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Timed Execution</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed font-medium capitalize">Calculate your arrival date carefully. Permits are issued exactly 48 hours prior to your scheduled landing.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-gold"><FileText className="w-6 h-6" /></div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Digital Ledger</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed font-medium capitalize">Your license will be delivered as a secure QR code compatible with all checkpoint scanners in Egypt.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-gold"><Sparkles className="w-6 h-6" /></div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs">Priority Sync</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed font-medium capitalize">Licensed tourists receive priority expedited queueing at the Giza Plateau and major archaeological sites.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
