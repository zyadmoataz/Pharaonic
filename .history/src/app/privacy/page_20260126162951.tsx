"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    <h1 className="text-5xl font-bold text-white mb-12">Privacy Policy.</h1>
                    <div className="space-y-8 text-neutral-400 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                            <p>We collect information you provide directly to us when you create an account, use our AI planning tools, or request help. This may include your name, email, and travel preferences.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Safety Data & SOS</h2>
                            <p>When you use the SOS feature, we collect your real-time GPS coordinates to share with official authorities. This data is only accessed during an active emergency request.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                            <p>Guidly uses enterprise-grade encryption to protect your data. As an authorized platform, we adhere to strict government standards for data sovereignty and security.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal data at any time through the app settings or by contacting our support team.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
