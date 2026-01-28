import { Hero } from "@/components/sections/hero";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { HistoricalSection } from "@/components/sections/HistoricalSection";
import { LiaisonCallout } from "@/components/sections/LiaisonCallout";
import { MembershipCards } from "@/components/sections/MembershipCards";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020202]">
      <Hero />

      <div className="h-64 bg-gradient-to-b from-[#020202] to-black relative z-10" />
      <div className="bg-black relative z-20">
        <TrendingSection />
      </div>

      <div className="h-64 bg-[#050505] relative z-20 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      </div>
      <div className="bg-[#050505] relative z-20">
        <HistoricalSection />
      </div>

      <LiaisonCallout />

      <MembershipCards />
      <ServicesShowcase />
      <FeaturesSection />
      <BlogPreview />
      <TestimonialsSection />
    </div>
  );
}
