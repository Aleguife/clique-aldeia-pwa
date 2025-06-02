
import React from 'react';
import { Button } from '@/components/ui/button';

export const BusinessPlansCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 lg:p-12 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        Pronto para fazer seu negócio crescer?
      </h2>
      <p className="text-xl mb-8 opacity-90">Junte-se a mais de 400 empresas que já estão conectadas com a comunidade</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Começar Gratuitamente
        </Button>
        <Button size="lg" variant="outline" className="border-white hover:bg-white text-blue-600">
          Falar com Consultor
        </Button>
      </div>
    </section>
  );
};
