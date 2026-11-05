// Todo o conteúdo do site fica aqui — edite este arquivo para atualizar o portfólio.

// Prefixa caminhos de public/ com o base do Vite (ex.: /portfolio/ no GitHub Pages)
const asset = (path: string) => import.meta.env.BASE_URL + path;

export const LINKS = {
  github: "https://github.com/NicolasMurtha",
  linkedin: "https://www.linkedin.com/in/nicolas-murtha-5b292b1ba/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=5516993827602&text=Ol%C3%A1+,+Nicolas+Murtha&type=phone_number&app_absent=0",
  // Coloque o arquivo em public/curriculo.pdf para habilitar o download
  resume: asset("curriculo.pdf"),
};

// Foto de perfil (recorte com fundo transparente), em duas resoluções para telas comuns e retina
export const PROFILE_PHOTO = {
  src: asset("site-assets/nicolas-murtha-720.webp"),
  srcSet: `${asset("site-assets/nicolas-murtha-360.webp")} 360w, ${asset("site-assets/nicolas-murtha-720.webp")} 720w`,
  width: 720,
  height: 743,
  alt: "Foto de Nicolas Murtha",
};

export const RESUME_FILENAME = "Curriculo Nicolas Murtha.pdf";

export const FACTS = [
  { k: "formação", v: "Análise e Desenvolvimento de Sistemas" },
  { k: "atuação", v: "automação · integrações · IA" },
  { k: "destaques", v: "IASense · iABUG" },
  { k: "status", v: "aberto a novas oportunidades" },
];

export const STACK = [
  { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML / CSS / JS"] },
  { title: "Backend", items: ["Node.js", "C# / .NET", "APIs REST", "Integração de sistemas"] },
  { title: "Dados", items: ["MySQL", "SQLite", "Modelagem relacional", "SQL"] },
  {
    title: "Automação & IA",
    items: ["Automação de processos", "Integração com LLMs", "Scripts & integrações"],
  },
];

export type Highlight = {
  n: string;
  /** Contexto do trabalho (empresa, bolsa, etc.) */
  tag: string;
  title: string;
  desc: string;
  /** O que eu fiz de fato no projeto */
  contributions: string[];
  /** Esclarecimento de autoria/propriedade */
  note?: string;
  url: string;
  stack: string[];
  img?: string;
};

/** Projetos profissionais e de pesquisa (experiência profissional e bolsa FAPESP) */
export const HIGHLIGHTS: Highlight[] = [
  {
    n: "01",
    tag: "Site institucional · Bolsa de pesquisa FAPESP",
    title: "IASense",
    desc: "Design e desenvolvimento do site institucional da IASense em Webflow, incluindo a implementação da identidade visual, a estrutura de páginas, o layout e a experiência responsiva.",
    contributions: [
      "Design completo do site",
      "Desenvolvimento e implementação em Webflow",
    ],
    note: "O site e a marca pertencem à IASense. Fui responsável pelo design e pelo desenvolvimento a pedido da empresa, durante minha bolsa de pesquisa FAPESP.",
    url: "https://www.iasense.com.br/",
    stack: ["Webflow"],
    img: asset("site-assets/iasense-hero.webp"),
  },
  {
    n: "02",
    tag: "Pesquisa & desenvolvimento · Bolsa FAPESP TT-04",
    title: "iABUG",
    desc: "Projeto de pesquisa e desenvolvimento para detecção de larvas da broca-da-cana (Diatraea saccharalis) com visão computacional e IA baseada em YOLO. A solução reúne um aplicativo para envio de imagens, uma API e um dashboard para visualizar e gerenciar os resultados das detecções.",
    contributions: [
      "Autor da proposta da bolsa FAPESP TT-04 que deu origem ao projeto",
      "Melhorias na API",
      "Desenvolvimento completo do dashboard web",
    ],
    note: "Minha participação se concentrou na API e no dashboard. O aplicativo de envio de imagens faz parte da solução, mas não foi desenvolvido por mim.",
    url: "https://iabug.iasense.com.br/",
    stack: ["YOLO", "Visão computacional"],
  },
];

export type Project = {
  n: string;
  title: string;
  desc: string;
  url: string;
  stack: string[];
  /** Imagem que preenche o card */
  img?: string;
  /** Imagem centralizada (ex.: popup de extensão) */
  preview?: string;
};

/** Projetos pessoais, desenvolvidos de forma independente */
export const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Jogoteca",
    desc: "Aplicativo desktop para organizar um backlog pessoal de jogos: listas em kanban, nota e review por jogo, com catálogo opcional via IGDB ou RAWG.",
    url: "https://github.com/NicolasMurtha/Jogoteca",
    stack: ["C#", ".NET 8", "WPF", "SQLite"],
    img: asset("site-assets/jogoteca_2_descobrir.jpg"),
  },
  {
    n: "02",
    title: "CriptoPrice",
    desc: "Extensão para Chrome que mostra o preço de BTC e ETH em USD ou BRL em tempo real, com dados da API da CoinGecko. Publicada na Chrome Web Store.",
    url: "https://chromewebstore.google.com/detail/criptoprice/jbagdmhabgekcnichjjpbfneicoabjmh",
    stack: ["JavaScript", "Manifest V3", "CoinGecko API"],
    preview: asset("site-assets/criptoprice-popup.png"),
  },
  {
    n: "03",
    title: "Gestão de Participantes",
    desc: "Painel para gerenciar participantes de eventos, com listagem, busca e paginação.",
    url: "https://github.com/NicolasMurtha/nlw-react",
    stack: ["TypeScript", "React", "Tailwind"],
    img: asset("site-assets/211b0e915c5a94f7.png"),
  },
  {
    n: "04",
    title: "Happy — Orfanatos",
    desc: "Plataforma para conectar pessoas a orfanatos, com cadastro e visualização de instituições.",
    url: "https://github.com/NicolasMurtha/Happy?tab=readme-ov-file",
    stack: ["Node.js", "Handlebars", "CSS"],
    img: asset("site-assets/36c3c9aadeb35f7b.png"),
  },
];
