import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="/images/hero-image.jpg"
            alt="Gorah Enoegin Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="heading mb-6">
                Dove l'eleganza incontra l'innovazione
              </h1>
              <p className="subheading mb-8 text-gorah-gray">
                Vivi l'incontro perfetto tra mixologia, atmosfera sofisticata e cibo di qualità
              </p>
              <a
                href="https://gorah.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gorah-teal transition-colors"
              >
                Esplora menu
                <ArrowRight size={20} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-xl font-light mb-4">Cocktail Esclusivi</h3>
              <p className="text-gorah-gray">
                Drink innovativi che ridefiniscono i confini della mixologia.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-light mb-4">Sapori Raffinati</h3>
              <p className="text-gorah-gray">
                Piatti d'autore che esaltano il gusto con ingredienti selezionati.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-light mb-4">Atmosfera Elegante</h3>
              <p className="text-gorah-gray">
                Il design moderno incontra un'eleganza senza tempo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section bg-gorah-teal text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="heading mb-6"
              >
                Un nuovo standard di eccellenza
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gorah-gray mb-8"
              >
                Scopri perché Gorah Enoegin è diventato sinonimo di drink sofisticati e cibo eccezionale.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center text-white hover:text-gorah-gray transition-colors"
                >
                  Scopri di più su di noi
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3]"
            >
              <img
                src="/images/featured-image.jpg"
                alt="Signature Cocktail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;