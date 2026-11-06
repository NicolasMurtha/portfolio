import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Nicolas Murtha</span>
        <span>{t.ui.footer}</span>
      </div>
    </footer>
  );
}
