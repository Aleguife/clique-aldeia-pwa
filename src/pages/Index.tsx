
import React from 'react';
import { useBusinessData } from '@/hooks/useBusinessData';
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { FeaturedBusinessesSection } from '@/components/FeaturedBusinessesSection';
import { UpcomingEventsSection } from '@/components/UpcomingEventsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  const { businesses, events, categories } = useBusinessData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection categories={categories} />

      {/* Main content with enhanced spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Categories Section */}
        <CategoriesSection categories={categories} />

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
