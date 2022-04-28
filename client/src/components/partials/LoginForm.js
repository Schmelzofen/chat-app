import { useState } from "react";
import axios from "axios";
import authService from "../services/auth.service";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
            console.log(user);
            authService.login(user.email, user.password)
            window.location.reload();
        }
    }

    return (
        <div className="loginContainer">
            <div className="login">
                <form>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Log In</button>
                </form>
            </div>
            <div className="forgotPassword">
                <a href="/forgotpassword">Forgot Password?</a>
            </div>
            <div className="createAccount">
                <button><a href="/register">Create a New Account</a></button>
            </div>
        </div>
    );
}
export default LoginForm;

// Loginform 
