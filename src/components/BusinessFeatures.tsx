
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Business } from '@/hooks/useBusinessData';

interface BusinessFeaturesProps {
  business: Business;
}

export const BusinessFeatures: React.FC<BusinessFeaturesProps> = ({ business }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Destaques</h2>
        <div className="grid grid-cols-2 gap-3">
          {business.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
