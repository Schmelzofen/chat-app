import { useContext, useState } from 'react';
import axios from "axios";
import UserContext from '../store/contextProvider';

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const authContext = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            const user = {
                username,
                email,
                password
            };
            console.log("USER", user);
            authContext.register(user);
            window.location.reload();
        }
    }

    return (
        <div className="registrationContainer">
            <div className="registration">
                <form>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;