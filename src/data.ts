// Todo o conteúdo do site fica aqui — edite este arquivo para atualizar o portfólio.
// Os textos existem em português (pt) e inglês (en); o objeto `en` precisa ter a mesma estrutura do `pt`.

// Prefixa caminhos de public/ com o base do Vite (ex.: /portfolio/ no GitHub Pages)
const asset = (path: string) => import.meta.env.BASE_URL + path;

export type Lang = "pt" | "en";

export const EMAIL = "nickymurtha@gmail.com";

const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

export const LINKS = {
  github: "https://github.com/NicolasMurtha",
  linkedin: "https://www.linkedin.com/in/nicolas-murtha-5b292b1ba/",
};

const whatsapp = (text: string) =>
  `https://api.whatsapp.com/send/?phone=5516993827602&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

// Foto de perfil (recorte com fundo transparente), em duas resoluções para telas comuns e retina
export const PROFILE_PHOTO = {
  src: asset("site-assets/nicolas-murtha-720.webp"),
  srcSet: `${asset("site-assets/nicolas-murtha-360.webp")} 360w, ${asset("site-assets/nicolas-murtha-720.webp")} 720w`,
  width: 720,
  height: 743,
};

export type Highlight = {
  n: string;
  /** Contexto do trabalho (empresa, bolsa, etc.) */
  tag: string;
  title: string;
  /** Trechos entre *asteriscos* aparecem em itálico (ex.: nomes científicos) */
  desc: string;
  /** O que eu fiz de fato no projeto */
  contributions: string[];
  /** Esclarecimento de autoria/propriedade */
  note?: string;
  url: string;
  stack: string[];
  img?: string;
  /** Proporção da imagem (padrão: aspect-[4/5]) */
  imgAspect?: string;
  /** Legenda abaixo da imagem (ex.: quando é ilustrativa) */
  imgCaption?: string;
};

export type Experience = {
  dates: string;
  role: string;
  org: string;
  /** Resultado em destaque (opcional) */
  metric?: { value: string; label: string };
  bullets: string[];
  tags: string[];
};

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

// Dados que não mudam com o idioma
const IASENSE = { n: "01", title: "IASense", url: "https://www.iasense.com.br/", stack: [], img: asset("site-assets/iasense-hero.webp") };
const IABUG = {
  n: "02",
  title: "IABug",
  url: "https://iabug.iasense.com.br/",
  stack: [],
  img: asset("site-assets/iabug-referencia.webp"),
  imgAspect: "aspect-square",
};
const JOGOTECA = {
  n: "01",
  title: "Jogoteca",
  url: "https://github.com/NicolasMurtha/Jogoteca",
  stack: ["C#", ".NET 8", "WPF", "SQLite"],
  img: asset("site-assets/jogoteca_2_descobrir.jpg"),
};
const CRIPTOPRICE = {
  n: "02",
  title: "CriptoPrice",
  url: "https://chromewebstore.google.com/detail/criptoprice/jbagdmhabgekcnichjjpbfneicoabjmh",
  stack: ["JavaScript", "Manifest V3", "CoinGecko API"],
  preview: asset("site-assets/criptoprice-popup.png"),
};
const PARTICIPANTES = {
  n: "03",
  url: "https://github.com/NicolasMurtha/nlw-react",
  stack: ["TypeScript", "React", "Tailwind"],
  img: asset("site-assets/211b0e915c5a94f7.png"),
};
const HAPPY = {
  n: "04",
  url: "https://github.com/NicolasMurtha/Happy?tab=readme-ov-file",
  stack: ["Node.js", "Handlebars", "CSS"],
  img: asset("site-assets/36c3c9aadeb35f7b.png"),
};

const pt = {
  meta: {
    htmlLang: "pt-BR",
    title: "Nicolas Murtha — Desenvolvedor Full Stack",
    description:
      "Portfólio de Nicolas Murtha, desenvolvedor full stack com foco em aplicações web, integração de sistemas, automação e IA.",
  },
  // Currículo baixado pelos botões (arquivo em public/)
  resume: {
    url: asset("curriculo.pdf"),
    filename: "Curriculo Nicolas Murtha.pdf",
    unavailable: "O currículo ainda não está disponível para download.",
  },
  whatsapp: whatsapp("Olá, Nicolas Murtha"),
  email: mailto("Contato pelo portfólio"),
  ui: {
    nav: { stack: "Stack", experience: "Experiência", professional: "Profissional", personal: "Pessoais", about: "Sobre" },
    resumeShort: "Currículo",
    downloadResume: "Baixar currículo",
    themeToLight: "Ativar modo claro",
    themeToDark: "Ativar modo escuro",
    themeLight: "Modo claro",
    themeDark: "Modo escuro",
    langLabel: "Idioma",
    footer: "Feito com React + TypeScript",
  },
  hero: {
    badge: "Disponível para novas oportunidades",
    title: { before: "Desenvolvedor ", em: "full stack", after: " com experiência em automação, dashboards e integração de sistemas." },
    intro:
      "Sou Nicolas Murtha, formado em Análise e Desenvolvimento de Sistemas. Atuo em qualquer camada de um sistema — banco de dados, back-end, front-end, automação RPA e soluções com IA — e me adapto rápido a novas stacks.",
    seeProjects: "Ver projetos",
    talk: "Falar comigo",
    photoAlt: "Foto de Nicolas Murtha",
  },
  facts: [
    { k: "formação", v: "Análise e Desenvolvimento de Sistemas" },
    { k: "atuação", v: "automação · integrações · IA" },
    { k: "destaques", v: "IASense · IABug" },
    { k: "status", v: "aberto a novas oportunidades" },
  ],
  stack: {
    title: "Stack técnica",
    groups: [
      { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML / CSS / JS"] },
      { title: "Backend", items: ["Python", "Node.js", "FastAPI", "C# / .NET", "APIs REST"] },
      { title: "Dados", items: ["MySQL", "PostgreSQL", "SQLite", "SQL"] },
      { title: "Automação & RPA", items: ["Python + Selenium", "Blue Prism", "VBA", "Integração de sistemas"] },
    ],
  },
  experience: {
    title: "Experiência",
    prev: "Experiência anterior",
    next: "Próxima experiência",
    position: (i: number, n: number) => `${i} de ${n}`,
    items: [
      {
        dates: "01/2026 – 10/2026",
        role: "Desenvolvedor Full Stack — Bolsista FAPESP TT-04",
        org: "IASense",
        bullets: [
          "Desenvolvimento completo do dashboard web do IABug, plataforma de detecção da broca-da-cana por visão computacional.",
          "Melhorias na API do sistema, com persistência em MySQL.",
        ],
        tags: ["React", "Tailwind CSS", "Node.js", "FastAPI", "MySQL"],
      },
      {
        dates: "10/2024 – 06/2025",
        role: "Desenvolvedor RPA",
        org: "Bild & Vitta Desenvolvimento Imobiliário",
        metric: { value: "−55,8%", label: "no tempo de execução após migrar automações do Blue Prism para Python" },
        bullets: [
          "Automações em Python e Selenium integradas a sistemas web corporativos e APIs REST.",
          "Análise de fluxos de sistemas para extração, validação e persistência de dados.",
        ],
        tags: ["Python", "Selenium", "Blue Prism", "APIs REST"],
      },
      {
        dates: "11/2020 – 12/2023",
        role: "Analista de TI",
        org: "Grupo Movimente",
        bullets: [
          "Suporte e validação de dashboards de Business Intelligence.",
          "Scripts em Python e VBA para automação de tarefas e inserção de dados em sistemas web.",
          "Definição de requisitos e melhorias para sistemas web corporativos em PHP.",
        ],
        tags: ["Python", "VBA", "BI", "PHP"],
      },
    ] as Experience[],
  },
  highlights: {
    title: "Projetos profissionais e de pesquisa",
    intro:
      "Trabalhos realizados durante minha experiência profissional e bolsa de pesquisa FAPESP. Os projetos pertencem às respectivas organizações; abaixo está a minha contribuição em cada um.",
    contribution: "Minha contribuição",
    visit: "Visitar",
    imgAlt: (title: string) => `Projeto ${title}`,
    imgAltCaption: (caption: string, title: string) => `${caption} do projeto ${title}`,
    pending: "// captura pendente",
    items: [
      {
        ...IASENSE,
        tag: "Site institucional",
        desc: "Redesign e desenvolvimento do site institucional da IASense em Webflow, incluindo a implementação da identidade visual, a estrutura de páginas, o layout e a experiência responsiva.",
        contributions: ["Redesign do site", "Desenvolvimento e implementação em Webflow"],
        note: "O site e a marca pertencem à IASense. Fui responsável pelo redesign e pelo desenvolvimento a pedido da IASense, durante minha parceria com a empresa.",
      },
      {
        ...IABUG,
        tag: "Pesquisa & desenvolvimento · Bolsa de pesquisa FAPESP TT-04",
        desc: "Projeto de pesquisa e desenvolvimento para detecção de larvas da broca-da-cana (*Diatraea saccharalis*) com visão computacional e IA baseada em YOLO. A solução reúne um aplicativo para envio de imagens, uma API e um dashboard para visualizar e gerenciar os resultados das detecções.",
        contributions: [
          "Participante do projeto como desenvolvedor full stack (bolsa de pesquisa FAPESP TT-04)",
          "Melhorias na API",
          "Desenvolvimento completo do dashboard web",
        ],
        note: "O site e o projeto pertencem à IASense. Minha participação no desenvolvimento foi realizada durante minha bolsa de pesquisa FAPESP TT-04.",
        imgCaption: "Imagem ilustrativa",
      },
    ] as Highlight[],
  },
  projects: {
    title: "Projetos pessoais",
    intro: "Projetos que desenvolvi de forma independente, por iniciativa própria.",
    previewAlt: (title: string) => `Prévia de ${title}`,
    items: [
      {
        ...JOGOTECA,
        desc: "Aplicativo desktop para organizar um backlog pessoal de jogos: listas em kanban, nota e review por jogo, com catálogo opcional via IGDB ou RAWG.",
      },
      {
        ...CRIPTOPRICE,
        desc: "Extensão para Chrome que mostra o preço de BTC e ETH em USD ou BRL em tempo real, com dados da API da CoinGecko. Publicada na Chrome Web Store.",
      },
      {
        ...PARTICIPANTES,
        title: "Gestão de Participantes",
        desc: "Painel para gerenciar participantes de eventos, com listagem, busca e paginação.",
      },
      {
        ...HAPPY,
        title: "Happy — Orfanatos",
        desc: "Plataforma para conectar pessoas a orfanatos, com cadastro e visualização de instituições.",
      },
    ] as Project[],
  },
  about: {
    title: "Sobre",
    quote:
      "Gosto de transformar processos manuais em software simples e confiável. Fora do código: jogos, academia e música.",
    items: [
      { t: "Formação", d: "Análise e Desenvolvimento de Sistemas." },
      { t: "Full stack", d: "Do modelo de dados à interface, passando por APIs." },
      { t: "Automação", d: "Rotinas automatizadas e integração entre sistemas." },
      { t: "Inteligência artificial", d: "Aplicações que usam IA para resolver problemas reais." },
    ],
  },
  contact: {
    eyebrow: "06 — Contato",
    title: "Tem um projeto ou vaga em mente? Vamos conversar.",
  },
};

export type Content = typeof pt;

const en: Content = {
  meta: {
    htmlLang: "en",
    title: "Nicolas Murtha — Full Stack Developer",
    description:
      "Portfolio of Nicolas Murtha, a full stack developer focused on web applications, systems integration, automation and AI.",
  },
  resume: {
    url: asset("resume.pdf"),
    filename: "Resume Nicolas Murtha.pdf",
    unavailable: "The resume is not available for download yet.",
  },
  whatsapp: whatsapp("Hello, Nicolas Murtha"),
  email: mailto("Contact from your portfolio"),
  ui: {
    nav: { stack: "Stack", experience: "Experience", professional: "Professional", personal: "Personal", about: "About" },
    resumeShort: "Resume",
    downloadResume: "Download resume",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    langLabel: "Language",
    footer: "Built with React + TypeScript",
  },
  hero: {
    badge: "Open to new opportunities",
    title: { before: "", em: "Full stack", after: " developer with experience in automation, dashboards and systems integration." },
    intro:
      "I'm Nicolas Murtha, with a degree in Systems Analysis and Development. I work across every layer of a system — databases, back-end, front-end, RPA automation and AI solutions — and pick up new stacks quickly.",
    seeProjects: "See projects",
    talk: "Get in touch",
    photoAlt: "Photo of Nicolas Murtha",
  },
  facts: [
    { k: "education", v: "Systems Analysis and Development" },
    { k: "focus", v: "automation · integrations · AI" },
    { k: "highlights", v: "IASense · IABug" },
    { k: "status", v: "open to new opportunities" },
  ],
  stack: {
    title: "Tech stack",
    groups: [
      { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML / CSS / JS"] },
      { title: "Backend", items: ["Python", "Node.js", "FastAPI", "C# / .NET", "REST APIs"] },
      { title: "Data", items: ["MySQL", "PostgreSQL", "SQLite", "SQL"] },
      { title: "Automation & RPA", items: ["Python + Selenium", "Blue Prism", "VBA", "Systems integration"] },
    ],
  },
  experience: {
    title: "Experience",
    prev: "Previous role",
    next: "Next role",
    position: (i: number, n: number) => `${i} of ${n}`,
    items: [
      {
        dates: "Jan 2026 – Oct 2026",
        role: "Full Stack Developer — FAPESP TT-04 Research Scholarship",
        org: "IASense",
        bullets: [
          "Built the entire web dashboard for IABug, a computer vision platform that detects the sugarcane borer.",
          "Improved the system's API, backed by MySQL.",
        ],
        tags: ["React", "Tailwind CSS", "Node.js", "FastAPI", "MySQL"],
      },
      {
        dates: "Oct 2024 – Jun 2025",
        role: "RPA Developer",
        org: "Bild & Vitta Desenvolvimento Imobiliário",
        metric: { value: "−55.8%", label: "execution time after migrating automations from Blue Prism to Python" },
        bullets: [
          "Python and Selenium automations integrated with corporate web systems and REST APIs.",
          "Analyzed system flows to extract, validate and persist data.",
        ],
        tags: ["Python", "Selenium", "Blue Prism", "REST APIs"],
      },
      {
        dates: "Nov 2020 – Dec 2023",
        role: "IT Analyst",
        org: "Grupo Movimente",
        bullets: [
          "Supported and validated Business Intelligence dashboards.",
          "Python and VBA scripts to automate tasks and enter data into web systems.",
          "Defined requirements and improvements for corporate web systems built in PHP.",
        ],
        tags: ["Python", "VBA", "BI", "PHP"],
      },
    ],
  },
  highlights: {
    title: "Professional & research projects",
    intro:
      "Work done during my professional experience and FAPESP research scholarship. The projects belong to their respective organizations; below is my contribution to each one.",
    contribution: "My contribution",
    visit: "Visit",
    imgAlt: (title: string) => `${title} project`,
    imgAltCaption: (caption: string, title: string) => `${caption} of the ${title} project`,
    pending: "// screenshot pending",
    items: [
      {
        ...IASENSE,
        tag: "Corporate website",
        desc: "Redesign and development of IASense's corporate website in Webflow, including the implementation of its visual identity, page structure, layout and responsive experience.",
        contributions: ["Website redesign", "Development and implementation in Webflow"],
        note: "The website and the brand belong to IASense. I was responsible for the redesign and development at IASense's request, during my partnership with the company.",
      },
      {
        ...IABUG,
        tag: "Research & development · FAPESP TT-04 research scholarship",
        desc: "Research and development project to detect sugarcane borer larvae (*Diatraea saccharalis*) using computer vision and YOLO-based AI. The solution brings together an image-upload app, an API and a dashboard to view and manage the detection results.",
        contributions: [
          "Full stack developer on the project (FAPESP TT-04 research scholarship)",
          "API improvements",
          "Complete development of the web dashboard",
        ],
        note: "The website and the project belong to IASense. My contribution to the development was made during my FAPESP TT-04 research scholarship.",
        imgCaption: "Illustrative image",
      },
    ],
  },
  projects: {
    title: "Personal projects",
    intro: "Projects I developed independently, on my own initiative.",
    previewAlt: (title: string) => `Preview of ${title}`,
    items: [
      {
        ...JOGOTECA,
        desc: "Desktop app to organize a personal video game backlog: kanban lists, a rating and review for each game, and an optional IGDB or RAWG catalog.",
      },
      {
        ...CRIPTOPRICE,
        desc: "Chrome extension that shows BTC and ETH prices in USD or BRL in real time, with data from the CoinGecko API. Published on the Chrome Web Store.",
      },
      {
        ...PARTICIPANTES,
        title: "Attendee Management",
        desc: "Dashboard to manage event attendees, with listing, search and pagination.",
      },
      {
        ...HAPPY,
        title: "Happy — Orphanages",
        desc: "Platform that connects people with orphanages, with registration and browsing of institutions.",
      },
    ],
  },
  about: {
    title: "About",
    quote: "I like turning manual processes into simple, reliable software. Outside of code: games, the gym and music.",
    items: [
      { t: "Education", d: "Systems Analysis and Development." },
      { t: "Full stack", d: "From the data model to the interface, through APIs." },
      { t: "Automation", d: "Automated routines and integration between systems." },
      { t: "Artificial intelligence", d: "Applications that use AI to solve real problems." },
    ],
  },
  contact: {
    eyebrow: "06 — Contact",
    title: "Have a project or a role in mind? Let's talk.",
  },
};

export const CONTENT: Record<Lang, Content> = { pt, en };
