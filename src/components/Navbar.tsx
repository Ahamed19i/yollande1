import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Menu', href: '#menu' },
  { name: 'À Propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-brand-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#accueil" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-2 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
            <UtensilsCrossed className="text-white" size={24} />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter">
            Restaurant togolais chez <span className="text-brand-red">Yollande</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#menu"
            className="bg-brand-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-red transition-all transform hover:-translate-y-0.5"
          >
            Commander
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="bg-brand-red text-white text-center py-4 rounded-xl font-bold mt-2"
            >
              Commander Maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
