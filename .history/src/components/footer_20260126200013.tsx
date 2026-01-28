import Link from "next/link";
import { Mail, Shield, Globe, Lock, Cpu, Instagram, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-32 pb-20 overflow-hidden relative">
            {/* Aesthetic Background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
                    <div className="md:col-span-4 space-y-10">
                        <Link href="/" className="inline-block scale-125 origin-left">
                            <Logo />
                        </Link>
                        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                            Guidly Analytics is a sovereign travel infrastructure provider. We specialize in
                            <span className="text-white italic"> Operational Certainty </span>
                            within the Egyptian tourism landscape through meritocratic digital auditing.
                        </p>
                        <div className="flex gap-6 mt-10">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Strategic Assets</h4>
                        <ul className="space-y-4 text-sm font-bold text-zinc-500">
                            <li><Link href="/ai-planner" className="hover:text-gold transition-colors block italic">AI Architect</Link></li>
                            <li><Link href="/card" className="hover:text-gold transition-colors block">Guidly Card</Link></li>
                            <li><Link href="/services" className="hover:text-gold transition-colors block">Authorized Provider</Link></li>
                            <li><Link href="/why-us" className="hover:text-white transition-colors block text-gold">Why Guidly?</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Governance</h4>
                        <ul className="space-y-4 text-sm font-bold text-zinc-500">
                            <li><Link href="/about" className="hover:text-gold transition-colors block">Our Doctrine</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors block">Liaison Service</Link></li>
                            <li><Link href="/terms" className="hover:text-gold transition-colors block">Compliance</Link></li>
                            <li><Link href="/privacy" className="hover:text-gold transition-colors block">Data Security</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-10">
                        <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h4 className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4">Newsletter Protocol</h4>
                            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">Join 12,000+ elite travelers receiving weekly operational briefings.</p>
                            <form className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="strategic@email.com"
                                    className="bg-black border border-white/10 rounded-2xl px-5 py-4 text-sm w-full focus:outline-none focus:border-gold transition-all font-bold text-white"
                                />
                                <button className="bg-gold text-black px-6 py-4 rounded-2xl text-sm font-black hover:bg-white transition-all shadow-xl shadow-gold/10">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            System Status: Operational
                        </div>
                        <p>© 2026 GUIDLY ANALYTICS GROUP</p>
                        <div className="flex gap-6">
                            <Link href="/terms" className="hover:text-white transition-colors">Compliance</Link>
                            <Link href="/privacy" className="hover:text-white transition-colors">Encrypted</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 py-3 px-6 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Powered by</span>
                        <Link href="https://www.nexeradev.com/en/" target="_blank" className="text-gold font-black tracking-widest hover:text-white transition-colors border-l border-white/10 pl-4">
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
