import React from 'react';
import { Award, Users, TrendingUp, Database } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Database className="h-6 w-6" />,
      number: "50+",
      label: "Projetos Concluídos",
      color: "text-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "15+",
      label: "Instituições Atendidas",
      color: "text-red-600"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: "300k+",
      label: "Dados Processados",
      color: "text-green-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "5+",
      label: "Anos de Experiência",
      color: "text-purple-600"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Machine Learning", level: 88 },
    { name: "Power BI", level: 92 },
    { name: "Estatística", level: 85 },
    { name: "Data Visualization", level: 90 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Especialista em
              <span className="text-blue-600"> Data Science</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com mais de 5 anos de experiência em análise de dados e machine learning, 
              especializo-me em transformar dados complexos em insights acionáveis para 
              o setor educacional e tecnológico.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Principais Competências</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Download CV
            </button>
          </div>

          {/* Stats */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Impacto dos Projetos
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 ${stat.color} mb-4`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Principais Áreas de Atuação
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Educação", "Healthcare", "Fintech", "E-commerce"].map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
