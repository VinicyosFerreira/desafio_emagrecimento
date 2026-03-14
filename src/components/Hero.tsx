import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden isolate">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&auto=format&fit=crop&q=80" 
          alt="Pessoas treinando na academia" 
          className="absolute inset-0 w-full h-full object-cover object-center bg-zinc-900"
        />
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-4xl gap-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Transforme seu corpo em <span className="pb-2 inline-block">30 Dias</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-2xl mx-auto font-medium">
          Participe do nosso desafio de emagrecimento e descubra o método comprovado para perder peso com saúde, sem dietas malucas.
        </p>
        
        <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3 mt-4">
          <Input 
            type="email" 
            placeholder="Digite seu melhor e-mail" 
            className="h-12 flex-1 bg-background text-foreground"
          />
          <Button size="lg" className="h-12 px-8 font-semibold text-base whitespace-nowrap">
            Inscreva-se
          </Button>
        </div>
      </div>
    </section>
  );
}
