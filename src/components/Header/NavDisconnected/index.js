import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
<header>
  <nav>
      <h1>Mentorat pour Femmes en Reconversion</h1>
      <ul>
        <li><Link to="/home">Accueil</Link></li>
        <li><Link to="/apropos">Apropos</Link></li>
        <li><Link to="/mentorat">Mentorat</Link></li>
        <li><Link to="/resources">Ressources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);
export default Header;
