"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Table, List, Sparkles, Shield } from "lucide-react";
import { useParams } from "next/navigation";

const blog_content = {
    "sovereign-travel-egypt-2026": {
        title: "The Sovereign Travel Protocol: Navigating Egypt in 2026",
        date: "Jan 12, 2026",
        author: "NileVista Research Group",
        authorRole: "Operational Intelligence",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1539768942893-909772186705?auto=format&fit=crop&q=80&w=1200",
        content: `
            <div class="blog-section mb-16">
                <p className="lead border-l-4 border-gold pl-8 italic mb-12 text-2xl text-white/90">"The legacy model of Egyptian tourism—defined by systemic fragmentation and opaque commission structures—is officially obsolete. NileVista is architecting the first unified digital layer for the sovereign traveler."</p>
            </div>
            
            <div class="blog-section mb-16">
                <h2 id="disruption" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. Strategic Disruption of the Intermediary Layer</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">For decades, the Egyptian tourism market has been gated by a complex web of informal commission nodes. Our internal audit reveals an average <strong>'ghost tax' of 42%</strong> on all standard luxury bookings. These fees provide zero tangible value to the voyager, instead sustaining a bloated layer of legacy intermediaries.</p>
            </div>

            <div class="blog-section mb-16 px-10 py-12 bg-zinc-900/40 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <h3 class="text-xl font-bold text-gold uppercase tracking-widest mb-6">The Disintermediation Logic</h3>
                <p className="mb-0 text-zinc-300">NileVista utilizes a proprietary <strong>Direct-to-Source (DtS)</strong> protocol. By leveraging blockchain-backed smart contracts, we ensure that every dollar of your audit budget flows directly to the verified service provider—be it a specialized Egyptologist or a private maritime captain.</p>
            </div>
            
            <blockquote className="my-20 border-none relative">
                 <div className="absolute -top-10 -left-6 text-gold/20 text-[10rem] font-serif select-none">"</div>
                <p className="text-white text-3xl font-medium leading-tight relative z-10 italic">True luxury in 2026 is defined by the absolute absence of systemic friction. It is the certainty that your identity and capital are protected by institutional-grade code.</p>
                <cite className="block mt-8 text-gold font-black uppercase tracking-[0.3em] text-xs">— NileVista Strategy Whitepaper v2.4</cite>
            </blockquote>

            <div class="blog-section mb-16">
                <h2 id="benchmarks" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">II. Economic Meritocracy: Real-Time Benchmarking</h2>
                <p className="mb-8 text-zinc-400">How do we guarantee price parity in a market known for volatility? Through our <strong>Merit-Audit System</strong>. Every partner in our network is subjected to a bi-weekly performance review that monitors not just service quality, but adherence to our <i>Non-Exclusionary Pricing Protocol</i>.</p>
            </div>
            
            <div className="bg-gold/5 p-12 rounded-[3.5rem] border border-gold/10 my-20 shadow-inner group">
                <h4 className="text-gold uppercase font-black tracking-[0.4em] text-[10px] mb-10 flex items-center gap-3">
                    <Sparkles className="w-4 h-4" /> 2026 Operational Matrix
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 list-none p-0 m-0">
                    <li className="text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-4 group-hover:translate-x-2 transition-transform"><div className="w-2 h-2 bg-gold rounded-full" /> 42% Commission Recapture</li>
                    <li className="text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-4 group-hover:translate-x-2 transition-transform"><div className="w-2 h-2 bg-gold rounded-full" /> 100% Cryptographic Logs</li>
                    <li className="text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-4 group-hover:translate-x-2 transition-transform"><div className="w-2 h-2 bg-gold rounded-full" /> Zero Leakage Infrastructure</li>
                    <li className="text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-4 group-hover:translate-x-2 transition-transform"><div className="w-2 h-2 bg-gold rounded-full" /> 256-Bit Identity Anonymity</li>
                </ul>
            </div>

            <div class="blog-section mb-16">
                <h2 id="security" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">III. The Shield Protocol: Intelligent Routing</h2>
                <p className="mb-8 text-zinc-400">Security in 2026 is no longer about physical barriers; it is about <strong>Information Asymmetry</strong>. Our Green Zone AI maps the safest, most efficient corridors in real-time, allowing our voyagers to move through the vibrant chaos of Cairo with the signature of a high-value resident.</p>
                <p className="mb-8 text-zinc-400">The NileVista Card acts as your digital liaison. When you transact in local markets, our system scrubs your financial metadata, presenting a sanitized transaction profile to the legacy banking layer. You remain visible only to those you authorize.</p>
            </div>
            
            <div class="blog-section mb-16 border-t border-white/5 pt-16">
                <h2 id="conclusion" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">Conclusion: The Future of Sovereign Transit</h2>
                <p className="mb-8 text-zinc-300 text-lg leading-relaxed">As we expand our operational footprint to the first 500 elite voyagers, our mission remains unchanged: to provide the definitive Egyptian experience, free from the constraints of the 20th-century travel model. <strong>The infrastructure is ready. The protocol is authorized.</strong></p>
            </div>
        `,
        toc: [
            { id: "disruption", label: "I. Strategic Disruption" },
            { id: "benchmarks", label: "II. Economic Benchmarks" },
            { id: "security", label: "III. Shield Protocol" },
            { id: "conclusion", label: "Conclusion" }
        ]
    },
    "disassembling-the-tourist-tax": {
        title: "Disassembling the 'Tourist Tax': A Data-Driven Guide",
        date: "Jan 15, 2026",
        author: "Analytics Team",
        authorRole: "Economic Intelligence",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1547014762-3a94fb4df60a?auto=format&fit=crop&q=80&w=1200",
        content: `
            <div class="blog-section mb-16">
                <p className="lead border-l-4 border-gold pl-8 italic mb-12 text-2xl text-white/90">"The 'Tourist Tax' is not an inevitability; it is a symptom of information asymmetry. We've archived 10,000+ transaction points to give you the authorized benchmark."</p>
            </div>
            
            <div class="blog-section mb-16">
                <h2 id="asymmetry" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. The Psychology of Information Asymmetry</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">In traditional markets, price is a variable determined by the perceived 'exit capacity' of the buyer. Our data shows that international travelers with standard bank cards are charged an average of <strong>470% more</strong> than local residents for identical logistical assets. This is not just a markup; it is a systemic extraction layer.</p>
            </div>

            <div class="blog-section mb-16">
                <h2 id="benchmarks" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">II. NileVista Authorized Benchmarks</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">We provide a real-time feed of authorized prices for 250+ item categories. By using the NileVista Card, you bypass the psychological mechanisms of the street economy.</p>
            </div>
            
            <div className="overflow-hidden rounded-[3rem] border border-white/5 my-16 bg-zinc-950/50 shadow-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5">
                            <th className="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">Asset Category</th>
                            <th className="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">Market "Ask"</th>
                            <th className="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">NileVista Auth</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                            <td className="p-8 text-white font-black uppercase tracking-widest text-xs">Executive Airport Transit</td>
                            <td className="p-8 text-zinc-600 line-through font-bold">$120</td>
                            <td className="p-8 text-gold font-black bg-gold/5">$45 (Auth)</td>
                        </tr>
                        <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                            <td className="p-8 text-white font-black uppercase tracking-widest text-xs">Private Guide (Luxor)</td>
                            <td className="p-8 text-zinc-600 line-through font-bold">$250</td>
                            <td className="p-8 text-gold font-black bg-gold/5">$80 (Auth)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        toc: [
            { id: "asymmetry", label: "I. Information Asymmetry" },
            { id: "benchmarks", label: "II. Authorized Benchmarks" }
        ]
    },
    "safe-coridors-greater-cairo": {
        title: "Safe Corridors: Mapping Greater Cairo's Green Zones",
        date: "Jan 18, 2026",
        author: "Liaison Office",
        authorRole: "Security Operations",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1200",
        content: `
            <div class="blog-section mb-16">
                <p className="lead border-l-4 border-gold pl-8 italic mb-12 text-2xl text-white/90">"Cairo is a city of layers. Our AI architects the layer where luxury meets absolute security."</p>
            </div>
            
            <div class="blog-section mb-16">
                <h2 id="zones" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. Defining the Green Zone</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">We utilize satellite telemetry and local intelligence to map Cairo into dynamic zones. <strong>Green Zones</strong> are verified for low friction, high infrastructure integrity, and rapid liaison response capacity.</p>
            </div>
            
            <div class="blog-section mb-16">
                <h2 id="routing" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">II. Dynamic Routing Protocols</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">Our AI analyzes traffic density, event signals, and urban friction points in real-time to generate paths that allow you to reach any hub in Cairo without the standard urban fatigue.</p>
            </div>
        `,
        toc: [
            { id: "zones", label: "I. Defining Green Zones" },
            { id: "routing", label: "II. Dynamic Routing" }
        ]
    }
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blog_content[slug as keyof typeof blog_content] || blog_content["sovereign-travel-egypt-2026"];

    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-500 hover:text-gold transition-colors font-black uppercase tracking-[0.4em] text-[10px] mb-16 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Briefings
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Left: Article */}
                    <article className="lg:col-span-8 space-y-16">
                        <div className="space-y-12">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                <div className="flex items-center gap-4 text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-4">
                                    <div className="w-10 h-px bg-gold/30" />
                                    Authorized Intelligence
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
                                    {post.title}
                                </h1>
                                <p className="text-zinc-500 text-xl font-medium max-w-2xl leading-relaxed italic">
                                    Analytical briefing regarding the operational landscape of Egyptian transit in the 2026 sector.
                                </p>
                                <div className="flex flex-wrap items-center gap-10 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] pt-8 border-t border-white/5">
                                    <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-gold/50" /> {post.date}</span>
                                    <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold/50" /> {post.readTime}</span>
                                    <div className="flex items-center gap-4 ml-auto">
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group hover:border-gold/30 transition-colors">
                                            <Share2 className="w-4 h-4 text-zinc-500 group-hover:text-gold transition-colors" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group hover:border-gold/30 transition-colors">
                                            <Bookmark className="w-4 h-4 text-zinc-500 group-hover:text-gold transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
                                <img src={post.image} className="w-full h-[650px] object-cover rounded-[3rem] border border-white/10 shadow-2xl relative z-10 brightness-90 group-hover:brightness-100 transition-all duration-700" alt={post.title} />
                                <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-[5rem] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        </div>

                        <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 mb-16">
                            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                                <User className="text-gold w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-white font-black uppercase tracking-widest text-sm">{post.author}</div>
                                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{post.authorRole} • Lead Analyst</div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="blog-content prose prose-invert prose-xl max-w-none 
                                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white
                                prose-p:text-zinc-400 prose-p:leading-[1.8] prose-p:font-medium
                                prose-strong:text-white prose-strong:font-black
                                prose-em:text-gold prose-em:font-bold prose-em:italic
                                prose-ul:list-none prose-ul:p-0
                                pb-20"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Right: Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 sticky top-32 space-y-12 shadow-2xl">
                            <div className="space-y-8">
                                <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px] border-b border-white/5 pb-6">
                                    <List className="w-4 h-4 text-gold" /> Critical Path
                                </h4>
                                <ul className="space-y-6">
                                    {post.toc.map(item => (
                                        <li key={item.id}>
                                            <a href={`#${item.id}`} className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-gold transition-all block group flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-gold transition-colors" />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-gold/5 border border-gold/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                <h5 className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                                    <Shield className="w-4 h-4" /> Operational Advantage
                                </h5>
                                <p className="text-[11px] text-zinc-400 mb-8 font-bold uppercase tracking-widest leading-relaxed">
                                    Access the authorized NileVista layer to bypass the systemic friction discussed in this briefing.
                                </p>
                                <Link href="/card" className="block w-full py-5 bg-gold text-black text-center rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-gold/10">Get Authorized</Link>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] border-b border-white/5 pb-4">Real-Time Telemetry</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-[8px] text-zinc-600 font-black uppercase mb-1">Status</div>
                                        <div className="text-[10px] text-green-500 font-black uppercase">Active</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-[8px] text-zinc-600 font-black uppercase mb-1">Latency</div>
                                        <div className="text-[10px] text-white font-black uppercase">0.4ms</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

                </div >
            </div >
        </div >
    );
}
