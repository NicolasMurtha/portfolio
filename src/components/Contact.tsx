import { Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { LINKS } from "../data";
import { downloadResume } from "../resume";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl [background:var(--contact-bg)] p-10 text-[color:var(--contact-fg)] [box-shadow:var(--contact-depth)] md:p-16">
        <span className="font-mono text-xs text-[color:var(--contact-eyebrow)]">05 — Contato</span>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
          Tem um projeto ou vaga em mente? Vamos conversar.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--contact-btn-bg)] px-5 py-3 text-sm font-medium text-[color:var(--contact-btn-fg)] [box-shadow:inset_0_0_0_1px_var(--contact-btn-border)] transition-opacity duration-200 hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Baixar currículo
          </button>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--contact-line)] px-5 py-3 text-sm font-medium text-[color:var(--contact-link-fg)] transition-colors duration-200 hover:border-[color:var(--contact-linkedin-line)] hover:bg-[color:var(--contact-linkedin-bg)] hover:text-[color:var(--contact-fg)]"
          >
            <Linkedin className="h-4 w-4 text-[color:var(--contact-linkedin)]" /> LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--contact-line)] px-5 py-3 text-sm font-medium text-[color:var(--contact-link-fg)] transition-colors duration-200 hover:border-[color:var(--contact-github-line)] hover:bg-[color:var(--contact-hover-bg)] hover:text-[color:var(--contact-fg)]"
          >
            <Github className="h-4 w-4 text-[color:var(--contact-github)]" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
