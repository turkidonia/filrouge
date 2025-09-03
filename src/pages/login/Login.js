import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const loginURL = 'http://localhost:8081/public/v1/auth/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    const loginForm = {
      username: email,
      password
    };

    try {
      const response = await axios.post(loginURL, loginForm);
      localStorage.setItem('user', response.data.token);
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la connexion.');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Mot de passe */}
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Message d'erreur */}
        {error && <p className="error-msg">{error}</p>}

        {/* Bouton connexion */}
        <button type="submit" className="btn-login">
          Connexion
        </button>
      </form>

      <p className="register-link">
        Pas encore de compte ? <a href="/register">Inscrivez-vous</a>
      </p>
    </div>
  );
}

export default Login;
