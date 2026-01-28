import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopHeader } from "@/components/top-header";
import { Chatbot } from "@/components/chatbot";
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
    title: "Pharaonic | The Authorized Egyptian Experience",
    description:
        "Access the authorized layer of Egyptian tourism. Pharaonic provides secured permits, luxury logistics, and AI-driven itineraries for the modern explorer.",
    keywords: ["Egypt Tourism", "Pharaonic", "Cairo Guide", "AI Travel Planner", "Luxury Travel Egypt", "Travel Safety Egypt"],
    authors: [{ name: "Pharaonic Group" }],
    openGraph: {
        title: "Pharaonic | Egypt, Reimagined",
        description: "Sovereign safety and personalized luxury for your Egyptian protocol.",
        url: "https://pharaonic.ai",
        siteName: "Pharaonic",
        locale: "en_US",
        type: "website",
    },
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
                    <Footer />
                    <Chatbot />
                </body>
            </html>
        </ClerkProvider>
    );
}
