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
import { GlobalCTA } from "@/components/sections/global-cta";

const services = [
    {
        title: "End-to-End Booking",
        desc: "Flights, hotels, meals, transport, and even dental appointments managed in one app.",
        icon: <Plane className="w-10 h-10 text-gold" />,
    },
    {
        title: "AI Interactive Planner",
        desc: "Interactive questioning to determine your mood, budget, and style for a tailored program.",
        icon: <Hotel className="w-10 h-10 text-gold" />,
    },
    {
        title: "Safe Marketplace",
        desc: "Fixed-price souvenirs delivered to your hotel. Bypassing bargaining and scams.",
        icon: <ShoppingBag className="w-10 h-10 text-gold" />,
    },
    {
        title: "Official Permit Portal",
        desc: "Streamlined application for photography and filming permits for content creators.",
        icon: <Camera className="w-10 h-10 text-gold" />,
    },
    {
        title: "Direct SOS Support",
        desc: "Immediate connection to police and official authorities with one click for any emergency.",
        icon: <ShieldAlert className="w-10 h-10 text-gold" />,
    },
    {
        title: "Verified Guide Network",
        desc: "Certified Egyptologists and specialized guides vetted by Guidly and the Ministry.",
        icon: <Bus className="w-10 h-10 text-gold" />,
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
                        Guidly provides a full stack of services to manage every step of your journey,
                        eliminating fragmentation and empowering independent travel.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all flex flex-col items-center text-center"
                        >
                            <div className="mb-8 p-6 rounded-3xl bg-white/[0.03]">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
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
