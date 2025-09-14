import React from 'react';
import { Link } from 'react-router-dom';
import './espace.css';

function EspaceMentoree({ user }) {
  return (
    <div className="espace-container">
      <h1>Bienvenue {user?.username || 'Mentorée'} 🎉</h1>
      <p>
        Vous avez accès à toutes les vidéos de formation, d’orientation, d’insertion professionnelle
        et de reconversion.
      </p>

      <div className="espace-links">
        <Link to="/formation" className="espace-btn">
          📚 Formations
        </Link>
        <Link to="/orientation" className="espace-btn">
          🎯 Orientation
        </Link>
        <Link to="/insertion" className="espace-btn">
          💼 Insertion
        </Link>
        <Link to="/reconversion" className="espace-btn">
          🔄 Reconversion
        </Link>
      </div>
    </div>
  );
}

export default EspaceMentoree;
