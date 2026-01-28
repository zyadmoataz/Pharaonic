import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCcw, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FailPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-zinc-950 border border-white/5 rounded-[4rem] p-12 md:p-20 text-center space-y-10 shadow-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                    <div className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                        <AlertCircle className="w-12 h-12 text-red-500" />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">Transfer <br /><span className="text-red-500">Rejected.</span></h1>
                        <p className="text-zinc-500 text-lg font-medium leading-relaxed italic">
                            The liquidity protocol encountered a friction event. Your transaction was not authorized by the merchant network.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link
                            href="/checkout"
                            className="p-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-xl shadow-white/10"
                        >
                            RETRY PROTOCOL <RefreshCcw className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="p-6 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10"
                        >
                            CONTACT LIAISON <PhoneCall className="w-4 h-4" />
                        </Link>
                    </div>

                    <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.2em]">Error Code: NV-0403-FRICTION</p>
                </motion.div>
            </div>
        </div>
    );
}
