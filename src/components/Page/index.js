import React from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Apropos from '../Apropos';
import './style.scss';
import Contact from '../Contact';

const Page = ({ children }) => (
  <>
   <header>
    <Navigation />
   </header>
   <Home />
   <Apropos />
   <Contact />

   <Footer />
  </>
);

export default Page;
