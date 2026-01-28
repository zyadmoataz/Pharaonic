import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Solutions",
    description: "Explore the full stack of Pharaonic sovereign services, from end-to-end booking to specialized security liaisons and legal permit acquisition.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
