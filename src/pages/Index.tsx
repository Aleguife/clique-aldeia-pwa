
import React from 'react';
import { useBusinessData } from '@/hooks/useBusinessData';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedBusinessesSection } from '@/components/FeaturedBusinessesSection';
import { UpcomingEventsSection } from '@/components/UpcomingEventsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  const { businesses, events, categories, loading, error } = useBusinessData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Erro ao carregar dados</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection categories={categories} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Featured Businesses */}
        <FeaturedBusinessesSection businesses={businesses} />

        {/* Upcoming Events */}
        <UpcomingEventsSection events={events} />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
};

export default Index;
