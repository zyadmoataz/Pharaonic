"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Target, Zap, BarChart3, Lock } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Hero */}
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Shield className="w-4 h-4" />
                        Sovereign Authority
                    </motion.div>
                    <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85] uppercase">
                        The <span className="text-gold italic">Pharaonic</span> Collective
                    </h1>
                    <p className="text-zinc-500 text-2xl font-medium max-w-4xl mx-auto leading-relaxed italic">
                        "Pharaonic is a sovereign-grade digital infrastructure designed to decouple elite Egyptian discovery from systemic friction. We are a collective of archaeologists, security analysts, and logisticians dedicated to authorized administrative authority."
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch px-6">
                    <div className="space-y-12 flex flex-col justify-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase underline decoration-gold/30 decoration-4 underline-offset-8">Our <span className="gold-gradient">Mission.</span></h2>
                            <p className="text-zinc-400 text-xl font-medium leading-relaxed italic border-l-2 border-gold/40 pl-8">
                                "To engineer the world's most sophisticated and secure gateway to Egyptian heritage, technical disintermediation, and logistical excellence for the global elite."
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase underline decoration-gold/30 decoration-4 underline-offset-8">Our <span className="gold-gradient">Vision.</span></h2>
                            <p className="text-zinc-400 text-xl font-medium leading-relaxed italic border-l-2 border-gold/40 pl-8">
                                "A future where every explorer transits the Nile Valley with total administrative sovereignty, bypassing legacy friction through the Pharaonic Protocol."
                            </p>
                        </div>
                    </div>
                    <div className="relative group min-h-[500px]">
                        <div className="absolute inset-0 bg-gold/10 blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity" />
                        <div className="h-full rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group-hover:border-gold/30 transition-all">
                            <SafeImage
                                src="/pharaonic_team_bw_1769634072524.png"
                                alt="Pharaonic Strategic Team"
                                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000 grayscale select-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-12">
                                <h4 className="text-white font-black text-4xl mb-2 tracking-tighter uppercase italic">Strategic Command</h4>
                                <p className="text-[10px] text-gold uppercase tracking-[0.4em] font-black">Pharaonic Personnel | Sector 00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="relative rounded-[4rem] overflow-hidden min-h-[600px] border border-white/5 group">
                    <SafeImage
                        src="/team.jpeg"
                        alt="Pharaonic Strategic Command Team"
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-40 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="relative z-10 p-12 md:p-24 h-full flex flex-col justify-end">
                        <div className="max-w-3xl space-y-6">
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-none">The <span className="gold-gradient">Command.</span></h2>
                            <p className="text-zinc-300 text-xl font-medium leading-relaxed italic border-l-2 border-gold pl-8">
                                "Our personnel are recruited from the highest echelons of Egyptian academia and security infrastructure. Every liaison is merit-audited to ensure the Pharaonic Protocol is upheld in every transit."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Infrastructure */}
                <div className="space-y-16 px-6">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">Core <span className="gold-gradient">Infrastructure.</span></h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[10px]">The technological foundation of the Pharaonic Protocol.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Target className="w-6 h-6" />, title: "Precision Mapping", v: "v4.2" },
                            { icon: <Shield className="w-6 h-6" />, title: "Sovereign Security", v: "AES-256" },
                            { icon: <Globe className="w-6 h-6" />, title: "Global Uplink", v: "Real-time" },
                            { icon: <Zap className="w-6 h-6" />, title: "Latency Bypass", v: "<50ms" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-6 hover:bg-gold/5 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center">{item.icon}</div>
                                <div>
                                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                                    <div className="text-gold font-mono text-[10px] font-black">{item.v}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 px-6">
                    {[
                        { icon: <Zap />, title: "Strategic Velocity", desc: "Our AI agents monitor airport queues, traffic bottlenecks, and weather patterns to adjust your itinerary in milliseconds." },
                        { icon: <Lock />, title: "Financial Shield", desc: "Pay once at source. We eliminate the hidden commissions and legacy 'Tourist Tax' through direct-to-asset payments." },
                        { icon: <BarChart3 />, title: "Total Auditing", desc: "Every liaison, hotel, and transport provider is audited monthly for service parity and security compliance." }
                    ].map((v, i) => (
                        <motion.div key={i} className="p-12 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/20 transition-all flex flex-col gap-8 group">
                            <div className="w-20 h-20 rounded-[2.5rem] bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">{v.icon}</div>
                            <div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic uppercase group-hover:text-gold transition-colors">{v.title}</h3>
                                <p className="text-zinc-500 font-medium leading-relaxed italic">"{v.desc}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
