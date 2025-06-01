
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { categories } from '@/hooks/useBusinessData';

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Buscar estabelecimentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => setSearchTerm('')}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Categorias</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === '' ? 'default' : 'secondary'}
            className="cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => setSelectedCategory('')}
          >
            Todas
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? 'default' : 'secondary'}
              className="cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? '' : category.name
              )}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {(searchTerm || selectedCategory) && (
        <div className="flex items-center space-x-2 pt-2 border-t">
          <span className="text-sm text-gray-600">Filtros ativos:</span>
          {searchTerm && (
            <Badge variant="outline" className="text-xs">
              "{searchTerm}"
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setSearchTerm('')}
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          )}
          {selectedCategory && (
            <Badge variant="outline" className="text-xs">
              {selectedCategory}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1"
                onClick={() => setSelectedCategory('')}
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="text-xs"
          >
            Limpar tudo
          </Button>
        </div>
      )}
    </div>
  );
};
