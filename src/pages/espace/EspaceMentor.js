import React from 'react';
import './espace.css';

const EspaceMentor = ({ user }) => (
    <div className="espace-container">
      <h1>Espace Mentor 👩‍🏫</h1>
      <p>
        Bienvenue {user?.username || 'Mentor'} !
        Ici, vous pouvez accompagner vos mentorées en partageant vos conseils et
        vos expériences.
      </p>

      <ul className="espace-list">
        <li>📌 Répondre aux messages de vos mentorées</li>
        <li>🎥 Proposer des vidéos ou ressources pédagogiques</li>
        <li>📝 Suivre la progression de vos mentorées</li>
      </ul>
    </div>
);

export default EspaceMentor;
