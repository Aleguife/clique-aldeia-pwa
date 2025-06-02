import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X, Filter, Star, Clock, MapPin, Utensils, Heart, HeartPulse, Wrench, Home, PawPrint, Dumbbell, Brush } from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  openNow: boolean;
  setOpenNow: (open: boolean) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  minRating,
  setMinRating,
  openNow,
  setOpenNow
}) => {
  const { categories } = useBusinessData();

  // Unified category icons mapping
  const categoryIcons = {
    'Gastronomia': Utensils,
    'Beleza': Heart,
    'Saúde': HeartPulse,
    'Serviços': Wrench,
    'Casa & Construção': Home,
    'Pet': PawPrint,
    'Esporte': Dumbbell,
    'Moda': Brush,
  };

  const sortOptions = [
    { value: 'relevance', label: 'Relevância', icon: Filter },
    { value: 'rating', label: 'Avaliação', icon: Star },
    { value: 'distance', label: 'Distância', icon: MapPin }
  ];

  const ratingOptions = [
    { value: 0, label: 'Todas as avaliações' },
    { value: 3, label: '3+ estrelas' },
    { value: 4, label: '4+ estrelas' },
    { value: 4.5, label: '4.5+ estrelas' }
  ];

  const hasActiveFilters = searchTerm || selectedCategory || sortBy !== 'relevance' || minRating > 0 || openNow;

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortBy('relevance');
    setMinRating(0);
    setOpenNow(false);
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm border">
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

      {/* Advanced Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sort By */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Ordenar por</label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <option.icon className="w-4 h-4" />
                    {option.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rating Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Avaliação mínima</label>
          <Select value={minRating.toString()} onValueChange={(value) => setMinRating(Number(value))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ratingOptions.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {option.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Open Now Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Disponibilidade</label>
          <Button
            variant={openNow ? "default" : "outline"}
            onClick={() => setOpenNow(!openNow)}
            className="w-full justify-start"
          >
            <Clock className="w-4 h-4 mr-2" />
            Aberto agora
          </Button>
        </div>

        {/* Clear Filters */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">&nbsp;</label>
          <Button
            variant="outline"
            onClick={clearAllFilters}
            disabled={!hasActiveFilters}
            className="w-full"
          >
            <X className="w-4 h-4 mr-2" />
            Limpar filtros
          </Button>
        </div>
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
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.name] || Utensils;
            return (
              <Badge
                key={category.name}
                variant={selectedCategory === category.name ? 'default' : 'secondary'}
                className="cursor-pointer hover:bg-blue-100 transition-colors"
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? '' : category.name
                )}
              >
                <IconComponent className="w-3 h-3 mr-1" />
                {category.name}
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="flex items-center flex-wrap gap-2 pt-2 border-t">
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
          {sortBy !== 'relevance' && (
            <Badge variant="outline" className="text-xs">
              {sortOptions.find(o => o.value === sortBy)?.label}
            </Badge>
          )}
          {minRating > 0 && (
            <Badge variant="outline" className="text-xs">
              {ratingOptions.find(o => o.value === minRating)?.label}
            </Badge>
          )}
          {openNow && (
            <Badge variant="outline" className="text-xs">
              Aberto agora
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
