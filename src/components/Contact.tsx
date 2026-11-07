import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { LINKS } from "../data";
import { useLang } from "../i18n";
import { downloadResume } from "../resume";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl bg-foreground bg-(image:--contact-glow) p-10 text-background md:p-16">
        <span className="font-mono text-xs opacity-60">{t.contact.eyebrow}</span>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
          {t.contact.title}
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={t.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={t.email}
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-5 py-3 text-sm font-medium hover:border-background"
          >
            <Mail className="h-4 w-4" /> E-mail
          </a>
          <button
            onClick={() => downloadResume(t.resume)}
            className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
          >
            <Download className="h-4 w-4" /> {t.ui.downloadResume}
          </button>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#0a66c2] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
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
