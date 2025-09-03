import React, { useState } from 'react';
import './categorie.css';

const Insertion = () => {
  const [isLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/48rz8udZBmQ', title: 'Insertion 1' },
    { id: 2, url: 'https://www.youtube.com/embed/7sxpKhIbr0E', title: 'Insertion 2' },
    { id: 3, url: 'https://www.youtube.com/embed/MY0UBGX2FtA', title: 'Insertion 3' },
    { id: 4, url: 'https://www.youtube.com/embed/Jj7HxoJ8b6U', title: 'Insertion 4' }
  ];

  const handleVideoClick = (video) => {
    if (!isLoggedIn) {
      setMessage('Vous devez créer un compte ou vous connecter pour accéder à cette vidéo.');
      return;
    }
    window.open(video.url, '_blank');
  };

  const handleLoginClick = () => {
    window.location.href = '/login'; // Redirection vers la page login
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Insertion professionnelle</h1>
      <p className="page-description">
        Nos vidéos sur l’insertion professionnelle vous guident pour intégrer efficacement
        le marché du travail après une formation ou une reconversion.
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

export default Insertion;
