"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Star, Crown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlobalCTA } from "@/components/sections/global-cta";

const tiers = [
    {
        name: "Essential",
        price: "$29",
        description: "Perfect for independent travelers seeking safety basics.",
        features: [
            "Real-time Danger Heat-Maps",
            "SOS Support Access",
            "Verification Scanner",
            "Community Safety Reviews",
        ],
        icon: <Zap className="w-6 h-6" />,
        highlight: false,
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "Total peace of mind with premium support and planning.",
        features: [
            "Everything in Essential",
            "AI Trip Planner (Unlimited)",
            "Priority Verified Guides",
            "Guidly Digital Card (Basic)",
            "Dialect Voice Translation",
        ],
        icon: <Star className="w-6 h-6" />,
        highlight: true,
        cta: "Popular Choice",
    },
    {
        name: "Elite Royal",
        price: "$499",
        description: "Concierge-level management for high-net-worth tours.",
        features: [
            "Everything in Enterprise",
            "24/7 Personal Safety Concierge",
            "Premium Guidly Physical Card",
            "VIP Permit Handling",
            "Insurance Coverage Included",
            "Private Emergency Transport",
        ],
        icon: <Crown className="w-6 h-6" />,
        highlight: false,
    },
];

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-black pt-24 pb-20 px-4">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter"
                >
                    Investment in <span className="text-gold">Safety</span>
                </motion.h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Choose the tier that matches your travel style. All plans include 256-bit encryption and 24/7 global support.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {tiers.map((tier, idx) => (
                    <motion.div
                        key={tier.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={cn(
                            "relative p-8 rounded-3xl border transition-all duration-300 group",
                            tier.highlight
                                ? "bg-zinc-900 border-gold scale-105 shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)] z-10"
                                : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"
                        )}
                    >
                        {tier.cta && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                {tier.cta}
                            </div>
                        )}
                        <div className="text-gold mb-4">{tier.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-4xl font-bold text-white">{tier.price}</span>
                            <span className="text-gray-500">/trip</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            {tier.description}
                        </p>
                        <ul className="space-y-4 mb-10">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/checkout"
                            className={cn(
                                "w-full py-4 rounded-xl font-bold transition-all duration-300 text-center block",
                                tier.highlight
                                    ? "bg-gold text-black hover:bg-white"
                                    : "bg-white text-black hover:bg-gold"
                            )}
                        >
                            Get Started Now
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 mb-20 max-w-3xl mx-auto text-center p-8 bg-zinc-900/50 rounded-2xl border border-dashed border-gold/30">
                <Shield className="w-10 h-10 text-gold mx-auto mb-4 opacity-50" />
                <h4 className="text-white font-bold mb-2">Enterprise Corporate Plan?</h4>
                <p className="text-gray-500 text-sm">
                    Managing a travel agency or corporate retreat? Contact our sales team for custom quotas, SDK access, and dedicated security officers.
                </p>
                <button className="mt-6 text-gold font-semibold hover:underline">
                    Contact Sales &rarr;
                </button>
            </div>
            <GlobalCTA />
        </div>
    );
};

export default PricingPage;
