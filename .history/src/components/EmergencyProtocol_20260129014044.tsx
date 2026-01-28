"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, ShieldAlert, X, Shield, MapPin, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencyProtocol() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCalling, setIsCalling] = useState(false);

    const handleEmergencyCall = () => {
        setIsCalling(true);
        // Realistic simulation of an emergency response trigger
        // In a real app, this could send GPS data to a backend
        setTimeout(() => {
            window.location.href = "tel:126"; // Actual Egyptian Tourism Police number
        }, 2000);
    };

    return (
        <>
            {/* Fixed Floating Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                aria-label="Activate Emergency Protocol"
                className="fixed bottom-8 left-8 z-[60] w-14 h-14 md:w-16 md:h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] border-4 border-black group"
            >
                <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 rounded-full border border-red-400 animate-ping opacity-20 pointer-events-none" />
            </motion.button>

            {/* Emergency UI Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-950 border border-red-900/40 rounded-[3rem] p-8 md:p-12 max-w-xl w-full relative overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.15)]"
                        >
                            {/* Scanning Background Effect */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(220,38,38,0)_50%,rgba(220,38,38,0.25)_50%)] bg-[length:100%_4px] z-0 animate-scan" />

                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 md:top-8 md:right-8 text-white/40 hover:text-white transition-colors z-20 p-4 bg-white/5 md:bg-transparent rounded-full border border-white/5 md:border-none"
                                aria-label="Close Emergency Protocol"
                            >
                                <X className="w-6 h-6 md:w-8 md:h-8" />
                            </button>

                            <div className="relative z-10 space-y-8 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">
                                    <Radio className="w-4 h-4 animate-pulse" />
                                    Active Signal Transmission
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight italic">
                                        Emergency <br /><span className="text-red-500">Protocol.</span>
                                    </h2>
                                    <p className="text-zinc-400 font-medium leading-relaxed">
                                        You are about to establish a direct uplink with the <span className="text-white font-bold">Egyptian Tourism Police (126)</span>. Your current GPS telemetry will be prioritized for rapid response.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                                        <div className="flex items-center gap-2 justify-center text-[8px] text-zinc-600 font-black uppercase tracking-widest relative z-10">
                                            <Shield className="w-3 h-3 text-red-500" /> Authorized
                                        </div>
                                        <div className="text-white font-black uppercase text-xs relative z-10">Liaison Security</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden">
                                        <div className="flex items-center gap-2 justify-center text-[8px] text-zinc-600 font-black uppercase tracking-widest">
                                            <MapPin className="w-3 h-3 text-red-500 animate-bounce" /> Live Telemetry
                                        </div>
                                        <div className="text-white font-mono font-bold text-[10px] tracking-tighter">
                                            30.0444° N, 31.2357° E
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleEmergencyCall}
                                    disabled={isCalling}
                                    className={cn(
                                        "w-full py-6 rounded-3xl font-black uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3",
                                        isCalling ? "bg-red-900 text-white cursor-wait" : "bg-red-600 text-white hover:bg-white hover:text-red-600"
                                    )}
                                >
                                    {isCalling ? (
                                        <>
                                            <Radio className="w-5 h-5 animate-spin" />
                                            Establishing Uplink...
                                        </>
                                    ) : (
                                        <>
                                            <PhoneCall className="w-5 h-5" />
                                            Initialize Call 126
                                        </>
                                    )}
                                </button>

                                <p className="text-[8px] text-zinc-500 font-black uppercase tracking-[0.4em]">
                                    Only initialize in unauthorized crisis situations.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
