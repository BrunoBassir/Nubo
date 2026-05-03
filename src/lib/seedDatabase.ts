import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const samplePlaces = [
  {
    id: 'place1',
    name: 'Artisan Roast House',
    city: 'Rosario',
    description: 'Café de especialidad con granos de origen único.',
    category: 'Gastronomía',
    subcategory: 'Especialidad',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
    badge: 'Popular',
    badgeType: 'popular',
    xpLevel: '+150 XP Bonus',
    nuboPoints: null,
    isOpen: true,
    distance: '150m',
    address: 'Av. Corrientes 1234',
    phone: '+54 11 4455-6677',
    website: 'https://artisanroast.com',
    hours: { lun: '8:00 - 20:00', mar: '8:00 - 20:00', mie: '8:00 - 20:00', jue: '8:00 - 20:00', vie: '8:00 - 22:00', sab: '9:00 - 22:00', dom: 'errado' },
    coordinates: { lat: -34.6037, lng: -58.3816 },
    nuboPromotion: '¡Muestra tu Nubo App y llévate un cookie artesanal gratis con tu café especial!',
    menuItems: [
      { title: 'Espresso Doble', description: 'Blend especial de la casa, notas acarameladas.', price: '$2.500' },
      { title: 'Flat White', description: 'Doble ristretto con leche finamente texturizada.', price: '$3.200' },
      { title: 'Avocado Toast', description: 'Pan de masa madre, palta, huevo poché y semillas.', price: '$6.500' }
    ],
    qrCode: 'place1'
  },
  {
    id: 'place2',
    name: 'Galería de Arte Moderno',
    description: 'Explora las últimas exhibiciones de arte contemporáneo.',
    category: 'Atractivo',
    subcategory: 'Abierto',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80',
    badge: 'Nuevo',
    badgeType: 'new',
    xpLevel: '+50 XP',
    nuboPoints: '+5% NUBO POINTS',
    isOpen: true,
    distance: '450m',
    address: 'San Juan 450',
    phone: '+54 11 3344-5566',
    hours: { lun: 'cerrado', mar: '10:00 - 18:00', mie: '10:00 - 18:00', jue: '10:00 - 20:00', vie: '10:00 - 20:00', sab: '10:00 - 20:00', dom: '10:00 - 18:00' },
    coordinates: { lat: -34.6150, lng: -58.3730 },
    nuboPromotion: '2x1 en entradas generales los días jueves exclusivos para Exploradores nivel 3+.',
    exhibitions: [
      { title: 'Luz y Sombra', description: 'Muestra inmersiva de artistas visuales argentinos.', endDate: '15 Nov 2025', room: 'Sala A' },
      { title: 'Eco-Futurismo', description: 'Esculturas hechas con materiales reciclados.', endDate: '30 Dic 2025', room: 'Pabellón Sur' }
    ],
    qrCode: 'place2'
  },
  {
    id: 'place3',
    name: 'Hotel Grand Plaza',
    description: 'Alojamiento de lujo en el centro de la ciudad.',
    category: 'Alojamiento',
    subcategory: '24/7',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: null,
    badgeType: null,
    xpLevel: '+300 XP BONUS',
    nuboPoints: null,
    isOpen: true,
    distance: '800m',
    address: 'Av. de Mayo 880',
    phone: '+54 11 5555-5555',
    website: 'https://grandplaza.com',
    hours: { lun: '24 hs', mar: '24 hs', mie: '24 hs', jue: '24 hs', vie: '24 hs', sab: '24 hs', dom: '24 hs' },
    coordinates: { lat: -34.6080, lng: -58.3800 },
    nuboPromotion: 'Check-out extendido gratis (Late Check-out 16hs) presentando nivel Aventurero Urbano.',
    amenities: ['Piscina Climatizada', 'Gimnasio Nube', 'Spa & Wellness', 'Restaurante Panorámico', 'Valet Parking'],
    qrCode: 'place3'
  },
  {
    id: 'place4',
    name: 'The Neon Bar',
    description: 'Tragos de autor y música en vivo todas las noches.',
    category: 'Gastronomía',
    subcategory: 'Abre 20:00',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80',
    badge: 'Popular',
    badgeType: 'popular',
    xpLevel: null,
    nuboPoints: '+10% NUBO POINTS',
    isOpen: false,
    distance: '1.2km',
    address: 'Palermo Soho 101',
    phone: '+54 11 1122-3344',
    hours: { lun: 'cerrado', mar: 'cerrado', mie: '20:00 - 02:00', jue: '20:00 - 03:00', vie: '20:00 - 05:00', sab: '20:00 - 05:00', dom: '20:00 - 02:00' },
    coordinates: { lat: -34.5830, lng: -58.4230 },
    nuboPromotion: 'Happy Hour extendido (2x1 en toda la coctelería) hasta las 22hs.',
    menuItems: [
      { title: 'Neon Cosmopolitan', description: 'Vodka premium, arándanos, infusión de cítricos y polvo brillante.', price: '$4.500' },
      { title: 'Cyberpunk Gin', description: 'Gin artesanal patagónico, tónica de hibisco, frutos rojos.', price: '$5.000' },
      { title: 'Papas Trufadas', description: 'Papas rústicas con aceite de trufa y parmesano.', price: '$4.200' }
    ],
    qrCode: 'place4'
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
    distance: '2km',
    address: 'Belgrano 1200',
    phone: '+54 11 2233-4455',
    hours: { lun: 'cerrado', mar: '12:00 - 23:00', mie: '12:00 - 23:00', jue: '12:00 - 23:00', vie: '12:00 - 00:00', sab: '12:00 - 00:00', dom: '12:00 - 16:00' },
    coordinates: { lat: -34.5630, lng: -58.4550 },
    nuboPromotion: 'Postre sin cargo por mesa para exploradores Nubo.',
    menuItems: [
      { title: 'Ravioli de Calabaza', description: 'Masa casera, salsa de manteca y salvia.', price: '$9.500' },
      { title: 'Tiramisú Clásico', description: 'Café, mascarpone y cacao amargo.', price: '$4.500' }
    ],
    qrCode: 'place5'
  },
  {
    id: 'place6',
    name: 'Museo Histórico Nacional',
    description: 'Descubre los orígenes de la ciudad.',
    category: 'Atractivo',
    subcategory: 'Historia',
    imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80',
    badge: null,
    badgeType: null,
    xpLevel: '+20 XP',
    nuboPoints: null,
    isOpen: true,
    distance: '3km',
    address: 'Defensa 1600',
    phone: '+54 11 4307-1182',
    hours: { lun: 'cerrado', mar: 'cerrado', mie: '11:00 - 19:00', jue: '11:00 - 19:00', vie: '11:00 - 19:00', sab: '11:00 - 19:00', dom: '11:00 - 19:00' },
    coordinates: { lat: -34.6265, lng: -58.3705 },
    nuboPromotion: 'Audioguía gratis al validar este punto.',
    exhibitions: [
      { title: 'Revolución de Mayo', description: 'Salas dedicadas a los próceres.', endDate: 'Permanente', room: 'Sala Principal' }
    ],
    qrCode: 'place6',
    city: 'Rosario'
  }
];

