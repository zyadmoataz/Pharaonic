import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-[#020202] flex items-center justify-center pt-20 px-4">
            <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-amber-500/10 to-gold/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

                <SignUp
                    appearance={{
                        elements: {
                            rootBox: "w-full max-w-md",
                            card: "bg-zinc-950/80 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[3rem] p-8",
                        }
                    }}
                    signInUrl="/sign-in"
                />
            </div>
        </div>
    );
}
