import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Error404 from './components/Error404';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
