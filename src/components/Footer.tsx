export default function Footer() {
  return (
    <footer className="bg-win-teal pb-16 px-4">
      {/* Footer window */}
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar win-titlebar-teal">
            <div className="flex items-center gap-2">
              <span>🍽️</span>
              <span>Restaurant togolais chez Yollande — Pied de page</span>
            </div>
          </div>
          <div className="p-3 bg-win-gray flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-[13px] font-bold text-win-blue">
                Restaurant togolais chez <span className="text-win-red">Yollande</span>
              </p>
              <p className="text-[9px] text-win-gray-dark uppercase tracking-widest mt-0.5">
                Saveurs authentiques du Togo — Médina, Dakar
              </p>
            </div>

            <div className="flex gap-4 text-[11px]">
              <a href="#accueil" className="text-win-blue underline hover:text-win-red">Accueil</a>
              <a href="#menu" className="text-win-blue underline hover:text-win-red">Menu</a>
              <a href="#contact" className="text-win-blue underline hover:text-win-red">Contact</a>
            </div>

            <p className="text-[9px] text-win-gray-dark uppercase tracking-widest">
              © {new Date().getFullYear()} Chez Yollande. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 win-taskbar h-10 flex items-center px-2 gap-2 z-50">
        {/* Start button */}
        <button className="win-btn win-btn-default flex items-center gap-1.5 !text-[11px] font-bold !px-3 !py-1 !bg-win-gray">
          <span className="text-win-blue font-black text-base leading-none">⊞</span>
          Démarrer
        </button>

        <div className="h-6 w-px bg-white/30 mx-1" />

        {/* Quick launch */}
        <button className="win-btn !px-2 !py-1 text-base leading-none" title="Accueil">🏠</button>
        <button className="win-btn !px-2 !py-1 text-base leading-none" title="Menu">🍴</button>
        <button className="win-btn !px-2 !py-1 text-base leading-none" title="WhatsApp">📲</button>

        <div className="h-6 w-px bg-white/30 mx-1" />

        {/* Open windows */}
        <button className="win-btn win-btn-default !text-[10px] !px-3 !py-1 max-w-[160px] truncate">
          🍽️ Chez Yollande
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* System tray */}
        <div className="win-inset bg-win-blue/20 flex items-center gap-2 px-3 py-0.5 text-white text-[10px]">
          <span>🔊</span>
          <span>🌐</span>
          <span className="font-bold">
            {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </footer>
  );
}
