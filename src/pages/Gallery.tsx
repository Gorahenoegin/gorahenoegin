import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: "/images/drink1.jpg",
      caption: "Croccantissimo"
    },
    {
      url: "/images/food1.jpg",
      caption: "Boulettes di Stagione"
    },
    {
      url: "/images/drink2.jpg",
      caption: "Marilyn Monroe"
    },
    {
      url: "/images/food2.jpg",
      caption: "Tagliata di tonno in crosta di pistacchio"
    },
    {
      url: "/images/drink3.jpg",
      caption: "Limoncello Spritz 2.0"
    },
    {
      url: "/images/food3.jpg",
      caption: "Minibun"
    }
  ];

  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading mb-4">Galleria</h1>
            <p className="subheading">I nostri momenti più belli</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-light tracking-wider">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;