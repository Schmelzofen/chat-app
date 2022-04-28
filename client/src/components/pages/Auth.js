import LoginForm from '../partials/LoginForm';
import RegistrationForm from '../partials/RegistrationForm';
import Hero from '../partials/Hero';

import { useState } from 'react';

const Auth = () => {
    return (
        <div className="AuthContainer">
            <Hero />
            <LoginForm />
        </div>
    );
}

export default Auth;