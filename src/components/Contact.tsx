import { Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { LINKS } from "../data";
import { downloadResume } from "../resume";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl bg-foreground p-10 text-background md:p-16">
        <span className="font-mono text-xs opacity-60">05 — Contato</span>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
          Tem um projeto ou vaga em mente? Vamos conversar.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            onClick={downloadResume}
            className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Baixar currículo
          </button>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-5 py-3 text-sm font-medium hover:border-background"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-5 py-3 text-sm font-medium hover:border-background"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
