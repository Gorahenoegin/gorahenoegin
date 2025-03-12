import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gorah-teal text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">GORAH</h3>
            <p className="text-sm text-gorah-gray">
            Un locale raffinato dove l'eleganza si fonde con l'innovazione.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-light mb-4">Orari</h3>
            <p className="text-sm text-gorah-gray">
            Mercoledi-Domenica: 18:00-02:00<br />
            Lunedi - Martedi: Chiusi
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-light mb-4">Social</h3>
            <a
              href="https://www.instagram.com/gorah_enoegin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gorah-gray hover:text-white transition-colors"
            >
              <Instagram size={20} className="mr-2" />
              Seguici su Instagram
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gorah-gray/20 text-center text-sm text-gorah-gray">
          <p>&copy; {new Date().getFullYear()} Gorah Enoegin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;