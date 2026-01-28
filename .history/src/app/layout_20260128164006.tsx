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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <html lang="en" className="dark">
                <body
                    className="antialiased text-zinc-100"
                >
                    <TopHeader />
                    <Navbar />
                    <main className="relative z-10">{children}</main>
                    <ConditionalCTA />
                    <EmergencyProtocol />
                    <Footer />
                    <Chatbot />
                </body>
            </html>
        </ClerkProvider>
    );
}
