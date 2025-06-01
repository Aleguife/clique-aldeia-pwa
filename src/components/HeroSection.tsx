
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Category {
  name: string;
  icon: string;
}

interface HeroSectionProps {
  categories: Category[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ categories }) => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Refined gradient background with better depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-green-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Bolder typography with better hierarchy */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight text-white">
              Descubra
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-green-300 mt-2">
                Aldeia da Serra
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
              A plataforma que conecta você aos melhores estabelecimentos e eventos da nossa região.
            </p>
          </div>

          {/* Enhanced CTA with subtle animation */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-16 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl" 
              asChild
            >
              <Link to="/search">
                Explorar Agora
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
