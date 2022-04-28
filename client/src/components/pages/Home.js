import LoginForm from '../partials/LoginForm';
import RegistrationForm from '../partials/RegistrationForm';
import Hero from '../partials/Hero';

import { useState } from 'react';

const Home = () => {


    return (
        <div className="homeContainer">
            <Hero />
            <LoginForm />
        </div>
    );
}

export default Home;