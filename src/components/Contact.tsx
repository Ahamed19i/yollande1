import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Venez nous <span className="text-brand-red italic">voir</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Situé au cœur de Dakar, nous vous accueillons dans un cadre chaleureux et moderne.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Adresse</p>
                  <p className="text-gray-400">Médina, Dakar (MGMW+23H)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Téléphone</p>
                  <p className="text-gray-400">+221 77 172 29 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Horaires</p>
                  <p className="text-gray-400">Lun - Sam: 11h00 - 22h30</p>
                  <p className="text-gray-400">Dimanche: 12h00 - 21h00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://wa.me/221771722900" className="bg-white/10 p-4 rounded-full hover:bg-brand-red transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.484646738531!2d-17.4572436!3d14.682846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173ad5791d66d%3A0x1161961c64e65235!2sRestaurant+togolais+chez+Yollande!5e0!3m2!1sfr!2ssn!4v1711982439000!5m2!1sfr!2ssn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
