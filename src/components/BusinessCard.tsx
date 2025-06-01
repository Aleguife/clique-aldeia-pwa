
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, MessageCircle } from 'lucide-react';
import { Business } from '@/hooks/useBusinessData';

interface BusinessCardProps {
  business: Business;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${business.whatsapp}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`tel:${business.phone}`, '_self');
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
      <Link to={`/business/${business.id}`}>
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <Link to={`/business/${business.id}`}>
              <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors line-clamp-1">
                {business.name}
              </h3>
            </Link>
            <Badge variant="secondary" className="text-xs shrink-0 ml-2">
              {business.category}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{business.rating}</span>
              <span className="text-xs text-gray-500">({business.reviews})</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {business.description}
          </p>
          
          <p className="text-xs text-gray-500">{business.address}</p>
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-green-600 border-green-600 hover:bg-green-50"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            WhatsApp
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={handleCall}
          >
            <Phone className="w-4 h-4 mr-1" />
            Ligar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
