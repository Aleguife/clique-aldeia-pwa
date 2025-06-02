
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const BusinessPlansTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      business: 'Salão Beleza & Charme',
      content: 'Desde que me cadastrei no Clique Aldeia, minha agenda ficou sempre cheia. Os moradores agora me encontram facilmente!',
      rating: 5
    },
    {
      name: 'João Santos',
      business: 'Restaurante Sabor Local',
      content: 'Excelente plataforma! Aumentamos nosso delivery em 60% apenas divulgando nosso cardápio aqui.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      business: 'Pet Shop Amigo Fiel',
      content: 'A visibilidade que ganhamos na região foi incrível. Recomendo para todos os empresários da Aldeia.',
      rating: 5
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          O que nossos parceiros dizem
        </h2>
        <p className="text-xl text-gray-600">
          Histórias reais de sucesso de empresários da Aldeia da Serra
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
