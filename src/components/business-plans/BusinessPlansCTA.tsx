
import React from 'react';
import { Button } from '@/components/ui/button';

export const BusinessPlansCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl text-white p-12 lg:p-16 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        Pronto para fazer seu negócio crescer?
      </h2>
      <p className="text-xl mb-10 opacity-90 leading-relaxed">Junte-se a mais de 400 empresas que já estão conectadas com a comunidade</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
          Começar Gratuitamente
        </Button>
        <Button size="lg" variant="outline" className="border-white hover:bg-white text-blue-600 px-8 py-4">
          Falar com Consultor
        </Button>
      </div>
    </section>
  );
};
