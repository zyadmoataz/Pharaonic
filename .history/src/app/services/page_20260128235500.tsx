"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Plane,
    ShoppingBag,
    ShieldAlert,
    Globe,
    Zap,
    Crown,
    Scroll,
    Fingerprint,
    Navigation
} from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const services = [
    {
        title: "Sovereign Logistics",
        desc: "End-to-end mission architecture. We handle every vector of your transit, from armored SUV extraction to private jet charters, ensuring a friction-free operational tempo.",
        icon: <Plane className="w-8 h-8 text-gold" />,
        image: "/services/logistics.png",
        tag: "Logistics"
    },
    {
        title: "AI Trip Architect",
        desc: "LLM-Powered Chatbot & Planner. Proprietary generative intelligence that acts as your 24/7 digital concierge, constructing itineraries based on real-time data.",
        icon: <Zap className="w-8 h-8 text-gold" />,
        image: "/services/ai-chatbot.png",
        tag: "Intelligence"
    },
    {
        title: "Verified Asset Market",
        desc: "Access a closed-loop economy of merit-audited artisans. Bypassing the street-level 'hustle tax' for direct-to-source acquisition integrity.",
        icon: <ShoppingBag className="w-8 h-8 text-gold" />,
        image: "/services/market.png",
        tag: "Commerce"
    },
    {
        title: "Regulatory Clearance",
        desc: "Instant digital issuance for high-level permits: drone authorization, research access to closed sites, and professional media credentials.",
        icon: <Scroll className="w-8 h-8 text-gold" />,
        image: "/services/permits.png",
        tag: "Bureaucracy"
    },
    {
        title: "Red-Line Security",
        desc: "Emergency Pulse Button. 24/7 digital overwatch with a one-tap panic response that deploys immediate diplomatic or tactical intervention.",
        icon: <ShieldAlert className="w-8 h-8 text-gold" />,
        image: "/services/emergency.png",
        tag: "Security"
    },
    {
        title: "Elite Liaison Corps",
        desc: "Deploy with veteran Egyptologists and government-licensed fixers. Personnel vetted for high-stakes diplomacy and deep historical knowledge.",
        icon: <Crown className="w-8 h-8 text-gold" />,
        image: "/services/guide.png",
        tag: "Personnel"
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#050505]/80 to-[#020202] z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 transform scale-105"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-historic-columns-at-luxor-temple-32863-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32 space-y-8"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                        <Globe className="w-4 h-4" />
                        Operational Capabilities
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] italic">
                        The <span className="gold-gradient">Sovereign</span> <br />Suite.
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl font-medium italic border-l-2 border-gold/30 pl-8 text-left md:text-center md:border-l-0 md:border-b-2 md:pb-4 md:pl-0">
                        "We have engineered a comprehensive logistical stack to neutralize the friction of Egyptian travel, creating a vacuum of pure discovery."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="group relative rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-gold/30 transition-all flex flex-col overflow-hidden shadow-2xl"
                        >
                            {/* Card Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none" />

                            <div className="h-64 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                                <SafeImage
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 right-6 z-20">
                                    <div className="w-14 h-14 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors shadow-xl">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-gold group-hover:text-black transition-colors">
                                        {service.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 pt-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic group-hover:text-gold transition-colors">{service.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Pharaonic Protocol v4.2</span>
                                    <Fingerprint className="w-4 h-4 text-zinc-600" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 mb-24 relative rounded-[4rem] overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 z-0">
                        <SafeImage
                            src="https://images.unsplash.com/photo-1539650116455-251c93c0dd7c?auto=format&fit=crop&q=80&w=1600"
                            alt="Background"
                            className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
                                Initiate <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600">Merchant Protocol.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg font-medium leading-relaxed border-l-2 border-gold/40 pl-6">
                                "Are you a master of your craft? A guardian of heritage? Join the Pharaonic authorized network and operate within a friction-free sovereign economy."
                            </p>
                        </div>
                        <button className="px-12 py-6 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-4 group/btn">
                            Request Certification
                            <Navigation className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
