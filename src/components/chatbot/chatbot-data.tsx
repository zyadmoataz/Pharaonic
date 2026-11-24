import React from "react";
import { BookOpen, Bot, CreditCard, Plane, Shield } from "lucide-react";

export interface ChatMessage {
  role: "bot" | "user";
  content: string;
}

export interface QuickTopic {
  id: string;
  label: string;
  icon: React.ReactNode;
  prompt: string;
}

export interface KnowledgeEntry {
  q: string[];
  a: string;
  action?: "request_email";
}

export const quickTopics: QuickTopic[] = [
  {
    id: "planner",
    label: "Strategic Intelligence",
    icon: <Bot className="w-3 h-3" />,
    prompt: "Request briefing on AI Logistical Architect.",
  },
  {
    id: "safety",
    label: "Nile Security",
    icon: <Shield className="w-3 h-3" />,
    prompt: "Explain Green-Zone routing and tactical escort protocols.",
  },
  {
    id: "licenses",
    label: "Permit Authorization",
    icon: <Plane className="w-3 h-3" />,
    prompt: "Status update on high-payload equipment permits.",
  },
  {
    id: "card",
    label: "Elite Logistics",
    icon: <CreditCard className="w-3 h-3" />,
    prompt: "Compare Sovereign Card operational tiers.",
  },
  {
    id: "prices",
    label: "Benchmarks",
    icon: <BookOpen className="w-3 h-3" />,
    prompt: "Provide authorized market benchmarks for Cairo.",
  },
];

export const knowledgeBase: KnowledgeEntry[] = [
  {
    q: ["pharaonic", "what is", "about"],
    a: "Pharaonic is a boutique tourism infrastructure platform. We specialize in authorized disintermediation—removing legacy friction from Egyptian travel through AI planning and secure financial protocols.",
  },
  {
    q: ["card", "membership", "price", "tier", "gold", "platinum", "elite"],
    a: "The Pharaonic Card is our proprietary security layer. Tiers: Gold (Free Entry), Platinum ($49/Security Focus), and Elite ($199/Full Operational Authorization). It protects your financial metadata and unlocks fast-track logistics.",
  },
  {
    q: ["planner", "ai", "architect", "custom"],
    a: "Our AI Architect (/personalized-plan) calculates duration-based costs, authorizes sector-specific liaisons, and supports Executive Car, Tactical Bus, and Sovereign Air protocols.",
  },
  {
    q: ["license", "permit", "drone", "photo", "film"],
    a: "We offer a government liaison service for Drone, Cinema, and Archaeological permits (/licenses). Applications are routed directly to the relevant ministry. Processing typically takes 14–21 days.",
  },
  {
    q: ["recommendations", "curated", "paths", "itinerary", "cairo vanguard"],
    a: "Curated Paths (/recommendations) are pre-audited programs including 'Cairo Vanguard' (3 Days), 'Nile Heritage' (7 Days), and 'Red Sea Shield' (5 Days). Each is verified for 100% price parity.",
  },
  {
    q: ["safe", "security", "liaison", "green zone", "danger"],
    a: "Security is handled via our Green Zone protocol—real-time monitoring of urban corridors with a vetted Pharaonic liaison (Egyptologist + Security Specialist).",
  },
  {
    q: ["contact", "email", "support", "help", "human"],
    a: "To proceed with the Liaison Uplink Protocol, please enter your email address below.",
    action: "request_email",
  },
  {
    q: ["benchmark", "price", "cost", "scam", "tourist tax"],
    a: "We publish Authorized Benchmarks for fair market value across taxis, guides, and venues to eliminate price gouging. Check /blogs for the latest intelligence.",
  },
];
