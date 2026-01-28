"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Zap, Globe, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

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

            <div className="max-w-5xl mx-auto bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden glass">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
                    <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Zero-Risk Travel</h3>
                    <p className="text-gray-500 text-sm">Every guide is vetted by local authorities and Guidly security team.</p>
                </div>
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
                    <Zap className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Instant Solutions</h3>
                    <p className="text-gray-500 text-sm">Real-time alerts for price hikes or safety changes in any tourist zone.</p>
                </div>
                <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
                    <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Global Standards</h3>
                    <p className="text-gray-500 text-sm">Enterprise-grade support for intentional travelers from any country.</p>
                </div>
            </div>
        </div>
    );
};

export default ComparisonSection;
