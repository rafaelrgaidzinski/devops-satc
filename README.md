# Portfolio — Rafael Ronsoni Gaidzinski

Portfólio pessoal construído com React + Vite.

---

## Estrutura do Projeto

```
src/
├── main.jsx                     # Entry point React
├── App.jsx                      # Root: monta layout + seções + IntersectionObserver
│
├── styles/
│   └── globals.css              # Design tokens (CSS vars), animações, reset, grids responsivos
│
├── constants/
│   └── data.js                  # Todos os dados estáticos: projetos, tecnologias, textos, config da API
│
├── components/
│   ├── icons/
│   │   └── Icons.jsx            # Todos os ícones SVG como componentes React
│   ├── layout/
│   │   ├── Navbar.jsx           # Navbar fixa com menu mobile e highlight de seção ativa
│   │   └── Footer.jsx           # Rodapé com copyright e links sociais
│   └── ui/
│       └── Button.jsx           # Botão reutilizável (variants: primary | ghost)
│
└── sections/
    ├── HomeSection.jsx          # Hero: nome, efeito typewriter, bio, CTAs, stats
    ├── ProjectsSection.jsx      # Carrossel de projetos com card visual e navegação
    ├── TechSection.jsx          # Grade de badges de tecnologia com hover animado
    ├── ContactSection.jsx       # Formulário de contato + informações + botão blog
    └── BlogSection.jsx          # Blog com IA (Claude API), busca, filtros, paginação, newsletter
```

---

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Build para produção
npm run build
```

---


## Tecnologias usadas

| Tecnologia        | Papel                                  |
|-------------------|----------------------------------------|
| React 18          | UI declarativa com hooks               |
| Vite 5            | Build tool e dev server                |
| CSS Variables     | Design tokens e theming                |
| Google Fonts      | Syne (display) + Space Mono (mono)     |

---

## Conceitos Relevantes

### O que é DevOps?

DevOps é uma forma de trabalhar que junta:

- **Dev** — desenvolvimento de software
- **Ops** — operações / infraestrutura

A ideia principal é fazer com que quem cria o software e quem mantém o sistema funcionando trabalhem juntos, de forma rápida e organizada.

DevOps ajuda a:

- Entregar atualizações mais rápido
- Automatizar processos (deploy, testes, infraestrutura)
- Reduzir erros
- Melhorar a colaboração entre times

> Não é exatamente um cargo — é mais uma **cultura + práticas + ferramentas**.

---

### O que é SRE?

SRE (**Site Reliability Engineering**) é uma função mais específica. A ideia é usar engenharia de software para garantir que os sistemas sejam confiáveis e estáveis.

O SRE foca em:

- Disponibilidade do sistema
- Performance
- Monitoramento
- Resolução de incidentes
- Redução de falhas
