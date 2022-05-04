import SideNavigation from "../partials/SideNavigation";
import Feed from "../partials/Feed";
import SelectedFriend from "../partials/SelectedFriend"
const Home = () => {

    return (
        <div className="homeContainer">
            <SideNavigation />
            <Feed />
            <SelectedFriend />
        </div>
    );
}

export default Home;