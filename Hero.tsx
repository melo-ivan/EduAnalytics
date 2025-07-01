import React from 'react';
import { TrendingUp, BarChart3, PieChart, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <Database className="h-4 w-4 mr-2" />
                Data Science Professional
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando
              <span className="text-blue-600"> Dados </span>
              em Decisões
              <span className="text-red-600"> Estratégicas</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especialista em análise de dados, machine learning e visualização de informações 
              para empresas de tecnologia educacional e instituições de ensino.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Ver Projetos
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold">
                Download CV
              </button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Data Science Tag */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                  Data Science
                </span>
              </div>

              {/* Mock Chart */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Performance Analysis</span>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                
                {/* Bar Chart Visual */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 text-xs text-gray-600">Q1</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-xs text-gray-600">75%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 text-xs text-gray-600">Q2</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                    <span className="text-xs text-gray-600">89%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 text-xs text-gray-600">Q3</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-xs text-gray-600">92%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <PieChart className="h-5 w-5 text-red-600" />
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Ver Projeto →
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-xl shadow-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
              <Database className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
