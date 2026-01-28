"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Footer() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <footer className="bg-black border-t border-white/5 pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden relative">
            {/* Aesthetic Background element */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 blur-[100px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-20 md:mb-32">
                    <div className="md:col-span-4 space-y-8 md:space-y-10">
                        <Link href="/" className="inline-block scale-110 md:scale-125 origin-left">
                            <Logo />
                        </Link>
                        <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium max-w-sm">
                            Pharaonic is the authorized infrastructure for elite Egyptian tourism. We specialize in
                            <span className="text-white italic"> sovereign logistics </span>
                            and AI-driven planning for the modern voyager.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-6 md:space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Protocols</h4>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-zinc-500">
                            <li><Link href="/ai-planner" className={cn("transition-colors block", isActive("/ai-planner") ? "text-gold" : "hover:text-gold")}>AI Planner</Link></li>
                            <li><Link href="/card" className={cn("transition-colors block", isActive("/card") ? "text-gold" : "hover:text-gold")}>Membership Card</Link></li>
                            <li><Link href="/recommendations" className={cn("transition-colors block", isActive("/recommendations") ? "text-gold" : "hover:text-gold")}>Curated Paths</Link></li>
                            <li><Link href="/licenses" className={cn("transition-colors block", isActive("/licenses") ? "text-gold" : "hover:text-gold")}>Permits</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6 md:space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Information</h4>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-zinc-500">
                            <li><Link href="/about" className={cn("transition-colors block", isActive("/about") ? "text-gold" : "hover:text-gold")}>Our Authority</Link></li>
                            <li><Link href="/contact" className={cn("transition-colors block", isActive("/contact") ? "text-gold" : "hover:text-gold")}>Contact</Link></li>
                            <li><Link href="/terms" className={cn("transition-colors block", isActive("/terms") ? "text-gold" : "hover:text-gold")}>Terms</Link></li>
                            <li><Link href="/privacy" className={cn("transition-colors block", isActive("/privacy") ? "text-gold" : "hover:text-gold")}>Privacy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-8 md:space-y-10">
                        <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gold/10 blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h4 className="text-gold font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3 md:mb-4">Pharaonic Network</h4>
                            <p className="text-xs md:text-sm text-zinc-400 mb-5 md:mb-6 leading-relaxed">
                                Join the elite circle of travelers. Priority access to new protocols and site openings.
                            </p>
                            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                                Invitation Only
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 text-center md:text-left">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-green-500 animate-pulse" />
                            System Status: Operational
                        </div>
                        <p>© 2026 PHARAONIC GROUP</p>
                        <div className="flex gap-4 md:gap-6">
                            <Link href="/terms" className={cn("transition-colors", isActive("/terms") ? "text-white" : "hover:text-white")}>Terms</Link>
                            <Link href="/privacy" className={cn("transition-colors", isActive("/privacy") ? "text-white" : "hover:text-white")}>Privacy</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 px-4 md:px-6 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 whitespace-nowrap">Powered by</span>
                        <Link href="https://www.nexeradev.com/en/" target="_blank" className="text-gold font-black tracking-widest hover:text-white transition-colors border-l border-white/10 pl-3 md:pl-4">
                            NEXERA DEV
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Graphic */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-30" />
        </footer>
    );
}
