import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

const ProjectPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "TWA Open Lottery",
      subtitle: "Modernizando Loterias com Blockchain",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-blue-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Visão Geral</h3>
            <p>Plataforma SaaS para gestão transparente de loterias via Telegram usando blockchain TON</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-green-100 rounded-lg">
              <h4 className="font-semibold">Transparente</h4>
              <p>Auditoria 3.0 com Smart Contracts</p>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg">
              <h4 className="font-semibold">Seguro</h4>
              <p>TON Connect 2 Integration</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg">
              <h4 className="font-semibold">Moderno</h4>
              <p>Stack Vite + React</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Arquitetura do Sistema",
      subtitle: "Estrutura Técnica",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2">
                <li>• React + Vite</li>
                <li>• TON Connect Integration</li>
                <li>• Telegram Web App</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Backend</h3>
              <ul className="space-y-2">
                <li>• Smart Contracts</li>
                <li>• TON Blockchain</li>
                <li>• Automated Draws</li>
                <li>• Secure Transactions</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Jornadas do Usuário",
      subtitle: "Experiências Principais",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-3">Apostador</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1 p-3 bg-white rounded">Conectar Wallet</div>
              <ChevronDown />
              <div className="flex-1 p-3 bg-white rounded">Realizar Aposta</div>
              <ChevronDown />
              <div className="flex-1 p-3 bg-white rounded">Ver Resultados</div>
            </div>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Administrador</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded">Gestão de Sorteios</div>
              <div className="p-3 bg-white rounded">Dashboard Analytics</div>
              <div className="p-3 bg-white rounded">Configurações</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Recursos Técnicos",
      subtitle: "Tecnologias e Ferramentas",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Smart Contracts</h3>
              <ul className="space-y-2">
                <li>• Gestão Automatizada</li>
                <li>• Distribuição de Prêmios</li>
                <li>• Regras de Negócio</li>
                <li>• Auditoria Transparente</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Integrações</h3>
              <ul className="space-y-2">
                <li>• TON Blockchain</li>
                <li>• Telegram Bot API</li>
                <li>• TWA Interface</li>
                <li>• Wallet Connect</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Próximos Passos",
      subtitle: "Roadmap do Projeto",
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8 relative">
              <div className="ml-8 relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-lg font-semibold">Fase 1: MVP</h3>
                <p>Lançamento inicial com funcionalidades básicas</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-400"></div>
                <h3 className="text-lg font-semibold">Fase 2: Expansão</h3>
                <p>Novas funcionalidades e otimizações</p>
              </div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-300"></div>
                <h3 className="text-lg font-semibold">Fase 3: Escalabilidade</h3>
                <p>Suporte a múltiplas regiões e maior volume</p>
              </div>
            </div>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
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
            className="flex items-center px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
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
            className="flex items-center px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
          >
            Próximo
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPresentation;