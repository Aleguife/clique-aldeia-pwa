
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Business, Event, Category } from '@/types/business';

export const useSupabaseData = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (categoriesError) {
        throw categoriesError;
      }

      // Fetch establishments with category information
      const { data: establishmentsData, error: establishmentsError } = await supabase
        .from('establishments')
        .select(`
          *,
          categories (
            name
          )
        `)
        .order('name');

      if (establishmentsError) {
        throw establishmentsError;
      }

      // Fetch events
      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (eventsError) {
        throw eventsError;
      }

      // Transform establishments data to match the Business interface
      const transformedBusinesses: Business[] = establishmentsData.map(establishment => ({
        ...establishment,
        category: establishment.categories?.name || 'Sem categoria',
        gallery: establishment.gallery || [],
        features: establishment.features || [],
        hours: establishment.hours as { [key: string]: string } || {},
        rating: Number(establishment.rating) || 0,
        reviews: establishment.reviews || 0
      }));

      // Transform events data to match the Event interface
      const transformedEvents: Event[] = eventsData.map(event => ({
        ...event,
        event_type: event.event_type as 'comercial' | 'comunitario'
      }));

      setCategories(categoriesData || []);
      setBusinesses(transformedBusinesses);
      setEvents(transformedEvents);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  const getBusinessById = (id: string) => {
    return businesses.find(business => business.id === id);
  };

  const getEventsByType = (type?: 'comercial' | 'comunitario') => {
    if (!type) return events;
    return events.filter(event => event.event_type === type);
  };

  const refreshData = () => {
    fetchAllData();
  };

  return {
    businesses,
    events,
    categories,
    loading,
    error,
    getBusinessById,
    getEventsByType,
    refreshData
  };
};
