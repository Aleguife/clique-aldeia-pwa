
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { BusinessPlansHero } from '@/components/business-plans/BusinessPlansHero';
import { BusinessPlansBenefits } from '@/components/business-plans/BusinessPlansBenefits';
import { BusinessPlansHowItWorks } from '@/components/business-plans/BusinessPlansHowItWorks';
import { BusinessPlansPlans } from '@/components/business-plans/BusinessPlansPlans';
import { BusinessPlansSocialProof } from '@/components/business-plans/BusinessPlansSocialProof';
import { BusinessPlansTestimonials } from '@/components/business-plans/BusinessPlansTestimonials';
import { BusinessPlansCTA } from '@/components/business-plans/BusinessPlansCTA';
import { BusinessPlansFooter } from '@/components/business-plans/BusinessPlansFooter';
import { WhatsAppButton } from '@/components/business-plans/WhatsAppButton';

const BusinessPlans = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <BusinessPlansHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-grow">
        {/* Benefits Section */}
        <BusinessPlansBenefits />

        {/* How It Works Section */}
        <BusinessPlansHowItWorks />

        {/* Plans Section */}
        <BusinessPlansPlans />

        {/* Social Proof */}
        <BusinessPlansSocialProof />

        {/* Testimonials */}
        <BusinessPlansTestimonials />

        {/* CTA Section */}
        <BusinessPlansCTA />
      </div>

      {/* Minimal Footer - only this one */}
      <BusinessPlansFooter />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default BusinessPlans;
