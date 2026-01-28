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
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const licenseTypes = [
    {
        id: "drone",
        title: "UAV Regulatory Permit",
        description: "Official authorization for Unmanned Aerial Vehicles. Required for all hardware exceeding 250g or equipped with 4K+ sensors.",
        icon: <Plane className="w-6 h-6" />,
        price: "$250",
        processingTime: "10-14 Days",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "media",
        title: "High-Payload Optical Authorization",
        description: "Permit for professional cinematography rigs, including tripods, gimbals, and high-fidelity lighting within Heritage Sectors.",
        icon: <Camera className="w-6 h-6" />,
        price: "$150",
        processingTime: "5-7 Days",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "archaeological",
        title: "Restricted Archaeological Clearance",
        description: "Government-sanctioned access to Grade-A restricted zones after official operational hours for specialized documentation.",
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
        <div className="min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center space-y-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.4em]"
                    >
                        <Shield className="w-4 h-4" />
                        Ministry of Tourism Regulatory Gateway
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.9]"
                    >
                        Official <span className="text-gold">Licensing.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed"
                    >
                        "Submit your hardware specifications for official clearance into the Egyptian sector assets."
                    </motion.p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-24 relative px-8">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="relative z-10 flex flex-col items-center gap-4">
                            <motion.div
                                className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center font-black transition-all border-2",
                                    step >= s ? "bg-gold border-gold text-black shadow-[0_0_30px_rgba(212,175,55,0.2)]" : "bg-black border-white/10 text-zinc-600"
                                )}
                                animate={step === s ? { scale: 1.15 } : { scale: 1 }}
                            >
                                {step > s ? <CheckCircle2 className="w-7 h-7" /> : s}
                            </motion.div>
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-[0.3em]",
                                step >= s ? "text-gold" : "text-zinc-700"
                            )}>
                                {s === 1 ? "Classification" : s === 2 ? "Registrant" : s === 3 ? "Hardware" : "Clearance"}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Form Content */}
                <div className="bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-10 md:p-16 min-h-[550px] flex flex-col shadow-2xl">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {licenseTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setSelectedType(type.id)}
                                            className={cn(
                                                "group relative flex flex-col text-left p-8 rounded-[3rem] border-2 transition-all overflow-hidden h-full",
                                                selectedType === type.id ? "bg-gold/5 border-gold shadow-[0_0_50px_rgba(212,175,55,0.1)]" : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                            )}
                                        >
                                            <div className="relative z-10 space-y-6">
                                                <div className={cn(
                                                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all",
                                                    selectedType === type.id ? "bg-gold text-black" : "bg-white/5 border border-white/10 text-gold"
                                                )}>
                                                    {type.icon}
                                                </div>
                                                <h2 className="text-lg font-black text-white uppercase tracking-tight leading-tight">{type.title}</h2>
                                                <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest leading-relaxed">{type.description}</p>

                                                <div className="pt-6 border-t border-white/10 flex flex-col gap-2">
                                                    <div className="flex justify-between items-center text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                                                        <span>Statutory Fee</span>
                                                        <span className="text-white text-base">{type.price}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                                                        <span>Latency</span>
                                                        <span className="text-gold">{type.processingTime}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-end pt-10">
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <button
                                                disabled={!selectedType}
                                                className="group px-14 py-6 bg-gold text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-white transition-all disabled:opacity-50"
                                            >
                                                Authenticate to Proceed <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <button
                                            disabled={!selectedType}
                                            onClick={nextStep}
                                            className="group px-14 py-6 bg-gold text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-white transition-all disabled:opacity-50 shadow-xl shadow-gold/20"
                                        >
                                            Submit Classification <ArrowRight className="w-4 h-4" />
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
                                className="space-y-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Full Legal Identity (As per Passport)</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-gold transition-all font-bold uppercase tracking-widest placeholder:text-zinc-800"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Passport Identification Number</label>
                                        <input
                                            name="passportNumber"
                                            value={formData.passportNumber}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-gold transition-all font-bold uppercase tracking-widest placeholder:text-zinc-800"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">National Jurisdiction</label>
                                        <input
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-gold transition-all font-bold uppercase tracking-widest placeholder:text-zinc-800"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Sector Entry Date</label>
                                        <input
                                            name="arrivalDate"
                                            type="date"
                                            value={formData.arrivalDate}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-gold transition-all font-bold uppercase tracking-widest"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between pt-12">
                                    <button onClick={prevStep} className="text-zinc-600 font-black uppercase tracking-widest text-[10px] hover:text-white transition-all">Back: Classification</button>
                                    <button
                                        disabled={!formData.fullName || !formData.passportNumber}
                                        onClick={nextStep}
                                        className="group px-14 py-6 bg-gold text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-white transition-all disabled:opacity-50"
                                    >
                                        Verify Identity <ArrowRight className="w-4 h-4" />
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
                                className="space-y-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Hardware Model & Variant</label>
                                        <input
                                            name="equipmentModel"
                                            value={formData.equipmentModel}
                                            onChange={handleInputChange}
                                            placeholder="E.G., DJI INSPIRE 3 / ARRI ALEXA"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-gold transition-all font-bold uppercase tracking-widest placeholder:text-zinc-800"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-4">Registry Serial Number</label>
                                        <input
                                            name="serialNumber"
                                            value={formData.serialNumber}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-gold transition-all font-bold uppercase tracking-widest placeholder:text-zinc-800"
                                        />
                                    </div>
                                </div>

                                <div className="p-10 rounded-[3rem] bg-gold/5 border border-gold/10 flex gap-8 mt-12 shadow-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                                        <AlertCircle className="w-8 h-8 text-gold" />
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs">Aeronautical & Optical Compliance</h4>
                                        <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                                            "All entry assets must comply with Egyptian statutory requirements. Drone assets require active remote identification. High-payload optics must be registered for non-commercial heritage capture."
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-12">
                                    <button onClick={prevStep} className="text-zinc-600 font-black uppercase tracking-widest text-[10px] hover:text-white transition-all">Back: Registrant</button>
                                    <button
                                        disabled={!formData.equipmentModel || !formData.serialNumber}
                                        onClick={nextStep}
                                        className="group px-14 py-6 bg-gold text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-white transition-all disabled:opacity-50"
                                    >
                                        Authorize Hardware <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-12"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                    <div className="space-y-10">
                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">Permit Summary</h4>
                                            <div className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/10 flex items-center gap-8 group">
                                                <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:scale-110 transition-transform">
                                                    {selectedLicense?.icon}
                                                </div>
                                                <div>
                                                    <div className="text-white font-black uppercase tracking-tight text-xl">{selectedLicense?.title}</div>
                                                    <div className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.1em] mt-1">{selectedLicense?.price} Clearance Fee</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                                                <div className="text-[9px] text-zinc-600 uppercase font-black mb-2 tracking-widest">Processing</div>
                                                <div className="text-xs text-white font-black uppercase tracking-widest">{selectedLicense?.processingTime}</div>
                                            </div>
                                            <div className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                                                <div className="text-[9px] text-zinc-600 uppercase font-black mb-2 tracking-widest">Status</div>
                                                <div className="text-xs text-emerald-500 font-black uppercase tracking-widest flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Verified
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">Secure Settlement</h4>
                                            <div className="space-y-6">
                                                <div className="relative">
                                                    <CreditCard className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-600 w-6 h-6" />
                                                    <input
                                                        placeholder="PAYMENT PROTOCOL ID"
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-20 py-6 text-white outline-none focus:border-gold transition-all font-black"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-6">
                                                    <input
                                                        placeholder="EXP DATE"
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-10 py-6 text-white outline-none focus:border-gold transition-all font-black text-center"
                                                    />
                                                    <input
                                                        placeholder="SECURE"
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-10 py-6 text-white outline-none focus:border-gold transition-all font-black text-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-white/5">
                                    <button
                                        onClick={() => window.location.href = "/"}
                                        className="w-full py-8 bg-white text-black rounded-[2.5rem] font-black uppercase tracking-[0.5em] text-[11px] hover:bg-gold transition-all shadow-2xl flex items-center justify-center gap-6"
                                    >
                                        Execute Financial Clearance <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <p className="text-center text-[9px] text-zinc-700 font-bold uppercase tracking-[0.3em] mt-10">
                                        "Authorized by the Egyptian Regulatory Protocol. All permits are subject to sector-specific safety mandates."
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* FAQ/Info */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6 p-8 rounded-[3rem] bg-white/[0.01] border border-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/10"><Calendar className="w-6 h-6" /></div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Temporal Sync</h4>
                        <p className="text-zinc-500 text-[10px] leading-relaxed font-bold uppercase tracking-widest">Calculate your entry carefully. Authorization is finalized exactly 48 hours prior to arrival.</p>
                    </div>
                    <div className="space-y-6 p-8 rounded-[3rem] bg-white/[0.01] border border-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/10"><FileText className="w-6 h-6" /></div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Digital Assets</h4>
                        <p className="text-zinc-500 text-[10px] leading-relaxed font-bold uppercase tracking-widest">Permits are delivered as high-fidelity QR nodes compatible with all regional checkpoint scanners.</p>
                    </div>
                    <div className="space-y-6 p-8 rounded-[3rem] bg-white/[0.01] border border-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/10"><Sparkles className="w-6 h-6" /></div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs">Priority Vector</h4>
                        <p className="text-zinc-500 text-[10px] leading-relaxed font-bold uppercase tracking-widest">Authorized registrants bypass standard classification queues at major archaeological sectors.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
