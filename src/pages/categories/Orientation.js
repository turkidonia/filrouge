import React, { useState } from 'react';
import './categorie.css';

const Orientation = () => {
  const [isLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/2LhoCfjm8R4', title: 'Orientation 1' },
    { id: 2, url: 'https://www.youtube.com/embed/fC9da6eqaqg', title: 'Orientation 2' },
    { id: 3, url: 'https://www.youtube.com/embed/mgmVOuLgFB0', title: 'Orientation 3' },
    { id: 4, url: 'https://www.youtube.com/embed/Eq7Xkvd4s0o', title: 'Orientation 4' }
  ];

  const handleVideoClick = (video) => {
    if (!isLoggedIn) {
      setMessage('Vous devez créer un compte ou vous connecter pour accéder à cette vidéo.');
      return;
    }
    window.open(video.url, '_blank');
  };

  const handleLoginClick = () => {
    window.location.href = '/login'; // redirection vers la page login
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Orientation</h1>
      <p className="page-description">
        Trouvez votre voie grâce à ces vidéos d’orientation. Elles vous aident à identifier vos forces,
        explorer de nouvelles opportunités et construire un projet solide.
      </p>

      {message && <p className="video-message">{message}</p>}

      <div className="video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-wrapper"
            role="button"
            tabIndex={0}
            onClick={() => handleVideoClick(video)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleVideoClick(video); }}
          >
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>

            {!isLoggedIn && (
              <div className="video-overlay">
                <p>Connexion requise pour regarder la vidéo</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {!isLoggedIn && (
        <div className="login-button-container">
          <button className="login-button" onClick={handleLoginClick}>
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
};

export default Orientation;
