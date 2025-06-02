
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MousePointer } from 'lucide-react';

export const BusinessPlansFooter: React.FC = () => {
  return (
    <footer 
      className="text-gray-900 mt-20"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <MousePointer className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold uppercase">Clique Aldeia</span>
            </div>
            <div className="text-gray-600 space-y-2">
              <p>Conectando a comunidade de Aldeia da Serra.</p>
              <p>Descubra os melhores negócios locais.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Buscar
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">contato@cliquealdeia.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">Aldeia da Serra, Barueri - SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Clique Aldeia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
