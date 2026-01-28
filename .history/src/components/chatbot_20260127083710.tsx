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

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isSending) return;

        const userMessage = input;
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsSending(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rlib0rf",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_f5oruv4",
                {
                    from_name: "NileVista Web Client",
                    message: userMessage,
                    to_name: "NileVista Support",
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "jpTYsbw3UhESSktR8"
            );

            setMessages(prev => [...prev, { role: "bot", content: "Transmission received. A NileVista liaison will review your request shortly." }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: "bot", content: "Error in transmission. Please retry or contact us directly." }]);
        } finally {
            setIsSending(false);
            setTimeout(() => {
                scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
            }, 100);
        }
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
