
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 lg:p-12 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        Você é um empresário local?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Conecte-se com milhares de moradores e faça seu negócio crescer na Aldeia da Serra
      </p>
      <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold" asChild>
        <Link to="/planos">
          Conhecer Nossos Planos
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </section>
  );
};
