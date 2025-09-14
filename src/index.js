import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // <-- utile pour navbar, modal, dropdown

import './custom.css';

import App from './App'; // On utilise App, pas RoutesConfig directement

const root = createRoot(document.getElementById('app'));

root.render(<App />);
