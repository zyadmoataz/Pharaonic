"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, HelpCircle, Shield, CreditCard, Camera } from "lucide-react";

const faqs = [
    {
        q: "Is Guidly an official government app?",
        a: "Guidly is an enterprise platform authorized and sanctioned by the Ministry of Tourism to provide safety and logistical support for visitors.",
        icon: <Shield className="w-5 h-5 text-gold" />,
    },
    {
        q: "How does the SOS button work?",
        a: "The SOS button provides immediate one-click connectivity to the police and local authorities, sharing your GPS location for emergency support.",
        icon: <HelpCircle className="w-5 h-5 text-gold" />,
    },
    {
        q: "Can I use the app for photography permits?",
        a: "Yes, Guidly offers a streamlined portal to apply for professional and amateur filming/photography permits at all major historical sites.",
        icon: <Camera className="w-5 h-5 text-gold" />,
    },
    {
        q: "How do fixed-price payments work?",
        a: "You can scan codes at participating merchant stalls to pay fixed, verified prices via the app, bypassing any bargaining or overcharging issues.",
        icon: <CreditCard className="w-5 h-5 text-gold" />,
    },
];

export default function HelpPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        Help <span className="gold-gradient">Center.</span>
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Find answers to common questions about safety, logistics, and how to
                        get the best out of your Egyptian adventure.
                    </p>

                    <div className="mt-12 relative max-w-xl mx-auto">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-gold/30"
                        />
                    </div>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="mt-1">{faq.icon}</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
