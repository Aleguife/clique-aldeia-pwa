import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart, Wrench, Home, Shirt } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
interface Category {
  name: string;
  icon: string;
}
interface HeroSectionProps {
  categories: Category[];
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  categories
}) => {
  // Modern category icons mapping
  const categoryIcons = {
    'Gastronomia': Utensils,
    'Beleza': Heart,
    'Saúde': Heart,
    'Serviços': Wrench,
    'Casa & Construção': Home,
    'Pet': Heart,
    'Esporte': Heart,
    'Moda': Shirt
  };
  return <section className="relative h-[60vh] flex items-center justify-center">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="font-bold leading-tight tracking-tight text-white lg:text-7xl text-5xl">
              Descubra
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                Aldeia da Serra
              </span>
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed lg:text-3xl text-base">A plataforma que conecta você aos melhores estabelecimentos e eventos da nossa região.</p>
          </div>

          {/* Search Bar */}
          <div className="pt-8">
            <div className="max-w-3xl mx-auto">
              <SearchBar variant="hero" />
            </div>
          </div>

          {/* Categories Preview */}
          <div className="pt-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-3xl mx-auto">
              {categories.slice(0, 8).map(category => {
              const IconComponent = categoryIcons[category.name] || Utensils;
              return <Link key={category.name} to={`/search?category=${encodeURIComponent(category.name)}`} className="group">
                    <div className="flex flex-col items-center space-y-3 text-white/80 hover:text-white transition-all duration-300 group-hover:scale-110">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-sm font-medium text-center leading-tight">
                        {category.name}
                      </span>
                    </div>
                  </Link>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};