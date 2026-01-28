import { Hero } from "@/components/sections/hero";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { HistoricalSection } from "@/components/sections/HistoricalSection";
import { MembershipCards } from "@/components/sections/MembershipCards";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020202]">
      <Hero />

      {/* Visual Separation: Gradient Transition */}
      <div className="h-64 bg-gradient-to-b from-[#020202] to-zinc-950" />
      <TrendingSection />

      {/* Visual Separation: Ambient Block */}
      <div className="h-64 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      </div>
      <HistoricalSection />

      <MembershipCards />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}
