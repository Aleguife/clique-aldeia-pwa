
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BusinessCard } from '@/components/BusinessCard';
import { Filters } from '@/components/Filters';
import { useBusinessData } from '@/hooks/useBusinessData';

const Search = () => {
  const [searchParams] = useSearchParams();
  const {
    filteredBusinesses,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  } = useBusinessData();

  // Handle URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams, setSelectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Buscar Estabelecimentos
        </h1>
        <p className="text-gray-600">
          Encontre os melhores estabelecimentos locais em Aldeia da Serra
        </p>
      </div>

      <div className="space-y-6">
        {/* Filters */}
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredBusinesses.length} estabelecimento{filteredBusinesses.length !== 1 ? 's' : ''} encontrado{filteredBusinesses.length !== 1 ? 's' : ''}
            </h2>
          </div>

          {filteredBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum estabelecimento encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar seus filtros de busca ou explore outras categorias
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
