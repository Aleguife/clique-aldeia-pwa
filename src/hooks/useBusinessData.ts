
import { useState, useMemo } from 'react';

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

export const categories = [
  { name: 'Gastronomia', icon: '🍽️' },
  { name: 'Beleza', icon: '💄' },
  { name: 'Saúde', icon: '⚕️' },
  { name: 'Serviços', icon: '🔧' },
  { name: 'Casa & Construção', icon: '🏠' },
  { name: 'Pet', icon: '🐕' },
  { name: 'Esporte', icon: '⚽' },
  { name: 'Moda', icon: '👕' }
];

export const useBusinessData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const businesses: Business[] = [
    {
      id: '1',
      name: 'Wine Bar Aldeia',
      category: 'Gastronomia',
      address: 'R. das Palmeiras, 123 - Aldeia da Serra',
      phone: '(11) 98765-4321',
      whatsapp: '5511987654321',
      description: 'Bar de vinhos com ambiente aconchegante e carta de vinhos selecionados.',
      fullDescription: 'O Wine Bar Aldeia oferece uma experiência única com mais de 200 rótulos de vinhos nacionais e importados, harmonizados com petiscos gourmet em um ambiente sofisticado e acolhedor.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop'
      ],
      hours: {
        'Segunda': 'Fechado',
        'Terça': '18:00 - 23:30',
        'Quarta': '18:00 - 23:30',
        'Quinta': '18:00 - 23:30',
        'Sexta': '18:00 - 01:00',
        'Sábado': '18:00 - 01:00',
        'Domingo': '18:00 - 22:00'
      },
      rating: 4.8,
      reviews: 124,
      features: ['Vinhos Importados', 'Ambiente Climatizado', 'Música Ao Vivo', 'Estacionamento']
    },
    {
      id: '2',
      name: 'Sodiê Doces',
      category: 'Gastronomia',
      address: 'Av. Marginal, 456 - Aldeia da Serra',
      phone: '(11) 98765-4322',
      whatsapp: '5511987654322',
      description: 'Confeitaria especializada em bolos e doces artesanais.',
      fullDescription: 'Sodiê Doces é referência em confeitaria artesanal, oferecendo bolos personalizados, doces finos e uma linha completa de produtos para todas as ocasiões especiais.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop'
      ],
      hours: {
        'Segunda': '09:00 - 18:00',
        'Terça': '09:00 - 18:00',
        'Quarta': '09:00 - 18:00',
        'Quinta': '09:00 - 18:00',
        'Sexta': '09:00 - 18:00',
        'Sábado': '09:00 - 16:00',
        'Domingo': 'Fechado'
      },
      rating: 4.6,
      reviews: 89,
      features: ['Bolos Personalizados', 'Doces Sem Açúcar', 'Entrega', 'Encomendas']
    },
    {
      id: '3',
      name: 'Misca Pão & Café',
      category: 'Gastronomia',
      address: 'R. Central, 789 - Aldeia da Serra',
      phone: '(11) 98765-4323',
      whatsapp: '5511987654323',
      description: 'Padaria artesanal com café especial e pães frescos.',
      fullDescription: 'A Misca combina tradição e inovação, oferecendo pães artesanais, cafés especiais, brunch completo e aulas de culinária em um ambiente acolhedor.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop'
      ],
      hours: {
        'Segunda': '06:00 - 18:00',
        'Terça': '06:00 - 18:00',
        'Quarta': '06:00 - 18:00',
        'Quinta': '06:00 - 18:00',
        'Sexta': '06:00 - 18:00',
        'Sábado': '06:00 - 16:00',
        'Domingo': '07:00 - 14:00'
      },
      rating: 4.7,
      reviews: 156,
      features: ['Café Especial', 'Pães Artesanais', 'Brunch', 'Aulas de Culinária']
    },
    {
      id: '4',
      name: 'Divina Maria Beleza',
      category: 'Beleza',
      address: 'R. das Flores, 321 - Aldeia da Serra',
      phone: '(11) 98765-4324',
      whatsapp: '5511987654324',
      description: 'Salão de beleza completo com tratamentos estéticos.',
      fullDescription: 'Divina Maria oferece serviços completos de beleza e estética, com profissionais qualificados e equipamentos de última geração para cuidar da sua beleza.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop'
      ],
      hours: {
        'Segunda': '09:00 - 18:00',
        'Terça': '09:00 - 18:00',
        'Quarta': '09:00 - 18:00',
        'Quinta': '09:00 - 20:00',
        'Sexta': '09:00 - 20:00',
        'Sábado': '08:00 - 17:00',
        'Domingo': 'Fechado'
      },
      rating: 4.9,
      reviews: 203,
      features: ['Corte e Escova', 'Manicure e Pedicure', 'Tratamentos Faciais', 'Massagem']
    },
    {
      id: '5',
      name: 'Spazio Perc',
      category: 'Esporte',
      address: 'Av. Esportiva, 654 - Aldeia da Serra',
      phone: '(11) 98765-4325',
      whatsapp: '5511987654325',
      description: 'Academia completa com equipamentos modernos e personal trainers.',
      fullDescription: 'Spazio Perc é uma academia completa com equipamentos de última geração, aulas coletivas, personal trainers e ambiente motivador para seus treinos.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop'
      ],
      hours: {
        'Segunda': '06:00 - 22:00',
        'Terça': '06:00 - 22:00',
        'Quarta': '06:00 - 22:00',
        'Quinta': '06:00 - 22:00',
        'Sexta': '06:00 - 22:00',
        'Sábado': '08:00 - 18:00',
        'Domingo': '08:00 - 16:00'
      },
      rating: 4.5,
      reviews: 78,
      features: ['Musculação', 'Aulas Coletivas', 'Personal Trainer', 'Estacionamento']
    }
  ];

  const events: Event[] = [
    {
      id: '1',
      title: 'Happy Hour Wine Bar',
      date: '2024-06-07',
      time: '18:00',
      location: 'Wine Bar Aldeia',
      description: 'Happy hour especial com 30% de desconto em vinhos selecionados e petiscos.',
      organizer: 'Wine Bar Aldeia',
      type: 'comercial',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
      businessId: '1'
    },
    {
      id: '2',
      title: 'Aula de Culinária Misca',
      date: '2024-06-08',
      time: '10:00',
      location: 'Misca Pão & Café',
      description: 'Aprenda a fazer pães artesanais com nossos chefs especializados.',
      organizer: 'Misca Pão & Café',
      type: 'comercial',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      businessId: '3'
    },
    {
      id: '3',
      title: 'Feira de Produtos Locais',
      date: '2024-06-09',
      time: '08:00',
      location: 'Praça Central - Aldeia da Serra',
      description: 'Feira com produtos artesanais e orgânicos dos produtores locais.',
      organizer: 'Associação de Moradores',
      type: 'comunitario',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop'
    },
    {
      id: '4',
      title: 'Corrida Aldeia Saudável',
      date: '2024-06-15',
      time: '07:00',
      location: 'Parque Aldeia da Serra',
      description: 'Corrida comunitária de 5km para promover vida saudável na região.',
      organizer: 'Prefeitura de Barueri',
      type: 'comunitario',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    }
  ];

  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || business.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
