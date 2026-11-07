import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { useLang } from "../i18n";
import SectionTitle from "./SectionTitle";
import Tags from "./Tags";

/** Linha do tempo vertical em formato de slider: um cargo por vez, do mais recente ao mais antigo */
export default function Experience() {
  const { t } = useLang();
  const s = t.experience;
  const items = s.items;
  const [index, setIndex] = useState(0);

  const go = (i: number) => setIndex(Math.max(0, Math.min(items.length - 1, i)));
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  const progress = items.length > 1 ? (index / (items.length - 1)) * 100 : 0;
  const arrowClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-40";

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="02">{s.title}</SectionTitle>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={s.title}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="grid grid-cols-[auto_1fr] gap-5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring md:grid-cols-[240px_1fr] md:gap-10"
      >
        {/* Trilho com as datas (navegação) */}
        <div className="relative">
          <div className="absolute bottom-3 left-[7px] top-3 w-px bg-border" aria-hidden="true">
            <div
              className="w-full bg-primary transition-[height] duration-500 ease-out motion-reduce:transition-none"
              style={{ height: `${progress}%` }}
            />
          </div>
          <ol className="relative flex h-full flex-col justify-between gap-8">
            {items.map((item, i) => {
              const active = i === index;
              return (
                <li key={item.dates}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={active ? "step" : undefined}
                    aria-label={`${item.role} — ${item.org}, ${item.dates}`}
                    className="group flex items-start gap-3 text-left"
                  >
                    <span
                      className={`mt-1 h-[15px] w-[15px] shrink-0 rounded-full border-2 transition ${
                        active
                          ? "border-primary bg-primary ring-4 ring-primary/20"
                          : i < index
                            ? "border-primary bg-background"
                            : "border-border bg-background group-hover:border-foreground"
                      }`}
                    />
                    <span className="hidden md:block">
                      <span
                        className={`block font-mono text-xs ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                      >
                        {item.dates}
                      </span>
                      <span
                        className={`mt-1 block text-sm ${active ? "font-medium text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                      >
                        {item.org}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Cartões empilhados; só o ativo fica visível e os outros deslizam na vertical */}
        <div className="min-w-0">
          <div className="grid">
            {items.map((item, i) => {
              const active = i === index;
              const offset = i < index ? "-translate-y-6" : i > index ? "translate-y-6" : "translate-y-0";
              return (
                <article
                  key={item.dates}
                  aria-hidden={!active}
                  aria-roledescription="slide"
                  aria-label={s.position(i + 1, items.length)}
                  className={`[grid-area:1/1] rounded-xl border border-border bg-card p-6 transition duration-500 ease-out motion-reduce:transition-none md:p-8 ${offset} ${
                    active ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="font-mono text-xs text-primary">{item.dates}</div>
                  <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight md:text-3xl">{item.role}</h3>
                  <div className="mt-1 text-muted-foreground">{item.org}</div>

                  {item.metric && (
                    <div className="mt-5 flex flex-col gap-1 rounded-lg bg-accent px-4 py-3 text-accent-foreground sm:flex-row sm:items-baseline sm:gap-3">
                      <span className="font-serif text-3xl font-semibold">{item.metric.value}</span>
                      <span className="text-sm">{item.metric.label}</span>
                    </div>
                  )}

                  <ul className="mt-5 space-y-1.5 text-sm">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-primary">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Tags items={item.tags} className="mt-5" />
                </article>
              );
            })}
          </div>

          {/* Controles do slider */}
          <div className="mt-4 flex items-center gap-2">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label={s.prev} className={arrowClass}>
              <ChevronUp className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index === items.length - 1}
              aria-label={s.next}
              className={arrowClass}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
            <span className="ml-2 font-mono text-xs text-muted-foreground" aria-live="polite">
              {s.position(index + 1, items.length)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
