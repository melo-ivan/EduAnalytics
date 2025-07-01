import React from 'react';
import { Database, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">DataScience Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando dados em decisões estratégicas para empresas de tecnologia educacional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>contato@datasciencepro.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>por DataScience Pro © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
