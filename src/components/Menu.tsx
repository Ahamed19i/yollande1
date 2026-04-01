import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: "Riz sauce arachide",
    description: "Un classique onctueux et savoureux, préparé avec soin.",
    price: "2500 FCFA",
    image: "https://picsum.photos/seed/riz-sauce/400/400",
    tag: "Populaire"
  },
  {
    id: 2,
    name: "Fufu + sauce",
    description: "L'authenticité togolaise dans votre assiette.",
    price: "3500 FCFA",
    image: "https://picsum.photos/seed/fufu/400/400",
    tag: "Spécialité"
  },
  {
    id: 3,
    name: "Poulet braisé",
    description: "Poulet tendre et grillé à la perfection.",
    price: "4000 FCFA",
    image: "https://picsum.photos/seed/poulet/400/400"
  },
  {
    id: 4,
    name: "Poisson grillé",
    description: "Poisson frais du jour, grillé avec nos épices secrètes.",
    price: "4500 FCFA",
    image: "https://picsum.photos/seed/poisson/400/400"
  },
  {
    id: 5,
    name: "Attiéké poisson",
    description: "Semoule de manioc légère servie avec son poisson.",
    price: "3500 FCFA",
    image: "https://picsum.photos/seed/attieke/400/400"
  },
  {
    id: 6,
    name: "Jus naturel maison",
    description: "Bissap, Bouye ou Ditakh frais et naturels.",
    price: "1000 FCFA",
    image: "https://picsum.photos/seed/jus/400/400",
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
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Notre <span className="text-brand-red">Carte</span> Gourmande
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-[0.2em] text-sm font-bold">
            Des saveurs authentiques, cuisinées chaque jour
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.tag}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-1">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold">4.9</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-brand-red font-bold">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => handleOrder(item.name)}
                  className="w-full bg-brand-black text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-red transition-colors"
                >
                  <ShoppingCart size={18} />
                  Commander
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 italic mb-4">Besoin de quelque chose de spécifique ?</p>
          <a
            href="https://wa.me/221770000000"
            className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline underline-offset-4"
          >
            Contactez-nous pour un menu personnalisé
          </a>
        </div>
      </div>
    </section>
  );
}
