
export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim();
};

export const businessSlugMap: { [key: string]: string } = {
  'studio-bella-aldeia': 'Studio Bella Aldeia',
  'barbearia-villa-premium': 'Barbearia Villa Premium',
  'estetica-zen-wellness': 'Estética Zen Wellness',
  'construmat-aldeia': 'Construmat Aldeia',
  'marcenaria-artesanal-silva': 'Marcenaria Artesanal Silva',
  'tintas-decor-serra': 'Tintas & Decor Serra',
  'academia-fitserra': 'Academia FitSerra',
  'quadra-sports-center': 'Quadra Sports Center',
  'personal-training-pro': 'Personal Training Pro',
  'pizzaria-dona-maria': 'Pizzaria Dona Maria',
  'cafe-colonial-serra': 'Café Colonial Serra',
  'churrascaria-gaucha': 'Churrascaria Gaúcha',
  'boutique-elegance': 'Boutique Elegance',
  'loja-casual-style': 'Loja Casual Style',
  'acessorios-cia': 'Acessórios & Cia',
  'veterinaria-animal-care': 'Veterinária Animal Care',
  'pet-shop-amigo-fiel': 'Pet Shop Amigo Fiel',
  'banho-tosa-premium': 'Banho & Tosa Premium',
  'clinica-medica-serra': 'Clínica Médica Serra',
  'fisioterapia-movimento': 'Fisioterapia Movimento',
  'farmacia-saude-total': 'Farmácia Saúde Total',
  'auto-eletrica-express': 'Auto Elétrica Express',
  'lavanderia-clean': 'Lavanderia Clean',
  'assistencia-tech-aldeia': 'Assistência Tech Aldeia'
};

export const getBusinessBySlug = (slug: string): string | null => {
  return businessSlugMap[slug] || null;
};

export const getSlugByBusinessName = (name: string): string => {
  const entries = Object.entries(businessSlugMap);
  const found = entries.find(([_, businessName]) => businessName === name);
  return found ? found[0] : generateSlug(name);
};
