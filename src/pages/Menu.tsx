import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const drinks = [
    {
      name: "The Gorah Signature",
      description: "A sophisticated blend of premium gin, house-made botanical syrup, and citrus",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
    },
    {
      name: "Emerald Mist",
      description: "Japanese whisky, green tea cordial, and aromatic bitters",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80"
    },
    {
      name: "Velvet Night",
      description: "Dark rum, coffee liqueur, and vanilla-infused cream",
      image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&q=80"
    },
    {
      name: "Azure Dreams",
      description: "Artisanal vodka, blue curaçao, and elderflower essence",
      image: "https://images.unsplash.com/photo-1549746423-e5fe9cafded8?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80"
            alt="Cocktail Bar"
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
            <h1 className="heading mb-4">Il nostro menu</h1>
            <p className="subheading">Realizzato con passione e precisione.</p>
          </motion.div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="heading mb-4">Esclusive</h2>
            <p className="subheading">Creazioni raffinate preparate con cura</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {drinks.map((drink, index) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">{drink.name}</h3>
                    <p className="text-gorah-gray text-sm">{drink.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;