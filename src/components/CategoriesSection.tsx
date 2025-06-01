
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

  const categoryColors = {
    'Gastronomia': 'text-orange-600 group-hover:text-orange-700',
    'Beleza': 'text-pink-600 group-hover:text-pink-700',
    'Saúde': 'text-green-600 group-hover:text-green-700',
    'Serviços': 'text-blue-600 group-hover:text-blue-700',
    'Casa & Construção': 'text-yellow-600 group-hover:text-yellow-700',
    'Pet': 'text-purple-600 group-hover:text-purple-700',
    'Esporte': 'text-red-600 group-hover:text-red-700',
    'Moda': 'text-indigo-600 group-hover:text-indigo-700',
  };

  return (
    <section className="space-y-10">
      {/* Enhanced section header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Explore por Categoria
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Encontre exatamente o que você precisa na sua região com nossa seleção organizada
        </p>
      </div>
      
      {/* Enhanced grid with better spacing and animations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.name] || Utensils;
          const colorClass = categoryColors[category.name] || 'text-blue-600 group-hover:text-blue-700';
          
          return (
            <Link
              key={category.name}
              to={`/search?category=${encodeURIComponent(category.name)}`}
              className="group"
            >
              <Card className="text-center bg-white border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-2xl h-full">
                <CardContent className="p-8 flex flex-col items-center space-y-4">
                  <div className={`${colorClass} transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-lg">
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
