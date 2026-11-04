# Nicolas Murtha — Portfólio

Portfólio pessoal em React + TypeScript + Vite + Tailwind CSS v4.

## Rodar localmente

Requer Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # serve o build
```

## Onde editar

- **Conteúdo** (links, stack, destaques, projetos): `src/data.ts`
- **Cores / tema claro e escuro**: `src/index.css`
- **Imagens**: `public/site-assets/`
- **Currículo**: coloque o PDF em `public/curriculo.pdf` — os botões "Baixar currículo" passam a funcionar. Sem o arquivo, aparece um aviso.

## Deploy

O `dist/` é estático: funciona em Vercel, Netlify, GitHub Pages ou Cloudflare Pages
(comando de build `npm run build`, pasta de saída `dist`).
