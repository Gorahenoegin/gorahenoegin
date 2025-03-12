import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="Gorah Enoegin Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="heading mb-4">La Nostra Storia</h1>
            <p className="subheading">Un viaggio di passione e innovazione</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading mb-6">L'Inizio</h2>
              <p className="text-gorah-gray mb-6">
                Fondata nel 2024, Gorah Enoegin è nata dalla visione di creare uno spazio dove la mixologia innovativa si unisce a un'esperienza gastronomica raffinata, il tutto avvolto in un'atmosfera sofisticata.

I nostri fondatori hanno voluto ridefinire l'arte del bere e del mangiare, combinando cocktail d'autore con una cucina ricercata, pensata per esaltare ogni sorso.
Ogni dettaglio del nostro locale è stato accuratamente curato per offrire un ambiente che ispiri la scoperta, la conversazione e momenti indimenticabili.
              </p>
             
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square"
            >
              <img
                src="/images/about-story.jpg"
                alt="Gorah Enoegin Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-gorah-teal text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading mb-8">La Nostra Filosofia</h2>
            <p className="text-gorah-gray text-lg mb-12">
              Presso Gorah Enoegin, crediamo nell'arte di creare momenti. Ogni drink che serviamo, 
              ogni dettaglio che curiamo e ogni esperienza che creiamo è progettata per elevare il 
              ordinario all'eccezionale.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-xl font-light mb-4">Qualità</h3>
              <p className="text-gorah-gray">
                Selezioniamo solo gli ingredienti e i distillati più pregiati per garantire un'eccellenza assoluta in ogni creazione.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-light mb-4">Innovazione</h3>
              <p className="text-gorah-gray">
                I nostri mixologist superano ogni limite per offrire esperienze di degustazione uniche e memorabili.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-light mb-4">Atmosfera</h3>
              <p className="text-gorah-gray">
                Ogni dettaglio del nostro spazio è pensato per creare un'atmosfera di raffinata accoglienza.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;