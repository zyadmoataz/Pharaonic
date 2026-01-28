import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopHeader } from "@/components/top-header";
import { ConditionalCTA } from "@/components/conditional-cta";
import { Chatbot } from "@/components/chatbot";
import { EmergencyProtocol } from "@/components/EmergencyProtocol";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
    title: {
        default: "Pharaonic | The Authorized Egyptian Experience",
        template: "%s | Pharaonic Protocol"
    },
    description: "Access the authorized layer of Egyptian tourism. Pharaonic provides secured permits, luxury logistics, and AI-driven itineraries for the modern explorer.",
    keywords: ["Egypt Tourism", "Pharaonic", "Cairo Guide", "AI Travel Planner", "Luxury Travel Egypt", "Travel Safety Egypt", "Security Protocol Egypt"],
    authors: [{ name: "Pharaonic Intelligence Department" }],
    creator: "Pharaonic Ops",
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
    openGraph: {
        title: "Pharaonic | Egypt, Reimagined",
        description: "Sovereign safety and personalized luxury for your Egyptian protocol. Bypassing the street tax with AI intelligence.",
        url: "https://pharaonic.ai",
        siteName: "Pharaonic Integrated Systems",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pharaonic | Authorized Egyptian Experience",
        description: "Direct-to-source Egyptian logistics and security.",
    },
    metadataBase: new URL('https://pharaonic.ai'),
};

import { dark } from "@clerk/themes";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: "#D4AF37",
                    colorBackground: "#0a0a0a",
                    colorText: "#ffffff",
                    colorTextSecondary: "#a1a1aa",
                },
                elements: {
                    card: "bg-zinc-950 border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden",
                    headerTitle: "font-serif uppercase tracking-widest text-2xl",
                    headerSubtitle: "text-zinc-400 font-medium",
                    socialButtonsBlockButton: "bg-white/5 border-white/10 hover:bg-white/10 transition-all rounded-2xl",
                    socialButtonsBlockButtonText: "font-bold uppercase tracking-widest text-[10px]",
                    formButtonPrimary: "bg-gold text-zinc-950 hover:bg-white transition-all rounded-2xl font-black uppercase tracking-widest py-4",
                    footerActionText: "text-zinc-500",
                    footerActionLink: "text-gold hover:text-white transition-colors",
                    formFieldLabel: "text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 ml-2",
                    formFieldInput: "bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold transition-all",
                    identityPreviewText: "text-white",
                    identityPreviewEditButtonIcon: "text-gold",
                }
            }}
        >
            <html lang="en" className="dark">
                <body
                    className="antialiased text-zinc-100"
                >
                    <TopHeader />
                    <Navbar />
                    <main className="relative min-h-screen">
                        <div className="ambient-glow ambient-glow-1" />
                        <div className="ambient-glow ambient-glow-2" />
                        {children}
                    </main>
                    <ConditionalCTA />
                    <EmergencyProtocol />
                    <Footer />
                    <Chatbot />
                </body>
            </html>
        </ClerkProvider>
    );
}
