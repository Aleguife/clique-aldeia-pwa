
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Business } from '@/hooks/useBusinessData';

interface BusinessHeaderProps {
  business: Business;
}

export const BusinessHeader: React.FC<BusinessHeaderProps> = ({ business }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
          <Badge variant="secondary" className="text-sm">
            {business.category}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="text-lg font-semibold">{business.rating}</span>
          <span className="text-gray-500">({business.reviews} avaliações)</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
