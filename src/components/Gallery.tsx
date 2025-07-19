import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Luxury hammam interior design at Gucci Han Skopje",
      category: "Interior"
    },
    {
      src: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional massage therapy session in Skopje",
      category: "Massage"
    },
    {
      src: "https://images.pexels.com/photos/3757935/pexels-photo-3757935.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Relaxing spa environment with candles and towels",
      category: "Ambiance"
    },
    {
      src: "https://images.pexels.com/photos/3757934/pexels-photo-3757934.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hot stone therapy treatment setup",
      category: "Treatment"
    },
    {
      src: "https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Couples spa treatment room luxury design",
      category: "Couples"
    },
    {
      src: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Aromatherapy oils and spa accessories",
      category: "Aromatherapy"
    },
    {
      src: "https://images.pexels.com/photos/3757933/pexels-photo-3757933.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Premium spa facilities and luxury amenities",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/3757932/pexels-photo-3757932.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Traditional Turkish hammam marble design",
      category: "Hammam"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-full overflow-hidden">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"> Luxury</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our exquisite spa facilities and discover the 
            serene environment that awaits you at Gucci Han.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-5xl max-h-[90vh] mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery image enlarged view"
                  className="w-full h-full object-contain rounded-xl"
                />
                
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-800 transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;