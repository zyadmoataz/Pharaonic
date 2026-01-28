"use client";
import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, CreditCard, ChevronRight, CheckCircle, Rocket, Landmark, User, CreditCard as CardIcon, Wallet, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuth, SignIn, useUser } from "@clerk/nextjs";

const CheckoutContent = () => {
    const searchParams = useSearchParams();
    const { isLoaded, userId } = useAuth();
    const { user } = useUser();

    const type = searchParams.get("type") || "visa";
    const tier = searchParams.get("tier") || "standard";
    const productTitle = type === "card" ? `NileVista ${tier} Card` : type === "visa" ? "E-Visa Authorization" : "Curated Tour Deposit";

    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("credit_card");
    const [formData, setFormData] = useState({
        name: user?.fullName || "",
        passport: "",
        arrivalDate: "",
        visaType: tier === "Tourist" || tier === "Business" ? tier : "Tourist",
    });

    useEffect(() => {
        if (user?.fullName && !formData.name) {
            setFormData(prev => ({ ...prev, name: user.fullName || "" }));
        }
    }, [user, formData.name]);

    const nextStep = () => setStep(s => s + 1);

    if (!isLoaded) return null;

    if (!userId) {
        return (
            <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl"
                    >
                        <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto">
                            <User className="w-10 h-10 text-gold" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">Authorization Required</h1>
                            <p className="text-zinc-500 text-sm font-medium">To proceed with your NileVista security protocol, please sign in to your verified identity.</p>
                        </div>
                        <SignIn routing="hash" />
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-xl mx-auto">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold/5">
                                <motion.div
                                    className="h-full bg-gold"
                                    initial={{ width: "25%" }}
                                    animate={{ width: "25%" }}
                                />
                            </div>

                            <div className="mb-10 text-center">
                                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Activity className="w-8 h-8 text-gold" />
                                </div>
                                <h1 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">{productTitle}</h1>
                                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Identity & Deployment Initialization</p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                                <div className="space-y-2">
                                    <label htmlFor="checkout-name" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Full Identifier</label>
                                    <input
                                        id="checkout-name"
                                        name="checkout-name"
                                        type="text"
                                        required
                                        placeholder="Name as per Passport"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all placeholder:text-zinc-800"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="passport" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Passport / ID Protocol</label>
                                    <input
                                        id="passport"
                                        name="passport"
                                        type="text"
                                        required
                                        placeholder="e.g. A1234567"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all placeholder:text-zinc-800"
                                        value={formData.passport}
                                        onChange={(e) => setFormData({ ...formData, passport: e.target.value })}
                                    />
                                </div>
                                {type === "visa" && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="arrival" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Arrival Cycle</label>
                                            <input
                                                id="arrival"
                                                name="arrival"
                                                type="date"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all color-scheme-dark"
                                                value={formData.arrivalDate}
                                                onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="visa-type" className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-1">Protocol Type</label>
                                            <select
                                                id="visa-type"
                                                name="visa-type"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 outline-none transition-all appearance-none"
                                                value={formData.visaType}
                                                onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                                            >
                                                <option value="Tourist" className="bg-zinc-950">Tourist</option>
                                                <option value="Business" className="bg-zinc-950">Business</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full py-6 bg-gold text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-gold/20 mt-4 text-sm"
                                >
                                    INITIALIZE SCAN <ChevronRight className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-16 text-center shadow-2xl space-y-10"
                        >
                            <div className="relative w-32 h-32 mx-auto">
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
                                    <Shield className="w-12 h-12 text-gold" />
                                </motion.div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic tracking-widest">Auditing Credentials...</h2>
                                <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.2em] max-w-xs mx-auto">
                                    Cross-referencing identifier <b>{formData.passport}</b> with NileVista Ministry Liaison Databases.
                                </p>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                onAnimationComplete={nextStep}
                                className="h-1 bg-gold rounded-full max-w-xs mx-auto shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                            />
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold/5">
                                <motion.div
                                    className="h-full bg-gold"
                                    initial={{ width: "75%" }}
                                    animate={{ width: "75%" }}
                                />
                            </div>

                            <div className="mb-10 text-center">
                                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <CreditCard className="w-8 h-8 text-gold" />
                                </div>
                                <h1 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">Monetary Transfer</h1>
                                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Select Liquidity Protocol</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { id: "credit_card", label: "Global Credit Card", icon: <CardIcon className="w-5 h-5" /> },
                                    { id: "crypto", label: "Verified Digital Asset (USDT)", icon: <Wallet className="w-5 h-5" /> },
                                    { id: "bank_transfer", label: "Sovereign Wire Transfer", icon: <Landmark className="w-5 h-5" /> }
                                ].map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={cn(
                                            "w-full p-6 rounded-2xl border transition-all flex items-center justify-between group",
                                            paymentMethod === method.id ? "bg-gold/10 border-gold/50 shadow-lg shadow-gold/5" : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", paymentMethod === method.id ? "bg-gold text-black" : "bg-white/5 text-zinc-500")}>
                                                {method.icon}
                                            </div>
                                            <span className={cn("text-sm font-black uppercase tracking-widest", paymentMethod === method.id ? "text-white" : "text-zinc-600")}>{method.label}</span>
                                        </div>
                                        <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center", paymentMethod === method.id ? "border-gold" : "border-white/10")}>
                                            {paymentMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-gold" />}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={nextStep}
                                className="w-full py-6 bg-gold text-black rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl shadow-gold/20 mt-8 text-sm"
                            >
                                AUTHORIZE PAYMENT <CheckCircle className="w-5 h-5" />
                            </button>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-950 border border-white/5 rounded-[3rem] p-16 text-center shadow-2xl space-y-10"
                        >
                            <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                                <Rocket className="w-12 h-12 text-black" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">Authorization <br /><span className="gold-gradient">Confirmed!</span></h1>
                                <p className="text-zinc-500 text-lg font-medium italic leading-relaxed">
                                    Welcome, <b>{formData.name}</b>. Your NileVista deployment strategy has been successfully authorized and initialized.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/"
                                    className="px-10 py-6 bg-white/5 text-white border border-white/10 font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
                                >
                                    RETURN TO COMMAND CENTER
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const CheckoutPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <CheckoutContent />
        </Suspense>
    );
};

export default CheckoutPage;
