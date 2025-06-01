
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';

const Events = () => {
  const { events, getEventsByType } = useBusinessData();
  const [selectedType, setSelectedType] = useState<'all' | 'comercial' | 'comunitario'>('all');

  const filteredEvents = selectedType === 'all' ? events : getEventsByType(selectedType);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Eventos</h1>
        <p className="text-gray-600">
          Descubra o que está acontecendo em Aldeia da Serra
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedType === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedType('all')}
          >
            Todos os Eventos
          </Button>
          <Button
            variant={selectedType === 'comercial' ? 'default' : 'outline'}
            onClick={() => setSelectedType('comercial')}
          >
            Eventos Comerciais
          </Button>
          <Button
            variant={selectedType === 'comunitario' ? 'default' : 'outline'}
            onClick={() => setSelectedType('comunitario')}
          >
            Eventos Comunitários
          </Button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Event Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-video lg:aspect-square w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="lg:col-span-2">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                          {event.title}
                        </h3>
                        <Badge 
                          variant={event.type === 'comercial' ? 'default' : 'secondary'}
                          className="shrink-0 ml-4"
                        >
                          {event.type === 'comercial' ? 'Comercial' : 'Comunitário'}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-purple-500" />
                          <span>{event.organizer}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button variant="outline">
                        Mais Informações
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum evento encontrado
              </h3>
              <p className="text-gray-600">
                Não há eventos {selectedType !== 'all' ? `${selectedType}s` : ''} agendados no momento.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
