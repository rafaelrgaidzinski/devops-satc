O que é DevOps?

DevOps é uma forma de trabalhar que junta:

- Dev (desenvolvimento de software)
- Ops (operações / infraestrutura)

A ideia principal é:
Fazer com que quem cria o software e quem mantém o sistema funcionando trabalhem juntos, de forma rápida e organizada.

DevOps ajuda a:

- Entregar atualizações mais rápido
- Automatizar processos (deploy, testes, infraestrutura)
- Reduzir erros
- Melhorar a colaboração entre times

Não é exatamente um cargo, é mais uma cultura + práticas + ferramentas.

O que é SRE?
SRE (Site Reliability Engineering) é uma função mais específica.

A ideia é:

Usar engenharia de software para garantir que os sistemas sejam confiáveis e estáveis.

Ou seja, o SRE foca muito em:

- Disponibilidade do sistema
- Performance
- Monitoramento
- Resolução de incidentes
- Redução de falhas


# Marketplace de Restaurantes & Freelancers

Front-end desenvolvido em **React.js** para uma plataforma marketplace que conecta **restaurantes** a **freelancers do setor gastronômico**

O objetivo da aplicação é facilitar a publicação de oportunidades temporárias por restaurantes e permitir que freelancers encontrem, se candidatem e sejam contratados de forma rápida e segura.

---

## Tecnologias Utilizadas

* React.js
* React Router DOM
* Context API / Redux Toolkit
* React Hook Form + validação
* Vite (ambiente de desenvolvimento)

---

## Estrutura da Aplicação

O projeto segue arquitetura baseada em componentização e separação de responsabilidades:

```
src/
 ├── components/     # Componentes reutilizáveis
 ├── pages/          # Telas da aplicação
 ├── routes/         # Configuração de rotas
 ├── services/       # Comunicação com API
 ├── contexts/       # Gerenciamento de estado global
 ├── hooks/          # Hooks customizados
 └── utils/          # Funções auxiliares
```

---

## Principais Funcionalidades

### Autenticação

* Cadastro (Restaurante ou Freelancer)
* Login
* Recuperação de senha

### Área do Restaurante

* Dashboard
* Publicação de vagas
* Gestão de candidaturas
* Avaliação de freelancers

## Fluxo da Plataforma

**Restaurante:**
Cadastro → Publica vaga → Recebe candidaturas → Seleciona freelancer → Avalia serviço

## Boas Práticas Adotadas

* Componentização reutilizável
* Proteção de rotas privadas
* Tratamento global de erros


## 📦 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev
```

## Objetivo

Construir uma interface moderna, responsiva e intuitiva que simplifique a conexão entre restaurantes e profissionais freelancers do setor gastronômico.

