import { ArrowUpRight, Info } from "lucide-react";
import { HIGHLIGHTS } from "../data";
import SectionTitle from "./SectionTitle";
import Tags from "./Tags";

export default function Highlights() {
  return (
    <section id="destaques" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="02">Projetos profissionais e de pesquisa</SectionTitle>
      <p className="-mt-4 mb-10 max-w-2xl text-muted-foreground">
        Trabalhos realizados durante minha experiência profissional e bolsa de pesquisa FAPESP. Os
        projetos pertencem às respectivas organizações; abaixo está a minha contribuição em cada um.
      </p>
      <div className="space-y-8">
        {HIGHLIGHTS.map((h) => (
          <article
            key={h.n}
            className="grid overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-lg md:grid-cols-[1fr_320px]"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary">{h.n}</span>
                <span>{h.tag}</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-4xl">{h.title}</h3>
              <p className="mt-4 max-w-xl text-muted-foreground">{h.desc}</p>
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-primary">Minha contribuição</div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {h.contributions.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-primary">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {h.stack.length > 0 && <Tags items={h.stack} className="mt-5" />}
              {h.note && (
                <p className="mt-5 flex max-w-xl gap-2 rounded-md bg-muted/60 px-3 py-2.5 text-xs text-muted-foreground">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{h.note}</span>
                </p>
              )}
              <a
                href={h.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition hover:border-foreground"
              >
                Visitar {h.title} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center border-t border-border bg-muted/40 p-6 md:border-l md:border-t-0">
              {h.img ? (
                <img src={h.img} alt={`Projeto ${h.title}`} className="aspect-[4/5] w-full rounded-lg object-cover" />
              ) : (
                <div className="w-full rounded-lg border border-dashed border-border bg-background p-8 text-center">
                  <div className="font-serif text-3xl font-semibold">{h.title}</div>
                  <div className="mt-3 font-mono text-[11px] text-muted-foreground">// captura pendente</div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
