import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/logo.png';

const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo du site" className="logo"/>
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/home">Accueil</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><Link to="/mentorat">Mentorat</Link></li>
        <li><a href="/testimonials">Temoignages</a></li>
      </ul>

      <div className="navbar-search">
        <input type="text" placeholder="Recherche..." />
      </div>

      <div className="navbar-buttons">
        <button className="btn-login"><Link to="/login">Se connecter</Link></button>
        <button className="btn-contact"><Link to="/contact">Contact</Link></button>
      </div>
    </nav>);
export default Navbar;
