
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

// Category color mapping for better visual distinction
const categoryColors = {
  'Gastronomia': 'bg-orange-100 text-orange-700 border-orange-200',
  'Beleza': 'bg-pink-100 text-pink-700 border-pink-200',
  'Saúde': 'bg-green-100 text-green-700 border-green-200',
  'Serviços': 'bg-blue-100 text-blue-700 border-blue-200',
  'Casa & Construção': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Pet': 'bg-purple-100 text-purple-700 border-purple-200',
  'Esporte': 'bg-red-100 text-red-700 border-red-200',
  'Moda': 'bg-indigo-100 text-indigo-700 border-indigo-200',
};

export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${business.whatsapp}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`tel:${business.phone}`, '_self');
  };

  const categoryColorClass = categoryColors[business.category] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <Card className="group overflow-hidden bg-white border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl">
      <Link to={`/business/${business.id}`}>
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <Link to={`/business/${business.id}`}>
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                {business.name}
              </h3>
            </Link>
            <Badge 
              variant="outline" 
              className={`text-xs font-semibold shrink-0 border ${categoryColorClass}`}
            >
              {business.category}
            </Badge>
          </div>
          
          {/* Enhanced visual rating system */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(business.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-gray-900">{business.rating}</span>
              <span className="text-xs text-gray-500">({business.reviews} avaliações)</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {business.description}
          </p>
          
          <p className="text-xs text-gray-500 font-medium">{business.address}</p>
        </div>
        
        {/* Modern action buttons with better spacing */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-green-600 border-green-300 hover:bg-green-50 hover:border-green-400 transition-all duration-200 font-medium"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 font-medium"
            onClick={handleCall}
          >
            <Phone className="w-4 h-4 mr-2" />
            Ligar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
