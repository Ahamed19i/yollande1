import { ShoppingCart, Star } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: "Riz sauce arachide",
    description: "Un classique onctueux et savoureux, préparé avec soin.",
    price: "2 500 FCFA",
    image: "https://picsum.photos/seed/riz-sauce/200/150",
    tag: "Populaire"
  },
  {
    id: 2,
    name: "Fufu + sauce",
    description: "L'authenticité togolaise dans votre assiette.",
    price: "3 500 FCFA",
    image: "https://picsum.photos/seed/fufu/200/150",
    tag: "Spécialité"
  },
  {
    id: 3,
    name: "Poulet braisé",
    description: "Poulet tendre et grillé à la perfection.",
    price: "4 000 FCFA",
    image: "https://picsum.photos/seed/poulet/200/150",
    tag: null
  },
  {
    id: 4,
    name: "Poisson grillé",
    description: "Poisson frais du jour, grillé avec nos épices secrètes.",
    price: "4 500 FCFA",
    image: "https://picsum.photos/seed/poisson/200/150",
    tag: null
  },
  {
    id: 5,
    name: "Attiéké poisson",
    description: "Semoule de manioc légère servie avec son poisson.",
    price: "3 500 FCFA",
    image: "https://picsum.photos/seed/attieke/200/150",
    tag: null
  },
  {
    id: 6,
    name: "Jus naturel maison",
    description: "Bissap, Bouye ou Ditakh frais et naturels.",
    price: "1 000 FCFA",
    image: "https://picsum.photos/seed/jus/200/150",
    tag: "Frais"
  }
];

export default function Menu() {
  const whatsappNumber = "221771722900";

  const handleOrder = (itemName: string) => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander : ${itemName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-6 bg-win-teal px-4">
      <div className="max-w-5xl mx-auto">

        {/* Window container */}
        <div className="win-window">
          <div className="win-titlebar">
            <div className="flex items-center gap-2">
              <span>🍴</span>
              <span>Notre Carte Gourmande — Chez Yollande</span>
            </div>
            <div className="flex gap-1">
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">_</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black">□</button>
              <button className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black font-bold">✕</button>
            </div>
          </div>

          {/* Menu bar inside window */}
          <div className="bg-win-gray border-b border-win-gray-dark flex gap-1 px-2 py-0.5 text-[11px]">
            <span className="win-menuitem px-2 py-0.5 cursor-pointer">Fichier</span>
            <span className="win-menuitem px-2 py-0.5 cursor-pointer">Édition</span>
            <span className="win-menuitem px-2 py-0.5 cursor-pointer bg-win-blue text-white">Affichage</span>
            <span className="win-menuitem px-2 py-0.5 cursor-pointer">Commande</span>
            <span className="win-menuitem px-2 py-0.5 cursor-pointer">Aide</span>
          </div>

          <div className="p-4 bg-win-gray">
            {/* Header */}
            <div className="win-window mb-4">
              <div className="win-titlebar">
                <span>ℹ️ Information</span>
              </div>
              <div className="p-3 bg-win-gray flex items-center gap-3">
                <div className="text-3xl">🍽️</div>
                <div>
                  <p className="text-[13px] font-bold text-win-blue">Notre Carte Gourmande</p>
                  <p className="text-[11px] text-win-black">Des saveurs authentiques, cuisinées chaque jour avec des produits frais.</p>
                </div>
              </div>
            </div>

            {/* Items table */}
            <div className="win-sunken bg-win-white overflow-auto">
              <table className="w-full text-[11px] border-collapse">
                <thead>
                  <tr className="bg-win-blue text-white text-left">
                    <th className="px-2 py-1 w-8">#</th>
                    <th className="px-2 py-1 w-20">Photo</th>
                    <th className="px-2 py-1">Nom du plat</th>
                    <th className="px-2 py-1">Description</th>
                    <th className="px-2 py-1 w-20">Note</th>
                    <th className="px-2 py-1 w-24">Prix</th>
                    <th className="px-2 py-1 w-24">Statut</th>
                    <th className="px-2 py-1 w-28">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item, idx) => (
                    <tr
                      key={item.id}
                      className="border-b border-win-gray-dark hover:bg-win-blue hover:text-white group transition-colors"
                    >
                      <td className="px-2 py-1 text-center">{idx + 1}</td>
                      <td className="px-2 py-1">
                        <div className="win-sunken w-16 h-12 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </td>
                      <td className="px-2 py-1 font-bold">{item.name}</td>
                      <td className="px-2 py-1 text-[10px] max-w-[200px]">{item.description}</td>
                      <td className="px-2 py-1">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={9} className="text-yellow-600 fill-yellow-600 group-hover:text-yellow-300 group-hover:fill-yellow-300" />
                          ))}
                        </div>
                      </td>
                      <td className="px-2 py-1 font-bold text-win-blue group-hover:text-win-yellow">{item.price}</td>
                      <td className="px-2 py-1">
                        {item.tag ? (
                          <span className="bg-win-red text-white text-[9px] px-1.5 py-0.5 font-bold uppercase">{item.tag}</span>
                        ) : (
                          <span className="text-[9px] text-win-gray-dark">Disponible</span>
                        )}
                      </td>
                      <td className="px-2 py-1">
                        <button
                          onClick={() => handleOrder(item.name)}
                          className="win-btn !text-[10px] flex items-center gap-1 w-full justify-center"
                        >
                          <ShoppingCart size={10} />
                          Commander
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer bar */}
            <div className="mt-3 flex items-center justify-between">
              <p className="text-[10px] text-win-black italic">
                Besoin de quelque chose de spécifique ? Contactez-nous pour un menu personnalisé.
              </p>
              <a
                href="https://wa.me/221770000000"
                className="win-btn win-btn-default text-[10px] text-win-blue hover:underline"
              >
                📞 Menu personnalisé
              </a>
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar">
            <div className="win-sunken px-3 py-0.5 flex-1">{menuItems.length} objet(s)</div>
            <div className="win-sunken px-3 py-0.5 w-32">Tous disponibles</div>
          </div>
        </div>
      </div>
    </section>
  );
}
