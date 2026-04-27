import { db } from '../lib/firebase';
import { collection, doc, setDoc, getDocs, query, limit } from 'firebase/firestore';

const PLACES_SEED = [
  {
    id: 'place1',
    name: 'Artisan Roast House',
    category: 'Gastronomía',
    subcategory: 'Café de Especialidad',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
    distance: '250m',
    xpLevel: '+50 XP',
    nuboPoints: '10 NP',
    isOpen: true,
    badge: 'Destacado',
    badgeType: 'exclusive',
    address: 'Av. Corrientes 1234, CABA',
    phone: '+54 11 4455-6677',
    description: 'El mejor café de especialidad de la zona con granos de origen seleccionados.',
    nuboPromotion: '2x1 en Flat White para Nivel 3+',
    amenities: ['WiFi', 'Pet Friendly', 'Aire Acondicionado']
  },
  {
    id: 'place2',
    name: 'Museo de Arte Moderno',
    category: 'Atractivo',
    subcategory: 'Museo',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-55d8d3961a00?auto=format&fit=crop&q=80',
    distance: '1.2km',
    xpLevel: '+150 XP',
    nuboPoints: '25 NP',
    isOpen: true,
    badge: 'Popular',
    badgeType: 'popular',
    address: 'Av. San Juan 350, CABA',
    description: 'Colecciones de arte contemporáneo nacional e internacional.',
    nuboPromotion: 'Entrada gratis con 500 Puntos Nubo'
  },
  {
    id: 'place3',
    name: 'Hotel Plaza Central',
    category: 'Alojamiento',
    subcategory: 'Hotel 5*',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    distance: '800m',
    xpLevel: '+300 XP',
    nuboPoints: '50 NP',
    isOpen: true,
    address: 'Florida 1005, CABA',
    description: 'Lujo y confort en el corazón de la ciudad.',
    nuboPromotion: 'Noche de regalo al completar la Ruta del Sol'
  }
];

const CHALLENGES_SEED = [
  {
    id: 'challenge1',
    title: 'Ruta del Café',
    description: 'Visita 3 cafeterías de especialidad esta semana.',
    xpReward: 500,
    pointsReward: 50,
    maxProgress: 3,
    progress: 0,
    status: 'active',
    icon: 'local_cafe',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80'
  },
  {
    id: 'challenge2',
    title: 'Amante del Arte',
    description: 'Completa 2 visitas a museos destacados.',
    xpReward: 800,
    pointsReward: 100,
    maxProgress: 2,
    progress: 0,
    status: 'active',
    icon: 'museum',
    imageUrl: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80'
  }
];

export async function seedDatabase() {
  console.log('Iniciando carga de datos...');
  
  try {
    // Seed Places
    for (const place of PLACES_SEED) {
      const { id, ...data } = place;
      await setDoc(doc(db, 'places', id), data);
      console.log(`Lugar ${id} cargado`);
    }

    // Seed Challenges
    for (const challenge of CHALLENGES_SEED) {
      const { id, ...data } = challenge;
      await setDoc(doc(db, 'challenges', id), data);
      console.log(`Desafío ${id} cargado`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    return { success: false, error };
  }
}

export async function checkDataExists() {
  const q = query(collection(db, 'places'), limit(1));
  const snapshot = await getDocs(q);
  return !snapshot.empty;
}