export const sampleChallenges = [
  {
    id: 'challenge1',
    title: 'Ruta Gastronómica Central',
    city: 'Rosario',
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
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80',
    city: 'Rosario'
  }
];

export const sampleRewards = [
  {
    id: 'reward1',
    title: '2x1 Café Especial',
    city: 'Rosario',
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
    type: 'hotel',
    city: 'Rosario'
  }
];

export const sampleAchievements = [
  {
    id: 'achievement1',
    title: 'Madrugador',
    description: 'Completa 5 visitas antes de las 9am',
    icon: 'wb_sunny',
    xpReward: 500,
    total: 5,
    triggerType: 'checkins',
    color: 'amber'
  },
  {
    id: 'achievement2',
    title: 'Explorador',
    description: 'Visita 10 lugares distintos',
    icon: 'explore',
    xpReward: 1000,
    total: 10,
    triggerType: 'checkins',
    color: 'cyan'
  },
  {
    id: 'achievement3',
    title: 'Socialité',
    description: 'Invita a 5 amigos a unirse a Nubo',
    icon: 'groups',
    xpReward: 800,
    total: 5,
    triggerType: 'referrals',
    color: 'emerald'
  }
];

export const sampleSecretMissions = [
  {
    id: 'mission1',
    title: 'Cazador de Búhos',
    description: 'Visita 3 bares clandestinos en la misma noche antes del cierre.',
    reward: 'Bebida x2 + 500 XP',
    difficulty: 'Difícil',
    icon: 'nightlight',
    expiresAt: new Date(Date.now() + 48 * 3600 * 1000).toISOString(),
    active: true,
    xpReward: 500
  },
  {
    id: 'mission2',
    title: 'El Lector Oculto',
    description: 'Descubre la sección secreta de la biblioteca nacional.',
    reward: '15% de Descuento + 300 XP',
    difficulty: 'Media',
    icon: 'menu_book',
    expiresAt: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
    active: true,
    xpReward: 300
  },
  {
    id: 'mission3',
    title: 'Ruta del Origen',
    description: 'Visita las 3 cafeterías de especialidad más antiguas.',
    reward: 'Café de Autor + 250 XP',
    difficulty: 'Fácil',
    icon: 'local_cafe',
    expiresAt: new Date(Date.now() + 72 * 3600 * 1000).toISOString(),
    active: true,
    xpReward: 250
  }
];

export async function seedDatabase() {
  console.log('Seed started...');
  try {
    const collectionsToSeed = [
      { name: 'places', data: samplePlaces },
      { name: 'challenges', data: sampleChallenges },
      { name: 'rewards', data: sampleRewards },
      { name: 'achievements', data: sampleAchievements },
      { name: 'secret_missions', data: sampleSecretMissions }
    ];

    for (const coll of collectionsToSeed) {
      console.log(`Seeding ${coll.name}...`);
      for (const item of coll.data) {
        const { id, ...data } = item;
        try {
          await setDoc(doc(db, coll.name, id), data);
          console.log(`Seeded ${coll.name}/${id}`);
        } catch (itemError: any) {
          console.error(`Error seeding ${coll.name}/${id}:`, itemError);
          // Continue with next items
        }
      }
    }

    console.log('Database seeded successfully!');
    return { success: true };
  } catch (error: any) {
    console.error('Error seeding database: ', error);
    return { success: false, error: error.message || String(error) };
  }
}
