import React, { useState } from 'react';
import './categorie.css';

function Reconversion() {
  const [isLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const videos = [
    {
      id: 1,
      title: 'La reconversion professionnelle, c’est quoi ?',
      url: 'https://www.youtube.com/embed/hzQ4xR8pA5E'
    },
    {
      id: 2,
      title: "Les secrets d'une reconversion réussie",
      url: 'https://www.youtube.com/embed/jHNK6PD1-Tk'
    },
    {
      id: 3,
      title: 'Reconversion professionnelle après 50 ans',
      url: 'https://www.youtube.com/embed/G9TEgwqZXN4'
    },
    {
      id: 4,
      title: 'Changer de métier : par où commencer ?',
      url: 'https://www.youtube.com/watch?v=url2Sp6YKxY'
    }
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
      <h1 className="page-title">Reconversion</h1>
      <p className="page-description">
        Découvrez des vidéos pour vous accompagner dans votre reconversion professionnelle. Apprenez
        de nouvelles compétences et explorez différentes voies professionnelles.
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleVideoClick(video);
            }}
          >
            <iframe
              src={video.url}
              title={video.title}
              width="100%"
              height="350"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {!isLoggedIn && (
              <div className="video-overlay">
                <p>Connexion requise pour regarder la vidéo</p>
              </div>
            )}
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>

      {!isLoggedIn && (
        <div className="login-button-container">
          <button type="button" className="login-button" onClick={handleLoginClick}>
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
}

export default Reconversion;
