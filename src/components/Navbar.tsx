import { useState } from 'react';
import { UtensilsCrossed, Minus, Square, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Menu', href: '#menu' },
  { name: 'À Propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Title-bar style top bar */}
      <div className="win-titlebar win-titlebar-teal select-none">
        <div className="flex items-center gap-2">
          <div className="bg-win-white/20 p-0.5 rounded-sm">
            <UtensilsCrossed className="text-white" size={14} />
          </div>
          <span className="text-[11px] font-bold tracking-wide">
            Restaurant togolais chez Yollande — Chez Yollande, Médina Dakar
          </span>
        </div>
        {/* Window controls */}
        <div className="flex gap-1">
          <button className="win-btn !px-2 !py-0.5 text-[10px]" title="Réduire">
            <Minus size={8} />
          </button>
          <button className="win-btn !px-2 !py-0.5 text-[10px]" title="Agrandir">
            <Square size={8} />
          </button>
          <button className="win-btn !px-2 !py-0.5 text-[10px] !bg-win-red !text-white" title="Fermer">
            <X size={8} />
          </button>
        </div>
      </div>

      {/* Menu bar */}
      <nav className="bg-win-gray border-b border-win-gray-dark flex items-center gap-0 px-2 py-0.5 relative" role="menubar">
        {/* Address bar style brand */}
        <div className="flex items-center gap-1 mr-4 border-r border-win-gray-dark pr-4">
          <UtensilsCrossed size={14} className="text-win-blue" />
          <a href="#accueil" className="text-[11px] font-bold text-win-blue hover:underline">Chez Yollande</a>
        </div>

        {/* Nav links as "menu bar items" */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="win-menuitem px-3 py-1 text-[11px] cursor-pointer flex items-center gap-0.5"
            >
              {link.name}
            </a>
          ))}
          {/* Commander as a special button */}
          <a
            href="#menu"
            className="win-btn win-btn-default ml-4 !text-[11px] font-bold text-win-blue"
          >
            Commander
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden win-btn ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          Menu ▼
        </button>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 win-window z-50 md:hidden">
            <div className="win-titlebar text-[10px]">Navigation</div>
            <div className="p-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="win-menuitem px-3 py-1 text-[11px] block"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#menu"
                onClick={() => setMobileOpen(false)}
                className="win-btn win-btn-default text-center mt-2"
              >
                Commander Maintenant
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Address / toolbar bar */}
      <div className="bg-win-gray border-b border-win-gray-dark flex items-center gap-2 px-2 py-1">
        <span className="text-[10px] text-win-black font-bold">Adresse&nbsp;:</span>
        <div className="win-input flex-1 text-[10px] flex items-center gap-1">
          <span className="text-win-blue">🌍</span>
          <span>restaurant-chez-yollande.sn/accueil</span>
        </div>
        <button className="win-btn text-[10px]">Aller</button>
      </div>
    </header>
  );
}
