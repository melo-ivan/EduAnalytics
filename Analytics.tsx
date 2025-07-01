import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Filter, Download, Calendar } from 'lucide-react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('semester');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const performanceData = [
    { subject: "Matemática", average: 7.8, students: 245, trend: "+0.3" },
    { subject: "Português", average: 8.2, students: 238, trend: "+0.1" },
    { subject: "Ciências", average: 7.5, students: 242, trend: "-0.2" },
    { subject: "História", average: 8.0, students: 235, trend: "+0.4" },
    { subject: "Geografia", average: 7.9, students: 240, trend: "+0.2" }
  ];

  const attendanceData = [
    { grade: "1º Ano", attendance: 92, total: 180 },
    { grade: "2º Ano", attendance: 89, total: 165 },
    { grade: "3º Ano", attendance: 87, total: 158 },
    { grade: "4º Ano", attendance: 94, total: 172 },
    { grade: "5º Ano", attendance: 91, total: 168 }
  ];

  return (
    <section id="analytics" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Análises Detalhadas
            </h2>
            <p className="text-gray-600">
              Insights profundos sobre desempenho acadêmico e tendências educacionais
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="semester">Este Semestre</option>
                <option value="year">Este Ano</option>
                <option value="quarter">Último Trimestre</option>
              </select>
            </div>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <span>Desempenho por Disciplina</span>
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Atualizado há 2 horas</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {performanceData.map((item, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-gray-900">{item.subject}</h4>
                      <span className="text-sm text-gray-500">({item.students} alunos)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{item.average}</span>
                      <span className={`text-sm font-medium ${
                        item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(item.average / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Tendência Geral</h3>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">+12.5%</div>
              <p className="text-sm text-gray-600">
                Melhoria no desempenho geral comparado ao período anterior
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Top Performers</h3>
              <div className="space-y-3">
                {[
                  { name: "Ana Silva", grade: "3º Ano", score: 9.8 },
                  { name: "João Santos", grade: "2º Ano", score: 9.6 },
                  { name: "Maria Costa", grade: "1º Ano", score: 9.5 }
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.grade}</p>
                    </div>
                    <span className="font-bold text-green-600">{student.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
              <PieChart className="h-5 w-5 text-green-600" />
              <span>Análise de Frequência</span>
            </h3>
            <select 
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">Todas as Turmas</option>
              <option value="elementary">Ensino Fundamental</option>
              <option value="middle">Ensino Médio</option>
            </select>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {attendanceData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-green-500"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${item.attendance}, 100`}
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-900">{item.attendance}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.grade}</h4>
                <p className="text-xs text-gray-500">{item.total} alunos</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
