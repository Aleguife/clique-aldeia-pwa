
import React from 'react';
import { useBusinessData } from '@/hooks/useBusinessData';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedBusinessesSection } from '@/components/FeaturedBusinessesSection';
import { UpcomingEventsSection } from '@/components/UpcomingEventsSection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  const { businesses, events, categories } = useBusinessData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection categories={categories} />

      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
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
