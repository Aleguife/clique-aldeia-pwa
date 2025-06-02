
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Star } from 'lucide-react';

export const BusinessPlansHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Faça seu negócio
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">crescer em Aldeia da Serra</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Conecte-se com mais de 15.000 moradores locais e multiplique suas vendas
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-6 py-3">
              <Users className="w-5 h-5" />
              <span>+15.000 moradores</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-6 py-3">
              <TrendingUp className="w-5 h-5" />
              <span>+200% de visibilidade</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-6 py-3">
              <Star className="w-5 h-5" />
              <span>Destaque na região</span>
            </div>
          </div>
          <div className="pt-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4">Comece Agora</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
