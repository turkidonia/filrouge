import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';

import Home from './components/Home';
import Error404 from './components/Error404';
import Header from './components/Header/NavDisconnected';
import Apropos from './components/Apropos';
import Mentorat from './components/Mentorat';
import Contact from './components/Contact';
import Footer from './components/Footer';

const RoutesConfig = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/mentorat" element={<Mentorat />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </Router>
);
export default RoutesConfig;
