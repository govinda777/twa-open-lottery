# TWA Open Lottery

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/govinda777/twa-open-lottery/blob/main/LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/mermaid-js/mermaid-live-editor/CI)](https://github.com/govinda777/twa-open-lottery)
[![Netlify Status](https://api.netlify.com/api/v1/badges/27fa023d-7c73-4a3f-9791-b3b657a47100/deploy-status)](https://app.netlify.com/sites/twa-lottery/deploys)

Bem-vindo ao **TWA Open Lottery**, uma plataforma SaaS (Software como Serviço) desenvolvida para modernizar e tornar transparente o gerenciamento de apostas e loterias através do Telegram Web App (TWA).

🔗 [Repositório no GitHub](https://github.com/govinda777/twa-open-lottery)

## 📋 Índice

1. [Visão Geral](#-visão-geral)
2. [Pré-requisitos](#-pré-requisitos)
3. [Início Rápido](#-início-rápido)
4. [Configuração do Web App](#-configuração-do-web-app)
5. [Desenvolvimento](#-desenvolvimento)
6. [Principais Funcionalidades](#-principais-funcionalidades)
7. [Contribuindo](#-contribuindo)
8. [Licença](#-licença)

## 📖 Visão Geral

Este projeto oferece:
- **Suporte a carteiras Ton Connect 2**
- **Stack moderna com Vite + React**
- **Integração com blockchain TON**
- **Sistema completo de apostas e sorteios**
- **Interface TWA otimizada**

## 🔧 Pré-requisitos

- Node.js v16+
- Uma carteira compatível com Ton Connect (ex: [Tonkeeper](https://tonkeeper.com/))
- Conta no Telegram
- Git

## 🚀 Início Rápido

1. **Use este template**
   ```bash
   # Clique no botão "Use this template" no GitHub
   # IMPORTANTE: Marque "Include all branches"
   ```

2. **Clone e Configure**
   ```bash
   # Clone seu novo repositório
   git clone https://github.com/seu-usuario/seu-twa-lottery.git
   cd seu-twa-lottery

   # Instale as dependências
   npm install

   # Configure os hooks do Git
   npx husky install
   ```

## ⚙️ Configuração do Web App

1. **Crie um Bot no Telegram**
   ```bash
   # Abra @BotFather no Telegram
   /newbot
   # Siga as instruções para nomear seu bot
   # Guarde o token fornecido
   ```

2. **Crie o Web App**
   ```bash
   # No BotFather
   /newapp
   # Selecione seu bot
   # Digite o título: "TWA Lottery"
   # Forneça uma descrição
   # Envie uma imagem 640x360px
   ```

3. **Vincule o Bot ao App**
   ```bash
   # Execute o script de configuração
   npm run configbot
   # Insira o token do bot quando solicitado
   ```

## 💻 Desenvolvimento

1. **Inicie o Ambiente Local**
   ```bash
   npm run dev
   ```

2. **Implantação**
   ```bash
   # A implantação é automática ao fazer push para main
   git push origin main
   ```

## 🎯 Principais Funcionalidades

### Sistema de Apostas
- Interface intuitiva para apostas
- Integração com TON Connect 2
- Registro na blockchain

### Gestão de Pagamentos
- Smart contracts automatizados
- Distribuição segura de prêmios
- Histórico transparente

### Administração
- Dashboard para gestores
- Relatórios em tempo real
- Controle de regiões

## 🤝 Contribuindo

1. Faça um Fork
2. Crie sua Feature Branch
   ```bash
   git checkout -b feature/NovaFuncionalidade
   ```
3. Commit suas mudanças
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Push para a Branch
   ```bash
   git push origin feature/NovaFuncionalidade
   ```
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

⭐️ Se este projeto te ajudou, considere dar uma estrela no GitHub!