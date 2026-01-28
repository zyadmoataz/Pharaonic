"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", content: "Agent 01 initialized. How can I assist your Egyptian protocol today?" }
    ]);
    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const knowledgeBase = [
        {
            q: ["nilevista", "what is", "about"],
            a: "NileVista is a boutique tourism infrastructure startup. We specialize in authorized disintermediation—removing the inefficient legacy layers of Egyptian tourism through proprietary AI planning and secure financial protocols. We cater to the first 500 elite voyagers seeking absolute sovereign certainty."
        },
        {
            q: ["card", "nilevista card", "price", "tier"],
            a: "The NileVista Card is our proprietary security layer. Built on a 256-bit encrypted ledger, it scrubs your financial metadata in local markets. Tiers: Gold (Entry/Free), Platinum ($49/Security Focus), and Elite ($199/Full Operational Authorization). Navigate to /card for technical specs."
        },
        {
            q: ["planner", "ai planner", "architect", "custom"],
            a: "Our AI Architect (/ai-planner) utilize a multi-modal logic engine. It calculates duration-based costs, authorizes sector-specific liaisons, and now supports Executive Car, Tactical Bus, and Sovereign Air protocols. It's designed to build a surgical blueprint for your deployment."
        },
        {
            q: ["recommendations", "curated", "paths", "itinerary"],
            a: "Curated Paths (/recommendations) are pre-audited programs for maximum strategic density. Each path includes a detailed day-by-day itinerary (e.g., Cairo Vanguard, Nile Heritage) and is verified for 100% price parity across all sectors."
        },
        {
            q: ["safe", "security", "liaison", "green zone"],
            a: "Security is handled via our Green Zone protocol—real-time monitoring of urban corridors. Every deployment is assigned a vetted NileVista liaison (Egyptologist + Security Specialist) to ensure zero systemic friction."
        },
        {
            q: ["contact", "email", "support", "help"],
            a: "Digital contact can be initialized at /contact. For immediate architectural queries, specify 'speak with a person' here, and I will initialize a human liaison notification."
        },
        {
            q: ["services", "what do you do", "everything"],
            a: "Our core services include: 1. AI-Driven Architectural Planning. 2. Secure Financial Metadata Scrubbing (The Card). 3. Authorized Liaison Deployment. 4. Strategic Disintermediation of the 42% Legacy Commission Layer. Explore our /blogs for deep-dive whitepapers."
        }
    ];

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isSending) return;

        const userQuery = input.toLowerCase();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: input }]);

        // 1. Intelligent Knowledge Matching
        const match = knowledgeBase.find(k => k.q.some(keyword => userQuery.includes(keyword)));

        if (match) {
            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", content: match.a }]);
            }, 600);
            return;
        }

        // 2. Specific Human Liaison / Complex Query Trigger
        const isComplex = userQuery.length > 50 || userQuery.includes("person") || userQuery.includes("human") || userQuery.includes("someone") || userQuery.includes("help");

        if (isComplex) {
            setIsSending(true);
            try {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rlib0rf",
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_f5oruv4",
                    {
                        from_name: "Strategic Client",
                        message: `COMPLEX INQUIRY: ${userQuery}`,
                        to_name: "NileVista Ops Center",
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "jpTYsbw3UhESSktR8"
                );
                setMessages(prev => [...prev, { role: "bot", content: "Architecture query received. This inquiry exceeds my current protocol logic. I have transmitted your request to the Human Liaison Node. You will receive an encrypted brief shortly." }]);
            } catch (error) {
                setMessages(prev => [...prev, { role: "bot", content: "Signal interference detected. Please use the /contact portal for high-level inquiries." }]);
            } finally {
                setIsSending(false);
            }
        } else {
            // 3. Smart Default Outline
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: "bot",
                    content: "I am architected to handle platform protocols. I can describe our AI Architect (/ai-planner), the NileVista Card (/card), our Curated Paths (/recommendations), or our Strategic Blogs (/blogs). For human intervention, please provide more detail or specifically ask to 'speak with a liaison'."
                }]);
            }, 800);
        }

        setTimeout(() => {
            scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
        }, 100);
    };

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-24 right-0 w-[350px] md:w-[400px] h-[500px] bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gold text-black flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bot className="w-5 h-5" />
                                <div className="font-black uppercase tracking-widest text-xs">Liaison Bot v1.0</div>
                            </div>
                            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                            {messages.map((m, i) => (
                                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                                    <div className={cn(
                                        "max-w-[80%] p-4 rounded-2xl text-sm font-medium",
                                        m.role === "user" ? "bg-gold text-black rounded-tr-none" : "bg-white/5 text-zinc-300 rounded-tl-none border border-white/5"
                                    )}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isSending && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 text-zinc-500 p-4 rounded-2xl rounded-tl-none animate-pulse text-xs uppercase font-black tracking-widest">
                                        Transmitting...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-black/50 flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="State your request..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-all"
                            />
                            <button type="submit" disabled={isSending} className="p-3 bg-gold text-black rounded-xl hover:bg-white transition-all">
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gold text-black rounded-2xl shadow-2xl shadow-gold/20 flex items-center justify-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                {isOpen ? <X className="w-8 h-8 relative z-10" /> : <MessageCircle className="w-8 h-8 relative z-10" />}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black animate-bounce" />
                )}
            </motion.button>
        </div>
    );
}
