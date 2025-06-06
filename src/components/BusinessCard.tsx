
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getSlugByBusinessName } from '@/lib/slug';
import type { Business } from '@/types/business';

interface BusinessCardProps {
  business: Business;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const slug = getSlugByBusinessName(business.name);
  const businessUrl = `/empresa/${slug}.html`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        {business.image ? (
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <span className="text-blue-600 text-lg font-medium">{business.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{business.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
              {business.name}
            </h3>
            {business.category && (
              <p className="text-sm text-blue-600 font-medium">{business.category}</p>
            )}
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {business.description}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="line-clamp-1">{business.address}</span>
            </div>
            
            {business.phone && (
              <div className="flex items-center text-gray-500 text-sm">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{business.phone}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-gray-500">
              {business.reviews} avaliações
            </div>
            <Button size="sm" asChild>
              <Link to={businessUrl}>
                Ver Detalhes
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
