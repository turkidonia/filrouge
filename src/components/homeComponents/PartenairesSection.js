import React from 'react';
import '../../pages/home/home.css';

// Import des logos depuis le dossier assets
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';

const logos = [logo1, logo2, logo3];

function PartenairesSection() {
  return (
    <section className="partenaires">
      <h2>Nos partenaires</h2>
      <div className="partenaires-logos">
        {logos.map((logo) => (
          <img key={logo} src={logo} alt="Partenaire" />
        ))}
      </div>
    </section>
  );
}

export default PartenairesSection;
