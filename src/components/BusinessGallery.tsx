
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Business } from '@/hooks/useBusinessData';

interface BusinessGalleryProps {
  business: Business;
}

export const BusinessGallery: React.FC<BusinessGalleryProps> = ({ business }) => {
  if (business.gallery.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Galeria</h2>
        <div className="grid grid-cols-2 gap-4">
          {business.gallery.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${business.name} - Foto ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
