import { ArrowUpRight, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { FACTS, LINKS } from "../data";
import { downloadResume } from "../resume";

export default function Hero() {
  return (
    <section id="topo" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-primary" /> Disponível para novas oportunidades
      </span>
      <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
        Desenvolvedor <em className="text-primary">full stack</em> que constrói do banco à interface.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Sou Nicolas Murtha, formado em Análise e Desenvolvimento de Sistemas. Trabalho com aplicações
        web, automação de processos, integração de sistemas e soluções com inteligência artificial.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projetos"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
        >
          Ver projetos <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          onClick={downloadResume}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition hover:border-foreground"
        >
          <Download className="h-4 w-4" /> Baixar currículo
        </button>
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition hover:border-foreground"
        >
          Falar comigo
        </a>
      </div>

      <div className="mt-8 flex gap-4 text-muted-foreground">
        <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
          <Github className="h-5 w-5" />
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-foreground">
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
        {FACTS.map((f) => (
          <div key={f.k} className="min-w-[180px]">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{f.k}</dt>
            <dd className="mt-2 text-sm">{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
