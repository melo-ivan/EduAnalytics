import React from 'react';
import { TrendingUp, TrendingDown, Users, GraduationCap, AlertTriangle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    {
      title: "Total de Estudantes",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-6 w-6" />,
      color: "blue"
    },
    {
      title: "Taxa de Aprovação",
      value: "87.3%",
      change: "+5.2%",
      trend: "up",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "green"
    },
    {
      title: "Risco de Evasão",
      value: "156",
      change: "-8%",
      trend: "down",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "red"
    },
    {
      title: "Média Geral",
      value: "7.8",
      change: "+0.3",
      trend: "up",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      green: "bg-green-50 text-green-600 border-green-200",
      red: "bg-red-50 text-red-600 border-red-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="dashboard" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Educacional
          </h1>
          <p className="text-gray-600">
            Visão geral do desempenho acadêmico e indicadores institucionais
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg border ${getColorClasses(metric.color)}`}>
                  {metric.icon}
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </h3>
                <p className="text-sm text-gray-600">
                  {metric.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Desempenho por Período
              </h3>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                <option>Último Semestre</option>
                <option>Último Ano</option>
              </select>
            </div>
            
            <div className="space-y-4">
              {[
                { period: "Jan-Mar", value: 85, color: "bg-blue-600" },
                { period: "Abr-Jun", value: 78, color: "bg-blue-500" },
                { period: "Jul-Set", value: 92, color: "bg-blue-600" },
                { period: "Out-Dez", value: 87, color: "bg-blue-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 text-sm font-medium text-gray-700">
                    {item.period}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <div className="w-12 text-sm font-semibold text-gray-900">
                    {item.value}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Analysis */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Análise de Risco de Evasão
              </h3>
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                Alto Risco: 156
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Alto Risco</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">156 (5.5%)</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Médio Risco</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">342 (12.0%)</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Baixo Risco</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">2,349 (82.5%)</span>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Principais Fatores de Risco
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Baixa frequência (&lt;75%)</li>
                    <li>• Notas abaixo da média</li>
                    <li>• Falta de engajamento</li>
                    <li>• Dificuldades socioeconômicas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
