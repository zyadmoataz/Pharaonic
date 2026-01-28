import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem-solution";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      {/* Features and Testimonials will be added here */}
    </div>
  );
}
