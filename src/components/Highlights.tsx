import { ArrowUpRight, Info } from "lucide-react";
import { useLang } from "../i18n";
import SectionTitle from "./SectionTitle";
import Tags from "./Tags";

// Converte trechos entre *asteriscos* em itálico
function withItalics(text: string) {
  return text.split(/\*(.+?)\*/g).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

export default function Highlights() {
  const { t } = useLang();
  const s = t.highlights;
  return (
    <section id="destaques" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="03">{s.title}</SectionTitle>
      <p className="-mt-4 mb-10 max-w-2xl text-muted-foreground">
        {s.intro}
      </p>
      <div className="space-y-8">
        {s.items.map((h) => (
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
              <p className="mt-4 max-w-xl text-muted-foreground">{withItalics(h.desc)}</p>
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-primary">{s.contribution}</div>
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
                {s.visit} {h.title} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center border-t border-border bg-muted/40 p-6 md:border-l md:border-t-0">
              {h.img ? (
                <figure className="w-full">
                  <img
                    src={h.img}
                    alt={h.imgCaption ? s.imgAltCaption(h.imgCaption, h.title) : s.imgAlt(h.title)}
                    className={`${h.imgAspect ?? "aspect-[4/5]"} w-full rounded-lg object-cover`}
                  />
                  {h.imgCaption && (
                    <figcaption className="mt-2 text-center font-mono text-[11px] text-muted-foreground">
                      {h.imgCaption}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <div className="w-full rounded-lg border border-dashed border-border bg-background p-8 text-center">
                  <div className="font-serif text-3xl font-semibold">{h.title}</div>
                  <div className="mt-3 font-mono text-[11px] text-muted-foreground">{s.pending}</div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
