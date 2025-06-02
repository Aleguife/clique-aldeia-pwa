
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Favorite } from '@/types/business';
import { useToast } from '@/hooks/use-toast';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setFavorites([]);
        return;
      }

      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', session.user.id);

      if (error) {
        throw error;
      }

      setFavorites(data || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os favoritos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = async (establishmentId: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Login necessário",
          description: "Você precisa estar logado para adicionar favoritos",
          variant: "destructive"
        });
        return;
      }

      const { error } = await supabase
        .from('favorites')
        .insert({
          user_id: session.user.id,
          establishment_id: establishmentId
        });

      if (error) {
        throw error;
      }

      await fetchFavorites();
      toast({
        title: "Sucesso",
        description: "Estabelecimento adicionado aos favoritos"
      });
    } catch (error) {
      console.error('Error adding to favorites:', error);
      toast({
        title: "Erro",
        description: "Não foi possível adicionar aos favoritos",
        variant: "destructive"
      });
    }
  };

  const removeFromFavorites = async (establishmentId: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        return;
      }

      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', session.user.id)
        .eq('establishment_id', establishmentId);

      if (error) {
        throw error;
      }

      await fetchFavorites();
      toast({
        title: "Sucesso",
        description: "Estabelecimento removido dos favoritos"
      });
    } catch (error) {
      console.error('Error removing from favorites:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover dos favoritos",
        variant: "destructive"
      });
    }
  };

  const isFavorite = (establishmentId: string) => {
    return favorites.some(fav => fav.establishment_id === establishmentId);
  };

  return {
    favorites,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    refreshFavorites: fetchFavorites
  };
};
