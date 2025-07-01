# EduAnalytics

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.0.0-yellow.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-green.svg)

---

## 🔮 Sobre o Projeto

**EduAnalytics** é uma aplicação web moderna para visualização de dashboards, relatórios analíticos e previsões de dados educacionais. Desenvolvida com foco em alta performance e experiência do usuário, utiliza as tecnologias React, TypeScript, Vite e TailwindCSS para garantir um desenvolvimento ágil e um produto final responsivo e elegante.

Esta aplicação pode ser utilizada para análise visual de dados em ambientes educacionais, ajudando na tomada de decisão através de gráficos e relatórios dinâmicos.

---

## 🧱 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface do usuário.
- **TypeScript** – Superset de JavaScript com tipagem estática, para maior segurança e manutenção.
- **Vite** – Bundler e servidor de desenvolvimento rápido.
- **Tailwind CSS** – Framework CSS utilitário para estilização rápida e responsiva.
- **ESLint** – Ferramenta para análise estática do código e manutenção de padrões.
- **PostCSS** – Para processamento avançado de CSS.

---

## 📂 Estrutura de Diretórios

```plaintext
EduAnalytics/
├── public/                  # Arquivos estáticos públicos
│   └── index.html           # Arquivo HTML principal
├── src/                     # Código-fonte da aplicação
│   ├── components/          # Componentes reutilizáveis (Header, Footer, ProjectCard etc.)
│   ├── pages/               # Páginas ou views principais (Dashboard, Reports, Predictions etc.)
│   ├── styles/              # Estilos globais e específicos (index.css, Tailwind config)
│   ├── utils/               # Funções auxiliares e helpers
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Ponto de entrada da aplicação
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Dependências e scripts
├── vite.config.ts           # Configurações do Vite
├── tsconfig.json            # Configurações do TypeScript
├── tailwind.config.js       # Configuração do TailwindCSS
├── postcss.config.js        # Configuração do PostCSS
└── README.md                # Documentação do projeto
