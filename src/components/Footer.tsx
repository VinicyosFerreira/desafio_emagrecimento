import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16 border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-bold text-2xl text-foreground">
              Desafio 30 Dias
            </span>
            <p className="text-muted-foreground text-sm max-w-md">
              Nosso objetivo é transformar a maneira como você se relaciona com a comida e os exercícios, promovendo uma mudança de vida duradoura através de ciência e comunidade.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground text-lg">Navegação</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre o Método</a></li>
              <li><a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-foreground transition-colors">Testemunhos</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground text-lg">Pronto para começar?</h3>
            <p className="text-sm text-muted-foreground">
              Junte-se a milhares de pessoas que já transformaram seus corpos e mentes.
            </p>
            <Button className="mt-2 text-base font-semibold w-full sm:w-auto">
              Inscreva-se Agora
            </Button>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border mt-12 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Desafio 30 Dias. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
