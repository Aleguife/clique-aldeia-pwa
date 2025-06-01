
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const News = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notícias</h1>
        <p className="text-gray-600">
          Fique por dentro das novidades de Aldeia da Serra
        </p>
      </div>

      <Card className="bg-white">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Em desenvolvimento
          </h2>
          <p className="text-gray-600">
            A seção de notícias estará disponível em breve com as principais novidades da região.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default News;
