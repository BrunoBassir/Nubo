import { useState } from 'react';

type NotificationType = 'reward' | 'achievement' | 'alert' | 'social';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'reward',
    title: '¡Puntos Nubo Acreditados!',
    message: 'Has ganado 50 nubo points por tu validación en The Coffee Store.',
    time: 'Hace 2 horas',
    unread: true,
  },
  {
    id: '2',
    type: 'achievement',
    title: '¡Nuevo nivel desbloqueado!',
    message: 'Has alcanzado el nivel Aventurero Urbano. Descubre tus nuevos beneficios.',
    time: 'Hace 5 horas',
    unread: true,
  },
  {
    id: '3',
    type: 'alert',
    title: 'Recordatorio',
    message: 'Aún tienes un cupón de 15% OFF en cafeterías sin canjear. ¡Úsalo antes de que venza!',
    time: 'Ayer',
    unread: false,
  },
  {
    id: '4',
    type: 'social',
    title: 'Tu amigo se ha unido',
    message: 'Juan Pérez ha usado tu enlace de referido. ¡Has ganado +100 puntos!',
    time: 'Hace 2 días',
    unread: false,
  }
];

export function NotificationsScreen({ onBack }: { onBack?: () => void }) {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const getIconForType = (type: NotificationType) => {
    switch (type) {
      case 'reward': return 'stars';
      case 'achievement': return 'military_tech';
      case 'alert': return 'notifications_active';
      case 'social': return 'group_add';
      default: return 'notifications';
    }
  };

  const getColorForType = (type: NotificationType) => {
    switch (type) {
      case 'reward': return 'text-yellow-400';
      case 'achievement': return 'text-[#00f2ff]';
      case 'alert': return 'text-orange-400';
      case 'social': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };

  const getBgForType = (type: NotificationType) => {
    switch (type) {
      case 'reward': return 'bg-yellow-400/10';
      case 'achievement': return 'bg-[#00f2ff]/10';
      case 'alert': return 'bg-orange-400/10';
      case 'social': return 'bg-purple-400/10';
      default: return 'bg-slate-400/10';
    }
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="bg-background-dark text-slate-100 flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors">
            arrow_back
          </button>
          <h1 className="text-lg font-bold tracking-tight">Notificaciones</h1>
        </div>
        <button 
          onClick={markAllAsRead} 
          className="text-xs font-bold text-[#00f2ff] uppercase tracking-wider hover:text-white transition-colors"
        >
          Marcar leídas
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-6 space-y-3">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`glass-card rounded-2xl p-4 flex gap-4 transition-colors relative border ${notification.unread ? 'border-primary/40 bg-white/5' : 'border-white/5'}`}
          >
            {notification.unread && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00f2ff] shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
            )}
            
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getBgForType(notification.type)}`}>
              <span className={`material-symbols-outlined ${getColorForType(notification.type)}`}>
                {getIconForType(notification.type)}
              </span>
            </div>
            
            <div className="flex-1">
              <h3 className={`font-bold text-sm pr-4 ${notification.unread ? 'text-white' : 'text-slate-300'}`}>
                {notification.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {notification.message}
              </p>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-3 block">
                {notification.time}
              </span>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
            <span className="material-symbols-outlined text-6xl mb-4 text-slate-500">notifications_off</span>
            <p className="font-bold">No tienes notificaciones</p>
            <p className="text-sm text-slate-400">Te avisaremos cuando haya novedades.</p>
          </div>
        )}
      </main>
    </div>
  );
}
