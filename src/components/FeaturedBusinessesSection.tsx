
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BusinessCard } from '@/components/BusinessCard';
import { ArrowRight } from 'lucide-react';
import { Business } from '@/hooks/useBusinessData';

interface FeaturedBusinessesSectionProps {
  businesses: Business[];
}

export const FeaturedBusinessesSection: React.FC<FeaturedBusinessesSectionProps> = ({ businesses }) => {
  const featuredBusinesses = businesses.slice(0, 6);

  return (
    <section className="space-y-10">
      {/* Improved typography hierarchy */}
      <div className="flex items-end justify-between">
        <div className="space-y-3">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Estabelecimentos em Destaque
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl">
            Conheça os favoritos da nossa comunidade e descubra novos lugares especiais
          </p>
        </div>
        <Button 
          variant="outline" 
          className="hidden md:flex border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 font-semibold transition-all duration-200" 
          asChild
        >
          <Link to="/search">
            Ver Todos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
      
      {/* Enhanced grid with better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      {/* Mobile "Ver Todos" button */}
      <div className="flex justify-center md:hidden">
        <Button 
          variant="outline" 
          className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 font-semibold transition-all duration-200" 
          asChild
        >
          <Link to="/search">
            Ver Todos os Estabelecimentos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
