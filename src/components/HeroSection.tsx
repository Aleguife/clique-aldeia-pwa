
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Utensils, Heart, Wrench, Home, Shirt } from 'lucide-react';

interface Category {
  name: string;
  icon: string;
}

interface HeroSectionProps {
  categories: Category[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ categories }) => {
  // Modern category icons mapping
  const categoryIcons = {
    'Gastronomia': Utensils,
    'Beleza': Heart, // Using Heart as placeholder for makeup brush
    'Saúde': Heart,
    'Serviços': Wrench,
    'Casa & Construção': Home,
    'Pet': Heart, // Using Heart as placeholder for paw
    'Esporte': Heart, // Using Heart as placeholder for sports
    'Moda': Shirt,
  };

  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Descubra
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                Aldeia da Serra
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A plataforma que conecta você aos melhores estabelecimentos e eventos da nossa região.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
              asChild
            >
              <Link to="/search">
                Explorar Agora
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Categories Preview */}
          <div className="pt-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-2xl mx-auto">
              {categories.slice(0, 8).map((category) => {
                const IconComponent = categoryIcons[category.name] || Utensils;
                return (
                  <Link
                    key={category.name}
                    to={`/search?category=${encodeURIComponent(category.name)}`}
                    className="group"
                  >
                    <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300 group-hover:scale-110">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-xs font-medium text-center leading-tight">
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
