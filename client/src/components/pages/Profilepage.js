import ChangeCredentials from "../partials/ChangeCredentials";
import ProfilePicture from "../partials/ProfilePicture";

const Profilepage = () => {
    return (
        <div className="profilePageContainer">
            <div className="profileHeader">
                <h1>Hey, this is your profile page. 👋</h1>
            </div>
            <ProfilePicture />
            <ChangeCredentials />
        </div>
    );
}

export default Profilepage;