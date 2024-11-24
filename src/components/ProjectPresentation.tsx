import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, Wallet, Layout, Settings, BarChart4, Key, GitBranch } from 'lucide-react';

const ProjectPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "TWA Open Lottery",
      subtitle: "Modernizando Loterias com Blockchain",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-4">
              <Layout className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-semibold">Visão Geral</h3>
            </div>
            <p className="text-gray-600">Plataforma SaaS para gestão transparente de loterias via Telegram usando blockchain TON</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center text-gray-800 mb-4">
                <Key className="w-5 h-5 mr-2" />
                <h4 className="font-semibold">Transparente</h4>
              </div>
              <p className="text-gray-600 text-sm">Auditoria 3.0 com Smart Contracts</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center text-gray-800 mb-4">
                <GitBranch className="w-5 h-5 mr-2" />
                <h4 className="font-semibold">Seguro</h4>
              </div>
              <p className="text-gray-600 text-sm">TON Connect 2 Integration</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center text-gray-800 mb-4">
                <Settings className="w-5 h-5 mr-2" />
                <h4 className="font-semibold">Moderno</h4>
              </div>
              <p className="text-gray-600 text-sm">Stack Vite + React</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Arquitetura do Sistema",
      subtitle: "Estrutura Técnica",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-4">
              <Layout className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-3">
              {['React + Vite', 'TON Connect Integration', 'Telegram Web App', 'Responsive Design'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-4">
              <Settings className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Backend</h3>
            </div>
            <ul className="space-y-3">
              {['Smart Contracts', 'TON Blockchain', 'Automated Draws', 'Secure Transactions'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Jornadas do Usuário",
      subtitle: "Experiências Principais",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-6">
              <Wallet className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Apostador</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {['Conectar Wallet', 'Realizar Aposta', 'Ver Resultados'].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="p-4 bg-gray-50 rounded-lg text-gray-700 font-medium text-center flex-1">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <ChevronDown className="hidden md:block w-6 h-6 text-gray-400 transform rotate-90" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-6">
              <Settings className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Administrador</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Gestão de Sorteios', 'Dashboard Analytics', 'Configurações'].map((item, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg text-gray-700 font-medium text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Recursos Técnicos",
      subtitle: "Tecnologias e Ferramentas",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-4">
              <Key className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Smart Contracts</h3>
            </div>
            <ul className="space-y-3">
              {['Gestão Automatizada', 'Distribuição de Prêmios', 'Regras de Negócio', 'Auditoria Transparente'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center text-gray-800 mb-4">
              <BarChart4 className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Integrações</h3>
            </div>
            <ul className="space-y-3">
              {['TON Blockchain', 'Telegram Bot API', 'TWA Interface', 'Wallet Connect'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-50 rounded-xl shadow p-8 mb-8">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Content */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">{slides[currentSlide].title}</h2>
        <p className="text-gray-600 text-xl">{slides[currentSlide].subtitle}</p>
      </div>

      <div className="min-h-[400px] mb-8">
        {slides[currentSlide].content}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Anterior
        </button>
        
        <span className="text-gray-500">
          {currentSlide + 1} / {slides.length}
        </span>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center px-4 py-2 bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
        >
          Próximo
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectPresentation;