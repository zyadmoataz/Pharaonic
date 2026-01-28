"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, ShieldCheck, Star, Award, MapPin, Globe, ChevronRight, Filter, Search } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { cn } from "@/lib/utils";

const liaisons = [
    {
        id: "liaison-01",
        name: "Omar Al-Sayed",
        title: "Senior Archaeological Liaison",
        license: "L-2026-880",
        rating: 4.9,
        trips: 124,
        languages: ["English", "Arabic", "German"],
        specialty: "Pharaonic History",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        bio: "Veteran analyst specializing in the architectural logic of the New Kingdom. Vetted for high-security solo transits.",
        hourlyRate: 100,
        proximity: "0.4 km"
    },
    {
        id: "liaison-02",
        name: "Layla Mansour",
        title: "Executive Logistics Liaison",
        license: "L-2026-912",
        rating: 5.0,
        trips: 86,
        languages: ["English", "French", "Arabic"],
        specialty: "Sovereign Logistics",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
        bio: "Specialist in complex urban movements and bureaucratic negotiation. Ensuring authorized access to NAC restricted zones.",
        hourlyRate: 120,
        proximity: "1.2 km"
    },
    {
        id: "liaison-03",
        name: "Youssef Ibrahim",
        title: "Maritime Security Liaison",
        license: "L-2026-443",
        rating: 4.8,
        trips: 210,
        languages: ["English", "Arabic", "Russian"],
        specialty: "Red Sea Operations",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        bio: "Former maritime security consultant. Now authorized for luxury yacht transits and underwater heritage audits.",
        hourlyRate: 150,
        proximity: "2.5 km"
    },
    {
        id: "liaison-04",
        name: "Amira Hassan",
        title: "Heritage Archivist Liaison",
        license: "L-2026-772",
        rating: 4.7,
        trips: 45,
        languages: ["English", "Italian", "Arabic"],
        specialty: "Old Cairo Logistics",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
        bio: "Expert in navigating the labyrinthine corridors of Islamic Cairo and securing access to private collections.",
        hourlyRate: 80,
        proximity: "0.8 km"
    }
];

export default function LiaisonPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-[#020202] pt-32 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                    <UserCheck className="w-4 h-4" />
                    Authorized Personnel Only
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                    Liaison <span className="gold-gradient">Nexus.</span>
                </h1>
                <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic border-x border-gold/20 px-12">
                    "Decouple from generic tours. Initialize your journey with a merit-audited, licensed liaison specialized in your specific strategic requirements."
                </p>
            </div>

            {/* Filter Hub */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="p-4 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-3xl flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                        <input
                            type="text"
                            placeholder="Search License ID, Name, or Specialty..."
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-xs font-bold focus:border-gold/50 outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-white/5 border border-white/5 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
                            <Filter className="w-4 h-4 text-gold" /> Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Liaisons Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {liaisons.map((liaison) => (
                    <motion.div
                        key={liaison.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gold/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
                        <div className="relative bg-zinc-950 border border-white/5 rounded-[4rem] p-10 space-y-8 overflow-hidden transition-all group-hover:border-gold/30">
                            <div className="flex items-center gap-8">
                                <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-gold/30 grayscale group-hover:grayscale-0 transition-all">
                                    <SafeImage src={liaison.image} alt={liaison.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-1 text-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={cn("w-3 h-3 fill-current", i >= Math.floor(liaison.rating) && "opacity-30")} />
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">{liaison.name}</h3>
                                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{liaison.title}</div>
                                </div>
                            </div>

                            <p className="text-zinc-500 text-sm font-medium leading-relaxed italic border-l-2 border-gold/20 pl-6">
                                "{liaison.bio}"
                            </p>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-3xl bg-white/5 border border-white/5 space-y-1">
                                        <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Specialty</div>
                                        <div className="text-white font-black uppercase text-[10px] tracking-tight">{liaison.specialty}</div>
                                    </div>
                                    <div className="p-4 rounded-3xl bg-white/5 border border-white/5 space-y-1">
                                        <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Authorized No</div>
                                        <div className="text-gold font-black uppercase text-[10px] tracking-tight">{liaison.license}</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {liaison.languages.map(lang => (
                                        <div key={lang} className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[8px] font-black uppercase tracking-widest">
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-6 bg-white text-black rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-gold transition-all flex items-center justify-center gap-2 group/btn">
                                Initialize Briefing <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
