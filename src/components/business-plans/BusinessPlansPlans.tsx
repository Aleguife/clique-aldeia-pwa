
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export const BusinessPlansPlans: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 99',
      period: '/mês',
      description: 'Ideal para pequenos negócios',
      features: [
        'Perfil completo do estabelecimento',
        'Galeria de até 5 fotos',
        'Informações de contato e horários',
        'Avaliações de clientes',
        'Suporte por email'
      ],
      highlighted: false
    },
    {
      name: 'Profissional',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para negócios em crescimento',
      features: [
        'Tudo do plano Básico',
        'Galeria ilimitada de fotos',
        'Publicação de eventos e promoções',
        'Destaque na busca',
        'Estatísticas de visualização',
        'Suporte prioritário por WhatsApp'
      ],
      highlighted: true
    },
    {
      name: 'Premium',
      price: 'R$ 299',
      period: '/mês',
      description: 'Máxima visibilidade',
      features: [
        'Tudo do plano Profissional',
        'Banner destacado na página inicial',
        'Newsletter mensal para clientes',
        'Integração com redes sociais',
        'Relatórios detalhados de performance',
        'Suporte telefônico dedicado'
      ],
      highlighted: false
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Escolha o plano ideal para seu negócio
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Todos os planos incluem tudo que você precisa para ter sucesso
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.highlighted ? 'ring-2 ring-blue-500 bg-gradient-to-b from-blue-50 to-white' : 'bg-white hover:shadow-lg'}`}>
            {plan.highlighted && (
              <Badge className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-500">
                Mais Popular
              </Badge>
            )}
            
            <CardHeader className="text-center space-y-4 pt-8">
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.highlighted ? 'default' : 'outline'}>
                Começar Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
