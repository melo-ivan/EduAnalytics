import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Eye, Share2, Clock } from 'lucide-react';

const Reports = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reports = [
    {
      id: 1,
      title: "Relatório de Desempenho Mensal",
      description: "Análise completa do desempenho acadêmico de todos os estudantes",
      type: "performance",
      date: "2025-01-15",
      status: "ready",
      size: "2.4 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Análise de Frequência Escolar",
      description: "Relatório detalhado sobre padrões de frequência e absenteísmo",
      type: "attendance",
      date: "2025-01-14",
      status: "ready",
      size: "1.8 MB",
      format: "Excel"
    },
    {
      id: 3,
      title: "Predição de Risco de Evasão",
      description: "Identificação de estudantes com alto risco de abandono escolar",
      type: "prediction",
      date: "2025-01-13",
      status: "processing",
      size: "3.1 MB",
      format: "PDF"
    },
    {
      id: 4,
      title: "Dashboard Executivo",
      description: "Resumo executivo com principais KPIs educacionais",
      type: "executive",
      date: "2025-01-12",
      status: "ready",
      size: "1.2 MB",
      format: "PDF"
    },
    {
      id: 5,
      title: "Análise Comparativa de Turmas",
      description: "Comparação de desempenho entre diferentes turmas e períodos",
      type: "comparative",
      date: "2025-01-11",
      status: "ready",
      size: "2.9 MB",
      format: "Excel"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready':
        return 'Pronto';
      case 'processing':
        return 'Processando';
      case 'error':
        return 'Erro';
      default:
        return 'Desconhecido';
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      performance: 'bg-blue-100 text-blue-800',
      attendance: 'bg-green-100 text-green-800',
      prediction: 'bg-purple-100 text-purple-800',
      executive: 'bg-red-100 text-red-800',
      comparative: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredReports = selectedFilter === 'all' 
    ? reports 
    : reports.filter(report => report.type === selectedFilter);

  return (
    <section id="reports" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Relatórios Automatizados
            </h2>
            <p className="text-gray-600">
              Relatórios gerados automaticamente com insights educacionais
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select 
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">Todos os Tipos</option>
                <option value="performance">Desempenho</option>
                <option value="attendance">Frequência</option>
                <option value="prediction">Predições</option>
                <option value="executive">Executivo</option>
                <option value="comparative">Comparativo</option>
              </select>
            </div>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Novo Relatório</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-sm text-gray-600">Relatórios Gerados</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Download className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-gray-600">Downloads</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Em Processamento</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Share2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">42</p>
                <p className="text-sm text-gray-600">Compartilhamentos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Relatórios Disponíveis
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredReports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {report.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                        {report.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {getStatusText(report.status)}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      {report.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(report.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <span>{report.size}</span>
                      <span>{report.format}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-6">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button 
                      className={`p-2 transition-colors ${
                        report.status === 'ready' 
                          ? 'text-gray-400 hover:text-blue-600' 
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                      disabled={report.status !== 'ready'}
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
