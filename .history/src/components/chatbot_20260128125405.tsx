"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Map, Shield, Plane, BookOpen, CreditCard } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", content: "I am the Pharaonic Protocol Liaison. Select a sector below for an authorized briefing, or state your specific inquiry." }
    ]);
    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const quick_topics = [
        { id: "planner", label: "AI Planner", icon: <Bot className="w-3 h-3" />, prompt: "Tell me about the AI Architect." },
        { id: "safety", label: "Security", icon: <Shield className="w-3 h-3" />, prompt: "Is Egypt safe? Explain the Green Zones." },
        { id: "licenses", label: "Permits", icon: <Plane className="w-3 h-3" />, prompt: "How do I get a drone or photo permit?" },
        { id: "card", label: "Members", icon: <CreditCard className="w-3 h-3" />, prompt: "What are the Membership Card tiers?" },
        { id: "prices", label: "Benchmarks", icon: <BookOpen className="w-3 h-3" />, prompt: "Explain the 'Authorized Benchmarks' for pricing." },
    ];

    const knowledgeBase = [
        {
            q: ["pharaonic", "what is", "about"],
            a: "Pharaonic is a boutique tourism infrastructure startup. We specialize in authorized disintermediation—removing the inefficient legacy layers of Egyptian tourism through proprietary AI planning and secure financial protocols."
        },
        {
            q: ["card", "membership", "price", "tier", "gold", "platinum", "elite"],
            a: "The Pharaonic Card is our proprietary security layer. Tiers: Gold (Free Entry), Platinum ($49/Security Focus), and Elite ($199/Full Operational Authorization). It scrubs your financial metadata in local markets and provides access to fast-track logistics."
        },
        {
            q: ["planner", "ai", "architect", "custom"],
            a: "Our AI Architect (/personalized-plan) utilizes a multi-modal logic engine. It calculates duration-based costs, authorizes sector-specific liaisons, and supports Executive Car, Tactical Bus, and Sovereign Air protocols. It's designed to build a surgical blueprint for your deployment."
        },
        {
            q: ["license", "permit", "drone", "photo", "film"],
            a: "We offer a premium government liaison service for Drone, Cinema, and Archaeological permits (/licenses). Applications are routed directly to the relevant ministry. Processing typically takes 14-21 days."
        },
        {
            q: ["recommendations", "curated", "paths", "itinerary", "cairo vanguard"],
            a: "Curated Paths (/recommendations) are pre-audited programs for maximum strategic density. Options include 'Cairo Vanguard' (3 Days), 'Nile Heritage' (7 Days), and 'Red Sea Shield' (5 Days). Each is verified for 100% price parity."
        },
        {
            q: ["safe", "security", "liaison", "green zone", "danger"],
            a: "Security is handled via our Green Zone protocol—real-time monitoring of urban corridors. Every deployment is assigned a vetted Pharaonic liaison (Egyptologist + Security Specialist) to ensure zero systemic friction."
        },
        {
            q: ["contact", "email", "support", "help", "human"],
            a: "For complex architectural queries, please use the /contact portal. I can notify a human liaison if you wish to proceed with a manual audit."
        },
        {
            q: ["benchmark", "price", "cost", "scam", "tourist tax"],
            a: "We operate on 'Authorized Benchmarks' to eliminate the 'Tourist Tax'. This means we publish the actual, fair market value for services (taxis, guides, artifacts) to prevent price gouging. Check our /blogs for the latest economic intelligence."
        }
    ];

    const handleSend = async (e?: React.FormEvent, overridePrompt?: string) => {
        if (e) e.preventDefault();
        const payload = overridePrompt || input;

        if (!payload.trim() || isSending) return;

        setInput("");
        setMessages(prev => [...prev, { role: "user", content: payload }]);

        const userQuery = payload.toLowerCase();

        // 1. Intelligent Knowledge Matching
        const match = knowledgeBase.find(k => k.q.some(keyword => userQuery.includes(keyword)));
        if (match) {
            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", content: match.a }]);
            }, 600);
            return;
        }

        // 2. LLM / Complex Query Trigger
        setIsSending(true);
        try {
            const history = messages.map(m => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: m.content }]
            }));

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: payload, history: history.slice(-6) }) // Send last 3 rounds of history
            });

            const data = await response.json();

            if (data.text) {
                setMessages(prev => [...prev, { role: "bot", content: data.text }]);
            } else if (data.error && userQuery.length > 60) {
                // Fallback to EmailJS for complex issues if LLM fails or is not config
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rlib0rf",
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_f5oruv4",
                    {
                        from_name: "Strategic Client",
                        message: `COMPLEX INQUIRY: ${userQuery}`,
                        to_name: "Pharaonic Ops Center",
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "jpTYsbw3UhESSktR8"
                );
                setMessages(prev => [...prev, { role: "bot", content: "This inquiry requires human intelligence. I have transmitted your packet to our Ops Center. A Liaison will contact you shortly." }]);
            } else {
                throw new Error("No response");
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, {
                role: "bot",
                content: "Access denied. My logic core is limited to Pharaonic protocols (Planning, Permits, Security). Please refine your query or select a sector topic."
            }]);
        } finally {
            setIsSending(false);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-24 right-0 w-[360px] md:w-[420px] h-[600px] bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gold text-black flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bot className="w-6 h-6" />
                                <div>
                                    <div className="font-black uppercase tracking-widest text-xs">Liaison Protocol</div>
                                    <div className="text-[10px] font-bold opacity-70 uppercase">Online | v2.1</div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-2 rounded-full transition-colors"><X className="w-5 h-5" /></button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                                >
                                    <div className={cn(
                                        "max-w-[85%] p-4 rounded-[1.5rem] text-sm font-medium shadow-md",
                                        m.role === "user" ? "bg-gold text-black rounded-tr-sm" : "bg-zinc-900 border border-white/10 text-zinc-300 rounded-tl-sm"
                                    )}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isSending && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-900 border border-white/10 text-zinc-500 p-4 rounded-[1.5rem] rounded-tl-sm animate-pulse text-[10px] uppercase font-black tracking-widest flex items-center gap-2">
                                        <div className="w-2 h-2 bg-gold rounded-full animate-bounce" /> Transmitting Packet...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Chips */}
                        <div className="px-4 py-3 bg-zinc-900/50 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
                            {quick_topics.map(topic => (
                                <button
                                    key={topic.id}
                                    onClick={() => handleSend(undefined, topic.prompt)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 hover:text-gold transition-all shrink-0 text-[10px] font-black uppercase tracking-wider text-zinc-400"
                                >
                                    {topic.icon}
                                    {topic.label}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={(e) => handleSend(e)} className="p-4 bg-black flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="State your request..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-gold transition-all placeholder:text-zinc-700"
                            />
                            <button type="submit" disabled={isSending} className="p-4 bg-gold text-black rounded-2xl hover:bg-white transition-all disabled:opacity-50">
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gold text-black rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)] flex items-center justify-center relative z-50 overflow-hidden group border-2 border-white/10"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {isOpen ? <X className="w-7 h-7 relative z-10" /> : <MessageCircle className="w-7 h-7 relative z-10" />}
                {!isOpen && <span className="absolute top-3 right-4 w-2 h-2 bg-red-600 rounded-full animate-ping" />}
            </motion.button>
        </div>
    );
}
