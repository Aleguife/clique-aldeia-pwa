import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BusinessCard } from '@/components/BusinessCard';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Clock, Users, Calendar, Utensils, Heart, Wrench, Home, Football, Shirt } from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';

const Index = () => {
  const { businesses, events, categories } = useBusinessData();
  
  // Pegar apenas os primeiros estabelecimentos e eventos para a home
  const featuredBusinesses = businesses.slice(0, 6);
  const upcomingEvents = events.slice(0, 3);

  // Modern category icons mapping
  const categoryIcons = {
    'Gastronomia': Utensils,
    'Beleza': Heart, // Using Heart as placeholder for makeup brush
    'Saúde': Heart,
    'Serviços': Wrench,
    'Casa & Construção': Home,
    'Pet': Heart, // Using Heart as placeholder for paw
    'Esporte': Football,
    'Moda': Shirt,
  };

  return (
    <div className="min-h-screen">
      {/* Refined Hero Section - 60vh */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Descubra
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                  Aldeia da Serra
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                A plataforma que conecta você aos melhores estabelecimentos e eventos da nossa região.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
                asChild
              >
                <Link to="/search">
                  Explorar Agora
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Categories Preview */}
            <div className="pt-8">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-2xl mx-auto">
                {categories.slice(0, 8).map((category) => {
                  const IconComponent = categoryIcons[category.name] || Utensils;
                  return (
                    <Link
                      key={category.name}
                      to={`/search?category=${encodeURIComponent(category.name)}`}
                      className="group"
                    >
                      <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300 group-hover:scale-110">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <IconComponent size={20} />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight">
                          {category.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Categories Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore por Categoria</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encontre exatamente o que você precisa na sua região
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.name] || Utensils;
              return (
                <Link
                  key={category.name}
                  to={`/search?category=${encodeURIComponent(category.name)}`}
                  className="group"
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white">
                    <CardContent className="p-6">
                      <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform flex justify-center">
                        <IconComponent size={32} />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Businesses */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Estabelecimentos em Destaque</h2>
              <p className="text-gray-600">Conheça os favoritos da nossa comunidade</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/search">
                Ver Todos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Próximos Eventos</h2>
              <p className="text-gray-600">Não perca o que está acontecendo na região</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/events">
                Ver Todos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg line-clamp-2">{event.title}</h3>
                    <Badge variant={event.type === 'comercial' ? 'default' : 'secondary'} className="text-xs shrink-0 ml-2">
                      {event.type === 'comercial' ? 'Comercial' : 'Comunitário'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
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
                  
                  <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Você é um empresário local?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conecte-se com milhares de moradores e faça seu negócio crescer na Aldeia da Serra
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold" asChild>
            <Link to="/planos">
              Conhecer Nossos Planos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;
