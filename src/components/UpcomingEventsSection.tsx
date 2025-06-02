
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, MapPin, Users } from 'lucide-react';
import { Event } from '@/hooks/useBusinessData';

interface UpcomingEventsSectionProps {
  events: Event[];
}

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({ events }) => {
  const upcomingEvents = events.slice(0, 3);

  return (
    <section>
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Próximos Eventos</h2>
          <p className="text-gray-600 text-lg">Não perca o que está acontecendo na região</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/events">
            Ver Todos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg line-clamp-2">{event.title}</h3>
                <Badge variant={event.type === 'comercial' ? 'default' : 'secondary'} className="text-xs shrink-0 ml-2">
                  {event.type === 'comercial' ? 'Comercial' : 'Comunitário'}
                </Badge>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{event.organizer}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
