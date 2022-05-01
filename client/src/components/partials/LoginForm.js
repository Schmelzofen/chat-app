import { useContext, useState } from "react";
import axios from "axios";
import authService from "../services/auth.service";
import UserContext from "../store/contextProvider";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const authContext = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        } else {
            setError('');
            const user = {
                email,
                password,
            };
            console.log("LOGGING IN", user);
            authContext.login(user)
            window.location.reload();
        }
    }

    return (
        <div className="loginContainer">
            <div className="login">
                <form>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Log In</button>
                </form>
            </div>
            <div className="forgotPassword">
                <a href="/forgotpassword">Forgot Password?</a>
            </div>
        </div>
    );
}
export default LoginForm;

// Loginform 
