import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopHeader } from "@/components/top-header";
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
  title: "NileVista | Egypt's Premium Tourism Ecosystem",
  description:
    "Experience the wonders of Egypt with NileVista, the premier AI-driven tourism platform for safe, luxury, and personalized journeys through Cairo and beyond.",
  keywords: ["Egypt Tourism", "Cairo Guide", "NileVista", "AI Travel Planner", "Luxury Travel Egypt", "Travel Safety Egypt"],
  authors: [{ name: "NileVista Group" }],
  openGraph: {
    title: "NileVista | Egypt, Reimagined",
    description: "Sovereign safety and personalized luxury for your Egyptian protocol.",
    url: "https://nilevista.ai",
    siteName: "NileVista",
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
        </body>
      </html>
    </ClerkProvider>
  );
}
