import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligence Briefings",
    description: "Access the Pharaonic intelligence layer. Strategic reports on Egyptian economic benchmarks, security green zones, and logistical optimizations.",
};

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
