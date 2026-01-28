"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Target, Zap, BarChart3, Lock } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-32">
                {/* Cinematic Hero */}
                <div className="relative w-full h-[85vh] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl group">
                    <div className="absolute inset-0">
                        <SafeImage
                            src="/grand museum.webp"
                            alt="The Grand Egyptian Museum - Pharaonic HQ"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-10 pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-gold text-xs font-black uppercase tracking-[0.4em]"
                        >
                            <Shield className="w-4 h-4" />
                            Sovereign Infrastructure
                        </motion.div>

                        <h1 className="text-7xl md:text-[9rem] font-black text-white tracking-tighter leading-[0.8] uppercase drop-shadow-2xl">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-yellow-600 italic">Pharaonic</span> <br /> Standard
                        </h1>

                        <div className="space-y-6 max-w-3xl">
                            <p className="text-white/90 text-2xl md:text-3xl font-medium leading-relaxed italic drop-shadow-lg">
                                "We are the architects of a new Egyptian era. Not a travel agency, but a sovereign clearance protocol."
                            </p>
                            <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                By fusing advanced AI logistics with direct government liaisons, we eliminate the chaos of the legacy 'tourist tax'. We provide instant permit issuance, armed security parity, and direct access to the keepers of history.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="absolute bottom-10 left-0 right-0 px-12 flex justify-between items-end opacity-80">
                        <div className="flex flex-col gap-2">
                            <div className="text-gold text-[10px] uppercase tracking-[0.4em] font-black">Location</div>
                            <div className="text-white text-sm font-black uppercase tracking-widest">Grand Egyptian Museum, Giza</div>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <div className="h-px w-24 bg-white/30" />
                            <div className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-black">System Online</div>
                        </div>
                    </div>
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
