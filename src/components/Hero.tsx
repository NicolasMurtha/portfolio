import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { LINKS, PROFILE_PHOTO } from "../data";
import { useLang } from "../i18n";
import { downloadResume } from "../resume";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section id="topo" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> {h.badge}
          </span>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {h.title.before}
            <em className="text-primary">{h.title.em}</em>
            {h.title.after}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {h.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#destaques"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              {h.seeProjects} <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => downloadResume(t.resume)}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition hover:border-foreground"
            >
              <Download className="h-4 w-4" /> {t.ui.downloadResume}
            </button>
            <a
              href={t.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition hover:border-foreground"
            >
              {h.talk}
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-muted-foreground">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={t.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={t.email} aria-label="E-mail" className="hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="order-first w-40 sm:w-48 md:order-none md:w-full">
          <div className="relative aspect-[10/11] overflow-hidden rounded-xl border border-border bg-accent">
            <img
              src={PROFILE_PHOTO.src}
              srcSet={PROFILE_PHOTO.srcSet}
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, (min-width: 640px) 192px, 160px"
              width={PROFILE_PHOTO.width}
              height={PROFILE_PHOTO.height}
              alt={h.photoAlt}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-x-0 bottom-0 h-auto w-full"
            />
          </div>
        </div>
      </div>

      <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
        {t.facts.map((f) => (
          <div key={f.k} className="min-w-[180px]">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{f.k}</dt>
            <dd className="mt-2 text-sm">{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
