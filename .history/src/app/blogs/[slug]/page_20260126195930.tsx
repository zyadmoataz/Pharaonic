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
        author: "Guidly Strategy Group",
        authorRole: "Senior Operations Director",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>The landscape of Egyptian tourism is undergoing a seismic shift. For decades, the industry was built on a foundation of systemic fragmentation—a web of informal commissions, "wasta" dependency, and a lack of pricing transparency. At Guidly, we call this the "Legacy Model."</p>
            
            <h3>The Death of the Traditional Agency</h3>
            <p>Traditional agencies operated as gatekeepers. They controlled the flow of information and, more importantly, the flow of currency. In 2026, this gatekeeping is being dismantled by sovereign digital protocols. Disintermediation isn't just a buzzword; it's a financial rescue mission for the global traveler.</p>
            
            <p>Our data shows that 42% of a standard travel package's cost in Cairo is directed towards "ghost commissions"—fees paid to intermediaries who provide zero tangible value. By removing these layers, Guidly is reallocating that value back to the traveler and the actual service providers.</p>

            <blockquote>
                "True luxury in travel isn't a gold-plated hotel room; it's the certainty of trust and the absence of friction."
            </blockquote>

            <h3>The Strategic Audit Trail</h3>
            <p>How do we achieve this? Through a rigorous meritocratic auditing process. Every guide, vehicle, and merchant on the Guidly network is verified not just for their license, but for their adherence to our non-exclusionary pricing protocol. If they haggle, they are removed. If they prioritize commissions over experience, they are de-authorized.</p>
            
            <p>This approach ensures that when you walk into a merchant in Khan el-Khalili, you are protected by the Guidly Shield. You pay the authorized rate, and the merchant receives a fair share, creating a sustainable economy that rewards merit over opportunism.</p>
        `,
        toc: [
            { id: "death-agency", label: "Death of the Traditional Agency" },
            { id: "audit-trail", label: "The Strategic Audit Trail" },
            { id: "future", label: "The Future of Sovereign Travel" }
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
                <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-500 hover:text-gold transition-colors font-black uppercase tracking-widest text-xs mb-10">
                    <ArrowLeft className="w-4 h-4" /> Back to Intelligence
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left: Article */}
                    <article className="lg:col-span-8 space-y-12">
                        <div className="space-y-8">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {post.readTime} READ</span>
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
                            <img src={post.image} className="w-full h-[600px] object-cover rounded-[4rem] border border-white/5" alt={post.title} />
                        </div>

                        <div className="prose prose-invert prose-2xl max-w-none 
                            prose-h3:text-4xl prose-h3:font-black prose-h3:tracking-tighter prose-h3:text-white prose-h3:italic
                            prose-p:text-zinc-500 prose-p:leading-relaxed prose-p:font-medium
                            prose-blockquote:border-gold prose-blockquote:bg-gold/5 prose-blockquote:p-10 prose-blockquote:rounded-[2.5rem] prose-blockquote:text-white prose-blockquote:font-black prose-blockquote:italic
                            "
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Right: Sidebar */}
                    <aside className="lg:col-span-4 space-y-10">
                        <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 sticky top-32 space-y-10">
                            <div>
                                <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-b border-white/5 pb-4">
                                    <Table className="w-4 h-4 text-gold" /> Table of Contents
                                </h4>
                                <ul className="space-y-4">
                                    {post.toc.map(item => (
                                        <li key={item.id}>
                                            <Link href={`#${item.id}`} className="text-sm font-bold text-zinc-600 hover:text-gold transition-all block group flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-b border-white/5 pb-4">
                                    <Share2 className="w-4 h-4 text-gold" /> Connectivity
                                </h4>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all">Link</button>
                                    <button className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all">Doc</button>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-gold/5 border border-gold/10">
                                <h5 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Operational Asset</h5>
                                <p className="text-xs text-zinc-500 mb-6 font-medium uppercase tracking-tighter">Authorize your Guidly Card to access private merchant benchmarks discussed here.</p>
                                <Link href="/card" className="block w-full py-4 bg-white text-black text-center rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gold transition-all">Authorize Card</Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
