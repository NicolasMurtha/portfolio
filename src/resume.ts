import { toast } from "sonner";
import { LINKS, RESUME_FILENAME } from "./data";

const UNAVAILABLE = "O currículo ainda não está disponível para download.";

export async function downloadResume() {
  try {
    const res = await fetch(LINKS.resume, { method: "HEAD" });
    const type = res.headers.get("content-type") ?? "";
    // Em dev o Vite devolve index.html para arquivos inexistentes, então checamos o tipo
    if (!res.ok || type.includes("text/html")) {
      toast.info(UNAVAILABLE);
      return;
    }
  } catch {
    toast.info(UNAVAILABLE);
    return;
  }
  const a = document.createElement("a");
  a.href = LINKS.resume;
  a.download = RESUME_FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
