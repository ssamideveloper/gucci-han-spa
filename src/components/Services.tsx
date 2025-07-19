import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Star, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      title: "Traditional Hammam",
      description: "Authentic Turkish bath experience with exfoliation and relaxation in our heated marble chambers. Includes steam, scrubbing, and foam massage.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "90 minutes",
      price: "From €80",
      features: ["Steam therapy", "Body scrubbing", "Foam massage", "Relaxation time"]
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting muscle tension and stress relief using premium organic oils. Perfect for athletes and stress relief.",
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "60-90 minutes",
      price: "From €60",
      features: ["Muscle tension relief", "Organic oils", "Stress reduction", "Pain management"]
    },
    {
      title: "Hot Stone Therapy",
      description: "Relaxing treatment using heated volcanic stones to melt away tension and restore balance. Combines heat therapy with massage.",
      image: "https://images.pexels.com/photos/3757934/pexels-photo-3757934.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "75 minutes",
      price: "From €70",
      features: ["Volcanic stones", "Heat therapy", "Balance restoration", "Deep relaxation"]
    },
    {
      title: "Couples Hammam",
      description: "Shared luxury experience in our private couples suite with champagne and premium amenities. Perfect for romantic occasions.",
      image: "https://images.pexels.com/photos/3757941/pexels-photo-3757941.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "120 minutes",
      price: "From €150",
      features: ["Private suite", "Champagne service", "Couples treatment", "Premium amenities"]
    },
    {
      title: "Aromatherapy Massage",
      description: "Gentle massage with carefully selected essential oils to promote deep relaxation and wellness. Customized oil blends available.",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "60 minutes",
      price: "From €55",
      features: ["Essential oils", "Custom blends", "Wellness focus", "Gentle technique"]
    },
    {
      title: "VIP Spa Package",
      description: "Complete luxury experience including hammam, massage, facial, and exclusive amenities. Our most comprehensive treatment.",
      image: "https://images.pexels.com/photos/3757933/pexels-photo-3757933.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 hours",
      price: "From €200",
      features: ["Full spa access", "Multiple treatments", "Exclusive amenities", "VIP service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden max-w-full" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our Premium 
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of luxury treatments, each designed to 
            provide the ultimate relaxation and wellness experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-400/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-400/30"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} service at Gucci Han luxury spa in Skopje`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {service.price}
                </div>

                {/* Rating Stars */}
                <div className="absolute top-4 left-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-amber-400 text-sm font-medium">
                    <Clock size={16} className="mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Includes:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-white/60">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-400/25 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Book This Service</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-white/70 mb-6">
              Our expert therapists will help you choose the perfect treatment based on your needs and preferences.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Get Personal Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;