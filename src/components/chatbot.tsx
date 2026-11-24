"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { getEmailJsConfig } from "@/lib/env";
import { useToast } from "@/components/ui/toast";
import { ChatMessage, knowledgeBase, quickTopics } from "./chatbot/chatbot-data";

export function Chatbot() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      content:
        "Authorized intelligence sweep complete. Liaison Sector-4 active. State your request for sector-specific logistics or security clearance.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [awaitingEmail, setAwaitingEmail] = useState(false);
  const [awaitingDetails, setAwaitingDetails] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const appendBotMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "bot", content }]);
  };

  const handleLiaisonEmail = async (payload: string) => {
    const emailJs = getEmailJsConfig();
    if (!emailJs) {
      appendBotMessage("Direct uplink is not configured. Please reach us via /contact.");
      toast({
        title: "Email Uplink Unavailable",
        description: "Please use the Contact page to send your inquiry.",
        variant: "warning",
      });
      setAwaitingDetails(false);
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        emailJs.serviceId,
        emailJs.templateId,
        {
          from_name: "Chatbot Client",
          message: `USER EMAIL: ${contactEmail}\n\nINQUIRY: ${payload}`,
          to_name: "Pharaonic Ops Center",
          reply_to: contactEmail,
        },
        emailJs.publicKey
      );
      appendBotMessage(
        "Protocol Uplink Successful. A human liaison has been alerted and will contact you shortly."
      );
      toast({
        title: "Inquiry Dispatched",
        description: "A Pharaonic liaison will respond to your email.",
        variant: "success",
      });
      setAwaitingDetails(false);
      setContactEmail("");
    } catch {
      appendBotMessage("Uplink Failed. Please try again or use the /contact portal.");
      toast({
        title: "Dispatch Failed",
        description: "Could not send message. Please try /contact.",
        variant: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleSend = async (e?: React.FormEvent, overridePrompt?: string) => {
    if (e) e.preventDefault();
    const payload = (overridePrompt ?? input).trim();
    if (!payload || isSending) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: payload }]);

    if (awaitingEmail) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload)) {
        setContactEmail(payload);
        setAwaitingEmail(false);
        setAwaitingDetails(true);
        appendBotMessage(
          "Frequency locked. Please describe your specific inquiry so I can route it to the right team."
        );
      } else {
        appendBotMessage("Invalid email format. Please enter a valid email address.");
      }
      return;
    }

    if (awaitingDetails) {
      await handleLiaisonEmail(payload);
      return;
    }

    const userQuery = payload.toLowerCase();
    const match = knowledgeBase.find((k) => k.q.some((kw) => userQuery.includes(kw)));
    if (match) {
      setTimeout(() => {
        appendBotMessage(match.a);
        if (match.action === "request_email") setAwaitingEmail(true);
      }, 400);
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: payload }),
      });
      const data = (await response.json()) as { text?: string; error?: string };

      if (data.text) {
        appendBotMessage(data.text);
      } else {
        appendBotMessage(data.error || "Liaison temporarily unavailable. Please refine your query.");
      }
    } catch {
      appendBotMessage("Network error. Please check your connection and try again.");
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
            role="dialog"
            aria-label="Pharaonic Intelligence Liaison Chat"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-24 right-0 w-[360px] md:w-[420px] h-[600px] bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 bg-gold text-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <div className="font-black uppercase tracking-widest text-xs">Intelligence Liaison</div>
                  <div className="text-[10px] font-bold opacity-70 uppercase tracking-tighter">
                    Sector 4 - Cairo HQ | v4.0.2
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="hover:bg-black/10 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 transition-transform hover:rotate-90" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] p-4 rounded-[1.5rem] text-sm font-medium shadow-md",
                      m.role === "user"
                        ? "bg-gold text-black rounded-tr-sm"
                        : "bg-zinc-900 border border-white/10 text-zinc-300 rounded-tl-sm"
                    )}
                  >
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

            <div className="px-4 py-3 bg-zinc-900/50 border-t border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
              {quickTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleSend(undefined, topic.prompt)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 hover:text-gold transition-all shrink-0 text-[10px] font-black uppercase tracking-wider text-zinc-400 cursor-pointer"
                >
                  {topic.icon}
                  {topic.label}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => handleSend(e)} className="p-4 bg-black flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Chat message"
                placeholder="State your request..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-gold transition-all placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={isSending}
                aria-label="Send message"
                className="p-4 bg-gold text-black rounded-2xl hover:bg-white transition-all disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Chat Assistant" : "Open Chat Assistant"}
        className="w-16 h-16 bg-gold text-black rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)] flex items-center justify-center relative z-50 overflow-hidden group border-2 border-white/10 cursor-pointer"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X className="w-7 h-7 relative z-10" /> : <MessageCircle className="w-7 h-7 relative z-10" />}
        {!isOpen && <span className="absolute top-3 right-4 w-2 h-2 bg-red-600 rounded-full animate-ping" />}
      </motion.button>
    </div>
  );
}
