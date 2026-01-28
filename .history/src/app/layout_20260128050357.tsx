import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopHeader } from "@/components/top-header";
import { ConditionalCTA } from "@/components/conditional-cta";
import { Chatbot } from "@/components/chatbot";
import { EmergencyProtocol } from "@/components/EmergencyProtocol";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" className="dark">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020202] text-zinc-100`}
                >
                    <TopHeader />
                    <Navbar />
                    <main>{children}</main>
                    <ConditionalCTA />
                    <EmergencyProtocol />
                    <Footer />
                    <Chatbot />
                </body>
            </html>
        </ClerkProvider>
    );
}
