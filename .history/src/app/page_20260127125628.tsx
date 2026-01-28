import { Hero } from "@/components/sections/hero";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { MembershipCards } from "@/components/sections/MembershipCards";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { GlobalCTA } from "@/components/sections/global-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020202]">
      <Hero />
      <MembershipCards />
      <ServicesShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <GlobalCTA />
    </div>
  );
}
