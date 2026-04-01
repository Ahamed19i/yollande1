import { useState } from 'react';

export default function WhatsAppButton() {
  const [dismissed, setDismissed] = useState(false);
  const phoneNumber = "221771722900";
  const message = encodeURIComponent("Bonjour Chez Yollande, je souhaiterais passer une commande.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (dismissed) return null;

  return (
    <div className="fixed bottom-14 right-4 z-50 w-72">
      <div className="win-window">
        <div className="win-titlebar !text-[10px]">
          <div className="flex items-center gap-1">
            <span>🟢</span>
            <span>Nouvelle notification — WhatsApp</span>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="win-btn !px-1.5 !py-0 text-[10px] !text-win-black font-bold"
          >
            ✕
          </button>
        </div>
        <div className="p-3 bg-win-gray">
          <div className="flex gap-2 items-start mb-3">
            <span className="text-2xl">🍽️</span>
            <div>
              <p className="text-[11px] font-bold text-win-black">Commandez maintenant !</p>
              <p className="text-[10px] text-win-black leading-4">
                Passez votre commande via WhatsApp — livraison ou sur place.
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="win-btn win-btn-default text-[10px] font-bold text-win-blue"
            >
              📲 Commander
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="win-btn text-[10px]"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
