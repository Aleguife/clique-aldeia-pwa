
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { BusinessHeader } from '@/components/BusinessHeader';
import { BusinessDescription } from '@/components/BusinessDescription';
import { BusinessContactInfo } from '@/components/BusinessContactInfo';
import { BusinessHours } from '@/components/BusinessHours';
import { BusinessFeatures } from '@/components/BusinessFeatures';
import { BusinessGallery } from '@/components/BusinessGallery';
import { BusinessActions } from '@/components/BusinessActions';
import { getBusinessBySlug } from '@/lib/slug';
import type { Business } from '@/types/business';

const Business = () => {
  const { slug, id } = useParams();

  const { data: business, isLoading, error } = useQuery({
    queryKey: ['business', slug || id],
    queryFn: async () => {
      let query = supabase
        .from('establishments')
        .select(`
          *,
          categories(name)
        `);

      if (slug) {
        // Se for um slug (URL /empresa/nome.html), buscar pelo nome
        const businessName = getBusinessBySlug(slug.replace('.html', ''));
        if (!businessName) {
          throw new Error('Estabelecimento não encontrado');
        }
        query = query.eq('name', businessName);
      } else if (id) {
        // Se for um ID (URL /business/:id), buscar pelo ID
        query = query.eq('id', id);
      } else {
        throw new Error('Parâmetro inválido');
      }

      const { data, error } = await query.single();
      
      if (error) throw error;
      
      return {
        ...data,
        category: data.categories?.name
      } as Business & { category: string };
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error || !business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Estabelecimento não encontrado</h2>
          <p className="text-gray-600 mb-4">O estabelecimento que você procura não existe ou foi removido.</p>
          <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Voltar ao início
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-6">
            <BusinessHeader business={business} />
            <BusinessDescription business={business} />
            {business.gallery && business.gallery.length > 0 && (
              <BusinessGallery images={business.gallery} businessName={business.name} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BusinessActions business={business} />
            <BusinessContactInfo business={business} />
            {business.hours && <BusinessHours hours={business.hours} />}
            {business.features && business.features.length > 0 && (
              <BusinessFeatures features={business.features} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
