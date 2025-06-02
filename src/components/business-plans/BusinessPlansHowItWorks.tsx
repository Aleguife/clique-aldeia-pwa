
import React from 'react';

export const BusinessPlansHowItWorks: React.FC = () => {
  const howItWorks = [
    {
      step: '1',
      title: 'Cadastre seu Negócio',
      description: 'Crie um perfil completo com fotos, horários e informações de contato.'
    },
    {
      step: '2',
      title: 'Seja Encontrado',
      description: 'Apareça nos resultados quando clientes buscarem seus produtos ou serviços.'
    },
    {
      step: '3',
      title: 'Conecte-se com Clientes',
      description: 'Receba contatos diretos e aumente suas vendas na comunidade local.'
    }
  ];

  return (
    <section className="bg-blue-50 rounded-3xl p-12 lg:p-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Como Funciona
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Em apenas 3 passos simples, seu negócio estará conectado com toda a comunidade
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {howItWorks.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {step.step}
            </div>
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
