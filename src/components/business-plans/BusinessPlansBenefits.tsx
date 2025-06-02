
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Target, TrendingUp, Calendar } from 'lucide-react';

export const BusinessPlansBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Search,
      title: 'Maior Visibilidade',
      description: 'Apareça nos resultados de busca quando clientes procurarem seu tipo de negócio na região.'
    },
    {
      icon: Target,
      title: 'Público Local',
      description: 'Conecte-se diretamente com moradores de Aldeia da Serra que procuram seus serviços.'
    },
    {
      icon: TrendingUp,
      title: 'Aumento nas Vendas',
      description: 'Empresas parceiras relatam aumento médio de 40% nas vendas após se cadastrarem.'
    },
    {
      icon: Calendar,
      title: 'Divulgação de Eventos',
      description: 'Promova eventos, promoções e novidades diretamente para a comunidade local.'
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Por que escolher o Clique Aldeia?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A plataforma que conecta seu negócio com a comunidade local
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
