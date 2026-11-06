import { toast } from "sonner";
import type { Content } from "./data";

/** Baixa o currículo do idioma atual (ou avisa se o arquivo ainda não existe) */
export async function downloadResume(resume: Content["resume"]) {
  try {
    const res = await fetch(resume.url, { method: "HEAD" });
    const type = res.headers.get("content-type") ?? "";
    // Em dev o Vite devolve index.html para arquivos inexistentes, então checamos o tipo
    if (!res.ok || type.includes("text/html")) {
      toast.info(resume.unavailable);
      return;
    }
  } catch {
    toast.info(resume.unavailable);
    return;
  }
  const a = document.createElement("a");
  a.href = resume.url;
  a.download = resume.filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
