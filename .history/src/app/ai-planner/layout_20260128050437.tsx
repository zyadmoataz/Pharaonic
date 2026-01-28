import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Protocol Architect",
    description: "Architect your Egyptian deployment with our proprietary AI logic engine. Real-time cost benchmarks, security corridor mapping, and strategic asset allocation.",
};

export default function AIPlannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
