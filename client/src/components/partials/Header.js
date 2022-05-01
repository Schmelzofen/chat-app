import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from "../store/contextProvider";

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
                <Link to={`/profile/${token.id}`}>Link to Profile</Link>
            </div>
        </header>
    );
}

export default Header;