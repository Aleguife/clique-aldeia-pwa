
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BusinessCard } from '@/components/BusinessCard';
import { Filters } from '@/components/Filters';
import { useBusinessData } from '@/hooks/useBusinessData';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { businesses, categories, loading, error } = useBusinessData();

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [minRating, setMinRating] = useState(0);
  const [openNow, setOpenNow] = useState(false);

  // Handle URL parameters
  useEffect(() => {
    const qParam = searchParams.get('q');
    const categoryParam = searchParams.get('category');
    const sortParam = searchParams.get('sort');
    const ratingParam = searchParams.get('rating');
    const openParam = searchParams.get('open');

    if (qParam) {
      setSearchTerm(qParam);
    }
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (sortParam) {
      setSortBy(sortParam);
    }
    if (ratingParam) {
      setMinRating(Number(ratingParam));
    }
    if (openParam === 'true') {
      setOpenNow(true);
    }
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchTerm) params.set('q', searchTerm);
    if (selectedCategory) params.set('category', selectedCategory);
    if (sortBy !== 'relevance') params.set('sort', sortBy);
    if (minRating > 0) params.set('rating', minRating.toString());
    if (openNow) params.set('open', 'true');

    setSearchParams(params);
  }, [searchTerm, selectedCategory, sortBy, minRating, openNow, setSearchParams]);

  // Apply filtering and sorting
  const getFilteredAndSortedBusinesses = () => {
    let filtered = [...businesses];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(business =>
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(business => business.category === selectedCategory);
    }

    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter(business => business.rating >= minRating);
    }

    // Apply open now filter (simplified - would need actual business hours logic)
    if (openNow) {
      // For demo purposes, filter businesses that might be open
      // In real implementation, you'd check actual hours against current time
      filtered = filtered.filter(business => {
        const now = new Date();
        const currentHour = now.getHours();
        return currentHour >= 8 && currentHour <= 22; // Simple demo logic
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        // For demo purposes, sort by name length as distance placeholder
        filtered.sort((a, b) => a.name.length - b.name.length);
        break;
      case 'relevance':
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  };

  if (loading) {
    return (
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3">Carregando estabelecimentos...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Erro ao carregar dados</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  const finalBusinesses = getFilteredAndSortedBusinesses();

  return (
    <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Buscar Estabelecimentos
        </h1>
        <p className="text-gray-600">
          Encontre os melhores estabelecimentos locais em Aldeia da Serra
        </p>
      </div>

      <div className="space-y-6">
        {/* Enhanced Filters */}
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          minRating={minRating}
          setMinRating={setMinRating}
          openNow={openNow}
          setOpenNow={setOpenNow}
        />

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {finalBusinesses.length} estabelecimento{finalBusinesses.length !== 1 ? 's' : ''} encontrado{finalBusinesses.length !== 1 ? 's' : ''}
              {searchTerm && ` para "${searchTerm}"`}
              {selectedCategory && ` em ${selectedCategory}`}
            </h2>
            {sortBy !== 'relevance' && (
              <div className="text-sm text-gray-500">
                Ordenado por {sortBy === 'rating' ? 'avaliação' : sortBy === 'distance' ? 'distância' : 'relevância'}
              </div>
            )}
          </div>

          {finalBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {finalBusinesses.map((business) => (
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
