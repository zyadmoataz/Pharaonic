import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-solution";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { GlobalCTA } from "@/components/sections/global-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <TestimonialsSection />
      <GlobalCTA />
    </div>
  );
}
