import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gucci Han",
    "description": "Luxury Hammam & Massage in Skopje",
    "url": "https://guccihan.com",
    "telephone": "+389-70-123-456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boulevard Partizanski Odredi 123",
      "addressLocality": "Skopje",
      "addressCountry": "MK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.9973,
      "longitude": 21.4280
    },
    "openingHours": "Mo-Su 09:00-22:00",
    "priceRange": "$$$$",
    "image": "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
  };

  return (
    <Helmet>
      <title>Gucci Han | Luxury Hammam & Massage in Skopje</title>
      <meta name="description" content="Discover Gucci Han – Skopje's most luxurious hammam and massage spa. Book your experience today." />
      <meta name="keywords" content="Gucci Han, Hammam Skopje, Massage Skopje, Luxury spa Skopje, Turkish bath, Relaxation" />
      <meta name="author" content="Gucci Han Spa" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Gucci Han | Luxury Hammam & Massage in Skopje" />
      <meta property="og:description" content="Discover Skopje's most luxurious hammam and massage experience at Gucci Han." />
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://guccihan.com" />
      <meta property="og:image" content="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gucci Han | Luxury Hammam & Massage in Skopje" />
      <meta name="twitter:description" content="Discover Skopje's most luxurious hammam and massage experience." />
      <meta name="twitter:image" content="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <link rel="canonical" href="https://guccihan.com" />
    </Helmet>
  );
};

export default SEO;