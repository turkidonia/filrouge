import React, { useState } from 'react';

import Navbar from './components/header/navdisconnected';
import Home from './pages/home/Home';
import Mentorat from './pages/mentorat';
import Formation from './pages/categories/Formation';
import Insertion from './pages/categories/Insertion';
import Orientation from './pages/categories/Orientation';
import Reconversion from './pages/categories/Reconversion';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contact from './components/contact';
import Footer from './components/footer';

import './style.scss';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null); // null si personne n'est connecté

  return (
    <>
      <header>
        <Navbar currentUser={currentUser} />
      </header>
      <Home />
      <Mentorat />
      <Formation user={currentUser} />
      <Orientation user={currentUser} />
      <Reconversion user={currentUser} />
      <Insertion user={currentUser} />
      <Login setCurrentUser={setCurrentUser} />
      <Register setCurrentUser={setCurrentUser} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
