
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin } from 'lucide-react';
import { Business } from '@/hooks/useBusinessData';

interface BusinessContactInfoProps {
  business: Business;
}

export const BusinessContactInfo: React.FC<BusinessContactInfoProps> = ({ business }) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Contato</h2>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium">Telefone</p>
              <p className="text-gray-600">{business.phone}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium">Endereço</p>
              <p className="text-gray-600">{business.address}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
