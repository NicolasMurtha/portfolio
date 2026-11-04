import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { downloadResume } from "../resume";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-foreground hover:text-foreground"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="font-serif text-xl font-semibold tracking-tight">
          Nicolas Murtha<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#stack" className="hover:text-foreground">Stack</a>
            <a href="#destaques" className="hover:text-foreground">Destaques</a>
            <a href="#projetos" className="hover:text-foreground">Projetos</a>
            <a href="#sobre" className="hover:text-foreground">Sobre</a>
          </nav>
          <button
            onClick={downloadResume}
            className="hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-foreground sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Currículo
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
