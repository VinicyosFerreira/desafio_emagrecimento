import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6 max-w-7xl">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:opacity-80 transition-opacity">
          Desafio 30 Dias
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">Sobre</Link>
          <Link to="/benefits" className="transition-colors hover:text-foreground/80 text-foreground/60">Benefícios</Link>
          <Link to="/testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">Depoimentos</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button>Inscreva-se</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[50%] flex flex-col pt-10">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-6 text-sm font-medium mt-8">
                <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground">Sobre</Link>
                <Link to="/benefits" className="transition-colors hover:text-foreground/80 text-foreground">Benefícios</Link>
                <Link to="/testimonials" className="transition-colors hover:text-foreground/80 text-foreground">Depoimentos</Link>
                <Button className="mt-4">Inscreva-se</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
