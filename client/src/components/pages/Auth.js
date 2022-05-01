import LoginForm from '../partials/LoginForm';
import RegistrationForm from '../partials/RegistrationForm';
import Hero from '../partials/Hero';

import { useState } from 'react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="authFlex">
            <div className="AuthContainer">
                <Hero />
                <div className="formContainer">
                    {isLogin ? <LoginForm /> : <RegistrationForm />}
                    <div className="createAccount">
                        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Create a New Account" : "Log into Account"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;