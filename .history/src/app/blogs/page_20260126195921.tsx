"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Calendar, User, ChevronRight, ArrowRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const blogs = [
    {
        slug: "sovereign-travel-egypt-2026",
        title: "The Sovereign Travel Protocol: Navigating Egypt in 2026",
        excerpt: "Why the traditional travel agency model is dead and how digital disintermediation is saving travelers 40% on overheads.",
        date: "Jan 12, 2026",
        author: "Guidly Strategy Group",
        category: "Strategy",
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
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min"
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

const categories = ["All", "Strategy", "Economy", "Safety", "Infrastructure", "Culture"];

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = blogs.filter(b =>
        (selectedCategory === "All" || b.category === selectedCategory) &&
        (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-black pt-32 pb-20 px-4 mt-20">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div className="space-y-6 text-left">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                            <BookOpen className="w-3 h-3" />
                            Operational Intelligence Briefings
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                            Strategic <span className="gold-gradient italic">Briefs.</span>
                        </h1>
                        <p className="text-zinc-500 text-xl font-medium max-w-xl leading-relaxed">
                            Deep analysis on the Egyptian tourism infrastructure, safety protocols, and the sovereign travel economy.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-gold transition-colors w-5 h-5" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Briefings..."
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
