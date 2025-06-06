
import { useSupabaseData } from '@/hooks/useSupabaseData';
import { useBusinessFilters } from '@/hooks/useBusinessFilters';

export type { Business, Event, Category, Profile, Favorite } from '@/types/business';

export const useBusinessData = () => {
  const {
    businesses,
    events,
    categories,
    loading,
    error,
    getBusinessById,
    getBusinessBySlug,
    getEventsByType,
    refreshData
  } = useSupabaseData();

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredBusinesses
  } = useBusinessFilters(businesses);

  return {
    businesses,
    events,
    categories,
    loading,
    error,
    filteredBusinesses,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    getBusinessById,
    getBusinessBySlug,
    getEventsByType,
    refreshData
  };
};
