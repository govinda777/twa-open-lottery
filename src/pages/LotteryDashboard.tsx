import React, { useState, ReactNode } from 'react';
import { useTonConnect } from '../hooks/useTonConnect';

// Interfaces
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

interface LayoutProps {
  children: ReactNode;
}

// Componentes de Layout
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="max-w-4xl mx-auto p-4 space-y-6">
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-lg">
      <h1 className="text-xl font-bold">TWA Open Lottery</h1>
      <WalletButton />
    </header>
    {children}
  </div>
);

const WalletButton: React.FC = () => {
  const { connected } = useTonConnect();
  
  return (
    <button
      onClick={() => {/* Implementar lógica de conexão */}}
      className={`px-4 py-2 rounded-lg ${
        connected ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      {connected ? 'Desconectar Carteira' : 'Conectar Carteira'}
    </button>
  );
};

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg ${
      active ? 'bg-blue-600 text-white' : 'bg-gray-200'
    }`}
  >
    {children}
  </button>
);

// Componentes de Jornada
const BettingJourney: React.FC = () => {
  const { connected } = useTonConnect();
  
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Jornada de Apostas</h2>
      
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h3 className="font-medium">1. Realizar Aposta</h3>
        <div className="grid grid-cols-2 gap-4">
          <select 
            className="p-2 border rounded"
            disabled={!connected}
          >
            <option>Selecione um Animal</option>
            <option>Avestruz (1)</option>
            <option>Águia (2)</option>
          </select>
          <input 
            type="number" 
            placeholder="Valor em TON"
            className="p-2 border rounded"
            disabled={!connected}
          />
        </div>
        <button 
          className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={!connected}
        >
          Confirmar Aposta
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium mb-4">2. Verificar Resultados</h3>
        <div className="space-y-2">
          <div className="flex justify-between bg-gray-50 p-2 rounded">
            <span>Sorteio #123</span>
            <span>Animal: Águia</span>
            <span>Prêmio: 100 TON</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminJourney: React.FC = () => {
  const { connected } = useTonConnect();
  
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Painel Administrativo</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-4">Estatísticas</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total de Apostas:</span>
              <span className="font-bold">1,234</span>
            </div>
            <div className="flex justify-between">
              <span>Prêmio Acumulado:</span>
              <span className="font-bold">500 TON</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium mb-4">Gerenciar Sorteio</h3>
          <div className="space-y-2">
            <input 
              type="datetime-local" 
              className="w-full p-2 border rounded"
              disabled={!connected}
            />
            <button 
              className="w-full p-2 bg-green-500 text-white rounded disabled:bg-gray-300"
              disabled={!connected}
            >
              Criar Novo Sorteio
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium mb-4">Configurações do Contrato</h3>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="number" 
              placeholder="Taxa Admin (%)"
              className="p-2 border rounded"
              disabled={!connected}
            />
            <input 
              type="number" 
              placeholder="Prêmio Mínimo (TON)"
              className="p-2 border rounded"
              disabled={!connected}
            />
          </div>
          <button 
            className="w-full p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            disabled={!connected}
          >
            Atualizar Configurações
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Principal
const LotteryDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<'betting' | 'admin'>('betting');
  
  return (
    <Layout>
      <div className="flex space-x-4 mb-4">
        <TabButton 
          active={activeView === 'betting'} 
          onClick={() => setActiveView('betting')}
        >
          Apostador
        </TabButton>
        <TabButton 
          active={activeView === 'admin'} 
          onClick={() => setActiveView('admin')}
        >
          Administrador
        </TabButton>
      </div>
      
      {activeView === 'betting' ? <BettingJourney /> : <AdminJourney />}
      
      <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-sm">
        Este é um playground interativo que demonstra as principais jornadas de usuário no TWA Open Lottery.
        Conecte sua carteira e explore as diferentes funcionalidades disponíveis para apostadores e administradores.
      </div>
    </Layout>
  );
};

export default LotteryDashboard;