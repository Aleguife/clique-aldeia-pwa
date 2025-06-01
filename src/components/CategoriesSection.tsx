
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Heart, Wrench, Home, Shirt } from 'lucide-react';

interface Category {
  name: string;
  icon: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  const categoryIcons = {
    'Gastronomia': Utensils,
    'Beleza': Heart,
    'Saúde': Heart,
    'Serviços': Wrench,
    'Casa & Construção': Home,
    'Pet': Heart,
    'Esporte': Heart,
    'Moda': Shirt,
  };

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore por Categoria</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Encontre exatamente o que você precisa na sua região
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.name] || Utensils;
          return (
            <Link
              key={category.name}
              to={`/search?category=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform flex justify-center">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
