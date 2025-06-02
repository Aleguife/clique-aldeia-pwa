
export interface Business {
  id: string;
  name: string;
  category_id: string;
  address: string;
  phone: string | null;
  description: string | null;
  full_description: string | null;
  image: string | null;
  gallery: string[] | null;
  hours: { [key: string]: string } | null;
  whatsapp: string | null;
  rating: number;
  reviews: number;
  features: string[] | null;
  created_at: string;
  updated_at: string;
  // Virtual field for category name
  category?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string | null;
  organizer: string;
  event_type: 'comercial' | 'comunitario';
  image: string | null;
  establishment_id: string | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  created_at: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  user_type: 'morador' | 'estabelecimento' | 'admin';
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

export interface Favorite {
  id: string;
  user_id: string;
  establishment_id: string;
  created_at: string;
}
