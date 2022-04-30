import Header from "../partials/Header";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="homeContent">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;