import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section id="apresentacao" className="py-20 md:py-32 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
              A verdade sobre o emagrecimento definitivo
            </h2>
            <p className="text-lg text-foreground/80 font-medium">
              Assista ao vídeo e descubra por que a maioria das dietas falham e qual é o segredo para perder peso de forma saudável, sem o temido efeito sanfona.
            </p>
            <ul className="space-y-4 text-foreground/80 mt-2">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">1</div>
                <span>Entenda como o seu metabolismo funciona e ative a queima de gordura natural.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">2</div>
                <span>Aprenda a escolher os alimentos corretos para nunca mais passar fome.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">3</div>
                <span>Exercícios focados e de alta intensidade que cabem na sua rotina corrida.</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Garantir minha vaga no desafio
              </Button>
            </div>
          </div>

            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-border bg-muted aspect-video relative">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/SHQ_g5UYe1g" 
              title="A importância da alimentação e exercícios físicos" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
