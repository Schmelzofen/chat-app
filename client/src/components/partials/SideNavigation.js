import { Link } from "react-router-dom";

const SideNavigation = () => {
    return (
        <aside className="linkContainerAside">
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/feed"}>Feed</Link></li>
                    <li><a href="#">Messages</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideNavigation;