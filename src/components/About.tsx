import { Bot, GraduationCap, Layers, Workflow } from "lucide-react";
import { useLang } from "../i18n";
import SectionTitle from "./SectionTitle";

// Ícones na mesma ordem dos itens de "about" em data.ts
const ICONS = [GraduationCap, Layers, Workflow, Bot];

export default function About() {
  const { t } = useLang();
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="04">{t.about.title}</SectionTitle>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <p className="font-serif text-2xl leading-snug">
          {t.about.quote}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.about.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.t}>
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-medium">{item.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
