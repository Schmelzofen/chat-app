import { useState } from 'react';
/* comment */
const ChangeCredentials = () => {
    const [showPw, setShowPw] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    return (
        <div className="changeContainer">
            <div className="changePassword">
                <button onClick={() => setShowPw(!showPw)}>Change Password</button>
                <form style={!showPw ? { display: "none" } : { display: "block" }}>
                    <input type="password" placeholder="Current Password" />
                    <input type="password" placeholder="New Password" />
                    <input type="password" placeholder="Confirm New Password" />
                    <button>Change Password</button>
                </form>
            </div>
            <div className="changeEmail">
                <button onClick={() => setShowEmail(!showEmail)}>Change Email</button>
                <form style={!showEmail ? { display: "none" } : { display: "block" }}>
                    <input type="email" placeholder="Current Email" />
                    <input type="email" placeholder="New Email" />
                    <button>Change Email</button>
                </form>
            </div>
        </div>
    );
}

export default ChangeCredentials;