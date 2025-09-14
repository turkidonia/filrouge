import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 50);
    }
  }, []);

  const handleConsent = (value) => {
    Cookies.set('cookieConsent', value, { expires: 365 });
    setAnimate(false);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`cookie-banner shadow-lg d-flex flex-column flex-md-row justify-content-between align-items-center px-3 py-3 ${
        animate ? 'show' : ''
      }`}
      style={{
        position: 'fixed',
        bottom: '-100px',
        left: 0,
        width: '100%',
        backgroundColor: '#FF7E33',
        color: '#F4F4F4',
        fontFamily: 'Raleway, sans-serif',
        transition: 'bottom 0.3s ease-in-out',
        zIndex: 9999
      }}
    >
      {/* Texte */}
      <p className="mb-2 mb-md-0 small text-center text-md-start">
        Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez accepter ou
        refuser.
      </p>

      {/* Boutons */}
      <div className="d-flex justify-content-center justify-content-md-end">
        <button
          type="button"
          className="btn btn-sm me-2"
          style={{
            backgroundColor: '#000000',
            color: '#F4F4F4',
            borderRadius: '8px',
            fontFamily: "'Old Standard TT', serif"
          }}
          onClick={() => handleConsent('accepted')}
        >
          Accepter
        </button>
        <button
          type="button"
          className="btn btn-sm"
          style={{
            backgroundColor: '#FFD8C2',
            color: '#000000',
            borderRadius: '8px',
            fontFamily: "'Old Standard TT', serif"
          }}
          onClick={() => handleConsent('rejected')}
        >
          Refuser
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
