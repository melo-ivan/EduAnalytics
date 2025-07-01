# EduAnalytics – Sistema de Análise Educacional

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.0.0-yellow.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-green.svg)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://starlit-empanada-8bf32f.netlify.app)

---

## 🔮 Sobre o Projeto

EduAnalytics é uma aplicação web moderna para visualização de dashboards, relatórios analíticos e previsões de dados educacionais. Desenvolvida com foco em alta performance e experiência do usuário, utiliza React, TypeScript, Vite e TailwindCSS para garantir um produto final responsivo, elegante e acessível.

Esta aplicação pode ser utilizada para análise visual de dados em ambientes educacionais, ajudando na tomada de decisão através de gráficos e relatórios dinâmicos.

---

## 🌐 Visualização Online

Você pode acessar o projeto rodando na web através do link:

[https://starlit-empanada-8bf32f.netlify.app](https://starlit-empanada-8bf32f.netlify.app)

---

## 🧱 Tecnologias Utilizadas

- React – Biblioteca para construção da interface do usuário.
- TypeScript – Superset de JavaScript com tipagem estática, para maior segurança e manutenção.
- Vite – Bundler e servidor de desenvolvimento rápido.
- Tailwind CSS – Framework CSS utilitário para estilização rápida e responsiva.
- ESLint – Ferramenta para análise estática do código e manutenção de padrões.
- PostCSS – Para processamento avançado de CSS.
- Jest e React Testing Library – Para testes unitários e de integração.
- GitHub Actions – Integração contínua para lint e testes automatizados.

---

## 📂 Estrutura de Diretórios

```plaintext
EduAnalytics/
├── public/                    # Arquivos estáticos públicos (ex: index.html, favicon, imagens)
├── src/
│   ├── assets/                # Imagens, ícones, fontes e outros arquivos estáticos usados na UI
│   ├── components/            # Componentes reutilizáveis (botões, cards, inputs, modal etc.)
│   ├── features/              # Funcionalidades específicas, com componentes, hooks e estilos próprios (ex: dashboard, reports, predictions)
│   ├── hooks/                 # Custom React hooks reutilizáveis
│   ├── layouts/               # Layouts da aplicação (ex: header/footer, sidebar, container)
│   ├── pages/                 # Páginas principais, que geralmente usam componentes/features para composição
│   ├── services/              # Serviços para chamadas a API, manipulação de dados e lógica de negócio
│   ├── store/                 # Gerenciamento de estado (ex: React Context, Redux, Zustand)
│   ├── styles/                # Estilos globais, configurações Tailwind e arquivos CSS/SCSS
│   ├── tests/                 # Testes unitários e de integração (ou dentro das pastas específicas)
│   ├── utils/                 # Funções auxiliares e helpers gerais
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.js               # Configurações ESLint com regras e acessibilidade
├── jest.config.js             # Configuração do Jest para testes
├── postcss.config.js          # Configuração PostCSS
├── tailwind.config.js         # Configuração TailwindCSS
├── tsconfig.json              # Configuração TypeScript
├── vite.config.ts             # Configuração Vite
├── package.json               # Dependências e scripts
├── README.md                  # Documentação
└── LICENSE                   # Licença MIT

Como Executar o Projeto
Pré-requisitos
Node.js (versão 16 ou superior recomendada)

npm (ou yarn)

Passos para rodar localmente
1. Clone o repositório
git clone https://github.com/melo-ivan/EduAnalytics.git
cd EduAnalytics
2. Instale as dependências
npm install
# ou
yarn install

3. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

4. Abra o navegador em:
http://localhost:5173

Contato e Contribuição
Este projeto foi desenvolvido por Ivan Melo.

Contribuições são bem-vindas! Para contribuir, abra uma issue ou envie um pull request.
Para contato direto, você pode me encontrar pelo GitHub: melo-ivan
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
EduAnalytics © 2025 - Projeto open source desenvolvido com React, TypeScript, Vite e TailwindCSS.
