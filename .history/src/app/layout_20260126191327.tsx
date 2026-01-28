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
  title: "Guidly | Egypt's Premium Enterprise Tourism Network",
  description:
    "The world's first AI-driven tourism safety ecosystem for Egypt. Experience Cairo and beyond with real-time danger maps, verified guides, and a cashless enterprise ecosystem.",
  keywords: ["Egypt Tourism", "Cairo Guide", "Travel Safety", "AI Travel Planner", "Egypt Business Travel", "Guidly"],
  authors: [{ name: "Guidly Enterprise" }],
  openGraph: {
    title: "Guidly | Egypt, Without the Shock",
    description: "Enterprise-grade safety and planning for your Egyptian journey.",
    url: "https://guidly.ai",
    siteName: "Guidly",
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
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
