"use client";

import { Globe, Zap, Users, Fingerprint, Activity, FileCheck } from "lucide-react";


export default function WhyUs() {
    return (
        <div className="min-h-screen pt-40 pb-20 px-4 relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-desert-with-a-blue-sky-32868-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                <div className="text-center space-y-8">
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase">
                        The <span className="gold-gradient italic">Pharaonic</span> Advantage
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic">
                        "Your Egyptian discovery should be defined by wonder, not by negotiation."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "AI Trip Architect",
                            desc: "Initialize your journey with proprietary algorithms that analyze thousands of local pulse points to engineer the most efficient, friction-free itineraries possible.",
                            icon: <Zap className="w-8 h-8 text-gold" />,
                            data: "AI-Powered Generation"
                        },
                        {
                            title: "Digital Permit Nexus",
                            desc: "Instant digital issuance of research, film, and high-security photography permits. No bureaucratic lag, no physical paperwork, just authorized clearance.",
                            icon: <FileCheck className="w-8 h-8 text-gold" />,
                            data: "Automated Licensing"
                        },
                        {
                            title: "Authorized Liaisons",
                            desc: "Direct access to merit-audited, licensed professionals specialized in archaeology and logistics. Bypass intermediaries and work with vetted personnel.",
                            icon: <Users className="w-8 h-8 text-gold" />,
                            data: "Direct Human Ops"
                        },
                        {
                            title: "Emergency Pulse",
                            desc: "Real-time SOS response and 24/7 digital liaison monitoring. Our protocol ensures you are never isolated, even in the most remote desert sectors.",
                            icon: <Activity className="w-8 h-8 text-gold" />,
                            data: "Red-Line Security"
                        },
                        {
                            title: "Pharaonic Identity",
                            desc: "The Pharaonic Membership Card grants you sovereign-resident status. Access exclusive artifact procurement channels and diplomatic-grade transit levels.",
                            icon: <Fingerprint className="w-8 h-8 text-gold" />,
                            data: "Sovereign Branding"
                        },
                        {
                            title: "Curated Reconnaissance",
                            desc: "Expertly planned recommendation modules designed for rapid deployment. Pre-vetted routes that balance deep history with elite relaxation.",
                            icon: <Globe className="w-8 h-8 text-gold" />,
                            data: "Strategic Plans"
                        }
                    ].map((card, i) => (
                        <div key={i} className="group p-12 rounded-[4rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all relative overflow-hidden">
                            {/* Number background */}
                            <div className="absolute -top-10 -right-10 text-white/[0.02] font-black text-[15rem] select-none group-hover:text-gold/[0.03] transition-colors z-0 pointer-events-none italic">{i + 1}</div>

                            <div className="relative z-10 space-y-10 flex flex-col h-full">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="w-20 h-20 rounded-[2.5rem] bg-gold/10 flex items-center justify-center text-gold shadow-2xl shadow-gold/5 border border-gold/10 group-hover:scale-110 transition-transform">{card.icon}</div>
                                    <div className="bg-gold/10 px-6 py-2 rounded-full text-gold text-[10px] font-black uppercase tracking-[0.3em] border border-gold/10 shadow-xl shadow-black/40">{card.data}</div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic group-hover:text-gold transition-colors">{card.title}</h3>
                                    <p className="text-zinc-500 text-lg leading-relaxed font-medium italic">"{card.desc}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="space-y-16 py-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">The Market <span className="gold-gradient">Friction.</span></h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">A forensic side-by-side analysis of the Pharaonic Protocol vs Legacy Systems.</p>
                    </div>

                    <div className="overflow-x-auto rounded-[3.5rem] border border-white/5 bg-[#050505] p-2 hover:border-gold/20 transition-all shadow-2xl">
                        <table className="w-full text-left border-collapse overflow-hidden rounded-[3rem]">
                            <thead>
                                <tr className="bg-white/[0.02]">
                                    <th className="py-10 px-10 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5">Operational Feature</th>
                                    <th className="py-10 px-10 text-gold font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5 bg-gold/5">Pharaonic Protocol</th>
                                    <th className="py-10 px-10 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5">Legacy Agencies</th>
                                    <th className="py-10 px-10 text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5">Street-Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { f: "AI Planning Logic", g: "Full Dynamic Synthesis", t: "Static PDF Templates", s: "Oral Tradition / Chaos" },
                                    { f: "Digital Permits", g: "Instant Protocol Sync", t: "Manual Filing (30 Days)", s: "Unauthorized Entry" },
                                    { f: "Liaison Authentication", g: "Direct Merit Auditing", t: "Commission-Only Agents", s: "Unverified Street Fixers" },
                                    { f: "Emergency SOS", g: "Tactical Response Layer", t: "Standard Police Escort", s: "Self-Reliance Only" },
                                    { f: "Identity Status", g: "Sovereign Resident VIP", t: "Standard Group Tourist", s: "Target / Walking ATM" },
                                    { f: "Pricing Model", g: "Direct Asset Parity", t: "Opaque Package Markups", s: "Arbitrary Hustle-Tax" },
                                    { f: "Cultural Velocity", g: "Authorized Fast-Track", t: "Standard Public Lines", s: "Mass-Market Friction" },
                                ]
                                    .map((row, i) => (
                                        <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                                            <td className="py-10 px-10 text-white font-black text-xs uppercase tracking-widest">{row.f}</td>
                                            <td className="py-10 px-10 text-gold font-black text-sm uppercase tracking-tighter italic bg-gold/[0.02]">{row.g}</td>
                                            <td className="py-10 px-10 text-zinc-600 font-medium text-xs uppercase tracking-tight">{row.t}</td>
                                            <td className="py-10 px-10 text-zinc-700 font-medium text-xs uppercase tracking-tight">{row.s}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
