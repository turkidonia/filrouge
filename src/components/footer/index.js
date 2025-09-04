import React, { useEffect } from 'react';
import logo from '../../assets/image.png';
import SAP from '../../assets/logo3.png';
import desCodeuses from '../../assets/logo1.png';
import franceTravail from '../../assets/logo2.png';

import './footer.css';

const Footer = () => {
  useEffect(() => {
    const logos = document.querySelectorAll('.partners-logos img');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animation une seule fois
          }
        });
      },
      { threshold: 0.2 } // déclenchement quand 20% du logo est visible
    );

    logos.forEach((logo) => observer.observe(logo));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo du site" className="logo" />
        </div>

        <div className="footer-info">
          <h3>START HER - Mentorat pour les femmes dans la tech</h3>
          <p>
            Nous sommes une plateforme de mentorat dédiée à l&apos;accompagnement des femmes
            dans leur parcours de reconversion professionnelle.
          </p>
          <p>Rejoignez-nous pour accéder à des ressources éducatives, des témoignages et plus encore.</p>
        </div>

        <div className="footer-partners">
          <h4>Nos Partenaires</h4>
          <div className="partners-logos">
            <a href="https://www.sap.com/france/index.html" target="_blank" rel="noopener noreferrer">
              <img src={SAP} alt="SAP" />
            </a>
            <a href="https://descodeuses.org/" target="_blank" rel="noopener noreferrer">
              <img src={desCodeuses} alt="DesCodeuses" />
            </a>
            <a href="https://www.francetravail.fr/" target="_blank" rel="noopener noreferrer">
              <img src={franceTravail} alt="France Travail" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Liens Utiles</h4>
          <ul>
            <li><a href="/confidentialite">Politique de confidentialité</a></li>
            <li><a href="/conditions">Conditions d&apos;utilisation</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} START HER. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
