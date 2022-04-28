import { useEffect, useState } from 'react';
import './App.scss';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';
import authService from './components/services/auth.service';

function App() {
  // get current user from localstorage
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setCurrentUser(authService.getCurrentUser());
  }, []);

  return (
    <div className="App">
      {!currentUser ? <Auth /> : <Home />}
    </div>
  );
}

export default App;
