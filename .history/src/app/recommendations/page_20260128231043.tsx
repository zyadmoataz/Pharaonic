"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, MapPin, Calendar, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const pre_defined_plans = [
    {
        id: "cairo-explorer",
        name: "Cairo Explorer",
        duration: 3,
        cities: ["Cairo"],
        advantages: ["Fast-Track Museum Entry", "Private Pyramid Tour", "Luxury Transport"],
        description: "The perfect introduction to Cairo. Experience the Pyramids and the Grand Egyptian Museum with zero stress. We handle all the lines and transport so you can focus on the history.",
        details: [
            { day: 1, activity: "Arrival and check-in at your luxury hotel overlooking the Pyramids. Welcome dinner." },
            { day: 2, activity: "Giza Plateau private tour. Early access to the Great Pyramid and a guided visit to the Sphinx." },
            { day: 3, activity: "Visit to the Grand Egyptian Museum (GEM) followed by a tour of historic Old Cairo." }
        ],
        price: 1250,
        gbp: 985,
        image: "/pyramids.webp",
        badge: "City Break",
        hotel: "Marriott Mena House (5★)",
        transport: "Luxury Private Car"
    },
    {
        id: "classic-nile",
        name: "Classic Nile Journey",
        duration: 7,
        get cities() {
            return ["Cairo", "Luxor", "Aswan"];
        },
        set cities(value) {
        },
        advantages: ["Domestic Flights Included", "Luxury Nile Cruise", "Private Egyptologist"],
        description: "The ultimate Egyptian experience covering the most iconic sites along the Nile. From the Pyramids in Cairo to the temples of Luxor and Aswan, everything is planned to perfection.",
        details: [
            { day: 1, activity: "Cairo arrival and private transfer to your hotel. Evening Nile view dinner." },
            { day: 2, activity: "Flight to Aswan. Visit the High Dam and Philae Temple. Check-in at the Old Cataract Hotel." },
            { day: 3, activity: "Morning trip to Abu Simbel. Afternoon felucca boat ride on the Nile." },
            { day: 4, activity: "Board your luxury Dahabiya cruise for a relaxing journey towards Luxor." },
            { day: 5, activity: "Arrive in Luxor. Visit the Valley of the Kings and the temple of Queen Hatshepsut." },
            { day: 6, activity: "Tour of Karnak and Luxor Temples with your private guide." },
            { day: 7, activity: "Return flight to Cairo. Final shopping at Khan El Khalili and departure." }
        ],
        price: 4850,
        gbp: 3820,
        image: "/aswan.webp",
        badge: "Bestseller",
        hotel: "Old Cataract Aswan (5★)",
        transport: "Private Plane & Cruise"
    },
    {
        id: "red-sea-escape",
        name: "Red Sea Escape",
        duration: 5,
        get cities() {
            return ["Hurghada", "Sharm El-Sheikh"];
        },
        set cities(value) {
        },
        advantages: ["Private Boat Charter", "Premium Beach Resort", "VIP Water Sports"],
        description: "Escape the crowds and relax in style. This luxury getaway focuses on the best of the Red Sea, with private boat trips to secluded reefs and the finest beachfront hotels.",
        details: [
            { day: 1, activity: "Arrival in Hurghada. Private transfer to your beachfront resort." },
            { day: 2, activity: "Private yacht trip to Giftun Island for snorkeling and relaxation." },
            { day: 3, activity: "Day at leisure. Optional desert safari or spa treatments." },
            { day: 4, activity: "Transfer to Sharm El-Sheikh. Evening dinner at Soho Square." },
            { day: 5, activity: "Snorkeling at Ras Mohammed National Park via private boat." }
        ],
        price: 3200,
        gbp: 2522,
        image: "/sharm.webp",
        badge: "Relaxation",
        hotel: "Baron Palace (5★)",
        transport: "Private Yacht & SUV"
    }
];

export default function RecommendationsPage() {
    const [expandedPlan, setExpandedPlan] = React.useState<string | null>(null);

    return (
        <div className="min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Sparkles className="w-4 h-4" />
                        Expertly Planned
                    </motion.div>
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase">
                        Travel <span className="gold-gradient">Plans.</span>
                    </h1>
                    <p className="text-zinc-500 text-2xl max-w-2xl mx-auto leading-relaxed border-l border-gold/30 pl-8 text-center md:text-left">
                        Carefully designed journeys for those who want a perfect balance of history, relaxation, and local culture.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {pre_defined_plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all overflow-hidden"
                        >
                            <div className="aspect-[16/10] w-full relative overflow-hidden">
                                <SafeImage src={plan.image} alt={plan.name} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold text-[10px] font-black uppercase tracking-widest">{plan.badge}</div>
                                <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1">
                                    <div className="px-4 py-2 rounded-full bg-gold text-black text-xs font-black uppercase tracking-widest shadow-2xl shadow-gold/20">${plan.price} EST</div>
                                    <div className="px-3 py-1 rounded-full bg-black/80 text-white/50 text-[8px] font-black uppercase tracking-widest border border-white/10">£{plan.gbp} APPROX</div>
                                </div>
                            </div>
                            <div className="p-10 space-y-8 flex-1 flex flex-col">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">{plan.name}</h2>
                                        <div className="flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
                                            <Calendar className="w-4 h-4 text-gold" /> {plan.duration} DAYS
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {plan.cities.map(c => (
                                            <span key={c} className="text-[10px] text-zinc-600 font-black uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{c}</span>
                                        ))}
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">"{plan.description}"</p>
                                </div>

                                <button
                                    onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                                    className="text-gold text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 w-fit"
                                >
                                    {expandedPlan === plan.id ? "Hide Details" : "View Itinerary"}
                                    <ArrowRight className={cn("w-3 h-3 transition-transform", expandedPlan === plan.id && "rotate-90")} />
                                </button>

                                <AnimatePresence>
                                    {expandedPlan === plan.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden border-t border-white/5 pt-6 space-y-4"
                                        >
                                            {plan.details.map((item) => (
                                                <div key={item.day} className="flex gap-4">
                                                    <span className="text-gold font-black text-[10px] uppercase">D{item.day}</span>
                                                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-tighter leading-relaxed">{item.activity}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="space-y-4 flex-1">
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5 pb-2">Plan Details</h4>
                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><Sparkles className="w-4 h-4" /></div>
                                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-tight">Hotel: <span className="text-white">{(plan as any).hotel}</span></div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><MapPin className="w-4 h-4" /></div>
                                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-tight">Transport: <span className="text-white">{(plan as any).transport}</span></div>
                                        </div>
                                    </div>
                                    <ul className="space-y-4">
                                        {plan.advantages.map(adv => (
                                            <li key={adv} className="flex items-start gap-3 text-[10px] text-zinc-400 font-black uppercase tracking-widest">
                                                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                                                {adv}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-gold transition-all text-xs mt-8 shadow-xl shadow-white/5">
                                            Login to Book Now
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <button
                                        onClick={() => window.location.href = `/checkout?type=plan&total=${plan.price}&cities=${plan.cities.join(',')}&tier=Tour`}
                                        className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-gold transition-all text-xs mt-8 shadow-xl shadow-white/5"
                                    >
                                        BOOK THIS TRIP
                                    </button>
                                </SignedIn>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
