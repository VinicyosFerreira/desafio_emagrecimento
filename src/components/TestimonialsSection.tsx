import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { TESTIMONIALS } from "@/constants/testimonials";

interface TestimonialsSectionProps {
  initialDisplayCount?: number;
  showAllInitially?: boolean;
}

export function TestimonialsSection({ 
  initialDisplayCount = 3, 
  showAllInitially = false 
}: TestimonialsSectionProps) {
  const [showAll, setShowAll] = useState(showAllInitially);

  const displayedTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, initialDisplayCount);

  const location = useLocation();
  const isHomePage = location.pathname === "/"

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o desafio transformou a vida de quem decidiu dar o primeiro passo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar className="h-12 w-12 border border-border">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h4 className="text-base font-semibold text-foreground leading-none">
                    {testimonial.name}
                  </h4>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <Quote size={24} className="ml-auto text-primary opacity-20" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAllInitially && !isHomePage && (
          <div className="mt-12 text-center">
            {showAll ? (
              <Button 
                variant="outline" 
                onClick={() => setShowAll(false)}
                className="hover:bg-muted"
              >
                Ver menos
              </Button>
            ) : (
              <Button 
                onClick={() => setShowAll(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Ver mais depoimentos
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
