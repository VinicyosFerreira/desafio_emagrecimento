import { Hero } from "@/components/Hero";
import { CardsSection } from "@/components/CardsSection";
import { VideoSection } from "@/components/VideoSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <CardsSection />
      <VideoSection />
      <FAQSection />
      <TestimonialsSection initialDisplayCount={3} />
    </>
  );
}
