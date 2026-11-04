import { Bot, GraduationCap, Layers, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle";

const ITEMS = [
  { icon: GraduationCap, t: "Formação", d: "Análise e Desenvolvimento de Sistemas." },
  { icon: Layers, t: "Full stack", d: "Do modelo de dados à interface, passando por APIs." },
  { icon: Workflow, t: "Automação", d: "Rotinas automatizadas e integração entre sistemas." },
  { icon: Bot, t: "Inteligência artificial", d: "Aplicações que usam IA para resolver problemas reais." },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="04">Sobre</SectionTitle>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <p className="font-serif text-2xl leading-snug">
          Gosto de transformar processos manuais em software simples e confiável. Fora do código: jogos,
          academia e música.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-medium">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
