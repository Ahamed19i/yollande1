import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Client Satisfait",
    text: "Très bon restaurant, plats délicieux et bien servis.",
    rating: 5
  },
  {
    id: 2,
    name: "Amateur de Cuisine",
    text: "Cuisine authentique, on sent vraiment les saveurs africaines.",
    rating: 4
  },
  {
    id: 3,
    name: "Visiteur Médina",
    text: "Accueil chaleureux et nourriture de qualité.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-6 bg-win-teal px-4">
      <div className="max-w-5xl mx-auto">
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <span>💬</span>
              <span>Avis Clients — Livre d&apos;or</span>
            </div>
            <div className="flex gap-1">
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">_</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">□</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black font-bold">✕</button>
            </div>
          </div>

          <div className="p-4 bg-win-gray">
            {/* Overall rating */}
            <div className="win-window mb-4">
              <div className="win-titlebar">
                <span>⭐ Note globale</span>
              </div>
              <div className="p-3 bg-win-gray flex items-center gap-4">
                <div className="text-4xl font-bold text-win-blue">4.3</div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < 4 ? "text-yellow-600 fill-yellow-600" : "text-gray-400"} />
                    ))}
                  </div>
                  <p className="text-[10px] text-win-black">Basé sur 12 avis Google</p>
                  <p className="text-[10px] text-win-gray-dark">Ce que disent nos clients</p>
                </div>
              </div>
            </div>

            {/* Reviews as dialog boxes side-by-side */}
            <div className="grid md:grid-cols-3 gap-3">
              {reviews.map((review) => (
                <div key={review.id} className="win-window">
                  <div className="win-titlebar !text-[10px]">
                    <div className="flex items-center gap-1">
                      <Quote size={10} />
                      <span>{review.name}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-win-gray">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className={i < review.rating ? "text-yellow-600 fill-yellow-600" : "text-gray-400"}
                        />
                      ))}
                    </div>
                    <div className="win-inset bg-win-white p-2 min-h-[56px]">
                      <p className="text-[11px] text-win-black italic leading-4">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <button className="win-btn text-[9px]">Utile ?</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-sunken px-3 py-0.5 flex-1">{reviews.length} avis affichés</div>
            <div className="win-sunken px-3 py-0.5 w-40">Mise à jour : 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
