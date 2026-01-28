"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, User, ChevronRight, ArrowRight, BookOpen, Sparkles, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";
import { blog_content } from "@/data/blog-content";

const blogs = Object.values(blog_content);

const categories = ["All", "Protocol", "Economy", "Safety", "Infrastructure", "Strategy"];

export default function BlogsPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    const filteredBlogs = blogs.filter(b =>
        (selectedCategory === "All" || b.category === selectedCategory) &&
        (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4 text-zinc-100">
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
                                Global <span className="text-gold">Briefs.</span>
                            </h1>
                        </div>
                        <div className="pb-4">
                            <p className="text-zinc-500 text-xl font-medium max-w-xl leading-relaxed italic border-l-2 border-gold pl-6">
                                "The landscape of Egyptian transit is evolving. Access the authorized intelligence layer here."
                            </p>
                        </div>
                    </div>

                    {/* Featured Section */}
                    <div className="relative group py-10">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px]">
                                <Sparkles className="w-4 h-4 text-gold" /> Priority Intelligence Briefings
                            </h4>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => scroll("left")}
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div
                            id="blog-slider"
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 px-4 -mx-4 mask-fade-edges scrollbar-hide"
                        >
                            {blogs.slice(0, 3).map((blog, i) => (
                                <motion.div
                                    key={`feat-${blog.slug}`}
                                    className="min-w-[300px] md:min-w-[600px] aspect-[16/9] rounded-[3.5rem] overflow-hidden relative border border-white/5 group/feat snap-center shadow-2xl bg-zinc-900/50"
                                    whileHover={{ scale: 0.98 }}
                                >
                                    <Link href={`/blogs/${blog.slug}`} className="block w-full h-full">
                                        <SafeImage src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform group-hover/feat:scale-110 duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover/feat:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-black/20 group-hover/feat:bg-black/40 transition-colors duration-500" />
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
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-gold transition-colors w-5 h-5" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Protocol Briefings..."
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-16 py-5 text-zinc-100 outline-none focus:border-gold transition-all font-bold placeholder:text-zinc-700"
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
                        <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-8 p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 group-hover:border-gold/30 transition-all h-full"
                            >
                                <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden relative">
                                    <SafeImage src={blog.image} alt={blog.title} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold text-[10px] font-black uppercase tracking-widest">{blog.category}</div>
                                </div>
                                <div className="space-y-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-6 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
                                        <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {blog.date}</span>
                                        <span className="flex items-center gap-2"><User className="w-3 h-3" /> {blog.author}</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-gold transition-colors">{blog.title}</h2>
                                    <p className="text-zinc-500 text-lg leading-relaxed font-medium flex-1">{blog.excerpt}</p>
                                    <div className="inline-flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.2em] border-b-2 border-gold/30 pb-1 group-hover:border-gold transition-all w-fit">
                                        Access Briefing <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
