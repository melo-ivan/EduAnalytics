import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Análise de Desempenho Escolar",
      category: "Educação",
      description: "Sistema de análise preditiva para identificar estudantes em risco de evasão escolar, utilizando machine learning para processar dados acadêmicos e socioeconômicos.",
      tags: ["Python", "Scikit-learn", "Pandas", "Power BI"],
      type: "education" as const,
      metrics: [
        { label: "Precisão", value: "94%" },
        { label: "Recall", value: "87%" },
        { label: "Estudantes Analisados", value: "12k+" }
      ]
    },
    {
      title: "Automação de Relatórios Financeiros",
      category: "Automação",
      description: "Pipeline automatizado para geração de relatórios financeiros em tempo real, integrando múltiplas fontes de dados e dashboards interativos para tomada de decisão.",
      tags: ["SQL", "Power Automate", "Excel", "DAX"],
      type: "automation" as const,
      metrics: [
        { label: "Tempo Economizado", value: "85%" },
        { label: "Relatórios/Mês", value: "450+" },
        { label: "Precisão", value: "99.2%" }
      ]
    },
    {
      title: "Modelo de Recomendação Educacional",
      category: "Machine Learning",
      description: "Sistema de recomendação personalizado para sugerir conteúdos educacionais baseado no perfil de aprendizagem e histórico de desempenho dos estudantes.",
      tags: ["TensorFlow", "Keras", "Python", "AWS"],
      type: "machine-learning" as const,
      metrics: [
        { label: "Taxa de Engajamento", value: "+67%" },
        { label: "Satisfação", value: "4.8/5" },
        { label: "Usuários Ativos", value: "25k+" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções em Data Science que transformaram processos educacionais e 
            otimizaram tomadas de decisão em instituições de ensino
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
