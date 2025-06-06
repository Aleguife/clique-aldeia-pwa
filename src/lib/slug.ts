
/**
 * Converte um nome de estabelecimento em um slug URL-friendly
 */
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, ''); // Remove hífens no início e fim
};

/**
 * Converte um slug de volta para busca (aproximada)
 */
export const slugToSearchTerm = (slug: string): string => {
  return slug
    .replace(/-/g, ' ')
    .toLowerCase();
};
