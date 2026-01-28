"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, MapPin, Calendar, MessageSquare } from "lucide-react";

const stories = [
    {
        name: "Zührenur",
        age: 25,
        country: "Türkiye",
        cities: "Hurghada, Luxor, Cairo, Dahab, Sharm",
        purpose: "Egyptian History & Culture",
        highlights: "Tutankhamun, Nefertiti, and Dahab people.",
        challenge: "Cairo and Luxor chaos initially.",
        insight: "Historical places need better organization. An app for real local places is a must.",
        fullQuote: "I’ve been into Egyptian history since I was a kid. Seeing the pharaohs and temples in real life was a dream. The best part was the people in Dahab - they are still my closest friends.",
    },
    {
        name: "Diana (Dasha)",
        age: 17,
        country: "Russia",
        cities: "Sharm El Sheikh",
        purpose: "Vacation / Leisure",
        highlights: "Nature, climate, and the sea.",
        challenge: "Language barriers and hotel cleaning issues.",
        insight: "Needs more support in Russian language and better hotel standards.",
        fullQuote: "We really liked this country and we will come here often. The nature is beautiful. Adding Russian language support would make the experience much smoother.",
    }
];

export default function StoriesPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        Traveler <span className="gold-gradient uppercase tracking-widest text-2xl">Stories</span>
                    </h1>
                    <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Real experiences from real people. We listen to every traveler to build
                        a platform that solves actual problems on the ground.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-32 h-32 text-gold" />
                            </div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center text-black font-bold text-2xl">
                                            {story.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{story.name}</h3>
                                            <p className="text-gold text-sm">{story.country}, {story.age} years</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-2 text-sm">
                                            <MapPin className="w-4 h-4 text-neutral-500 mt-1" />
                                            <span className="text-neutral-300"><span className="text-neutral-500">Visited:</span> {story.cities}</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-sm">
                                            <Calendar className="w-4 h-4 text-neutral-500 mt-1" />
                                            <span className="text-neutral-300"><span className="text-neutral-500">Purpose:</span> {story.purpose}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 space-y-8">
                                    <p className="text-xl md:text-2xl font-medium text-white leading-relaxed italic border-l-4 border-gold pl-8">
                                        "{story.fullQuote}"
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="p-6 rounded-2xl bg-white/[0.03] space-y-2">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">The Challenge</h4>
                                            <p className="text-neutral-300 text-sm">{story.challenge}</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-gold/5 border border-gold/10 space-y-2">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-gold/50">Guidly Insight</h4>
                                            <p className="text-neutral-300 text-sm">{story.insight}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        <span className="font-bold border-b border-gold/30">Share Your Experience</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
