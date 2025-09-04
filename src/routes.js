import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Error404 from './components/Error404';
import Header from './components/header/navdisconnected';
import Footer from './components/footer';
import Home from './pages/home/Home';
import Mentorat from './pages/mentorat';
import Formation from './pages/categories/Formation';
import Insertion from './pages/categories/Insertion';
import Orientation from './pages/categories/Orientation';
import Reconversion from './pages/categories/Reconversion';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contact from './components/contact';
// Nouvelles pages légales
import Confidentialite from './pages/legal/Confidentialite';
import Conditions from './pages/legal/Conditions';

import EspaceMentoree from './pages/espace/EspaceMentoree';
import EspaceMentor from './pages/espace/EspaceMentor';
import EspaceAdmin from './pages/espace/EspaceAdmin';

const RoutesConfig = ({ currentUser, setCurrentUser }) => {
  // fonction qui retourne l’espace en fonction de l’utilisateur connecté
  const getUserSpace = () => {
    if (!currentUser) return <Navigate to="/login" replace />;
    if (currentUser.isAdmin) return <EspaceAdmin user={currentUser} />;
    if (currentUser.isMentored) return <EspaceMentoree user={currentUser} />;
    return <EspaceMentor user={currentUser} />;
  };

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/mentorat" element={<Mentorat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/conditions" element={<Conditions />} />

        {/* Catégories publiques (avec restriction interne si besoin) */}
        <Route path="/formation" element={<Formation user={currentUser} />} />
        <Route path="/orientation" element={<Orientation user={currentUser} />} />
        <Route path="/reconversion" element={<Reconversion user={currentUser} />} />
        <Route path="/insertion" element={<Insertion user={currentUser} />} />

        {/* Auth */}
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />

        {/* Espaces privés */}
        <Route path="/espace" element={getUserSpace()} />

        {/* Erreur */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RoutesConfig;
