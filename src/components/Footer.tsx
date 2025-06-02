
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="text-gray-900"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo, Description and Social Media */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Clique Aldeia</span>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-4">
              Conectando a comunidade de Aldeia da Serra. Descubra os melhores negócios locais,
              eventos e oportunidades da nossa região.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
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
              <li>
                <Link to="/news" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Para Empresas
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Clique Aldeia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
