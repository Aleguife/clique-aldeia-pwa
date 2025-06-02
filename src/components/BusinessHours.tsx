
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { Business } from '@/hooks/useBusinessData';

interface BusinessHoursProps {
  business: Business;
}

export const BusinessHours: React.FC<BusinessHoursProps> = ({ business }) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <h2 className="text-xl font-semibold">Horário de Funcionamento</h2>
        </div>
        
        <div className="space-y-2">
          {Object.entries(business.hours).map(([day, hours]) => (
            <div key={day} className="flex justify-between items-center">
              <span className="text-gray-700">{day}</span>
              <span className={`text-sm ${hours === 'Fechado' ? 'text-red-600' : 'text-gray-600'}`}>
                {hours}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
