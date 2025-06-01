
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Enhanced gradient with better depth */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-green-700 rounded-3xl text-white p-10 lg:p-16 text-center relative">
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Você é um empresário local?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Conecte-se com milhares de moradores e faça seu negócio crescer na Aldeia da Serra
            </p>
          </div>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl" 
              asChild
            >
              <Link to="/planos">
                Conhecer Nossos Planos
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
