import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/38970123456?text=Hello! I would like to book a session at Gucci Han spa."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 group flex items-center space-x-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MessageCircle size={24} />
        <span className="text-sm font-medium">WhatsApp</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+38970123456"
        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 group flex items-center space-x-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Phone size={24} />
        <span className="text-sm font-medium">Call Now</span>
      </motion.a>

      {/* Book Now Button */}
      <motion.button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 font-semibold group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <span className="text-sm">Book Now</span>
      </motion.button>
    </div>
  );
};

export default FloatingButtons;