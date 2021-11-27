import React from 'react';
import { render } from 'react-dom';

import './index.scss';

// Routes
import RoutesConfig from './routes-config';

const App = () => (
  <RoutesConfig />
);

render(<App />, document.getElementById('app'));
