import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { CARDS } from "@/constants/cards";

export function CardsSection() {

  return (
    <section id="benefits" className="py-20 md:py-32 bg-muted/30">
      <div className=" container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Por que participar do nosso desafio?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nosso método é cientificamente comprovado e já ajudou milhares de
            pessoas a transformarem suas vidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 content-center">
          {CARDS.map((card, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border bg-card shadow-sm hover:shadow-lg hover:scale-110 hover:bg-muted transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-[center_65%]"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" className="w-full mt-4">
                  Quero saber mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
