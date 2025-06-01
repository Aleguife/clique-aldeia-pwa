
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';

const Business = () => {
  const { id } = useParams<{ id: string }>();
  const { getBusinessById } = useBusinessData();
  
  const business = id ? getBusinessById(id) : null;

  if (!business) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Estabelecimento não encontrado
          </h1>
          <Button asChild>
            <Link to="/search">Voltar para busca</Link>
          </Button>
        </div>
      </div>
    );
  }

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/search">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>
      </Button>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
              <Badge variant="secondary" className="text-sm">
                {business.category}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold">{business.rating}</span>
              <span className="text-gray-500">({business.reviews} avaliações)</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={business.image}
              alt={business.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Action Buttons */}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Sobre</h2>
                <p className="text-gray-700 leading-relaxed">
                  {business.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Destaques</h2>
                <div className="grid grid-cols-2 gap-3">
                  {business.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            {business.gallery.length > 0 && (
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
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Contato</h2>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-gray-600">{business.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-gray-600">{business.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
