
import { Event } from '@/types/business';

export const events: Event[] = [
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
