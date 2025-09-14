import React from 'react';
import './espace.css';

function EspaceAdmin({ user }) {
  return (
    <div className="espace-container">
      <h1>Espace Administrateur ⚙️</h1>
      <p>
        Bonjour {user?.username || 'Admin'} ! Cet espace vous permet de gérer la plateforme START
        HER.
      </p>

      <ul className="espace-list">
        <li>👥 Gérer les utilisateurs (mentorées, mentors, admins)</li>
        <li>🎬 Ajouter / modifier des vidéos de formation</li>
        <li>📊 Consulter les statistiques d’utilisation</li>
        <li>🛠 Assurer la modération des contenus</li>
      </ul>
    </div>
  );
}

export default EspaceAdmin;
