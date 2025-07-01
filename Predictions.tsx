import React, { useState } from 'react';
import { Brain, AlertTriangle, TrendingUp, Users, Target, Zap } from 'lucide-react';

const Predictions = () => {
  const [selectedModel, setSelectedModel] = useState('dropout');

  const predictionModels = [
    {
      id: 'dropout',
      name: 'Predição de Evasão',
      description: 'Identifica estudantes com risco de abandono escolar',
      accuracy: 94.2,
      lastUpdate: '2025-01-15',
      predictions: 156,
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      id: 'performance',
      name: 'Predição de Desempenho',
      description: 'Prevê o desempenho acadêmico futuro dos estudantes',
      accuracy: 89.7,
      lastUpdate: '2025-01-14',
      predictions: 2847,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 'intervention',
      name: 'Recomendação de Intervenção',
      description: 'Sugere ações pedagógicas personalizadas',
      accuracy: 91.5,
      lastUpdate: '2025-01-13',
      predictions: 423,
      icon: <Target className="h-6 w-6" />
    }
  ];

  const riskStudents = [
    {
      id: 1,
      name: "Carlos Silva",
      grade: "2º Ano",
      riskLevel: "Alto",
      probability: 87,
      factors: ["Baixa frequência", "Notas em declínio", "Falta de engajamento"],
      recommendation: "Intervenção imediata com apoio psicopedagógico"
    },
    {
      id: 2,
      name: "Ana Santos",
      grade: "3º Ano",
      riskLevel: "Médio",
      probability: 64,
      factors: ["Dificuldades em matemática", "Problemas familiares"],
      recommendation: "Acompanhamento semanal e reforço escolar"
    },
    {
      id: 3,
      name: "João Costa",
      grade: "1º Ano",
      riskLevel: "Alto",
      probability: 92,
      factors: ["Múltiplas faltas", "Baixo rendimento", "Problemas socioeconômicos"],
      recommendation: "Intervenção urgente com assistência social"
    },
    {
      id: 4,
      name: "Maria Oliveira",
      grade: "4º Ano",
      riskLevel: "Médio",
      probability: 58,
      factors: ["Queda no desempenho", "Mudança de comportamento"],
      recommendation: "Conversa com responsáveis e acompanhamento"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Alto':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Médio':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Baixo':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const selectedModelData = predictionModels.find(model => model.id === selectedModel);

  return (
    <section id="predictions" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Análises Preditivas
          </h2>
          <p className="text-gray-600">
            Modelos de machine learning para predição e intervenção educacional
          </p>
        </div>

        {/* Model Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {predictionModels.map((model) => (
            <div
              key={model.id}
              className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                selectedModel === model.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => setSelectedModel(model.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg ${
                  selectedModel === model.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {model.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{model.name}</h3>
                  <p className="text-sm text-gray-500">{model.accuracy}% precisão</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{model.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{model.predictions} predições</span>
                <span>Atualizado: {new Date(model.lastUpdate).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Model Performance */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Precisão</h3>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {selectedModelData?.accuracy}%
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-3 mb-2">
              <Target className="h-6 w-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">Predições</h3>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {selectedModelData?.predictions}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center space-x-3 mb-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Intervenções</h3>
            </div>
            <div className="text-2xl font-bold text-purple-600">89</div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
            <div className="flex items-center space-x-3 mb-2">
              <Users className="h-6 w-6 text-red-600" />
              <h3 className="font-semibold text-gray-900">Alto Risco</h3>
            </div>
            <div className="text-2xl font-bold text-red-600">23</div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Estudantes em Risco de Evasão
              </h3>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                {riskStudents.filter(s => s.riskLevel === 'Alto').length} casos críticos
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {riskStudents.map((student) => (
              <div key={student.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                      <p className="text-sm text-gray-500">{student.grade}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{student.probability}%</div>
                      <div className="text-sm text-gray-500">Probabilidade</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(student.riskLevel)}`}>
                      {student.riskLevel} Risco
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Fatores de Risco</h5>
                    <ul className="space-y-1">
                      {student.factors.map((factor, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Recomendação</h5>
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                      {student.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex space-x-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Criar Intervenção
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors text-sm">
                    Ver Histórico
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Predictions;
