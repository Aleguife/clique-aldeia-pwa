
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface BusinessHoursProps {
  hours: { [key: string]: string };
}

export const BusinessHours: React.FC<BusinessHoursProps> = ({ hours }) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <h2 className="text-xl font-semibold">Horário de Funcionamento</h2>
        </div>
        
        <div className="space-y-2">
          {Object.entries(hours).map(([day, time]) => (
            <div key={day} className="flex justify-between items-center">
              <span className="text-gray-700">{day}</span>
              <span className={`text-sm ${time === 'Fechado' ? 'text-red-600' : 'text-gray-600'}`}>
                {time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
