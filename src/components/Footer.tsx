export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-2xl font-serif font-bold tracking-tighter">
            Restaurant togolais chez <span className="text-brand-red">Yollande</span>
          </span>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
            Saveurs authentiques du Togo à la Médina, Dakar
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Chez Yollande. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
