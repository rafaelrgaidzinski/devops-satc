// ── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["projetos", "tecnologias", "contato", "blog"];

// ── Personal Info ─────────────────────────────────────────────────────────────
export const PERSONAL = {
  name:       "Rafael Ronsoni Gaidzinski",
  firstName:  "Rafael",
  lastName:   "Ronsoni\nGaidzinski",
  role:       "Engenheiro de Software",
  bio:        "Estudante de Engenharia de Software (7ª fase) com experiência em desenvolvimento Java, automação de processos e integração com APIs. Busco minha primeira oportunidade como Desenvolvedor Júnior.",
  location:   "Criciúma / SC",
  email:      "rafaelgaidzinski@gmail.com",
  linkedin:   "https://www.linkedin.com/in/rafaelrgaidzinski",
  github:     "https://github.com/rafaelrgaidzinski",
  linkedinHandle: "/in/rafaelrgaidzinski",
  githubHandle:   "/rafaelrgaidzinski",
  stats: [
    { val: "7ª", label: "Fase Eng. Software" },
    { val: "3+", label: "Anos Experiência"   },
    { val: "3",  label: "Projetos"           },
  ],
};

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id:          1,
    number:      "01",
    name:        "MAtch",
    subtitle:    "Marketplace Gastronômico",
    description: "Plataforma que conecta restaurantes com freelancers gastronômicos. Chefs, garçons, bartenders e cozinheiros encontram oportunidades, enquanto restaurantes preenchem suas demandas com agilidade e confiança.",
    tags:        ["React", "Java", "Spring Boot", "REST API", "PostgreSQL"],
    color:       "#FF6B35",
    status:      "Em desenvolvimento",
    github:      "https://github.com/rafaelrgaidzinski",
  },
  {
    id:          2,
    number:      "02",
    name:        "Supply Chain API",
    subtitle:    "Gerenciamento de Medicamentos",
    description: "API REST em Java com Spring Boot para gerenciamento completo da cadeia de suprimentos de medicamentos. CRUD completo com integração ao PostgreSQL e endpoints documentados no Postman.",
    tags:        ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    color:       "#00FFB2",
    status:      "Concluído",
    github:      "https://github.com/rafaelrgaidzinski/gerenciador_cadeia_suprimentos_medicamentos",
  },
  {
    id:          3,
    number:      "03",
    name:        "Supply Chain DB",
    subtitle:    "Modelagem Relacional",
    description: "Modelagem de banco de dados relacional para sistema de gestão da cadeia de suprimentos, com normalização, estruturação de tabelas e relacionamentos complexos usando PostgreSQL.",
    tags:        ["PostgreSQL", "SQL", "Modelagem", "Normalização"],
    color:       "#7B61FF",
    status:      "Concluído",
    github:      "https://github.com/rafaelrgaidzinski/cadeia_suprimentos_banco_de_dados",
  },
];

// ── Technologies ──────────────────────────────────────────────────────────────
export const TECHS = [
  { name: "HTML5",       color: "#E34F26", icon: "🔶" },
  { name: "CSS3",        color: "#1572B6", icon: "🔷" },
  { name: "JavaScript",  color: "#F7DF1E", icon: "⚡" },
  { name: "React",       color: "#61DAFB", icon: "⚛️"  },
  { name: "Java",        color: "#FF6B35", icon: "☕" },
  { name: "Spring Boot", color: "#6DB33F", icon: "🍃" },
  { name: "PostgreSQL",  color: "#4169E1", icon: "🐘" },
  { name: "SQL",         color: "#00FFB2", icon: "🗄️"  },
  { name: "Git",         color: "#F05032", icon: "🌿" },
  { name: "Postman",     color: "#FF6C37", icon: "📮" },
  { name: "REST API",    color: "#7B61FF", icon: "🔗" },
  { name: "IntelliJ",   color: "#FF3E6C", icon: "🧠" },
];

// ── Blog ──────────────────────────────────────────────────────────────────────
export const BLOG_TAGS = ["todos", "java", "react", "spring boot", "carreira", "banco de dados"];

export const TAG_COLORS = {
  java:             "#FF6B35",
  react:            "#61DAFB",
  "spring boot":    "#6DB33F",
  carreira:         "#7B61FF",
  "banco de dados": "#00FFB2",
};

export const FALLBACK_POSTS = [
  { id: 1, title: "Criando APIs REST com Spring Boot do zero",             excerpt: "Aprenda a estruturar uma API REST completa com Spring Boot, validações e tratamento de erros. Um guia prático para iniciantes.",                tag: "spring boot",    readTime: "8 min",  date: "Mar 2025" },
  { id: 2, title: "React Hooks: useState e useEffect na prática",           excerpt: "Domine os dois hooks mais usados do React com exemplos reais de projetos. Entenda o ciclo de vida dos componentes.",                                tag: "react",          readTime: "6 min",  date: "Fev 2025" },
  { id: 3, title: "Modelagem de Banco de Dados Relacional com PostgreSQL",  excerpt: "Como estruturar tabelas, definir relacionamentos e aplicar normalização em projetos reais.",                                                        tag: "banco de dados", readTime: "10 min", date: "Jan 2025" },
  { id: 4, title: "Java para iniciantes: OOP na prática",                   excerpt: "Entenda os pilares da Orientação a Objetos com exemplos práticos em Java. Encapsulamento, herança e polimorfismo.",                                 tag: "java",           readTime: "7 min",  date: "Mar 2025" },
  { id: 5, title: "Dicas para seu primeiro emprego como dev",               excerpt: "O que aprendi na busca pela minha primeira vaga como desenvolvedor júnior. Portfólio, LinkedIn e entrevistas.",                                     tag: "carreira",       readTime: "5 min",  date: "Fev 2025" },
  { id: 6, title: "Spring Security: autenticação JWT simples",              excerpt: "Implemente autenticação JWT na sua API Spring Boot de forma clara e segura, com refresh token incluído.",                                          tag: "spring boot",    readTime: "12 min", date: "Jan 2025" },
  { id: 7, title: "PostgreSQL: queries avançadas que todo dev deve saber",  excerpt: "JOINs, CTEs, window functions e índices que vão transformar sua interação com bancos relacionais.",                                                tag: "banco de dados", readTime: "9 min",  date: "Mar 2025" },
  { id: 8, title: "Como estruturar um projeto React profissional",          excerpt: "Organização de pastas, contextos, roteamento e boas práticas que fazem diferença em projetos reais.",                                              tag: "react",          readTime: "7 min",  date: "Fev 2025" },
];

export const POSTS_PER_PAGE = 4;

// ── Claude AI ─────────────────────────────────────────────────────────────────
export const CLAUDE_MODEL    = "claude-sonnet-4-20250514";
export const CLAUDE_API_URL  = "https://api.anthropic.com/v1/messages";
export const BLOG_PROMPT     = `Crie exatamente 8 posts de blog para o portfólio de Rafael Ronsoni Gaidzinski, estudante de Engenharia de Software especializado em Java, Spring Boot e React. Retorne SOMENTE um array JSON válido, sem markdown, sem texto extra, sem backticks. Cada objeto deve ter: id (número), title (string, título em português), excerpt (string, 2 frases), tag (uma de: java/react/spring boot/carreira/banco de dados), readTime (ex: "5 min"), date (entre Jan-Mar 2025).`;
