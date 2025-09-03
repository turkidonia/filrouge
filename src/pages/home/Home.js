import React from 'react';
import HeroSection from '../../components/homeComponents/HeroSection';
import TemoinSection from '../../components/homeComponents/TemoinSection';
import ContactSection from '../../components/homeComponents/ContactSection';
import PartenairesSection from '../../components/homeComponents/PartenairesSection';
import './home.css';

const Home = () => (
    <div>
      {/* Bloc 1 : Hero */}
      <HeroSection />

      {/* Bloc 2 : Témoignages */}
      <TemoinSection />

      {/* Bloc 3 : Contact */}
      <ContactSection />

      {/* Bloc 4 : Partenaires */}
      <PartenairesSection />
    </div>
);

export default Home;
