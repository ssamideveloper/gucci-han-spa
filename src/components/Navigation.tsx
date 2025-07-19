import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4 max-w-full">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-400">
            Gucci Han
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-white hover:text-amber-400 transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => scrollTo('contact')}
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 sm:px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:text-base"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;