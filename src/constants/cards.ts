interface ICard {
    title: string;
    description: string;
    image: string;
    alt: string;
}

import img1 from "@/assets/imgs/healthy1.jpg";
import img2 from "@/assets/imgs/healthy2.jpg";
import img3 from "@/assets/imgs/healthy3.jpg";

export const CARDS: ICard[] = [
    {
        title: "Alimentação Balanceada",
        description: "Aprenda a comer o que gosta sem culpa. Plano alimentar flexível e focado em resultados reais.",
        image: img1,
        alt: "Pessoa preparando comida saudável"
    },
    {
        title: "Treinos Eficientes",
        description: "Exercícios focados para queimar gordura de forma rápida, com apenas 30 minutos diários em casa.",
        image: img2,
        alt: "Pessoa se exercitando"
    },
    {
        title: "Resultados Duradouros",
        description: "Construa hábitos saudáveis que vão manter o seu peso ideal pelo resto da sua vida.",
        image: img3,
        alt: "Pessoa mostrando resultados"
    }
];