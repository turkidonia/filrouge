import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ Import du hook
import '../login/login.css';

const apiUrl = process.env.REACT_APP_API_URL;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [isMentored, setIsMentored] = useState(true); // true = mentorée, false = mentor
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Hook React Router

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

    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    const registerForm = {
      email,
      password,
      username,
      firstname,
      lastname,
      phone,
      gender,
      isMentored
    };

    try {
      const response = await axios.post(`${apiUrl}/public/v1/auth/subscribe`, registerForm);

      setSuccess(response.data.message || 'Inscription réussie 🎉');

      // Redirection vers login avec React Router
      navigate('/login');

      // Reset form
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
            placeholder="Choisissez un mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirmation */}
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

        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username :</label>
          <input
            id="username"
            type="text"
            placeholder="Choisissez un username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Nom */}
        <div className="form-group">
          <label htmlFor="lastname">Nom :</label>
          <input
            id="lastname"
            type="text"
            placeholder="Nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        {/* Prénom */}
        <div className="form-group">
          <label htmlFor="firstname">Prénom :</label>
          <input
            id="firstname"
            type="text"
            placeholder="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>

        {/* Téléphone */}
        <div className="form-group">
          <label htmlFor="phone">Téléphone :</label>
          <input
            id="phone"
            type="text"
            placeholder="Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Genre */}
        <div className="form-group">
          <p>Je suis :</p>
          <div className="radio-group">
            <input
              id="homme"
              type="radio"
              name="gender"
              value="M"
              checked={gender === 'M'}
              onChange={() => setGender('M')}
            />
            <label htmlFor="homme">Homme</label>

            <input
              id="femme"
              type="radio"
              name="gender"
              value="F"
              checked={gender === 'F'}
              onChange={() => setGender('F')}
            />
            <label htmlFor="femme">Femme</label>
          </div>
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
