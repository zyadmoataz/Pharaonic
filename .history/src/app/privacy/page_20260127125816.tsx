"use client";

import React from "react";
import { Lock, FileText, Database, Globe } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-widest">
                        <Lock className="w-4 h-4" />
                        Data Protocol
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Privacy <span className="text-gold italic">Policy</span></h1>
                    <p className="text-zinc-500 text-lg">Effective Date: January 27, 2026</p>
                </div>

                <div className="space-y-12 text-zinc-400 leading-relaxed font-medium">
                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">01.</span> Data Collection
                        </h2>
                        <p>
                            To facilitate authorized tourism permits and AI-driven itineraries, we collect specific data points including Passport Details (for government clearance), Travel Dates, and Interest Vectors. This data is encrypted at rest and in transit.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">02.</span> Payment Security
                        </h2>
                        <div className="p-8 rounded-[2rem] bg-emerald-900/10 border border-emerald-500/20 relative overflow-hidden">
                            <div className="flex items-start gap-4">
                                <Lock className="w-8 h-8 text-emerald-500 mt-1" />
                                <div>
                                    <h3 className="text-xl text-white font-black uppercase mb-2">PCI-DSS Compliant Infrastructure</h3>
                                    <p className="text-zinc-400 text-sm mb-4">
                                        Pharaonic does not store your credit card data directly. All transactions are securely tokenized and processed via Stripe, a global leader in payment security.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="px-3 py-1 bg-white/5 rounded text-xs font-bold text-white border border-white/10 uppercase tracking-wider">AES-256 Encryption</div>
                                        <div className="px-3 py-1 bg-white/5 rounded text-xs font-bold text-white border border-white/10 uppercase tracking-wider">TLS 1.3 Transport</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">03.</span> Government Sharing
                        </h2>
                        <p>
                            As an authorized facilitator, we are mandated to share specific identity documents with the Egyptian Ministry of Tourism and Antiquities solely for the purpose of permit issuance (e.g., Drone Licenses). We do not sell your data to third-party ad networks.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">04.</span> Account Erasure
                        </h2>
                        <p>
                            You retain the right to the "Right to be Forgotten". Upon request, all personal data not legally required for government record-keeping will be permanently purged from our servers within 48 hours.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
