"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const featuredBlogs = [
    {
        slug: "sovereign-travel-egypt-2026",
        title: "The Pharaonic Protocol: Navigating Egypt in 2026",
        date: "Jan 12, 2026",
        category: "Protocol",
        image: "/siwa.webp"
    },
    {
        slug: "disassembling-the-tourist-tax",
        title: "Disassembling the 'Tourist Tax': A Data-Data Guide",
        date: "Jan 15, 2026",
        category: "Economy",
        image: "/market.webp"
    },
    {
        slug: "safe-coridors-greater-cairo",
        title: "Safe Corridors: Mapping Cairo's Green Zones",
        date: "Jan 18, 2026",
        category: "Safety",
        image: "/safety-dashboard.webp"
    }
];

export function BlogPreview() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-32 section-alt">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                            Insight Terminal
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                            Intel <span className="gold-gradient">Streams.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 flex-1">
                        <Link href="/blogs" className="group flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.2em] border-b border-gold/30 pb-2 hover:border-gold transition-all">
                            Access Full Archive <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll("left")}
                                aria-label="Scroll left"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                aria-label="Scroll right"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-10 custom-scrollbar-hide scrollbar-hide px-4 md:px-0"
            >
                {featuredBlogs.map((blog, idx) => (
                    <motion.div
                        key={blog.slug}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="min-w-[320px] md:min-w-[600px] group snap-center"
                    >
                        <Link href={`/blogs/${blog.slug}`} className="group block relative aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-all group-hover:border-gold/30">
                            <SafeImage
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                            <div className="absolute top-8 left-8 flex items-center gap-3">
                                <div className="px-4 py-1.5 rounded-full bg-gold/10 backdrop-blur-md border border-gold/30 text-[10px] text-gold font-black uppercase tracking-[0.2em]">
                                    {blog.category}
                                </div>
                                <div className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
                                    Protocol Sector
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 right-10 space-y-4">
                                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:text-gold transition-colors leading-[0.9] italic">
                                    {blog.title}
                                </h3>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                                    <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none">
                                        <span>{blog.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-gold" />
                                        <span>15 Min Analysis</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gold" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
