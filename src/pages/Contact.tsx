import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Map Section */}
      <section className="h-[60vh] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8320087015472!2d14.371042574935068!3d41.35600499794293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a61004644b94b%3A0x67d1b236ca015146!2sGorah%20eno%20%26%20gin!5e0!3m2!1sit!2sit!4v1740349424536!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading text-center mb-16">Informazioni su di noi</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <MapPin size={32} className="mx-auto mb-4 text-gorah-teal" />
                <h3 className="text-xl font-light mb-4"></h3>
                <p className="text-gorah-gray">
                  Piazza Roma 15<br />
                  Piedimonte d'Alife 81016
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <Clock size={32} className="mx-auto mb-4 text-gorah-teal" />
                <h3 className="text-xl font-light mb-4">Orari</h3>
                <p className="text-gorah-gray">
                  Mercoledi-Domenica: 18:00-02:00<br />
                  Lunedi - Martedi: Chiusi
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <Instagram size={32} className="mx-auto mb-4 text-gorah-teal" />
                <h3 className="text-xl font-light mb-4">Social</h3>
                <a
                  href="https://www.instagram.com/gorah_enoegin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gorah-gray hover:text-gorah-teal transition-colors"
                >
                  Seguici su Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;