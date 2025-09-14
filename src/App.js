import React, { useState } from 'react';
import RoutesConfig from './routes';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return <RoutesConfig currentUser={currentUser} setCurrentUser={setCurrentUser} />;
}

export default App;
