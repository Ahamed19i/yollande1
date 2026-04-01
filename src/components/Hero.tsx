import { ShoppingBag, Info, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="pt-[88px] min-h-screen bg-win-teal flex items-start justify-center p-4">
      <div className="w-full max-w-5xl">

        {/* Main "Welcome" window */}
        <div className="win-window mb-4">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <span>🍽️</span>
              <span>Bienvenue chez Yollande — Saveurs du Togo à Dakar</span>
            </div>
            <div className="flex gap-1">
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">_</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">□</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black font-bold">✕</button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="bg-win-gray border-b border-win-gray-dark flex gap-1 px-2 py-1">
            <button className="win-btn text-[10px]">◀ Retour</button>
            <button className="win-btn text-[10px]">▶ Suivant</button>
            <div className="w-px bg-win-gray-dark mx-1 self-stretch" />
            <button className="win-btn text-[10px]">🏠 Accueil</button>
            <button className="win-btn text-[10px]">🔄 Actualiser</button>
            <button className="win-btn text-[10px]">⛔ Arrêter</button>
          </div>

          {/* Content area */}
          <div className="p-4 bg-win-gray">
            <div className="flex flex-col lg:flex-row gap-4">

              {/* Left: text panel */}
              <div className="flex-1">
                {/* Marquee banner */}
                <div className="win-sunken bg-win-yellow px-2 py-1 mb-3 overflow-hidden">
                  <div className="text-[11px] font-bold text-win-black animate-[marquee_18s_linear_infinite] whitespace-nowrap inline-block">
                    🌟 NOUVEAU : Fufu + sauce spécial disponible ! &nbsp;&nbsp;&nbsp;
                    📍 Médina, Dakar — Sur place ou à emporter &nbsp;&nbsp;&nbsp;
                    ⭐ Note : 4.3/5 sur Google (12 avis) &nbsp;&nbsp;&nbsp;
                    📞 +221 77 172 29 00 &nbsp;&nbsp;&nbsp;
                  </div>
                </div>

                {/* About dialog-style panel */}
                <div className="win-window mb-3">
                  <div className="win-titlebar">
                    <span>ℹ️ À propos de notre restaurant</span>
                  </div>
                  <div className="p-3 bg-win-gray">
                    <div className="flex gap-3 items-start">
                      <img
                        src="https://picsum.photos/seed/african-food/64/64"
                        alt="Cuisine"
                        className="w-16 h-16 object-cover win-sunken shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-[11px] font-bold text-win-black mb-1">
                          Restaurant togolais chez Yollande
                        </p>
                        <p className="text-[11px] text-win-black leading-4">
                          Découvrez les saveurs authentiques du Togo en plein cœur de Dakar. 
                          Cuisine africaine faite maison, riche en goût et en tradition.
                        </p>
                        <div className="flex gap-0.5 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className={i < 4 ? "text-yellow-600 fill-yellow-600" : "text-gray-400"} />
                          ))}
                          <span className="text-[10px] ml-1 text-win-black">4.3 / 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location badge */}
                <div className="win-inset bg-win-white p-2 mb-3 text-[10px] flex items-center gap-2">
                  <span className="text-base">📍</span>
                  <span className="font-bold">Médina – Dakar</span>
                  <span className="text-win-gray-dark mx-1">|</span>
                  <span>Sur place ou à emporter</span>
                </div>

                {/* Big heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-win-blue mb-2 leading-tight">
                  Saveurs du <span className="text-win-red underline">Togo</span>,
                  à <span className="underline">Dakar</span>.
                </h1>
                <p className="text-[11px] text-win-black mb-4 leading-5 max-w-md">
                  Chez Yollande vous propose une cuisine africaine faite maison, 
                  riche en goût et en tradition — depuis plus de 15 ans.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href="#menu" className="win-btn win-btn-default font-bold flex items-center gap-2 !text-[11px]">
                    <ShoppingBag size={14} />
                    Commander maintenant
                  </a>
                  <a href="#a-propos" className="win-btn flex items-center gap-2 !text-[11px]">
                    <Info size={14} />
                    Notre histoire
                  </a>
                </div>
              </div>

              {/* Right: image panel */}
              <div className="lg:w-72 shrink-0">
                <div className="win-window">
                  <div className="win-titlebar">
                    <span>📸 Photo du jour</span>
                  </div>
                  <div className="p-2 bg-win-gray">
                    <div className="win-sunken overflow-hidden">
                      <img
                        src="https://picsum.photos/seed/thieboudienne/400/300"
                        alt="Thieboudienne - Plat Signature"
                        className="w-full h-48 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-[10px] text-center mt-1 text-win-black italic">
                      "Le meilleur Thieb de Dakar!"
                    </p>
                    <p className="text-[9px] text-center text-win-gray-dark">— Client Satisfait</p>
                  </div>
                </div>

                {/* Stats mini-panel */}
                <div className="win-window mt-3">
                  <div className="win-titlebar">
                    <span>📊 En chiffres</span>
                  </div>
                  <table className="win-table w-full text-[11px]">
                    <tbody>
                      <tr className="border-b border-win-gray-dark">
                        <td className="px-2 py-1 font-bold">Clients</td>
                        <td className="px-2 py-1 text-win-blue font-bold">5 000+</td>
                      </tr>
                      <tr className="border-b border-win-gray-dark">
                        <td className="px-2 py-1 font-bold">Expérience</td>
                        <td className="px-2 py-1 text-win-blue font-bold">15 ans</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 font-bold">Note Google</td>
                        <td className="px-2 py-1 text-win-blue font-bold">4.3 / 5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar">
            <div className="win-sunken px-3 py-0.5 flex-1">Terminé</div>
            <div className="win-sunken px-3 py-0.5 w-32">Zone : Internet local</div>
            <div className="win-sunken px-3 py-0.5 w-24">🔒 Sécurisé</div>
          </div>
        </div>

        {/* Progress bar / loading bar decoration */}
        <div className="win-progress-bar w-full mb-4">
          <div className="win-progress-fill w-full" />
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
