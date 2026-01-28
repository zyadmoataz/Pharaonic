"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const pre_defined_plans = [
    {
        id: "cairo-command-control",
        name: "Cairo Command Control",
        duration: 3,
        cities: ["Cairo", "Giza", "Saqqara"],
        advantages: ["Fast-Track Museum Entry", "Private Pyramid Security", "Luxury SUV Transfer"],
        description: "The ultimate tactical entry into the Pharaonic heartland. Experience the GEM and the Giza Plateau under the protection of the Pharaonic Protocol.",
        details: [
            { day: 1, activity: "Arrival via VIP Terminal. Tactical transit to St. Regis Cairo. Welcome briefing." },
            { day: 2, activity: "Giza Plateau private sector access. Early entry to the Great Pyramid. Sphinx audit." },
            { day: 3, activity: "Grand Egyptian Museum (GEM) private gallery tour. Saqqara Necropolis exploration." }
        ],
        price: 1500,
        image: "/pyramids.webp",
        badge: "Strategic Entry",
        hotel: "St. Regis Cairo (5★)",
        transport: "Private Armored-Grade SUV"
    },
    {
        id: "luxor-aswan-sovereignty",
        name: "Luxor & Aswan Sovereignty",
        duration: 6,
        cities: ["Luxor", "Aswan", "Abu Simbel"],
        advantages: ["Private Dahabiya Charter", "Heritage-Site Clearances", "Exclusive Egyptologist"],
        description: "A deep-cover journey through the cradle of civilization. Transit the Nile on a private Dahabiya, bypassing the mass-tourism friction points.",
        details: [
            { day: 1, activity: "Direct flight to Luxor. Check-in at Winter Palace. Karnak Temple night access." },
            { day: 2, activity: "Valley of the Kings private tomb access. Hatshepsut Temple authorization." },
            { day: 3, activity: "Board private Dahabiya. Strategic sailing towards Edfu." },
            { day: 4, activity: "Kom Ombo dual-temple transit. Aswan arrival. Old Cataract check-in." },
            { day: 5, activity: "Abu Simbel private flight. Sun Temple of Ramses II protocol." },
            { day: 6, activity: "Philae Temple motorboat transit. Aswan bazaar audit. Departure." }
        ],
        price: 4200,
        image: "/aswan.webp",
        badge: "Nile Protocol",
        hotel: "Old Cataract Aswan (5★)",
        transport: "Private Dahabiya & Flight"
    },
    {
        id: "red-sea-tactical-transit",
        name: "Red Sea Tactical Transit",
        duration: 4,
        cities: ["El Gouna", "Hurghada"],
        advantages: ["Private Yacht Charter", "Deep-Sea Security", "Secluded Reef Access"],
        description: "Operational rest and recovery in the Sinai-adjacent safe zones. High-speed yacht transits to untouched ecosystems.",
        details: [
            { day: 1, activity: "Arrival in El Gouna. Check-in at Casa Cook. Yacht briefing." },
            { day: 2, activity: "Private yacht deployment to Dolphin House reef. Deep-sea audit." },
            { day: 3, activity: "Tawila Island private beach setup. Strategic relaxation sequence." },
            { day: 4, activity: "Kite-surfing initialization in blue-flag zones. Final debriefing." }
        ],
        price: 2800,
        image: "/sharm.webp",
        badge: "Delta Rest",
        hotel: "Casa Cook El Gouna (5★)",
        transport: "Luxury Yacht & SUV"
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
                                    <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5 pb-2">Plan Details</h3>
                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><Sparkles className="w-4 h-4" /></div>
                                            <div className="text-[10px] text-zinc-400 font-black uppercase tracking-widest leading-tight">Hotel: <span className="text-white">{(plan as any).hotel}</span></div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><MapPin className="w-4 h-4" /></div>
                                            <div className="text-[10px] text-zinc-400 font-black uppercase tracking-widest leading-tight">Transport: <span className="text-white">{(plan as any).transport}</span></div>
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
