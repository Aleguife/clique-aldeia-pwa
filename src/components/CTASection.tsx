
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl text-white p-12 lg:p-16 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        Você é um empresário local?
      </h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
        Conecte-se com milhares de moradores e faça seu negócio crescer na Aldeia da Serra
      </p>
      <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4" asChild>
        <Link to="/planos">
          Conhecer Nossos Planos
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </section>
  );
};
