
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Business } from '@/hooks/useBusinessData';

interface BusinessActionsProps {
  business: Business;
}

export const BusinessActions: React.FC<BusinessActionsProps> = ({ business }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${business.whatsapp}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${business.phone}`, '_self');
  };

  const handleMaps = () => {
    const address = encodeURIComponent(business.address);
    window.open(`https://maps.google.com/?q=${address}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Button
        className="bg-green-600 hover:bg-green-700 text-white"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp
      </Button>
      <Button variant="outline" onClick={handleCall}>
        <Phone className="w-4 h-4 mr-2" />
        Ligar
      </Button>
      <Button variant="outline" onClick={handleMaps}>
        <MapPin className="w-4 h-4 mr-2" />
        Ver no Maps
        <ExternalLink className="w-3 h-3 ml-1" />
      </Button>
    </div>
  );
};
