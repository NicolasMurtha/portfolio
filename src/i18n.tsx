import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CONTENT, type Content, type Lang } from "./data";

const STORAGE_KEY = "lang";

const isLang = (v: unknown): v is Lang => v === "pt" || v === "en";

/**
 * Idioma inicial, nesta ordem:
 * 1. ?lang=en / ?lang=pt no endereço (para mandar o link direto em um idioma)
 * 2. escolha salva pelo visitante no botão PT | EN
 * 3. idioma principal do navegador: português → PT, qualquer outro → EN
 */
function detectLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (isLang(q)) return q;
  } catch {
    /* ignora */
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* armazenamento indisponível */
  }
  const primary = (navigator.languages?.[0] ?? navigator.language ?? "").toLowerCase();
  return primary.startsWith("pt") ? "pt" : "en";
}

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void; t: Content };

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* armazenamento indisponível */
    }
    // remove um ?lang= antigo do endereço para não contradizer a escolha
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      history.replaceState(history.state, "", url.toString());
    }
  }, []);

  const t = CONTENT[lang];

  // Mantém <html lang>, o título da aba e a descrição em sincronia com o idioma
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.meta.description);
  }, [t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de <LangProvider>");
  return ctx;
}
