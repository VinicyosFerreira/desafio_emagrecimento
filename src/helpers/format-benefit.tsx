export const benefits = [
    "Plano alimentar flexível e focado em resultados reais.",
    "Cronograma diário de exercícios para fazer em casa.",
    "Comunidade exclusiva para suporte e motivação mútua.",
    "Acesso vitalício ao conteúdo e atualizações futuras.",
    "Receitas deliciosas que ajudam a queimar gordura.",
    "Videoaulas explicativas sobre a ciência do emagrecimento.",
    "Suporte técnico rápido para tirar todas as suas dúvidas.",
    "Planilhas de acompanhamento para medir sua evolução semanal.",
    "Dicas de mentalidade para evitar o efeito sanfona.",
    "Acesso mobile completo para seguir o desafio de qualquer lugar.",
  ];

  export const formatBenefit = (text: string) => {
    const boldMap: Record<string, string[]> = {
      "Plano alimentar": ["Plano alimentar", "resultados reais"],
      "Cronograma diário": ["Cronograma diário", "fazer em casa"],
      "Comunidade exclusiva": ["Comunidade exclusiva", "motivação mútua"],
      "Acesso vitalício": ["Acesso vitalício", "atualizações futuras"],
      "Receitas deliciosas": ["Receitas deliciosas", "queimar gordura"],
      "Videoaulas explicativas": ["Videoaulas explicativas", "ciência do emagrecimento"],
      "Suporte técnico": ["Suporte técnico", "tirar todas as suas dúvidas"],
      "Planilhas de acompanhamento": ["Planilhas de acompanhamento", "evolução semanal"],
      "Dicas de mentalidade": ["Dicas de mentalidade", "efeito sanfona"],
      "Acesso mobile": ["Acesso mobile", "qualquer lugar"],
    };

    let formatted = text;
    const key = Object.keys(boldMap).find(k => text.startsWith(k));
    if (key) {
      boldMap[key].forEach(word => {
        formatted = formatted.replace(word, `**${word}**`);
      });
    }

    return formatted.split("**").map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
    );
  };

