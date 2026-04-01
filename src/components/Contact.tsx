import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-6 bg-win-teal px-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>Nous contacter — Chez Yollande</span>
            </div>
            <div className="flex gap-1">
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">_</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">□</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black font-bold">✕</button>
            </div>
          </div>

          <div className="p-4 bg-win-gray">
            <div className="grid lg:grid-cols-2 gap-4">

              {/* Contact info panel */}
              <div>
                <h2 className="text-lg font-bold text-win-blue mb-3">
                  Venez nous voir
                </h2>
                <p className="text-[11px] text-win-black mb-4">
                  Situé au cœur de Dakar, nous vous accueillons dans un cadre chaleureux.
                </p>

                {/* Contact entries as a list-view */}
                <div className="win-window mb-3">
                  <div className="win-titlebar !text-[10px]">
                    <span>📋 Coordonnées</span>
                  </div>
                  <div className="bg-win-white win-sunken">
                    <div className="flex items-start gap-3 p-3 border-b border-win-gray-dark">
                      <div className="win-raised bg-win-red p-1.5">
                        <MapPin size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-win-black">Adresse</p>
                        <p className="text-[10px] text-win-gray-dark">Médina, Dakar (MGMW+23H)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border-b border-win-gray-dark">
                      <div className="win-raised bg-win-blue p-1.5">
                        <Phone size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-win-black">Téléphone</p>
                        <a
                          href="tel:+221771722900"
                          className="text-[10px] text-win-blue underline hover:text-win-red"
                        >
                          +221 77 172 29 00
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3">
                      <div className="win-raised bg-win-teal p-1.5">
                        <Clock size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-win-black">Horaires</p>
                        <p className="text-[10px] text-win-gray-dark">Lun – Sam : 11h00 – 22h30</p>
                        <p className="text-[10px] text-win-gray-dark">Dimanche : 12h00 – 21h00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA as dialog button */}
                <div className="win-window">
                  <div className="win-titlebar !text-[10px]">
                    <span>🟢 Commander via WhatsApp</span>
                  </div>
                  <div className="p-3 bg-win-gray flex items-center justify-between gap-3">
                    <p className="text-[10px] text-win-black">
                      Passez votre commande directement via WhatsApp — réponse rapide garantie !
                    </p>
                    <a
                      href="https://wa.me/221771722900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win-btn win-btn-default shrink-0 text-[11px] font-bold text-win-blue"
                    >
                      📲 WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map panel */}
              <div className="win-window h-full">
                <div className="win-titlebar !text-[10px]">
                  <span>🗺️ Plan d&apos;accès — Médina, Dakar</span>
                </div>
                <div className="p-2 bg-win-gray h-full flex flex-col">
                  <div className="win-sunken flex-1 overflow-hidden min-h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.484646738531!2d-17.4572436!3d14.682846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173ad5791d66d%3A0x1161961c64e65235!2sRestaurant+togolais+chez+Yollande!5e0!3m2!1sfr!2ssn!4v1711982439000!5m2!1sfr!2ssn"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '300px' }}
                      allowFullScreen
                      loading="lazy"
                      title="Google Maps Location"
                    />
                  </div>
                  <div className="mt-2 flex gap-2 justify-end">
                    <a
                      href="https://maps.google.com/?q=Restaurant+togolais+chez+Yollande"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="win-btn text-[10px]"
                    >
                      Ouvrir dans Maps
                    </a>
                    <button className="win-btn text-[10px]">Imprimer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-sunken px-3 py-0.5 flex-1">Médina, Dakar — Sénégal</div>
            <div className="win-sunken px-3 py-0.5 w-40">📶 Connecté</div>
          </div>
        </div>
      </div>
    </section>
  );
}
