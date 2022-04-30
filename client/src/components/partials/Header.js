import { Link } from "react-router-dom";

const Header = ({ id }) => {

    console.log(id)
    return (
        <header className="headerContainer">
            <div className="headerTitle">
                <h1>PoopeySocial</h1>
            </div>
            <div className="headerSearchbar">
                <input type="text" placeholder="Search for people, posts, and more..." />
            </div>
            <div className="headerIcons">
                <Link to={`/profile/${id}`}>Link to Profile</Link>
            </div>
        </header>
    );
}

export default Header;