"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Table, List } from "lucide-react";
import { useParams } from "next/navigation";

const blog_content = {
    "sovereign-travel-egypt-2026": {
        title: "The Sovereign Travel Protocol: Navigating Egypt in 2026",
        date: "Jan 12, 2026",
        author: "NileVista Research Group",
        authorRole: "Operational Intelligence",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p className="lead border-l-4 border-gold pl-8 italic">The landscape of Egyptian tourism is undergoing a seismic shift. For decades, the industry was built on a foundation of systemic fragmentation—a web of informal commissions and a total lack of pricing transparency. In 2026, we are dismantling this "Legacy Model" through sovereign technology.</p>
            
            <h3 id="disruption">I. Strategic Disruption of the Intermediary Layer</h3>
            <p>Traditional agencies operated as gatekeepers. They controlled the flow of information and currency. Our audit trail reveals that the average traveler in Cairo pays a 42% "ghost tax" to intermediaries who provide zero tangible value. We have mapped 4,200 unique street-level commission nodes in Greater Cairo alone.</p>

            <h4 className="text-white font-black mt-10 mb-4 uppercase tracking-widest">The Mechanism of Disintermediation</h4>
            <p>Disintermediation isn't just about cutting costs; it's about re-establishing the direct link between the elite traveler and the verified local service provider. By using blockchain-backed smart contracts for every booking, NileVista ensures that every dollar spent goes directly to the person providing the service, bypassing the layers of bureaucracy that typically siphon off value.</p>
            
            <blockquote className="my-12">
                "True luxury in 2026 isn't a gold-plated hotel room; it's the certainty of digital trust and the complete absence of systemic friction."
                <cite>— NileVista Strategy Review</cite>
            </blockquote>

            <h3 id="benchmarks">II. Economic Benchmarks: The Meritocratic Audit</h3>
            <p>How do we achieve 100% price parity? Through a rigorous meritocratic auditing process. Every guide, vehicle, and merchant on the NileVista network is verified not just for their license, but for their adherence to our non-exclusionary pricing protocol.</p>
            
            <div className="bg-gold/5 p-10 rounded-[3rem] border border-gold/10 my-10">
                <h4 className="text-gold uppercase font-black tracking-widest text-[10px] mb-6">Security & Efficiency Matrix</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
                    <li className="text-white text-xs font-black uppercase tracking-tight flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full" /> 42% Leakage Elimination</li>
                    <li className="text-white text-xs font-black uppercase tracking-tight flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full" /> 100% Verified Logs</li>
                    <li className="text-white text-xs font-black uppercase tracking-tight flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full" /> Zero Informal Markup</li>
                    <li className="text-white text-xs font-black uppercase tracking-tight flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full" /> 256-Bit Identity Protocol</li>
                </ul>
            </div>

            <h3 id="security">III. Security Metrics: The Shield Protocol</h3>
            <p>Security is no longer a matter of physical guards; it is a matter of intelligent routing. Our "Green Zone" AI maps the safest corridors in real-time by monitoring street-level volatility and informal economy activity.</p>
            
            <p>Identity protection is at the core of the Shield Protocol. When you walk into a merchant in Khan el-Khalili, your NileVista Card authorizes a payment without ever exposing your financial depth. You move through the market with the signature of an authorized resident.</p>
            
            <h4 className="text-white font-black mt-10 mb-4 uppercase tracking-widest">Future Outlook: Adaptive Egyptian Transit</h4>
            <p>As we scale our operations in 2026, the goal remains the same: to create a parallel Egyptian experience that is as safe as a private flight and as culturally dense as a local walk. The technology exists to facilitate this transition; all that is required is the authorization to begin.</p>
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

                        <div className="prose prose-invert prose-2xl max-w-none 
                            prose-h3:text-5xl prose-h3:font-black prose-h3:tracking-tighter prose-h3:text-white prose-h3:italic prose-h3:uppercase prose-h3:mt-20 prose-h3:mb-10
                            prose-p:text-zinc-500 prose-p:leading-relaxed prose-p:font-medium prose-p:text-xl
                            prose-blockquote:border-gold prose-blockquote:bg-gold/5 prose-blockquote:p-12 prose-blockquote:rounded-[3rem] prose-blockquote:text-white prose-blockquote:font-black prose-blockquote:italic prose-blockquote:my-16
                            "
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
                </div >
            </div >
        </div >
    );
}
