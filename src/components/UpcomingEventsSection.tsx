
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
    <section className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Próximos Eventos</h2>
          <p className="text-gray-600 text-base sm:text-lg">Não perca o que está acontecendo na região</p>
        </div>
        <Button variant="outline" asChild className="shrink-0">
          <Link to="/events">
            Ver Todos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-base sm:text-lg line-clamp-2 flex-1">{event.title}</h3>
                <Badge variant={event.event_type === 'comercial' ? 'default' : 'secondary'} className="text-xs shrink-0">
                  {event.event_type === 'comercial' ? 'Comercial' : 'Comunitário'}
                </Badge>
              </div>
              
              <div className="space-y-2 sm:space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="truncate">{new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 shrink-0" />
                  <span className="truncate">{event.organizer}</span>
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
