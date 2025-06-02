
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
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Estabelecimentos em Destaque</h2>
          <p className="text-gray-600 text-base sm:text-lg">Conheça os favoritos da nossa comunidade</p>
        </div>
        <Button variant="outline" asChild className="shrink-0">
          <Link to="/search">
            Ver Todos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {featuredBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
};
