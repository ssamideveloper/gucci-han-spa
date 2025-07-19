import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
              A Sanctuary of
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"> Luxury</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Nestled in the heart of Skopje, Gucci Han represents the pinnacle of luxury wellness. 
                Our exquisite spa combines the ancient traditions of Turkish hammam with contemporary 
                massage techniques, creating an unparalleled experience of relaxation and rejuvenation.
              </p>
              
              <p>
                Step into our meticulously designed space where every detail has been crafted to 
                transport you to a world of tranquility. Our master therapists, trained in both 
                traditional and modern techniques, ensure each treatment is a journey of transformation.
              </p>
              
              <p>
                From the moment you enter our elegant reception to the serene afterglow of your 
                treatment, Gucci Han offers an escape from the ordinary into extraordinary luxury.
              </p>
            </div>

            <motion.div
              className="mt-10 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">5</div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-white/70">Premium Services</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3757935/pexels-photo-3757935.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury spa interior at Gucci Han hammam Skopje"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500/15 rounded-full blur-2xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;