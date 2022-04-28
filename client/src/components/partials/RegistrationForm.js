import { useState } from 'react';
import axios from "axios";

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            const user = {
                username,
                email,
                password: confirmPassword,
            };
            console.log(user);
            axios.post('/api/users/register', user)
                .then(res => {
                    console.log(res);
                    if (res.data.error) {
                        setError(res.data.error);
                    } else {
                        setError('');
                        setUsername('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    return (
        <div className="registrationContainer">
            <div className="registration">
                <form action="/register" method="post">
                    <input type="text" name="Username" id="username" placeholder="Username" required />
                    <input type="text" name="Email" id="email" placeholder="Email" required />
                    <input type="password" name="Password" id="password" placeholder="Password" required />
                    <input type="password" name="ConfirmPassword" id="confirmpassword" placeholder="Password Again" required />
                    <button type="submit" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
            <div className="loginButton">
                <button><a href="/login">Log into Account</a></button>
            </div>
        </div>
    );
}

export default RegistrationForm;