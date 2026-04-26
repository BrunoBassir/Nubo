import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const samplePlaces = [
  {
    id: 'place1',
    name: 'Artisan Roast House',
    description: 'Café de especialidad con granos de origen único.',
    category: 'Gastronomía',
    subcategory: 'Especialidad',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
    badge: 'Popular',
    badgeType: 'popular',
    xpLevel: '+150 XP Bonus',
    nuboPoints: null,
    isOpen: true,
    distance: '150m'
  },
  {
    id: 'place2',
    name: 'Galería de Arte Moderno',
    description: 'Explora las últimas exhibiciones de arte contemporáneo.',
    category: 'Cultura',
    subcategory: 'Abierto',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80',
    badge: 'Nuevo',
    badgeType: 'new',
    xpLevel: '+50 XP',
    nuboPoints: '+5% NUBO POINTS',
    isOpen: true,
    distance: '450m'
  },
  {
    id: 'place3',
    name: 'Hotel Grand Plaza',
    description: 'Alojamiento de lujo en el centro de la ciudad.',
    category: 'Hotelería',
    subcategory: '24/7',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: null,
    badgeType: null,
    xpLevel: '+300 XP BONUS',
    nuboPoints: null,
    isOpen: true,
    distance: '800m'
  },
  {
    id: 'place4',
    name: 'The Neon Bar',
    description: 'Tragos de autor y música en vivo todas las noches.',
    category: 'Bares',
    subcategory: 'Abre 20:00',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80',
    badge: 'Popular',
    badgeType: 'popular',
    xpLevel: null,
    nuboPoints: '+10% NUBO POINTS',
    isOpen: false,
    distance: '1.2km'
  },
  {
    id: 'place5',
    name: 'La Trattoria Nostra',
    description: 'Auténtica pasta italiana hecha a mano.',
    category: 'Gastronomía',
    subcategory: 'Italiana',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    badge: 'Promo',
    badgeType: 'new',
    xpLevel: '+100 XP',
    nuboPoints: null,
    isOpen: true,
    distance: '2km'
  },
  {
    id: 'place6',
    name: 'Museo Histórico Nacional',
    description: 'Descubre los orígenes de la ciudad.',
    category: 'Cultura',
    subcategory: 'Historia',
    imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80',
    badge: null,
    badgeType: null,
    xpLevel: '+20 XP',
    nuboPoints: null,
    isOpen: true,
    distance: '3km'
  }
];

const sampleChallenges = [
  {
    id: 'challenge1',
    title: 'Ruta Gastronómica Central',
    description: 'Gana el doble de puntos visitando los mercados históricos esta semana.',
    xpReward: 1000,
    pointsReward: 200,
    status: 'active',
    progress: 2,
    maxProgress: 5,
    icon: 'restaurant_menu',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80'
  },
  {
    id: 'challenge2',
    title: 'Ratón de Biblioteca',
    description: 'Pasa más de 2 horas en una biblioteca o librería.',
    xpReward: 500,
    pointsReward: 100,
    status: 'new',
    progress: 0,
    maxProgress: 1,
    icon: 'menu_book',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80'
  },
  {
    id: 'challenge3',
    title: 'Museos de Domingo',
    description: 'Visita 3 museos durante el fin de semana.',
    xpReward: 800,
    pointsReward: 150,
    status: 'active',
    progress: 1,
    maxProgress: 3,
    icon: 'museum',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80'
  },
  {
    id: 'challenge4',
    title: 'Noctámbulo',
    description: 'Acude a 2 bares distintos después de la medianoche.',
    xpReward: 1200,
    pointsReward: 250,
    status: 'active',
    progress: 1,
    maxProgress: 2,
    icon: 'local_bar',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80'
  }
];

const sampleRewards = [
  {
    id: 'reward1',
    title: '2x1 Café Especial',
    description: 'Canjea un espresso o americano gratis comprando otro.',
    provider: 'Artisan Roast House',
    cost: 300,
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80',
    type: 'food'
  },
  {
    id: 'reward2',
    title: 'Cena Gourmet',
    description: 'Menú de 3 pasos gratis en The Neon Bar.',
    provider: 'The Neon Bar',
    cost: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    type: 'food'
  },
  {
    id: 'reward3',
    title: 'Brunch Premium',
    description: 'Brunch para 2 personas.',
    provider: 'Artisan Roast House',
    cost: 800,
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80',
    type: 'food'
  },
  {
    id: 'reward4',
    title: 'Entrada Cine',
    description: 'Entrada gratis a cualquier sala tradicional.',
    provider: 'Cines Multiplex',
    cost: 500,
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80',
    type: 'culture'
  },
  {
    id: 'reward5',
    title: 'Concierto Jazz',
    description: 'Pase vip para una velada de jazz acústico.',
    provider: 'Club Jazz Central',
    cost: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80',
    type: 'culture'
  },
  {
    id: 'reward6',
    title: 'Noche en Suite',
    description: 'Alojamiento para 2 personas en suite con desayuno incluido.',
    provider: 'Hotel Grand Plaza',
    cost: 5500,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'hotel'
  },
  {
    id: 'reward7',
    title: 'Fin de semana Spa',
    description: 'Relajación y masajes por dos días enteros.',
    provider: 'Hotel Grand Plaza',
    cost: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'hotel'
  }
];

export async function seedDatabase() {
  try {
    for (const place of samplePlaces) {
      const { id, ...data } = place;
      await setDoc(doc(db, 'places', id), data);
    }
    
    for (const challenge of sampleChallenges) {
      const { id, ...data } = challenge;
      await setDoc(doc(db, 'challenges', id), data);
    }
    
    for (const reward of sampleRewards) {
      const { id, ...data } = reward;
      await setDoc(doc(db, 'rewards', id), data);
    }

    console.log('Database seeded successfully!');
    return { success: true };
  } catch (error: any) {
    console.error('Error seeding database: ', error);
    return { success: false, error: error.message };
  }
}
