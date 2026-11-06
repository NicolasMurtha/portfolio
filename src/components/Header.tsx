import { Download, Moon, Sun } from "lucide-react";
import type { Lang } from "../data";
import { useTheme } from "../hooks/useTheme";
import { useLang } from "../i18n";
import { downloadResume } from "../resume";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t.ui.themeToLight : t.ui.themeToDark}
      title={isDark ? t.ui.themeLight : t.ui.themeDark}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-foreground hover:text-foreground"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function LangToggle() {
  const { lang, setLang, t } = useLang();
  const options: { value: Lang; label: string; name: string }[] = [
    { value: "pt", label: "PT", name: "Português" },
    { value: "en", label: "EN", name: "English" },
  ];
  return (
    <div
      role="group"
      aria-label={t.ui.langLabel}
      className="inline-flex h-9 shrink-0 items-center rounded-md border border-border bg-card p-0.5 font-mono text-xs"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value === "pt" ? "pt-BR" : "en"}
          aria-pressed={lang === o.value}
          aria-label={o.name}
          title={o.name}
          onClick={() => setLang(o.value)}
          className={`h-full rounded px-2 transition ${
            lang === o.value ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="font-serif text-xl font-semibold tracking-tight">
          Nicolas Murtha<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#stack" className="hover:text-foreground">{t.ui.nav.stack}</a>
            <a href="#destaques" className="hover:text-foreground">{t.ui.nav.professional}</a>
            <a href="#projetos" className="hover:text-foreground">{t.ui.nav.personal}</a>
            <a href="#sobre" className="hover:text-foreground">{t.ui.nav.about}</a>
          </nav>
          <button
            onClick={() => downloadResume(t.resume)}
            className="hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-foreground sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> {t.ui.resumeShort}
          </button>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
