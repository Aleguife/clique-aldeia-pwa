
import React from 'react';
import { MapPin, Users, Calendar, Star, Heart, Coffee } from 'lucide-react';

export const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: MapPin, delay: '0s', x: '10%', y: '20%' },
    { Icon: Users, delay: '0.5s', x: '85%', y: '30%' },
    { Icon: Calendar, delay: '1s', x: '15%', y: '70%' },
    { Icon: Star, delay: '1.5s', x: '80%', y: '60%' },
    { Icon: Heart, delay: '2s', x: '20%', y: '85%' },
    { Icon: Coffee, delay: '2.5s', x: '75%', y: '15%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-pulse opacity-20"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            animationDuration: '3s',
          }}
        >
          <Icon size={24} className="text-white/30" />
        </div>
      ))}
    </div>
  );
};
