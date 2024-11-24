# TWA Open Lottery

![TWA Open Lottery diagram](./docs/TWA_Open_Lottery.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/27fa023d-7c73-4a3f-9791-b3b657a47100/deploy-status)](https://app.netlify.com/sites/twa-lottery/deploys)

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

## Vantagens

- Apostas transparentes e desentralizadas
- Segurança e confiabilidade
- Auditoria aberta e simplificada

# Jornadas de Usuário - TWA Open Lottery

## 1. Apostador

1. Realizar uma aposta
   - Abre o TWA Open Lottery no Telegram 
   - Conecta sua carteira Ton usando Ton Connect
   - Seleciona o animal desejado
   - Insere o valor da aposta
   - Confirma a transação na carteira
   - Recebe confirmação da aposta realizada

2. Verificar resultado de um sorteio
   - Abre o TWA Open Lottery
   - Navega para a seção de resultados
   - Seleciona o sorteio desejado
   - Visualiza o animal sorteado e os ganhadores

3. Resgatar prêmio de uma aposta ganhadora  
   - Abre o TWA no sorteio em que foi ganhador
   - Clica no botão "Resgatar Prêmio"
   - Confirma a transação na carteira
   - Recebe o valor do prêmio em sua carteira

## 2. Bicheiro (Administrador)

1. Visualizar estatísticas dos sorteios
   - Faz login como administrador no TWA
   - Acessa o dashboard de gestão
   - Visualiza dados como total de apostas, prêmios acumulados, etc
   - Filtra os dados por período

2. Gerenciar sorteios
   - Acessa o dashboard de gestão 
   - Navega para a área de gestão de sorteios
   - Cria um novo sorteio definindo data, hora e prêmio inicial
   - Acompanha sorteios em andamento
   - Realiza o sorteio manualmente se necessário

3. Gerenciar animais e probabilidades
   - Acessa as configurações de animais no dashboard
   - Visualiza a lista de animais cadastrados 
   - Altera a probabilidade de cada animal ser sorteado
   - Adiciona ou remove animais da lista

4. Acompanhar transações e pagamentos
   - Acessa o histórico de transações no dashboard
   - Visualiza o status das transações (apostas e resgates)
   - Confere se os prêmios foram pagos corretamente
   - Investiga transações suspeitas se necessário

5. Configurar parâmetros do contrato
   - Acessa as configurações do contrato no dashboard
   - Define parâmetros como taxa de administração, prêmio mínimo, etc
   - Implanta uma nova versão do contrato se necessário
   - Monitora o funcionamento do contrato inteligente

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

## 🏗 Arquitetura do Projeto

O TWA Open Lottery segue uma arquitetura modular e bem organizada, facilitando a manutenção e escalabilidade do sistema.

### Estrutura de Diretórios

```
src/
  ├── components/              # Componentes React
  │   ├── styled/             # Componentes estilizados
  │   │   ├── components.ts   # Componentes reutilizáveis
  │   │   └── theme.ts        # Configuração de tema
  │   ├── BetForm.tsx         # Formulário de apostas
  │   ├── DrawInfo.tsx        # Informações do sorteio
  │   ├── BetsList.tsx        # Lista de apostas
  │   └── BankerDashboard.tsx # Dashboard do bicheiro
  ├── contracts/              # Contratos inteligentes
  │   ├── AnimalLottery.ts    # Contrato principal
  │   └── interfaces.ts       # Interfaces dos contratos
  ├── hooks/                  # Hooks personalizados
  │   ├── useAnimalLottery.ts # Hook principal da loteria
  │   ├── useBanker.ts        # Hooks específicos do bicheiro
  │   └── useBets.ts          # Hooks relacionados a apostas
  ├── types/                  # Tipos TypeScript
  │   └── types.ts           
  ├── constants/              # Constantes da aplicação
  │   ├── animals.ts          # Definições dos animais
  │   └── config.ts           # Configurações gerais
  └── utils/                  # Utilitários
      ├── format.ts           # Formatação
      └── validation.ts       # Validação
```

### Componentes Principais

#### 1. Components
- **BetForm**: Gerencia o processo de apostas
  ```typescript
  interface BetFormProps {
    onSubmit: (bet: BetData) => Promise<void>;
    availableAnimals: Animal[];
  }
  ```

- **DrawInfo**: Exibe informações do sorteio atual
  ```typescript
  interface DrawInfoProps {
    currentDraw: Draw;
    nextDrawTime: Date;
  }
  ```

#### 2. Contratos
- **AnimalLottery.ts**: Implementa a lógica principal da loteria
  ```typescript
  class AnimalLottery {
    placeBet(animal: number, amount: string): Promise<Transaction>;
    claimPrize(drawId: number): Promise<Transaction>;
    // ...
  }
  ```

#### 3. Hooks Personalizados
- **useAnimalLottery**: Hook principal para interação com o contrato
  ```typescript
  const useAnimalLottery = () => {
    const placeBet = async (data: BetData) => { /* ... */ };
    const checkWinnings = async (drawId: number) => { /* ... */ };
    return { placeBet, checkWinnings /* ... */ };
  };
  ```

### Fluxo de Dados

```mermaid
graph TD
    A[Usuario] -->|Realiza Aposta| B[BetForm]
    B -->|Valida Dados| C[useAnimalLottery]
    C -->|Envia Transação| D[Smart Contract]
    D -->|Confirma| E[Blockchain TON]
    E -->|Atualiza UI| F[DrawInfo]
```

### Sistema de Temas

O projeto utiliza um sistema de temas consistente:

```typescript
// theme.ts
export const theme = {
  colors: {
    primary: '#1DA1F2',
    secondary: '#14171A',
    success: '#17BF63',
    error: '#E0245E',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  // ...
};
```

### Integração TON

A integração com a blockchain TON é gerenciada através de camadas específicas:

```typescript
// Exemplo de integração com TON
import { TonClient } from '@ton/ton';

export class TonIntegration {
  private client: TonClient;

  constructor() {
    this.client = new TonClient({
      endpoint: 'https://toncenter.com/api/v2/jsonRPC',
    });
  }

  async deployContract(code: Cell, data: Cell): Promise<Address> {
    // Lógica de deploy
  }

  async sendTransaction(address: Address, message: Cell): Promise<Transaction> {
    // Lógica de transação
  }
}
```

### Segurança e Validação

O sistema implementa várias camadas de segurança:

1. **Validação de Entrada**
   ```typescript
   // validation.ts
   export const validateBet = (bet: BetData): ValidationResult => {
     // Regras de validação
   };
   ```

2. **Proteção de Transações**
   ```typescript
   // useAnimalLottery.ts
   const secureBet = async (bet: BetData) => {
     try {
       await validateBet(bet);
       // Processo de aposta segura
     } catch (error) {
       handleError(error);
     }
   };
   ```

## 📄 Licença

Este projeto está sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

⭐️ Se este projeto te ajudou, considere dar uma estrela no GitHub!