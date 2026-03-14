import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Como o desafio de 30 dias funciona?",
      answer: "Você receberá acesso imediato à nossa plataforma com o plano alimentar completo, cronograma de exercícios diários e acesso à comunidade exclusiva para suporte, tudo passo a passo para os próximos 30 dias."
    },
    {
      question: "Preciso ir à academia?",
      answer: "Não! Todos os exercícios foram desenhados para serem feitos em casa, utilizando apenas o peso do seu próprio corpo, em sessões curtas de 20 a 30 minutos."
    },
    {
      question: "O plano alimentar é muito restritivo?",
      answer: "Pelo contrário. Nosso foco é a reeducação alimentar. Ensinamos você a fazer escolhas inteligentes, permitindo que você coma de tudo, de forma balanceada e sem sofrimento."
    },
    {
      question: "Terei suporte durante o desafio?",
      answer: "Absolutamente! Você fará parte de uma comunidade ativa com outras pessoas no mesmo objetivo, além de contar com o suporte da nossa equipe técnica para tirar dúvidas diárias."
    },
    {
      question: "E se eu não puder começar imediatamente?",
      answer: "O seu acesso é vitalício! Você pode se inscrever agora para garantir o desconto atual e iniciar o desafio no momento que for mais adequado para a sua rotina."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire todas as suas dúvidas sobre o desafio e junte-se a nós.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
