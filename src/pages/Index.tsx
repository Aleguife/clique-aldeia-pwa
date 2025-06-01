import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BusinessCard } from '@/components/BusinessCard';
import { Badge } from '@/components/ui/badge';
import { FloatingIcons } from '@/components/FloatingIcons';
import { HeroSearch } from '@/components/HeroSearch';
import { ArrowRight, MapPin, Clock, Users, Sparkles, TrendingUp, Shield, Calendar } from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';

const Index = () => {
  const { businesses, events, categories } = useBusinessData();
  
  // Pegar apenas os primeiros estabelecimentos e eventos para a home
  const featuredBusinesses = businesses.slice(0, 6);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-green-800/95" />
        </div>

        {/* Floating Icons */}
        <FloatingIcons />

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/5 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-white/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Conectando nossa comunidade desde 2024
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-white">
                  Descubra
                </span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 animate-pulse">
                    Aldeia da Serra
                  </span>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                A plataforma que conecta você aos melhores estabelecimentos, eventos e experiências da nossa região. 
                Descubra, avalie e compartilhe tudo o que nossa comunidade tem de melhor.
              </p>
            </div>

            {/* Search Component */}
            <div className="pt-8">
              <HeroSearch />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group" 
                asChild
              >
                <Link to="/search">
                  <Sparkles className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Explorar Agora
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-lg px-10 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105" 
                asChild
              >
                <Link to="/events">
                  <Calendar className="mr-3 w-5 h-5" />
                  Ver Eventos
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span>500+ Estabelecimentos</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>10mil+ Usuários</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Verificado e Confiável</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
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
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/search?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
