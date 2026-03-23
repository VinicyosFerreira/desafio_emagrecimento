import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits, formatBenefit } from "@/helpers/format-benefit";

export function BenefitsPage() {

  return (
    <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Info and Benefits */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Por que escolher o <span className="text-primary">Nosso Desafio?</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Nós não entregamos apenas um plano, entregamos um novo estilo de vida. 
            Nosso método foi validado por centenas de pessoas que buscavam resultados 
            duradouros sem abrir mão do prazer de comer.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-3">
                <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-snug">
                  {formatBenefit(benefit)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Conversion Form */}
        <div className="w-full max-w-lg mx-auto lg:ml-auto">
          <Card className="border-border shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <CardHeader className="space-y-1 pt-8">
              <CardTitle className="text-2xl font-bold text-center">Comece Agora!</CardTitle>
              <CardDescription className="text-center text-base">
                Preencha os dados abaixo para garantir sua vaga com desconto exclusivo.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome aqui" className="h-12 border-muted-foreground/20 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="h-12 border-muted-foreground/20 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input id="phone" type="tel" placeholder="(00) 00000-0000" className="h-12 border-muted-foreground/20 focus-visible:ring-primary" />
                </div>
                <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                  Quero me Inscrever Agora
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Seus dados estão protegidos. Não enviamos spam.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

