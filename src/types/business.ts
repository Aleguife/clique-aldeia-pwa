
export interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  hours: { [key: string]: string };
  whatsapp: string;
  rating: number;
  reviews: number;
  features: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  type: 'comercial' | 'comunitario';
  image: string;
  businessId?: string;
}

export interface Category {
  name: string;
  icon: string;
}
