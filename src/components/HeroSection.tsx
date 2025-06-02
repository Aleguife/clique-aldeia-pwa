
import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart, HeartPulse, Wrench, Home, PawPrint, Dumbbell, Brush } from 'lucide-react';
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
  // Unified category icons mapping using Lucide icons
  const categoryIcons = {
    'Gastronomia': Utensils,
    'Beleza': Heart,
    'Saúde': HeartPulse,
    'Serviços': Wrench,
    'Casa & Construção': Home,
    'Pet': PawPrint,
    'Esporte': Dumbbell,
    'Moda': Brush
  };

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-x-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600" />

      {/* Content with responsive container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-bold leading-tight tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              O Melhor de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                Aldeia da Serra
              </span>
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-xl px-4">
              A plataforma que conecta você aos melhores{' '}
              <br className="hidden sm:block" />
              estabelecimentos e eventos da nossa região.
            </p>
          </div>

          {/* Search Bar */}
          <div className="pt-4 sm:pt-8">
            <div className="max-w-3xl mx-auto px-4">
              <SearchBar variant="hero" />
            </div>
          </div>

          {/* Categories Preview - Responsive Grid */}
          <div className="pt-4 sm:pt-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto px-4">
              {categories.slice(0, 8).map(category => {
                const IconComponent = categoryIcons[category.name] || Utensils;
                return (
                  <Link
                    key={category.name}
                    to={`/search?category=${encodeURIComponent(category.name)}`}
                    className="group"
                  >
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-white/80 hover:text-white transition-all duration-300 group-hover:scale-110">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <IconComponent size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                        {category.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
