import { Hero } from "@/components/Hero";
import { CardsSection } from "@/components/CardsSection";
import { VideoSection } from "@/components/VideoSection";
import { FAQSection } from "@/components/FAQSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <CardsSection />
      <VideoSection />
      <FAQSection />
    </>
  );
}
