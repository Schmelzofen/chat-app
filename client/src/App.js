import './App.scss';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import UserContext from './components/store/contextProvider';
import { useContext } from 'react';

function App() {
  const userAuth = useContext(UserContext);

  console.log(userAuth.token);

  return (
    <div className="App">
      {!userAuth.token ? <Auth /> :
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      }
    </div>
  );
}

export default App;
