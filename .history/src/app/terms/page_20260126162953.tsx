"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    <h1 className="text-5xl font-bold text-white mb-12">Terms of Service.</h1>
                    <div className="space-y-8 text-neutral-400 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>By using Guidly, you agree to comply with all local laws and regulations of the Arab Republic of Egypt. Our platform is a bridge between tourists and official services.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Authorized Use</h2>
                            <p>Users must provide accurate information. Misuse of the SOS button or attempting to bypass official merchant pricing is strictly prohibited.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Permits & Licensing</h2>
                            <p>While Guidly streamlines permit applications, the final approval rests with the Ministry of Tourism. Users must adhere to site-specific rules regarding photography and filming.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                            <p>Guidly acts as a facilitator. While we audit and verify guides, users are responsible for their own safety and conduct during independent travel.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
