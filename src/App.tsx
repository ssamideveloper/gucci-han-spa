import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SEO from './components/SEO';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Navigation from './components/Navigation';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <HelmetProvider>
      <div className="App overflow-x-hidden max-w-full">
        <SEO />
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <FloatingButtons />
      </div>
    </HelmetProvider>
  );
}

export default App;