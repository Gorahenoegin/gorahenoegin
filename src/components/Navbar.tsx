import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: 'https://gorah.vercel.app/', external: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className={`text-2xl font-light tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-gorah-teal' : 'text-white'
              }`}
            >
              GORAH
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-sm tracking-wider transition-all duration-300 hover:opacity-100 ${
                      isScrolled
                        ? 'text-gorah-gray hover:text-gorah-teal'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`relative text-sm tracking-wider transition-all duration-300 hover:opacity-100 ${
                      isScrolled
                        ? location.pathname === link.path
                          ? 'text-gorah-teal'
                          : 'text-gorah-gray hover:text-gorah-teal'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-0.5 transform origin-left transition-transform duration-300 ${
                        location.pathname === link.path
                          ? 'scale-x-100 bg-gorah-teal'
                          : 'scale-x-0 bg-current'
                      }`}
                    />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gorah-teal hover:bg-gorah-teal/10'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mb-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-6 py-3 text-sm transition-colors duration-300 ${
                          'text-gorah-gray hover:text-gorah-teal hover:bg-gorah-teal/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`block px-6 py-3 text-sm transition-colors duration-300 ${
                          location.pathname === link.path
                            ? 'text-gorah-teal bg-gorah-teal/5'
                            : 'text-gorah-gray hover:text-gorah-teal hover:bg-gorah-teal/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;