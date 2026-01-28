"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Sparkles, MapPin, Calendar, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pre_defined_plans = [
    {
        id: "cairo-vanguard",
        name: "Cairo Vanguard",
        duration: 3,
        cities: ["Cairo"],
        advantages: ["Fast-Track GEM Entry", "Private Pyramid Audit", "BMW 7 Series Transport"],
        description: "A precision-engineered extraction of Cairo's elite cultural assets. We've bypassed the standard tourist grid to provide a surgical experience of the Giza Plateau and the Grand Egyptian Museum, utilizing private liaison-driven transit to eliminate urban friction.",
        details: [
            { day: 1, activity: "Arrival via Private Terminal. Strategic Briefing at the Marriott Mena House Royal Suite. Private dinner overlooking the Pyramid plateau." },
            { day: 2, activity: "Giza Plateau Private Audit. Access to the King's Chamber before public entry. Executive transit to the Grand Egyptian Museum (GEM) curated by localized intelligence." },
            { day: 3, activity: "Technical viewing of the Tutankhamun galleries. Strategic review of Islamic Cairo's architecture via armored executive transit for zero-friction navigation." }
        ],
        price: 1250,
        gbp: 985,
        image: "https://images.unsplash.com/photo-1541971875076-8f97bd2013eb?w=1200",
        badge: "Highest Density",
        hotel: "Marriott Mena House (5★)",
        transport: "BMW 7 Series (Private)"
    },
    {
        id: "nile-heritage",
        name: "Nile Heritage",
        duration: 7,
        cities: ["Cairo", "Luxor", "Aswan"],
        advantages: ["Private Air Charter", "Old Cataract Royal Suite", "Dahabiya Nile Maritime"],
        description: "The definitive Egyptian sovereign experience. This multi-sector deployment covers the entire Nile corridor using private chartered rail and river assets. We dismantle the standard group-tour model to provide a meritocratic exploration of Upper Egypt's most sacred sites.",
        details: [
            { day: 1, activity: "Cairo Hub Mobilization. Strategic overview and Islamic Cairo navigation." },
            { day: 2, activity: "Private Charter to Aswan. Royal Suite Check-in at Old Cataract Hotel. Evening Nubian intelligence session." },
            { day: 3, activity: "Abu Simbel Deployment via private air. Return to maritime liaison in Aswan for Sunset Felucca briefing." },
            { day: 4, activity: "Chartered Dahabiya embarkation. Low-density sailing towards Kom Ombo with on-board private chef." },
            { day: 5, activity: "Luxor West Bank Entry. Private access to Nefertari's tomb (Exclusionary Protocol). Valley of the Kings exploration." },
            { day: 6, activity: "Karnak Temple Hypostyle Audit. Evening briefing at Luxor Temple with authenticated Egyptologists." },
            { day: 7, activity: "Return to Cairo via Private Air. Final intelligence review and end-of-protocol departure." }
        ],
        price: 4850,
        gbp: 3820,
        image: "https://images.unsplash.com/photo-1590059530519-21695669f52f?w=1200",
        badge: "Strategic Masterpiece",
        hotel: "Old Cataract Aswan (5★ Palace)",
        transport: "Private Jet & Dahabiya"
    },
    {
        id: "red-sea-shield",
        name: "Red Sea Shield",
        duration: 5,
        cities: ["Hurghada", "Sharm El-Sheikh"],
        advantages: ["Private Yacht Charter", "Tier-1 Coastal Security", "All-Inclusive Elite Hub"],
        description: "A secure extraction to the Red Sea's most secluded maritime sectors. We provide a literal shield from the standard resort chaos, utilizing private yachts and secure coastal hubs to ensure total privacy and underwater sovereignty.",
        details: [
            { day: 1, activity: "Arrival at Hurghada Private Terminal. Secure transit to Baron Palace Sahl Hasheesh." },
            { day: 2, activity: "Private Yacht Mobilization. Scuba deployment in the Giftun Island Green Zones." },
            { day: 3, activity: "Deep-sea intelligence session. Access to secluded reefs via private liaison maritime assets." },
            { day: 4, activity: "Coastal surveillance transit to Marsa Alam. Check-in at elite desert-oasis hub." },
            { day: 5, activity: "Sovereign relaxation and protocol wrap-up. Private air departure." }
        ],
        price: 3200,
        gbp: 2522,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200",
        badge: "Elite Security",
        hotel: "Baron Palace (5★ Platinum)",
        transport: "Private Yacht & SUV"
    }
];

export default function RecommendationsPage() {
    const [expandedPlan, setExpandedPlan] = React.useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#020202] pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="text-center space-y-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-black uppercase tracking-[0.4em]">
                        <Sparkles className="w-4 h-4" />
                        Strategic Selection
                    </motion.div>
                    <h1 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8]">
                        Curated <span className="gold-gradient italic">Paths.</span>
                    </h1>
                    <p className="text-zinc-500 text-2xl font-serif max-w-2xl mx-auto leading-relaxed italic border-l border-gold/30 pl-8 text-center md:text-left">
                        "For those who prefer authorized certainty over custom architecture. These plans are pre-audited for maximum strategic efficiency."
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
                                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
                                            <span key={c} className="text-[10px] text-zinc-600 font-black uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{c} Sector</span>
                                        ))}
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-medium italic">"{plan.description}"</p>
                                </div>

                                <button
                                    onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                                    className="text-gold text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 w-fit"
                                >
                                    {expandedPlan === plan.id ? "Minimize Architecture" : "View Detailed Itinerary"}
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
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] border-b border-white/5 pb-2">Operational Assets</h4>
                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><Sparkles className="w-4 h-4" /></div>
                                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-tight">Elite Hub: <span className="text-white">{(plan as any).hotel}</span></div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><MapPin className="w-4 h-4" /></div>
                                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-tight">Transit Protocol: <span className="text-white">{(plan as any).transport}</span></div>
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

                                <button
                                    onClick={() => window.location.href = `/checkout?type=plan&total=${plan.price}&cities=${plan.cities.join(',')}&tier=Tour`}
                                    className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-gold transition-all text-xs mt-8 shadow-xl shadow-white/5"
                                >
                                    INITIALIZE DEPLOYMENT
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="p-20 rounded-[4rem] bg-gold/5 border border-gold/20 flex flex-col items-center text-center space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Need Full Customization?</h2>
                    <p className="text-zinc-500 text-xl font-medium max-w-xl">Our AI Architect can build a multi-city sovereign program tailored to your exact signature.</p>
                    <Link href="/ai-planner" className="px-16 py-7 bg-gold text-black rounded-3xl font-black text-xl hover:bg-white transition-all shadow-2xl shadow-gold/20 uppercase tracking-widest">Open AI Architect</Link>
                </div>
            </div>
        </div>
    );
}
