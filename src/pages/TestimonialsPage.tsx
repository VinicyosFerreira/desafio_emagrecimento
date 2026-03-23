import { TestimonialsSection } from "@/components/TestimonialsSection";

export function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      <TestimonialsSection initialDisplayCount={6} />
    </div>
  );
}
