import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/imgs/healthy1.jpg";
import img2 from "@/assets/imgs/healthy2.jpg";
import img3 from "@/assets/imgs/healthy3.jpg";

export function CardsSection() {
  const cards = [
    {
      title: "Alimentação Balanceada",
      description:
        "Aprenda a comer o que gosta sem culpa. Plano alimentar flexível e focado em resultados reais.",
      image: img1,
      alt: "Pessoa preparando comida saudável",
    },
    {
      title: "Treinos Eficientes",
      description:
        "Exercícios focados para queimar gordura de forma rápida, com apenas 30 minutos diários em casa.",
      image: img2,
      alt: "Pessoa se exercitando",
    },
    {
      title: "Resultados Duradouros",
      description:
        "Construa hábitos saudáveis que vão manter o seu peso ideal pelo resto da sua vida.",
      image: img3,
      alt: "Pessoa mostrando resultados",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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
          {cards.map((card, index) => (
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
