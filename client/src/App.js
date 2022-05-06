import './App.scss';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';
import Profilepage from "./components/pages/Profilepage";

import Header from "./components/partials/Header";
import SideNavigation from "./components/partials/SideNavigation";
import FeedCont from './components/pages/FeedCont';

import {
  Routes,
  Route,
} from "react-router-dom";

import UserContext from './components/store/contextProvider';
import { useContext } from 'react';
import Messages from './components/partials/Messages';

function App() {
  const userAuth = useContext(UserContext);

  return (
    <div className="App">
      {!userAuth.token ? <Auth /> :
        <>
          <Header />
          <SideNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<FeedCont />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile/:id" element={<Profilepage />} />
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
