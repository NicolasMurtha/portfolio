import { ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n";
import SectionTitle from "./SectionTitle";
import Tags from "./Tags";

export default function Projects() {
  const { t } = useLang();
  const s = t.projects;
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle n="03">{s.title}</SectionTitle>
      <p className="-mt-4 mb-10 max-w-2xl text-muted-foreground">
        {s.intro}
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {s.items.map((p) => (
          <a
            key={p.n}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted">
              {p.preview ? (
                <div className="flex h-full w-full items-center justify-center p-6">
                  <img
                    src={p.preview}
                    alt={s.previewAlt(p.title)}
                    className="max-h-full w-auto rounded-md border border-border shadow-sm"
                  />
                </div>
              ) : (
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              )}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold">{p.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <Tags items={p.stack} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
