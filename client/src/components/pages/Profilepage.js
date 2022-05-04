import ChangeCredentials from "../partials/ChangeCredentials";
import ProfilePicture from "../partials/ProfilePicture";
import UserContext from '../../components/store/contextProvider';
import { useContext } from 'react';

const Profilepage = () => {
    const userAuth = useContext(UserContext);
    const parsedToken = JSON.parse(userAuth.token)
    const userView = window.location.pathname.includes(parsedToken.id)

    return (
        <>
            {userView ? (
                <div className="profilePageContainer">
                    <div className="profileHeader">
                        <h1>Hey, this is your profile page. 👋</h1>
                    </div>
                    <ProfilePicture />
                    <ChangeCredentials />
                </div>
            ) : (
                <div className="profilePageContainer">
                    <div className="profileHeader">
                        <h1>Hey, welcome to my page! 😊</h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default Profilepage;