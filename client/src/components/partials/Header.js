import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from "../store/contextProvider";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const userAuth = useContext(UserContext);
    let token = JSON.parse(userAuth.token)

    return (
        <header className="headerContainer">
            <div className="headerTitle">
                <Link to={"/"}>PoopeySocial</Link>
            </div>
            <div className="headerSearchbar">
                <input type="text" placeholder="Search for people, posts, and more..." />
            </div>
            <div className="headerIcons">
                <FontAwesomeIcon id="logoutIcon" icon={faRightFromBracket} onClick={userAuth.logout} />
                <Link to={`/profile/${token.id}`}><span className="placeholder">👤</span></Link>
            </div>
        </header>
    );
}

export default Header;