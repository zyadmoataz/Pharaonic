import { SignIn } from "@clerk/nextjs";
import { Shield, Lock } from "lucide-react";

export default function SignInPage() {
    return (
        <div className="min-h-screen pt-20 px-4 relative flex items-center justify-center overflow-hidden">
            {/* Background cinematic elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* Left side: Branding */}
                <div className="hidden lg:flex flex-col space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                            <Shield className="w-4 h-4" />
                            Secure Access Point
                        </div>
                        <h1 className="text-8xl font-black text-white tracking-tighter leading-[0.8] uppercase italic">
                            Initialize <br />
                            <span className="gold-gradient">Sovereignty.</span>
                        </h1>
                        <p className="text-zinc-500 text-xl font-medium leading-relaxed italic border-l-2 border-gold/20 pl-8">
                            "Authorize your credentials to access the Pharaonic Protocol. Your journey into the heart of Egypt begins here."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                            <Lock className="w-8 h-8 text-gold" />
                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Encryption</div>
                            <div className="text-white font-bold text-sm">AES-256 Military Grade</div>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                            <Shield className="w-8 h-8 text-gold" />
                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Privacy</div>
                            <div className="text-white font-bold text-sm">Sovereign Data Shield</div>
                        </div>
                    </div>
                </div>

                {/* Right side: Sign In Card */}
                <div className="flex justify-center">
                    <div className="relative group w-full max-w-md">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />

                        <div className="relative">
                            <SignIn
                                appearance={{
                                    elements: {
                                        rootBox: "w-full",
                                        card: "bg-zinc-950/80 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[3rem] p-8",
                                        headerTitle: "text-white font-black uppercase tracking-tighter text-2xl mb-2",
                                        headerSubtitle: "text-zinc-500 font-bold uppercase tracking-widest text-[10px]",
                                        socialButtonsBlockButton: "bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-2xl py-4 transition-all",
                                        socialButtonsBlockButtonText: "text-white font-bold",
                                        dividerRow: "hidden",
                                        formFieldLabel: "text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-2 ml-2",
                                        formFieldInput: "bg-white/5 border-white/10 text-white rounded-2xl py-4 px-6 focus:border-gold/50 transition-all",
                                        formButtonPrimary: "bg-white hover:bg-gold text-black font-black uppercase tracking-widest rounded-2xl py-5 transition-all shadow-xl shadow-white/5",
                                        footerActionText: "text-zinc-500 font-bold",
                                        footerActionLink: "text-gold hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest",
                                        identityPreviewText: "text-white font-bold",
                                        identityPreviewEditButtonIcon: "text-gold"
                                    }
                                }}
                                signUpUrl="/sign-up"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer watermark */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-black text-zinc-800 uppercase tracking-[0.5em] pointer-events-none">
                Pharaonic Administrative Layer v4.2
            </div>
        </div>
    );
}
