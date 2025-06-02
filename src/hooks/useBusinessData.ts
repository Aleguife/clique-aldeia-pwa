
import { businesses } from '@/data/businessData';
import { events } from '@/data/eventData';
import { categories } from '@/data/categories';
import { useBusinessFilters } from '@/hooks/useBusinessFilters';

export type { Business, Event, Category } from '@/types/business';

export const useBusinessData = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredBusinesses
  } = useBusinessFilters(businesses);

  const getBusinessById = (id: string) => {
    return businesses.find(business => business.id === id);
  };

  const getEventsByType = (type?: 'comercial' | 'comunitario') => {
    if (!type) return events;
    return events.filter(event => event.type === type);
  };

  return {
    businesses,
    events,
    categories,
    filteredBusinesses,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    getBusinessById,
    getEventsByType
  };
};
