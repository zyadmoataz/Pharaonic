"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Zap, Globe } from "lucide-react";
import { GlobalCTA } from "@/components/sections/global-cta";

const ComparisonSection = () => {
    const features = [
        {
            name: "Safety Infrastructure",
            guidly: "Real-time Danger Heat-Maps & SOS Support",
            others: "General blog warnings",
            highlight: true,
        },
        {
            name: "Guide Verification",
            guidly: "Background checks & License validation",
            others: "Self-proclaimed credentials",
            highlight: true,
        },
        {
            name: "Pricing Transparency",
            guidly: "Algorithm-calculated fair market rates",
            others: "Aggressive street negotiation",
            highlight: true,
        },
        {
            name: "Cashless Ecosystem",
            guidly: "Guidly Digital Card (No hidden fees)",
            others: "High ATM fees & potential scams",
            highlight: true,
        },
        {
            name: "Planning Speed",
            guidly: "Instant AI Generator in 60 seconds",
            others: "Weeks of manual research",
            highlight: true,
        },
        {
            name: "Local Mastery",
            guidly: "Dialect-aware translation & context",
            others: "Basic Google Translate",
            highlight: false,
        },
    ];

    return (
        <div className="min-h-screen bg-black pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Guidly vs. <span className="text-gold">The Chaos</span>
                </motion.h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    We didn&apos;t just build another travel app. We engineered a solution to long-standing systemic issues in Egypt&apos;s tourism industry.
                </p>
            </div>

            <div className="max-w-5xl mx-auto bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden glass mb-32">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="p-6 text-left text-gray-400 font-medium">Core Feature</th>
                            <th className="p-6 text-center text-gold font-bold text-xl uppercase tracking-widest bg-gold/5">
                                Guidly Elite
                            </th>
                            <th className="p-6 text-center text-gray-400 font-medium">Others</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, idx) => (
                            <motion.tr
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={feature.name}
                                className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors"
                            >
                                <td className="p-6">
                                    <span className="text-white font-medium block">{feature.name}</span>
                                </td>
                                <td className="p-6 text-center bg-gold/5">
                                    <div className="flex items-center justify-center gap-2 text-white">
                                        <Check className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-sm font-semibold">{feature.guidly}</span>
                                    </div>
                                </td>
                                <td className="p-6 text-center">
                                    <div className="flex items-center justify-center gap-2 text-zinc-500">
                                        <X className="w-4 h-4 shrink-0" />
                                        <span className="text-sm">{feature.others}</span>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <GlobalCTA />
        </div>
    );
};

export default ComparisonSection;
