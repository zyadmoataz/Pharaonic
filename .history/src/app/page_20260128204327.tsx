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
    <div className="flex flex-col min-h-screen">
      <Hero />

      <div className="section-divider" />
      <section className="relative z-20">
        <TrendingSection />
      </section>

      <div className="section-divider" />
      <section className="section-alt py-32 z-20">
        <HistoricalSection />
      </section>

      <div className="section-divider" />
      <section className="relative z-20">
        <MembershipCards />
      </section>

      <div className="section-divider" />
      <section className="section-alt py-32 z-20">
        <ServicesShowcase />
      </section>

      <div className="section-divider" />
      <section className="relative z-20">
        <LiaisonCallout />
      </section>

      <div className="section-divider" />
      <section className="section-alt py-32 z-20">
        <FeaturesSection />
      </section>

      <div className="section-divider" />
      <section className="relative z-20">
        <BlogPreview />
      </section>

      <div className="section-divider" />
      <section className="section-alt py-32 z-20">
        <TestimonialsSection />
      </section>
    </div>
  );
}
