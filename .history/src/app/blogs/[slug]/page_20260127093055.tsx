"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Table, List, Sparkles } from "lucide-react";
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
            <p className="lead border-l-4 border-gold pl-8 italic mb-12">"The legacy model of Egyptian tourism—defined by systemic fragmentation and opaque commission structures—is officially obsolete. NileVista is architecting the first unified digital layer for the sovereign traveler."</p>
            
            <h3 id="disruption">I. Strategic Disruption of the Intermediary Layer</h3>
            <p className="mb-8">For decades, the Egyptian tourism market has been gated by a complex web of informal commission nodes. Our internal audit reveals a average 'ghost tax' of 42% on all standard luxury bookings. These fees provide zero tangible value to the voyager, instead sustaining a bloated layer of legacy intermediaries.</p>

            <h4 className="text-white font-black mt-10 mb-6 uppercase tracking-widest text-lg">The Disintermediation Logic</h4>
            <p className="mb-8">NileVista utilizes a proprietary <strong>Direct-to-Source (DtS)</strong> protocol. By leveraging blockchain-backed smart contracts, we ensure that every dollar of your audit budget flows directly to the verified service provider—be it a specialized Egyptologist or a private maritime captain. This isn't just a cost-saving measure; it is the establishment of digital trust in a trustless environment.</p>
            
            <blockquote className="my-16">
                "True luxury in 2026 is defined by the absolute absence of systemic friction. It is the certainty that your identity and capital are protected by institutional-grade code."
                <cite className="block mt-4 text-gold">— NileVista Strategy Whitepaper v2.4</cite>
            </blockquote>

            <h3 id="benchmarks">II. Economic Meritocracy: Real-Time Benchmarking</h3>
            <p className="mb-8">How do we guarantee price parity in a market known for volatility? Through our <strong>Merit-Audit System</strong>. Every partner in our network is subjected to a bi-weekly performance review that monitors not just service quality, but adherence to our <i>Non-Exclusionary Pricing Protocol</i>.</p>
            
            <div className="bg-gold/5 p-12 rounded-[3.5rem] border border-gold/10 my-16">
                <h4 className="text-gold uppercase font-black tracking-widest text-[10px] mb-8">2026 Operational Matrix</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0 m-0">
                    <li className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_gold]" /> 42% Commission Recapture</li>
                    <li className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_gold]" /> 100% Cryptographic Logs</li>
                    <li className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_gold]" /> Zero Leakage Infrastructure</li>
                    <li className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_gold]" /> 256-Bit Identity Anonymity</li>
                </ul>
            </div>

            <h3 id="security">III. The Shield Protocol: Intelligent Routing</h3>
            <p className="mb-8">Security in 2026 is no longer about physical barriers; it is about <strong>Information Asymmetry</strong>. Our Green Zone AI maps the safest, most efficient corridors in real-time, allowing our voyagers to move through the vibrant chaos of Cairo with the signature of a high-value resident.</p>
            
            <p className="mb-8">The NileVista Card acts as your digital liaison. When you transact in local markets, our system scrubs your financial metadata, presenting a sanitized transaction profile to the legacy banking layer. You remain visible only to those you authorize.</p>
            
            <h4 className="text-white font-black mt-10 mb-6 uppercase tracking-widest text-lg">Conclusion: The Future of Sovereign Transit</h4>
            <p className="mb-8">As we expand our operational footprint to the first 500 elite voyagers, our mission remains unchanged: to provide the definitive Egyptian experience, free from the constraints of the 20th-century travel model. The infrastructure is ready. The protocol is authorized.</p>
        `,
        toc: [
            { id: "disruption", label: "I. Strategic Disruption" },
            { id: "benchmarks", label: "II. Economic Benchmarks" },
            { id: "security", label: "III. Shield Protocol" }
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
                <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-500 hover:text-gold transition-colors font-black uppercase tracking-[0.3em] text-[10px] mb-10">
                    <ArrowLeft className="w-4 h-4" /> Back to Briefings
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left: Article */}
                    <article className="lg:col-span-8 space-y-12">
                        <div className="space-y-8">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10 border-l border-gold/30 pl-8">
                                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {post.readTime} ANALYSIS</span>
                                    <div className="w-px h-10 bg-white/5" />
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                                            <User className="text-gold w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-white tracking-widest">{post.author}</div>
                                            <div className="text-zinc-700 tracking-tighter lowercase">{post.authorRole}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <img src={post.image} className="w-full h-[600px] object-cover rounded-[4rem] border border-white/5 shadow-2xl" alt={post.title} />
                        </div>

                        <div
                            className="prose prose-invert prose-2xl max-w-none prose-h3:text-5xl prose-h3:font-black prose-h3:tracking-tighter prose-h3:text-white prose-h3:italic prose-h3:uppercase prose-h3:mt-20 prose-h3:mb-10 prose-p:text-zinc-500 prose-p:leading-relaxed prose-p:font-medium prose-p:text-xl prose-blockquote:border-gold prose-blockquote:bg-gold/5 prose-blockquote:p-12 prose-blockquote:rounded-[3rem] prose-blockquote:text-white prose-blockquote:font-black prose-blockquote:italic prose-blockquote:my-16"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Right: Sidebar */}
                    <aside className="lg:col-span-4 space-y-10">
                        <div className="p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 sticky top-32 space-y-10">
                            <div>
                                <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 border-b border-white/5 pb-4">
                                    <Bookmark className="w-4 h-4 text-gold" /> Briefing Architecture
                                </h4>
                                <ul className="space-y-4">
                                    {post.toc.map(item => (
                                        <li key={item.id}>
                                            <Link href={`#${item.id}`} className="text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-gold transition-all block group flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/10">
                                <h5 className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                                    <Sparkles className="w-4 h-4" /> Operational Asset
                                </h5>
                                <p className="text-[11px] text-zinc-500 mb-6 font-bold uppercase tracking-widest leading-relaxed">Authorize your NileVista Card to access the private merchant benchmarks and Green Zone paths discussed in this briefing.</p>
                                <Link href="/card" className="block w-full py-5 bg-gold text-black text-center rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get Authorized</Link>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em]">Region Security Level</h4>
                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-white font-black uppercase tracking-widest text-[10px]">Tier 1: Authorized Green Zone</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
