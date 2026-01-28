import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-solution";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}
