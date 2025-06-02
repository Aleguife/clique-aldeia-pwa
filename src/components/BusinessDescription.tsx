
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Business } from '@/hooks/useBusinessData';

interface BusinessDescriptionProps {
  business: Business;
}

export const BusinessDescription: React.FC<BusinessDescriptionProps> = ({ business }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Sobre</h2>
        <p className="text-gray-700 leading-relaxed">
          {business.full_description}
        </p>
      </CardContent>
    </Card>
  );
};
