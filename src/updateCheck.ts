// O GitHub Pages guarda o index.html em cache por até 10 minutos, então após um deploy
// o navegador pode continuar mostrando a versão antiga. Aqui o site busca version.json
// (sem cache) e, se o build publicado for mais novo, recarrega sozinho.

declare const __BUILD_ID__: string;

const RELOAD_KEY = "reloaded-for-build";

function session(action: (s: Storage) => string | null | void) {
  try {
    return action(sessionStorage);
  } catch {
    return null;
  }
}

async function check() {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}version.json?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return;
    const { buildId } = (await res.json()) as { buildId?: string };
    if (!buildId || buildId === __BUILD_ID__) return;

    // Evita loop: só recarrega uma vez por build novo
    if (session((s) => s.getItem(RELOAD_KEY)) === buildId) return;
    session((s) => s.setItem(RELOAD_KEY, buildId));

    // O parâmetro ?v= força uma URL nova, ignorando o cache do navegador e do CDN
    const url = new URL(location.href);
    url.searchParams.set("v", buildId);
    location.replace(url.toString());
  } catch {
    // Sem rede ou arquivo ausente: segue com a versão atual
  }
}

export function startUpdateCheck() {
  if (!import.meta.env.PROD) return;

  // Remove o ?v= da barra de endereço depois do recarregamento
  const url = new URL(location.href);
  if (url.searchParams.has("v")) {
    url.searchParams.delete("v");
    history.replaceState(history.state, "", url.toString());
  }

  check();
  // Verifica de novo quando a pessoa volta para a aba
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") check();
  });
}
