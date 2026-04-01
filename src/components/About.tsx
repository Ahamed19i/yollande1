import { Heart, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Heart, label: "Passion", value: "100%" },
  { icon: Users, label: "Clients", value: "5000+" },
  { icon: Clock, label: "Expérience", value: "15 Ans" },
  { icon: MapPin, label: "Dakar", value: "Local" },
];

export default function About() {
  return (
    <section id="a-propos" className="py-6 bg-win-teal px-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <span>ℹ️</span>
              <span>À propos — Restaurant togolais chez Yollande</span>
            </div>
            <div className="flex gap-1">
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">_</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">□</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black font-bold">✕</button>
            </div>
          </div>

          <div className="p-4 bg-win-gray">
            <div className="flex flex-col lg:flex-row gap-4">

              {/* Left: images */}
              <div className="lg:w-64 shrink-0">
                <div className="win-window mb-3">
                  <div className="win-titlebar !text-[10px]">
                    <span>📷 Galerie Photos</span>
                  </div>
                  <div className="p-2 bg-win-gray grid grid-cols-2 gap-1">
                    <div className="win-sunken overflow-hidden">
                      <img
                        src="https://picsum.photos/seed/chef1/200/200"
                        alt="Notre Cuisine"
                        className="w-full h-24 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="win-sunken overflow-hidden">
                      <img
                        src="https://picsum.photos/seed/chef2/200/200"
                        alt="Chez Yollande"
                        className="w-full h-24 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats as properties dialog */}
                <div className="win-window">
                  <div className="win-titlebar !text-[10px]">
                    <span>📊 Propriétés</span>
                  </div>
                  <div className="p-2 bg-win-gray">
                    {stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2 border-b border-win-gray-dark py-1 last:border-0">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <stat.icon size={12} className="text-win-blue" />
                        </div>
                        <span className="text-[10px] flex-1">{stat.label}</span>
                        <span className="text-[10px] font-bold text-win-blue">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-win-blue mb-3">
                  Une Adresse Incontournable
                </h2>

                {/* Tabbed-style content */}
                <div className="win-window mb-3">
                  <div className="bg-win-gray border-b border-win-gray-dark flex text-[11px]">
                    <div className="border-t-2 border-l-2 border-r-2 border-win-gray-dark bg-win-gray px-3 py-1 font-bold -mb-px">
                      Description
                    </div>
                    <div className="px-3 py-1 text-win-gray-dark cursor-pointer">Histoire</div>
                    <div className="px-3 py-1 text-win-gray-dark cursor-pointer">Valeurs</div>
                  </div>
                  <div className="p-3 bg-win-white win-sunken">
                    <p className="text-[11px] text-win-black leading-5 mb-2">
                      Le Restaurant togolais chez Yollande est une adresse incontournable pour les amateurs de cuisine africaine à Dakar.
                    </p>
                    <p className="text-[11px] text-win-black leading-5">
                      Nous mettons un point d&apos;honneur à proposer des plats faits maison avec des ingrédients frais et une touche authentique du Togo. Notre objectif est de vous offrir une expérience culinaire unique dans une ambiance conviviale.
                    </p>
                  </div>
                </div>

                {/* Info boxes */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="win-inset bg-win-yellow p-2">
                    <p className="text-[10px] font-bold text-win-black">🕐 Horaires</p>
                    <p className="text-[10px] text-win-black mt-1">Lun–Sam: 11h–22h30</p>
                    <p className="text-[10px] text-win-black">Dim: 12h–21h</p>
                  </div>
                  <div className="win-inset bg-win-white p-2">
                    <p className="text-[10px] font-bold text-win-black">📍 Adresse</p>
                    <p className="text-[10px] text-win-black mt-1">Médina, Dakar</p>
                    <p className="text-[10px] text-win-gray-dark">MGMW+23H</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="win-btn win-btn-default text-[11px]">
                    OK
                  </button>
                  <button className="win-btn text-[11px]">
                    Annuler
                  </button>
                  <a href="#contact" className="win-btn text-[11px]">
                    Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-sunken px-3 py-0.5 flex-1">Version 1.0 — © 2026 Chez Yollande</div>
          </div>
        </div>
      </div>
    </section>
  );
}
