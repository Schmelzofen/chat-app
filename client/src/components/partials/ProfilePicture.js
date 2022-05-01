import { useContext } from 'react';
import UserContext from "../store/contextProvider";

const ProfilePicture = () => {
    const userAuth = useContext(UserContext);
    let parsedToken = JSON.parse(userAuth.token);
    console.log(parsedToken.image);
    return (
        <div className="profilePictureContainer">
            {parsedToken.image ? (
                <div className="profilePicture">
                    <img src={parsedToken.image} alt="profile" />
                    <h2>This is you!</h2>
                </div>
            ) : (
                <div className="profilePicture">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt="profile" />
                    <h2>Seems like you don't have a profile picture, how 'bout uploading one? 😊</h2>
                </div>
            )}
        </div>
    );
}

export default ProfilePicture;