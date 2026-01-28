"use client";

import React from "react";
import { Shield, Check, AlertCircle } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-widest">
                        <Shield className="w-4 h-4" />
                        Legal Framework
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Terms of <span className="text-gold italic">Service</span></h1>
                    <p className="text-zinc-500 text-lg">Last Updated: January 27, 2026</p>
                </div>

                <div className="space-y-12 text-zinc-400 leading-relaxed font-medium">
                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">01.</span> Service Protocol
                        </h2>
                        <p>
                            Pharaonic ("The Platform") acts as an authorized sovereignty layer for Egyptian tourism logistics. By utilizing our services, including AI planning, license procurement, and localized coordination, you agree to adhere to these terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">02.</span> Financial Guarantee
                        </h2>
                        <div className="p-8 rounded-[2rem] bg-gold/5 border border-gold/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <Shield className="w-24 h-24 text-gold" />
                            </div>
                            <h3 className="text-xl text-gold font-black uppercase mb-4">100% Money-Back Assurance</h3>
                            <p className="mb-4 text-zinc-300">
                                We hold visitor satisfaction as a matter of national prestige. If any authorized service (License procurement, Guide logistics, Transport) is not delivered as specified:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-center text-white"><Check className="w-4 h-4 text-green-500" /> Full refund initiated within 24 hours.</li>
                                <li className="flex gap-3 items-center text-white"><Check className="w-4 h-4 text-green-500" /> Dispute resolution handled by our sovereignty legal team.</li>
                                <li className="flex gap-3 items-center text-white"><Check className="w-4 h-4 text-green-500" /> All payments are secured via Stripe/Visa global protocols.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">03.</span> Permits & Licensing
                        </h2>
                        <p>
                            Applications for drone permits, professional photography, and archaeological access are submitted directly to relevant Egyptian ministries. While Pharaonic guarantees the correct submission and follow-up, final approval rests with state authorities. In the rare event of rejection without cause, 80% of processing fees are refundable.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl text-white font-black uppercase tracking-tight flex items-center gap-3">
                            <span className="text-gold">04.</span> Membership Tiers
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 marker:text-gold">
                            <li><strong>Gold Tier:</strong> Free access for all authenticated visitors.</li>
                            <li><strong>Platinum Tier:</strong> Unlocks upon $1,000 USD verified spend. Includes fast-track logistics.</li>
                            <li><strong>Elite Tier:</strong> Unlocks upon $10,000 USD verified spend. Includes armed security and private aviation options.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
