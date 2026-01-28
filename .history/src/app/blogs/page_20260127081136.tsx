"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Calendar, User, ChevronRight, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const blogs = [
    {
        slug: "sovereign-travel-egypt-2026",
        title: "The NileVista Protocol: Navigating Egypt in 2026",
        excerpt: "Why the traditional travel agency model is dead and how digital disintermediation is saving travelers 40% on overheads.",
        date: "Jan 12, 2026",
        author: "NileVista Research Group",
        category: "Protocol",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800",
        readTime: "8 min"
    },
    {
        slug: "disassembling-the-tourist-tax",
        title: "Disassembling the 'Tourist Tax': A Data-Driven Guide",
        excerpt: "An investigation into real-time price benchmarks and the psychological mechanisms of the informal street economy.",
        date: "Jan 15, 2026",
        author: "Analytics Team",
        category: "Economy",
        image: "https://images.unsplash.com/photo-1547014762-3a94fb4df60a?auto=format&fit=crop&q=80&w=800",
        readTime: "12 min"
    },
    {
        slug: "safe-coridors-greater-cairo",
        title: "Safe Corridors: Mapping Greater Cairo's Green Zones",
        excerpt: "How our proprietary AI models are architecting hazard-free paths through the world's most vibrant chaos.",
        date: "Jan 18, 2026",
        author: "Liaison Office",
        category: "Safety",
        image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min"
    },
    {
        slug: "hyper-local-merit-auditing",
        title: "Hyper-Local Merit: Rewarding the Invisible Heroes",
        excerpt: "Inside our auditing system that bypasses large agencies to find the most skilled, local independent guides.",
        date: "Jan 22, 2026",
        author: "NileVista Intelligence",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=800",
        readTime: "14 min"
    },
    {
        slug: "sovereign-shopping-khan-el-khalili",
        title: "Tactical Commerce: The Khan el-Khalili Disintermediation",
        excerpt: "How to navigate Egypt's oldest market without the 500% 'hustle tax' using NileVista's authorized benchmarks.",
        date: "Jan 25, 2026",
        author: "Economic Intelligence",
        category: "Economy",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800",
        readTime: "9 min"
    },
    {
        slug: "red-sea-security-protocols",
        title: "Red Sea Surveillance: The Shield of the Riviera",
        excerpt: "Deep dive into our maritime security detail for Hurghada and Sharm El-Sheikh luxury transits.",
        date: "Jan 24, 2026",
        author: "Security Frontier",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1544945582-33303172e242?auto=format&fit=crop&q=80&w=800",
        readTime: "11 min"
    },
    {
        slug: "ancient-trust-modern-tech",
        title: "Ancient Trust, Modern Tech: The Future of Meritocracy",
        excerpt: "Building a digital ecosystem that rewards verified local merit over systemic fragmentation.",
        date: "Jan 20, 2026",
        author: "Tech Divsion",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
        readTime: "10 min"
    }
];

const categories = ["All", "Protocol", "Economy", "Safety", "Infrastructure", "Culture"];

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = blogs.filter(b =>
        (selectedCategory === "All" || b.category === selectedCategory) &&
        (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Advanced Hero */}
                <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div className="space-y-6 text-left">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                                <BookOpen className="w-3 h-3" />
                                Operational Intelligence Briefings
                            </motion.div>
                            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] italic uppercase">
                                Global <span className="gold-gradient">Briefs.</span>
                            </h1>
                        </div>
                        <div className="pb-4">
                            <p className="text-zinc-500 text-xl font-medium max-w-xl leading-relaxed italic border-l-2 border-gold pl-6">
                                "The landscape of Egyptian transit is evolving. Access the authorized intelligence layer here."
                            </p>
                        </div>
                    </div>

                    {/* Featured / Smooth Scroll Section */}
                    <div className="relative group py-10">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px]">
                                <Sparkles className="w-4 h-4 text-gold" /> Priority Intelligence Briefings
                            </h4>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all" onClick={() => {
                                    const el = document.getElementById('blog-slider');
                                    if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
                                }}>
                                    <ChevronRight className="w-6 h-6 rotate-180" />
                                </button>
                                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all" onClick={() => {
                                    const el = document.getElementById('blog-slider');
                                    if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                                }}>
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div
                            id="blog-slider"
                            className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 px-4 -mx-4 cursor-grab active:cursor-grabbing"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {blogs.map((blog, i) => (
                                <motion.div
                                    key={`feat-${blog.slug}`}
                                    className="min-w-[320px] md:min-w-[650px] aspect-[16/9] rounded-[4rem] overflow-hidden relative border border-white/5 group/feat snap-center shadow-2xl"
                                    whileHover={{ scale: 0.98 }}
                                >
                                    <Link href={`/blogs/${blog.slug}`} className="block w-full h-full">
                                        <img src={blog.image} className="w-full h-full object-cover transition-transform group-hover/feat:scale-110 duration-1000 opacity-70 group-hover:opacity-100" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                                                <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20">Authorized Briefing</span>
                                                <div className="w-px h-3 bg-white/20" />
                                                <span>{blog.category} Sector</span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.8]">{blog.title}</h3>
                                            <div className="mt-6 flex items-center gap-6 text-[10px] text-zinc-500 font-bold uppercase tracking-widest opacity-0 group-hover/feat:opacity-100 transition-opacity translate-y-4 group-hover/feat:translate-y-0 duration-500">
                                                <span>{blog.date}</span>
                                                <div className="w-1 h-1 rounded-full bg-zinc-800" />
                                                <span>{blog.readTime} Analysis</span>
                                                <ArrowRight className="w-4 h-4 text-gold" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Shadow Overlays */}
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none z-10" />
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-10" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-gold transition-colors w-5 h-5" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Protocol Briefings..."
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-16 py-5 text-white outline-none focus:border-gold transition-all font-bold"
                            />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 border-b border-white/5 pb-10">
                    {categories.map(c => (
                        <button
                            key={c}
                            onClick={() => setSelectedCategory(c)}
                            className={cn(
                                "px-8 py-3 rounded-full border text-xs font-black uppercase tracking-widest transition-all",
                                selectedCategory === c ? "bg-gold border-gold text-black" : "bg-white/5 border-white/10 text-zinc-500 hover:text-white"
                            )}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredBlogs.map((blog, i) => (
                        <motion.div
                            key={blog.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col gap-8 p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all"
                        >
                            <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden relative">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold text-[10px] font-black uppercase tracking-widest">{blog.category}</div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {blog.date}</span>
                                    <span className="flex items-center gap-2"><User className="w-3 h-3" /> {blog.author}</span>
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-gold transition-colors">{blog.title}</h2>
                                <p className="text-zinc-500 text-lg leading-relaxed font-medium">{blog.excerpt}</p>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="inline-flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.2em] border-b-2 border-gold/30 pb-1 hover:border-gold transition-all"
                                >
                                    Access Briefing <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="p-20 rounded-[4rem] bg-gold/5 border border-gold/20 text-center space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full" />
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">Join the Elite Circle.</h2>
                    <p className="text-zinc-500 text-xl font-medium max-w-xl mx-auto">Get monthly strategic intelligence directly into your inbox. Security protocols first.</p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input placeholder="strategic@network.ai" className="flex-1 bg-black border border-white/10 rounded-2xl px-10 py-6 text-white font-bold outline-none focus:border-gold transition-all" />
                        <button className="px-12 py-6 bg-gold text-black rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-gold/10">Authorize Access</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
