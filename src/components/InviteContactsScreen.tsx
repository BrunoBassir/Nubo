import { useState } from 'react';

export function InviteContactsScreen({ onBack }: { onBack?: () => void }) {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState<{ value: string; type: 'email' | 'phone' }[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Basic validation
    const isEmail = inputValue.includes('@');
    const isPhone = /^\+?[\d\s-]{8,}$/.test(inputValue);

    if (isEmail || isPhone) {
      setContacts([...contacts, { value: inputValue.trim(), type: isEmail ? 'email' : 'phone' }]);
      setInputValue('');
    } else {
      alert('Ingresa un email o número de teléfono válido.');
    }
  };

  const handleRemoveContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleSendInvites = () => {
    if (contacts.length === 0) return;
    
    setIsSending(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      setContacts([]);
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        if (onBack) onBack();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#070b14] text-white font-sans min-h-screen relative overflow-x-hidden flex flex-col">
      <header className="sticky top-0 z-50 px-6 py-4 flex items-center bg-[#070b14]/80 backdrop-blur-xl border-b border-white/5 lg:max-w-md lg:mx-auto w-full">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 active:scale-95 transition-transform absolute left-6">
          <span className="material-symbols-outlined text-white text-xl">arrow_back</span>
        </button>
        <h1 className="text-sm font-black uppercase tracking-widest text-center w-full">Enviar Invitación</h1>
      </header>

      <main className="flex-1 px-6 pt-8 pb-32 max-w-md mx-auto w-full flex flex-col relative z-10">
        
        <div className="text-center mb-8">
          <div className="size-16 bg-[#19ccf0]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#19ccf0]/30 shadow-[0_0_20px_rgba(25,204,240,0.2)]">
            <span className="material-symbols-outlined text-3xl text-[#19ccf0] font-bold">mail</span>
          </div>
          <h2 className="text-2xl font-black mb-2">Ingresá sus datos</h2>
          <p className="text-sm text-slate-400 font-medium px-4">
            Te vamos a ayudar a armar el mensaje con tu link y código NUBO-X92 para que lo envies a sus correos o teléfonos.
          </p>
        </div>

        <form onSubmit={handleAddContact} className="mb-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person_add</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Email o Teléfono"
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium text-white placeholder-slate-500 focus:outline-none focus:border-[#19ccf0]/50 transition-colors"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 size-10 bg-[#19ccf0]/20 text-[#19ccf0] rounded-xl flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined font-bold">add</span>
            </button>
          </div>
        </form>

        <div className="flex-1">
          {contacts.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#19ccf0] mb-4">Invitaciones ({contacts.length})</h3>
              {contacts.map((contact, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">
                      {contact.type === 'email' ? 'alternate_email' : 'call'}
                    </span>
                    <span className="text-sm font-medium truncate">{contact.value}</span>
                  </div>
                  <button onClick={() => handleRemoveContact(i)} className="text-slate-500 hover:text-red-400 active:scale-90 transition-all p-1">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {contacts.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 mt-10">
               <span className="material-symbols-outlined text-4xl mb-2">contacts</span>
               <p className="text-sm font-medium">Lista de invitaciones vacía</p>
            </div>
          )}
        </div>

      </main>
      
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="bg-[#0f172a] border border-[#19ccf0]/30 rounded-[2rem] p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(25,204,240,0.2)] animate-in fade-in zoom-in duration-300">
            <div className="size-20 bg-[#19ccf0] rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(25,204,240,0.4)]">
              <span className="material-symbols-outlined text-4xl text-[#070b14] font-bold">check</span>
            </div>
            <h3 className="text-2xl font-black mb-2 text-white">¡Enviado!</h3>
            <p className="text-slate-300 text-sm">
              Tus amigos recibirán la invitación para unirse a Nubo.
            </p>
          </div>
        </div>
      )}

      {/* Footer Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#070b14] via-[#070b14]/90 to-transparent z-40 lg:max-w-md lg:mx-auto">
        <button 
          onClick={handleSendInvites}
          disabled={contacts.length === 0 || isSending}
          className="w-full bg-[#19ccf0] text-[#070b14] font-black py-4 rounded-2xl shadow-[0_0_30px_rgba(25,204,240,0.4)] flex items-center justify-center gap-3 text-sm uppercase tracking-widest active:scale-[0.98] transition-all disabled:opacity-50 disabled:shadow-none disabled:active:scale-100"
        >
          {isSending ? (
            <span className="material-symbols-outlined animate-spin font-bold">autorenew</span>
          ) : (
            <>
              <span className="material-symbols-outlined font-bold">send</span>
              ENVIAR ({contacts.length})
            </>
          )}
        </button>
      </div>
    </div>
  );
}
