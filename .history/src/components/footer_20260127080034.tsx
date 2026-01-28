import Link from "next/link";
import { Mail, Shield, Globe, Lock, Cpu, Instagram, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
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
                            NileVista is Egypt's premier tourism infrastructure provider. We specialize in
                            <span className="text-white italic"> seamless travel experiences </span>
                            through luxury AI-driven planning.
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-6 md:space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Services</h4>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-zinc-500">
                            <li><Link href="/ai-planner" className="hover:text-gold transition-colors block italic">AI Trip Planner</Link></li>
                            <li><Link href="/card" className="hover:text-gold transition-colors block">NileVista Card</Link></li>
                            <li><Link href="/recommendations" className="hover:text-gold transition-colors block">Recommended Tours</Link></li>
                            <li><Link href="/why-us" className="hover:text-gold transition-colors block text-gold">Why NileVista</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6 md:space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Company</h4>
                        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-zinc-500">
                            <li><Link href="/about" className="hover:text-gold transition-colors block">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors block">Contact Us</Link></li>
                            <li><Link href="/terms" className="hover:text-gold transition-colors block">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-gold transition-colors block">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-8 md:space-y-10">
                        <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gold/10 blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h4 className="text-gold font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3 md:mb-4">Newsletter Protocol</h4>
                            <p className="text-xs md:text-sm text-zinc-400 mb-5 md:mb-6 leading-relaxed">Join 12,000+ elite travelers receiving weekly operational briefings.</p>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="strategic@email.com"
                                    className="bg-black border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm w-full focus:outline-none focus:border-gold transition-all font-bold text-white placeholder:text-zinc-700"
                                />
                                <button className="bg-gold text-black px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-black hover:bg-white transition-all shadow-xl shadow-gold/10">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 text-center md:text-left">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-green-500 animate-pulse" />
                            System Status: Operational
                        </div>
                        <p>© 2026 NILEVISTA LUXURY GROUP</p>
                        <div className="flex gap-4 md:gap-6">
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
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
