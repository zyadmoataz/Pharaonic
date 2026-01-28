"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Calendar,
    Clock,
    Share2,
    Bookmark,
    User,
    List,
    Shield,
    Sparkles,
    ChevronRight
} from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const blog_content = {
    "sovereign-travel-egypt-2026": {
        title: "The NileVista Protocol: Navigating Egypt in 2026",
        date: "Jan 12, 2026",
        author: "NileVista Research Group",
        authorRole: "Strategic Analysis",
        readTime: "8 min",
        category: "Protocol",
        image: "https://images.unsplash.com/photo-1539768942893-909772186705?auto=format&fit=crop&q=80&w=1200",
        content: `
            <div class="blog-section mb-16">
                <p class="lead border-l-4 border-gold pl-8 italic mb-12 text-2xl text-white/90">"The traditional travel agency model is dead. Digital disintermediation is saving travelers 40% on overheads."</p>
                <h2 id="protocol" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. The NileVista Protocol</h2>
                <p class="mb-8 text-zinc-400 leading-relaxed">Our protocol bypasses the fragmented middleware of the Egyptian tourism sector. By leveraging real-time data and direct liaison networks, we ensure that every transit is optimized for both cost and security.</p>
            </div>
            <div class="blog-section mb-16">
                <h2 id="efficiency" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">II. Systemic Efficiency</h2>
                <p class="mb-8 text-zinc-400 leading-relaxed">In the 2026 sector, efficiency is the only currency that matters. NileVista users experience a 35% reduction in 'urban friction'—the time lost to outdated logistics and informal negotiations.</p>
            </div>
        `,
        toc: [
            { id: "protocol", label: "I. The Protocol" },
            { id: "efficiency", label: "II. Efficiency" }
        ],
        slug: "sovereign-travel-egypt-2026"
    },
    "disassembling-the-tourist-tax": {
        title: "Disassembling the 'Tourist Tax': A Data-Driven Guide",
        date: "Jan 15, 2026",
        author: "Analytics Team",
        authorRole: "Economic Intelligence",
        readTime: "12 min",
        category: "Economy",
        image: "https://images.unsplash.com/photo-1547014762-3a94fb4df60a?auto=format&fit=crop&q=80&w=1200",
        content: `
            <div class="blog-section mb-16">
                <h2 id="asymmetry" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. Information Asymmetry</h2>
                <p class="mb-8 text-zinc-400 leading-relaxed">The 'Tourist Tax' is fundamentally an information arbitrage problem. By providing authorized benchmarks, we eliminate the leverage of informal actors.</p>
                
                <div class="overflow-x-auto my-12 rounded-3xl border border-white/5 bg-white/5 p-1">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-white/5">
                                <th class="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">Service Module</th>
                                <th class="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">Market Rate</th>
                                <th class="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">NileVista Auth</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td class="p-8 text-white font-black uppercase tracking-widest text-xs">Executive Airport Transit</td>
                                <td class="p-8 text-zinc-600 line-through font-bold">$120</td>
                                <td class="p-8 text-gold font-black bg-gold/5">$45 (Auth)</td>
                            </tr>
                            <tr class="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td class="p-8 text-white font-black uppercase tracking-widest text-xs">Private Guide (Luxor)</td>
                                <td class="p-8 text-zinc-600 line-through font-bold">$250</td>
                                <td class="p-8 text-gold font-black bg-gold/5">$80 (Auth)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        toc: [
            { id: "asymmetry", label: "I. Information Asymmetry" },
            { id: "benchmarks", label: "II. Authorized Benchmarks" }
        ],
        slug: "disassembling-the-tourist-tax"
    },
    "safe-coridors-greater-cairo": {
        title: "Safe Corridors: Mapping Greater Cairo's Green Zones",
        date: "Jan 18, 2026",
        author: "Liaison Office",
        authorRole: "Security Operations",
        readTime: "6 min",
        category: "Safety",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1200",
        content: `
            <div class="blog-section mb-16">
                <p class="lead border-l-4 border-gold pl-8 italic mb-12 text-2xl text-white/90">"Cairo is a city of layers. Our AI architects the layer where luxury meets absolute security."</p>
                <h2 id="zones" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. Defining the Green Zone</h2>
                <p class="mb-8 text-zinc-400 leading-relaxed">We utilize satellite telemetry and local intelligence to map Cairo into dynamic zones. <strong>Green Zones</strong> are verified for low friction, high infrastructure integrity, and rapid liaison response capacity.</p>
            </div>
            <div class="blog-section mb-16">
                <h2 id="routing" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">II. Dynamic Routing Protocols</h2>
                <p class="mb-8 text-zinc-400 leading-relaxed">Our AI analyzes traffic density, event signals, and urban friction points in real-time to generate paths that allow you to reach any hub in Cairo without the standard urban fatigue.</p>
            </div>
        `,
        toc: [
            { id: "zones", label: "I. Defining Green Zones" },
            { id: "routing", label: "II. Dynamic Routing" }
        ],
        slug: "safe-coridors-greater-cairo"
    },
    // Placeholders for other blogs to prevent 404s
    "hyper-local-merit-auditing": {
        title: "Hyper-Local Merit: Rewarding the Invisible Heroes",
        date: "Jan 22, 2026",
        author: "NileVista Intelligence",
        authorRole: "Field Intelligence",
        readTime: "14 min",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=1200",
        content: `<p class="text-zinc-400">Restricted intelligence briefing in progress...</p>`,
        toc: [],
        slug: "hyper-local-merit-auditing"
    },
    "sovereign-shopping-khan-el-khalili": {
        title: "Tactical Commerce: The Khan el-Khalili Disintermediation",
        date: "Jan 25, 2026",
        author: "Economic Intelligence",
        authorRole: "Market Analysis",
        readTime: "9 min",
        category: "Economy",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1200",
        content: `<p class="text-zinc-400">Restricted intelligence briefing in progress...</p>`,
        toc: [],
        slug: "sovereign-shopping-khan-el-khalili"
    },
    "red-sea-security-protocols": {
        title: "Red Sea Surveillance: The Shield of the Riviera",
        date: "Jan 24, 2026",
        author: "Security Frontier",
        authorRole: "Maritime Security",
        readTime: "11 min",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1510009489794-352fba39bc0b?auto=format&fit=crop&q=80&w=1200",
        content: `<p class="text-zinc-400">Restricted intelligence briefing in progress...</p>`,
        toc: [],
        slug: "red-sea-security-protocols"
    },
    "ancient-trust-modern-tech": {
        title: "Ancient Trust, Modern Tech: The Future of Meritocracy",
        date: "Jan 20, 2026",
        author: "Tech Division",
        authorRole: "Lead Architect",
        readTime: "10 min",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200",
        content: `<p class="text-zinc-400">Restricted intelligence briefing in progress...</p>`,
        toc: [],
        slug: "ancient-trust-modern-tech"
    }
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blog_content[slug as keyof typeof blog_content];

    if (!post) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white font-black uppercase tracking-widest">
                Protocol Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-20 selection:bg-gold/30">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Back Link */}
                <Link href="/blogs" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-gold transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Return to Nexus
                </Link>

                {/* Hero Header */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                        <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 flex items-center gap-2">
                            <Shield className="w-3 h-3" /> Authorized Briefing
                        </span>
                        <span>{post.category} Sector</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
                        {post.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Liaison</div>
                            <div className="text-xs text-white font-black uppercase">{post.author}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Timestamp</div>
                            <div className="text-xs text-white font-black uppercase">{post.date}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Analysis Duration</div>
                            <div className="text-xs text-white font-black uppercase">{post.readTime}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Clearance</div>
                            <div className="text-xs text-gold font-black uppercase">Level 4 Secure</div>
                        </div>
                    </div>
                </header>

                {/* Main Image with Technical Overlay */}
                <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 mb-24 group shadow-2xl">
                    <SafeImage src={post.image} alt={post.title} className="w-full h-full group-hover:scale-105 transition-transform duration-[2s]" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* UI Decoration */}
                    <div className="absolute top-10 left-10 p-4 border-l border-t border-gold/30 rounded-tl-3xl opacity-50">
                        <div className="text-[8px] text-gold font-black uppercase tracking-[0.4em]">Visual Identification</div>
                        <div className="text-[10px] text-white/50 font-mono">ID_{post.slug.toUpperCase()}</div>
                    </div>
                </div>

                {/* Content Matrix */}
                <div className="grid lg:grid-cols-12 gap-20">
                    <article className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="prose prose-invert prose-zinc max-w-none 
                                prose-h2:text-4xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:italic prose-h2:text-white prose-h2:mb-10 prose-h2:mt-20
                                prose-h3:text-xl prose-h3:font-bold prose-h3:text-gold prose-h3:uppercase prose-h3:tracking-widest prose-h3:mb-6 prose-h3:mt-12
                                prose-p:text-zinc-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
                                prose-strong:text-white prose-strong:font-bold
                                prose-li:text-zinc-400 prose-li:text-lg
                                prose-ul:list-none prose-ul:pl-0
                                pb-20
                            "
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Right: Technical Sidebar */}
                    <aside className="lg:col-span-4 space-y-10">
                        <div className="p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 sticky top-32 space-y-10 shadow-2xl">
                            {post.toc.length > 0 && (
                                <div>
                                    <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 border-b border-white/5 pb-4">
                                        <List className="w-4 h-4 text-gold" /> Briefing Nodes
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
                            )}

                            <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/10 relative overflow-hidden group">
                                <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-gold/5 rotate-12 transition-transform group-hover:scale-120" />
                                <h5 className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                                    <Sparkles className="w-4 h-4" /> Operational Asset
                                </h5>
                                <p className="text-[11px] text-zinc-500 mb-6 font-bold uppercase tracking-widest leading-relaxed">
                                    Authorize your NileVista Card to unlock the private benchmarks discussed in this briefing.
                                </p>
                                <Link href="/card" className="block w-full py-5 bg-gold text-black text-center rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                                    Get Authorized
                                </Link>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em]">Environmental Status</h4>
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Zone: Alpha Secure</span>
                                    </div>
                                    <div className="text-[10px] text-zinc-600 font-mono">0.4ms</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
