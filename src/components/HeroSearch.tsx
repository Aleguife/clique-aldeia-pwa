
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const HeroSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden group hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center">
            <div className="flex items-center px-6 py-4 text-gray-500">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busque por restaurantes, serviços, eventos..."
              className="flex-1 py-4 pr-4 text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none text-lg"
            />
            <div className="flex items-center px-4">
              <div className="flex items-center text-gray-400 text-sm border-l border-gray-200 pl-4">
                <MapPin size={16} className="mr-2" />
                <span>Aldeia da Serra</span>
              </div>
            </div>
            <div className="p-2">
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
