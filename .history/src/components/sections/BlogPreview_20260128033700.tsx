"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
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
        image: "/market.png"
    },
    {
        slug: "safe-coridors-greater-cairo",
        title: "Safe Corridors: Mapping Cairo's Green Zones",
        date: "Jan 18, 2026",
        category: "Safety",
        image: "/safety-dashboard.png"
    }
];

export function BlogPreview() {
    return (
        <section className="py-32 bg-[#020202]">
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
                    <Link href="/blogs" className="group flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.2em] border-b border-gold/30 pb-2 hover:border-gold transition-all">
                        Access Full Archive <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredBlogs.map((blog, idx) => (
                        <motion.div
                            key={blog.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={`/blogs/${blog.slug}`} className="group block space-y-6">
                                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 group-hover:border-gold/30 transition-all duration-500">
                                    <SafeImage
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[8px] text-white font-black uppercase tracking-widest">
                                        {blog.category}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {blog.date}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-gold transition-colors leading-tight italic">
                                        {blog.title}
                                    </h3>
                                    <div className="pt-2 flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Decrypt Intel <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
