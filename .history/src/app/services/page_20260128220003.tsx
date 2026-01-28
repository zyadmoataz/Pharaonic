"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Plane,
    Hotel,
    ShoppingBag,
    Camera,
    ShieldAlert,
    Bus
} from "lucide-react";
import { GlobalCTA } from "@/components/global-cta";
import { SafeImage } from "@/components/SafeImage";

const services = [
    {
        title: "Complete Trip Booking",
        desc: "Everything from flights and hotels to local transport and meals, all managed in one simple app.",
        icon: <Plane className="w-10 h-10 text-gold" />,
        image: "/ai.webp"
    },
    {
        title: "AI Trip Architect",
        desc: "Our AI helps design your perfect itinerary based on your interests, budget, and travel style.",
        icon: <Hotel className="w-10 h-10 text-gold" />,
        image: "/safety-dashboard.webp"
    },
    {
        title: "Curated Marketplace",
        desc: "Find verified local products and services at fair, transparent prices without the street hustle.",
        icon: <ShoppingBag className="w-10 h-10 text-gold" />,
        image: "/market.webp"
    },
    {
        title: "Easy Travel Permits",
        desc: "Get quick approval for photography, drone usage, and research permits at historic sites.",
        icon: <Camera className="w-10 h-10 text-gold" />,
        image: "/chaos.webp"
    },
    {
        title: "24/7 Local Support",
        desc: "Immediate access to our support team and local authorities for help whenever you need it.",
        icon: <ShieldAlert className="w-10 h-10 text-gold" />,
        image: "/defense.webp"
    },
    {
        title: "Professional Guides",
        desc: "Travel with expert, verified Egyptologists and local guides who know the true stories of Egypt.",
        icon: <Bus className="w-10 h-10 text-gold" />,
        image: "/verified-guide.webp"
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-9xl font-black text-white mb-6 uppercase tracking-tighter">
                        Our <span className="gold-gradient">Services.</span>
                    </h1>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-2xl leading-relaxed border-x border-gold/20 px-12">
                        Experience Egypt with total confidence. We handle the logistics so you can focus on the journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all flex flex-col overflow-hidden"
                        >
                            <div className="aspect-[16/9] w-full relative overflow-hidden">
                                <SafeImage src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700 opacity-60 group-hover:opacity-100" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent">
                                    <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 w-fit">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 space-y-4">
                                <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{service.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 p-12 rounded-[3.5rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Are you a Guide or a Merchant?
                        </h2>
                        <p className="text-neutral-300 text-lg">
                            Join our certified network and grow your business with transparency
                            and official support.
                        </p>
                    </div>
                    <button className="px-10 py-5 bg-gold text-black rounded-2xl font-bold hover:bg-gold-light transition-all whitespace-nowrap">
                        Apply for Certification
                    </button>
                </div>
            </div>
            <GlobalCTA />
        </div>
    );
}
