import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Curated Expeditions",
    description: "Sovereign-grade Egyptian tour packages. Pre-audited itineraries designed for maximum strategic efficiency and zero-friction navigation.",
};

export default function RecommendationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
