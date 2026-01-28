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
        title: "End-to-End Booking",
        desc: "Flights, hotels, meals, transport, and even technical audits managed in one app.",
        icon: <Plane className="w-10 h-10 text-gold" />,
        image: "/ai.png"
    },
    {
        title: "AI Interactive Architect",
        desc: "Precision questioning to determine your signature, budget, and strategic style for a tailored program.",
        icon: <Hotel className="w-10 h-10 text-gold" />,
        image: "/safety-dashboard.png"
    },
    {
        title: "Sovereign Marketplace",
        desc: "Authorized-price assets and logistics delivered to your sector. Bypassing the street tax.",
        icon: <ShoppingBag className="w-10 h-10 text-gold" />,
        image: "/market.png"
    },
    {
        title: "Intellectual Permits",
        desc: "Streamlined application for high-value photography and research permits for the elite observer.",
        icon: <Camera className="w-10 h-10 text-gold" />,
        image: "/chaos.png"
    },
    {
        title: "Direct SOS Liaison",
        desc: "Immediate connection to specialized security and official authorities with one-tap authorization.",
        icon: <ShieldAlert className="w-10 h-10 text-gold" />,
        image: "/defense.png"
    },
    {
        title: "Verified Guide Network",
        desc: "Elite Egyptologists and specialized technical guides vetted by Pharaonic Intelligence.",
        icon: <Bus className="w-10 h-10 text-gold" />,
        image: "/verified-guide.png"
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
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        Enterprise <span className="gold-gradient uppercase tracking-widest text-2xl">Solutions</span>
                    </h1>
                    <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Pharaonic provides a full stack of sovereign services to manage every step of your journey,
                        eliminating systemic fragmentation and empowering the elite voyager.
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
                                <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">{service.title}</h3>
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
