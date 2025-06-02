
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';
import { BusinessHeader } from '@/components/BusinessHeader';
import { BusinessActions } from '@/components/BusinessActions';
import { BusinessDescription } from '@/components/BusinessDescription';
import { BusinessFeatures } from '@/components/BusinessFeatures';
import { BusinessGallery } from '@/components/BusinessGallery';
import { BusinessContactInfo } from '@/components/BusinessContactInfo';
import { BusinessHours } from '@/components/BusinessHours';

const Business = () => {
  const { id } = useParams<{ id: string }>();
  const { getBusinessById } = useBusinessData();
  
  const business = id ? getBusinessById(id) : null;

  if (!business) {
    return (
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Estabelecimento não encontrado
          </h1>
          <Button asChild>
            <Link to="/search">Voltar para busca</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/search">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>
      </Button>

      <div className="space-y-8">
        {/* Header */}
        <BusinessHeader business={business} />

        {/* Action Buttons */}
        <BusinessActions business={business} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <BusinessDescription business={business} />

            {/* Features */}
            <BusinessFeatures business={business} />

            {/* Gallery */}
            <BusinessGallery business={business} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <BusinessContactInfo business={business} />

            {/* Hours */}
            <BusinessHours business={business} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
