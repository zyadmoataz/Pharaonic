"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Footer() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <footer className="bg-black border-t border-white/5 pt-32 pb-20 overflow-hidden relative">
            {/* Enterprise Gradient Background */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gold/[0.03] blur-[120px] rounded-full -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
                    <div className="md:col-span-4 space-y-10">
                        <Link href="/" className="inline-block scale-125 origin-left">
                            <Logo />
                        </Link>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-sm">
                            Pharaonic is the authorized infrastructure for elite Egyptian tourism. We specialize in
                            <span className="text-white italic"> sovereign logistics </span>
                            and bank-backed membership protocols for the modern voyager.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Network</h4>
                        <ul className="space-y-4 text-sm font-bold text-zinc-500">
                            <li><Link href="/ai-planner" className={cn("transition-colors block", isActive("/ai-planner") ? "text-gold" : "hover:text-white")}>AI Hub</Link></li>
                            <li><Link href="/card" className={cn("transition-colors block", isActive("/card") ? "text-gold" : "hover:text-white")}>Sovereign Card</Link></li>
                            <li><Link href="/liaisons" className={cn("transition-colors block", isActive("/liaisons") ? "text-gold" : "hover:text-white")}>Liaison Nexus</Link></li>
                            <li><Link href="/licenses" className={cn("transition-colors block", isActive("/licenses") ? "text-gold" : "hover:text-white")}>Permit Auth</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Authorized</h4>
                        <ul className="space-y-4 text-sm font-bold text-zinc-500">
                            <li><Link href="/about" className={cn("transition-colors block", isActive("/about") ? "text-gold" : "hover:text-white")}>The Group</Link></li>
                            <li><Link href="/contact" className={cn("transition-colors block", isActive("/contact") ? "text-gold" : "hover:text-white")}>Direct Uplink</Link></li>
                            <li><Link href="/terms" className={cn("transition-colors block", isActive("/terms") ? "text-gold" : "hover:text-white")}>Protocol Terms</Link></li>
                            <li><Link href="/privacy" className={cn("transition-colors block", isActive("/privacy") ? "text-gold" : "hover:text-white")}>Data Security</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-10">
                        <div className="p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h4 className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">Newsletter Uplink</h4>
                            <p className="text-sm text-zinc-400 mb-8 leading-relaxed italic">
                                Receive direct strategic updates and authorization permits directly in your inbox.
                            </p>
                            <form className="relative">
                                <input
                                    type="email"
                                    placeholder="your-email@strategic.layer"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold/50 transition-all"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gold text-black flex items-center justify-center hover:scale-105 transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700">
                        <p>© 2026 PHARAONIC GROUP . ALL RIGHTS RESERVED</p>
                    </div>

                    <div className="flex items-center gap-4 py-4 px-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl group hover:border-gold/30 transition-all">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300">Authorized by</span>
                        <Link href="https://www.nexeradev.com/en/" target="_blank" className="text-gold font-black tracking-widest hover:text-white transition-colors pl-4 border-l border-white/10 flex items-center gap-2">
                            NEXERA <div className="w-2 h-2 bg-gold rounded-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
