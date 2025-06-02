
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
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Por que escolher o Clique Aldeia?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A plataforma que conecta seu negócio com a comunidade local
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
