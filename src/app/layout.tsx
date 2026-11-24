import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TopHeader } from "@/components/top-header";
import { ConditionalCTA } from "@/components/conditional-cta";
import { LazyFloatingUI } from "@/components/LazyFloatingUI";
import { AppAuthProvider } from "@/components/providers/auth-provider";
import { ToastProvider } from "@/components/ui/toast";
import { OfflineBanner } from "@/components/ui/offline-banner";
import { siteConfig } from "@/lib/env";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | The Sovereign Egyptian Gateway`,
    template: "%s | Pharaonic Intelligence",
  },
  description: siteConfig.description,
  keywords: [
    "Sovereign Egyptian Travel",
    "Pharaonic Protocol",
    "Cairo Strategic Logistics",
    "AI Egypt Itinerary",
    "Luxury Heritage Access",
    "Authorized Drone Permits Egypt",
    "Security Protocol Cairo",
    "VIP Nile Valley Transit",
    "Egyptian Archaeological Liaison",
  ],
  authors: [{ name: "Strategic Intelligence Department" }],
  creator: "Pharaonic Command",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pharaonic | Infrastructure for Discovery",
    description: "Bypass legacy travel friction. Access Egypt through a sovereign intelligence layer.",
    url: siteConfig.url,
    siteName: "Pharaonic Integrated Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharaonic Protocol | Authorized Egyptian Experience",
    description: "Direct-to-source logistics and heritage security in the Nile Valley.",
  },
  metadataBase: new URL(siteConfig.url),
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.variable} ${poppins.variable} antialiased text-zinc-100 font-sans`}>
        <AppAuthProvider>
          <ToastProvider>
            <OfflineBanner />
            <TopHeader />
            <Navbar />
            <main className="relative min-h-screen">
              <div className="ambient-glow ambient-glow-1" />
              <div className="ambient-glow ambient-glow-2" />
              {children}
            </main>
            <ConditionalCTA />
            <Footer />
            <LazyFloatingUI />
          </ToastProvider>
        </AppAuthProvider>
      </body>
    </html>
  );
}
