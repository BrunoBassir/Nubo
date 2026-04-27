import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Bid {
  id: string;
  user: string;
  amount: number;
  time: string;
  isMe: boolean;
}

export function LiveAuctionsScreen({ onBack }: { onBack: () => void }) {
  const [currentBid, setCurrentBid] = useState(15500);
  const [myPoints] = useState(24500); // Simulated user points
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [bids, setBids] = useState<Bid[]>([
    { id: '1', user: '@camilok', amount: 15500, time: 'Hace 2s', isMe: false },
    { id: '2', user: '@santi_99', amount: 15000, time: 'Hace 15s', isMe: false },
    { id: '3', user: '@valeria_x', amount: 14200, time: 'Hace 1m', isMe: false },
  ]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleBid = (amountToAdd: number) => {
    const newBidAmount = currentBid + amountToAdd;
    if (newBidAmount <= myPoints) {
      setCurrentBid(newBidAmount);
      setBids(prev => [
        { id: Date.now().toString(), user: '@yo (Tú)', amount: newBidAmount, time: 'Ahora', isMe: true },
        ...prev
      ]);
      
      // Simulate someone outbidding you after a few seconds randomly
      if (Math.random() > 0.5) {
        setTimeout(() => {
          setCurrentBid(newBidAmount + 200);
          setBids(current => [
            { id: Date.now().toString(), user: '@camilok', amount: newBidAmount + 200, time: 'Ahora', isMe: false },
            ...current
          ]);
        }, 3000);
      }
    }
  };

  return (
    <div className="bg-[#050B14] flex flex-col text-slate-100 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 inset-x-0 h-96 bg-red-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-96 bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-[#050B14]/80 backdrop-blur-md border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
           <span className="font-bold text-sm tracking-widest uppercase text-white">En Vivo</span>
        </div>
        <div className="w-10" /> {/* Spacer */}
      </header>

      <main className="flex-1 w-full px-6 pt-20">
        
        {/* Prize Section */}
        <div className="relative rounded-3xl overflow-hidden mb-6 shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540039155732-d68f76ac1eb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Festival VIP" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500 text-sm">timer</span>
            <span className="font-mono font-bold text-red-400">{formatTime(timeLeft)}</span>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <h1 className="text-2xl font-display font-black text-white leading-tight mb-1 drop-shadow-md">
              Pase VIP Backstage <br/>Festival Ciudad 2025
            </h1>
            <p className="text-sm text-slate-300">Incluye pase Meet & Greet para 2 personas.</p>
          </div>
        </div>

        {/* Current Bid info */}
        <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-5 mb-6 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/0 to-primary/20 blur-xl opacity-50" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Puja Más Alta</p>
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">token</span>
              <motion.span 
                key={currentBid}
                initial={{ scale: 1.2, color: '#fcd34d' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="text-4xl font-display font-black tracking-tight"
              >
                {currentBid.toLocaleString()}
              </motion.span>
            </div>
            {bids.length > 0 && (
              <p className={`text-sm mt-2 font-medium ${bids[0].isMe ? 'text-green-400' : 'text-orange-400'}`}>
                {bids[0].isMe ? '¡Vas ganando!' : `Por ${bids[0].user}`}
              </p>
            )}
          </div>
        </div>

        {/* Bidding History */}
        <div className="mb-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 px-2">Historial de Pujas</h3>
          <div className="space-y-3 relative">
            {/* Fade out top */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#050B14] to-transparent z-10 pointer-events-none" />
            
            <AnimatePresence>
              {bids.slice(0, 4).map((bid, i) => (
                <motion.div 
                  key={bid.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center justify-between p-3 rounded-xl border ${bid.isMe ? 'bg-primary/10 border-primary/30' : 'bg-slate-900/50 border-slate-800'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bid.isMe ? 'bg-primary text-black' : 'bg-slate-800 text-slate-400'}`}>
                      <span className="material-symbols-outlined text-sm">{bid.isMe ? 'person' : 'person_outline'}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold ${bid.isMe ? 'text-primary' : 'text-slate-200'}`}>{bid.user}</span>
                      <span className="text-[10px] text-slate-500">{bid.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 font-mono font-bold">
                    <span className="text-slate-400">NP</span>
                    <span className={bid.isMe ? 'text-white' : 'text-slate-300'}>{bid.amount.toLocaleString()}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </main>

      {/* Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:max-w-md lg:mx-auto bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-4 pb-8 z-50">
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-xs text-slate-400 font-medium">Tus Saldo:</span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-primary">token</span>
            <span className="text-sm font-bold text-white">{myPoints.toLocaleString()} NP</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => handleBid(100)}
            disabled={currentBid + 100 > myPoints || timeLeft === 0}
            className="flex-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center"
          >
            <span className="text-xs text-slate-400 font-normal leading-none mb-1">Subir puja</span>
            <span className="leading-none">+100</span>
          </button>
          
          <button 
            onClick={() => handleBid(500)}
             disabled={currentBid + 500 > myPoints || timeLeft === 0}
            className="flex-1 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center justify-center"
          >
             <span className="text-xs text-slate-400 font-normal leading-none mb-1">Subir puja</span>
             <span className="leading-none">+500</span>
          </button>

          <button 
            onClick={() => handleBid(1000)}
             disabled={currentBid + 1000 > myPoints || timeLeft === 0}
            className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all flex flex-col items-center justify-center disabled:opacity-50"
          >
             <span className="text-[10px] text-white/80 uppercase tracking-wider font-black leading-none mb-1">Ataque</span>
             <span className="leading-none text-lg">+1000</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}
