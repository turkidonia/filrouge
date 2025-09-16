import React, { useState } from 'react';
import axios from 'axios';
import '../login/login.css';

const apiUrl = process.env.REACT_APP_API_URL;
//const loginURL = 'http://localhost:8081/public/v1/auth/register';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMentored, setIsMentored] = useState(true); // true = mentorée, false = mentor
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    const registerForm = {
      email,
      password,
      isMentored
    };

    try {
      const response = await axios.post(`${apiUrl}/public/v1/auth/register`, registerForm);

      setSuccess(
        response.data.message || 'Inscription réussie 🎉 Vous pouvez maintenant vous connecter.'
      );
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsMentored(true);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Impossible de créer le compte.');
      } else {
        setError('Erreur serveur. Réessayez plus tard.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegister}>
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

        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            placeholder="Choisissez un mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <p>Je suis :</p>
          <div className="radio-group">
            <input
              type="radio"
              id="mentor"
              name="isMentored"
              value="false"
              checked={isMentored === false}
              onChange={() => setIsMentored(false)}
            />
            <label htmlFor="mentor">Mentor</label>

            <input
              type="radio"
              id="mentoree"
              name="isMentored"
              value="true"
              checked={isMentored === true}
              onChange={() => setIsMentored(true)}
            />
            <label htmlFor="mentoree">Mentorée</label>
          </div>
        </div>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <button type="submit" className="btn-login">
          S&apos;inscrire
        </button>
      </form>
    </div>
  );
}

export default Register;
