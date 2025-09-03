import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

const RoutesConfig = ({ currentUser, setCurrentUser }) => (
  <Router>
    <Header currentUser={currentUser} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentorat" element={<Mentorat />} />

      {/* Pages restreintes aux utilisateurs connectés */}
      <Route path="/formation" element={<Formation user={currentUser} />} />
      <Route path="/orientation" element={<Orientation user={currentUser} />} />
      <Route path="/reconversion" element={<Reconversion user={currentUser} />} />
      <Route path="/insertion" element={<Insertion user={currentUser} />} />

      {/* Connexion / Inscription */}
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
      <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </Router>
);

export default RoutesConfig;
