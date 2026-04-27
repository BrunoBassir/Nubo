import { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';

type ActivityType = 'all' | 'earned' | 'spent' | 'achievements';

interface Activity {
  id: string;
  type: 'check-in' | 'redeem' | 'level-up' | 'exploration' | 'challenge';
  title: string;
  subtitle: string;
  time: string;
  date: string;
  value: string;
  isPositive: boolean;
  icon: string;
  color: string;
}

const ALL_ACTIVITIES: Activity[] = [
  {
    id: '1',
    type: 'check-in',
    title: 'Check-in: Green Bowl',
    subtitle: 'Restaurante Saludable',
    time: '14:30',
    date: '27 Abr',
    value: '+80 XP',
    isPositive: true,
    icon: 'location_on',
    color: 'text-primary'
  },
  {
    id: '2',
    type: 'redeem',
    title: 'Canje: Cafe Latte',
    subtitle: 'Urban Brew',
    time: '09:15',
    date: '27 Abr',
    value: '-150 NP',
    isPositive: false,
    icon: 'coffee',
    color: 'text-secondary'
  },
  {
    id: '3',
    type: 'level-up',
    title: 'Nivel Alcanzado: Aventurero',
    subtitle: '¡Nuevos beneficios desbloqueados!',
    time: '18:22',
    date: '26 Abr',
    value: 'LEVEL UP',
    isPositive: true,
    icon: 'military_tech',
    color: 'text-primary'
  },
  {
    id: '4',
    type: 'exploration',
    title: 'Exploración: Mural Urbano',
    subtitle: 'Distrito Arte',
    time: '18:40',
    date: '26 Abr',
    value: '+25 XP',
    isPositive: true,
    icon: 'qr_code_2',
    color: 'text-primary'
  },
  {
    id: '5',
    type: 'check-in',
    title: 'Check-in: Sushi Zen',
    subtitle: 'Comida Asiática',
    time: '21:15',
    date: '25 Abr',
    value: '+120 XP',
    isPositive: true,
    icon: 'restaurant',
    color: 'text-primary'
  },
  {
    id: '6',
    type: 'challenge',
    title: 'Reto Completo: Ruta del Café',
    subtitle: '5/5 cafeterías visitadas',
    time: '16:05',
    date: '24 Abr',
    value: '+500 XP',
    isPositive: true,
    icon: 'task_alt',
    color: 'text-cyan-400'
  },
  {
    id: '7',
    type: 'redeem',
    title: 'Canje: Descuento 20%',
    subtitle: 'Moda Sostenible',
    time: '12:30',
    date: '23 Abr',
    value: '-300 NP',
    isPositive: false,
    icon: 'shopping_bag',
    color: 'text-secondary'
  },
  {
    id: '8',
    type: 'check-in',
    title: 'Check-in: Gym Center',
    subtitle: 'Bienestar y Salud',
    time: '08:00',
    date: '22 Abr',
    value: '+45 XP',
    isPositive: true,
    icon: 'fitness_center',
    color: 'text-primary'
  }
];

export function FullHistoryScreen({ onBack }: { onBack: () => void }) {
  const { user } = useAuth();
  const [filter, setFilter] = useState<ActivityType>('all');
  const [search, setSearch] = useState('');

  const filteredActivities = ALL_ACTIVITIES.filter(activity => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'earned' && activity.isPositive && activity.type !== 'level-up') ||
      (filter === 'spent' && !activity.isPositive) ||
      (filter === 'achievements' && activity.type === 'level-up');
    
    const matchesSearch = activity.title.toLowerCase().includes(search.toLowerCase()) || 
                         activity.subtitle.toLowerCase().includes(search.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background-dark font-sans pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors mr-2">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-white tracking-tight">Historial Completo</h1>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="relative mb-6">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
            <input 
              type="text" 
              placeholder="Buscar actividad..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {[
              { id: 'all', label: 'Todo', icon: 'list' },
              { id: 'earned', label: 'Ganados', icon: 'add_circle' },
              { id: 'spent', label: 'Canjes', icon: 'remove_circle' },
              { id: 'achievements', label: 'Logros', icon: 'military_tech' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as ActivityType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  filter === f.id 
                    ? 'bg-primary text-background-dark border-primary shadow-[0_0_15px_rgba(25,204,240,0.3)]' 
                    : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{f.icon}</span>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <motion.div 
                key={activity.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-4 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${activity.color} border border-white/5`}>
                    <span className="material-symbols-outlined">{activity.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm leading-tight mb-0.5">{activity.title}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{activity.date} · {activity.time} · {activity.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-black tracking-tighter ${activity.isPositive ? 'text-primary' : 'text-secondary'}`}>
                    {activity.value}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-5xl text-slate-700 mb-4">history_toggle_off</span>
              <p className="text-slate-500 font-medium">No se encontraron actividades.</p>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
