import './App.scss';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';

import Header from "./components/partials/Header";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import UserContext from './components/store/contextProvider';
import { useContext } from 'react';

function App() {
  const userAuth = useContext(UserContext);

  return (
    <div className="App">
      {!userAuth.token ? <Auth /> :
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
