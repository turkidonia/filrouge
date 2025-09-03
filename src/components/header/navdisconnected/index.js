import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaUser } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../../../assets/image.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen); // fonction manquante

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen || servicesOpen) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, servicesOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>

      <ul className="navbar-center">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/mentorat">Mentorat</Link></li>

        <li
          className="dropdown-services"
          ref={servicesRef}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <span className="services-title">
            Nos services <FiChevronDown className="icon-chevron" />
          </span>
          {servicesOpen && (
            <ul className="dropdown-services-menu">
              <li><Link to="/formation">Formation</Link></li>
              <li><Link to="/orientation">Orientation</Link></li>
              <li><Link to="/reconversion">Reconversion</Link></li>
              <li><Link to="/insertion">Insertion</Link></li>
            </ul>
          )}
        </li>
      </ul>

      <div className="navbar-separator"></div>

      <div className="navbar-right" ref={menuRef}>
        <button className="btn-user" onClick={toggleMenu}>
          <FaUser className="icon-user" />
          <FiChevronDown className="icon-chevron" />
        </button>
        {menuOpen && (
          <div className="dropdown-menu">
            <Link to="/login" className="dropdown-item">Connexion</Link>
            <Link to="/register" className="dropdown-item">Inscription</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
