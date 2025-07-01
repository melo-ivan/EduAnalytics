import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Brain, GraduationCap, Cog } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  type: 'education' | 'automation' | 'machine-learning';
  metrics?: {
    label: string;
    value: string;
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  tags,
  type,
  metrics = []
}) => {
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-8 w-8 text-blue-600" />;
      case 'automation':
        return <Cog className="h-8 w-8 text-red-600" />;
      case 'machine-learning':
        return <Brain className="h-8 w-8 text-purple-600" />;
      default:
        return <BarChart3 className="h-8 w-8 text-blue-600" />;
    }
  };

  const getCategoryColor = () => {
    switch (type) {
      case 'education':
        return 'bg-blue-600 text-white';
      case 'automation':
        return 'bg-red-600 text-white';
      case 'machine-learning':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-blue-600 text-white';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-50 p-3 rounded-xl group-hover:bg-gray-100 transition-colors">
              {getIcon()}
            </div>
            <div>
              <div className="mb-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor()}`}>
                  Data Science
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
            </div>
          </div>
          
          <button className="bg-gray-50 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all group">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Content */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {category}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-2 group">
              <span>Ver Projeto</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Metrics/Visual */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">Resultados</span>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            
            {metrics.length > 0 ? (
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{metric.label}</span>
                    <span className="font-bold text-gray-900">{metric.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-xs text-gray-600">Acc</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">87%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-xs text-gray-600">Prec</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">92%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-xs text-gray-600">F1</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                  <span className="text-xs text-gray-600">89%</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
