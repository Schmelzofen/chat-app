// user context provider
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

import jwt_decode from "jwt-decode";
import { useHttpClient } from '../hooks/http-hook';


// creating a context
const UserContext = React.createContext({
    token: () => "",
    login: () => { },
    logout: () => { },
    register: () => { },
});

// using the contextProvider
export const UserContextProvider = (props) => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
        }
    }, []);

    const login = async (data) => {
        try {
            const responseData = await sendRequest(
                "http://localhost:8000/api/login",
                "POST",
                JSON.stringify(data),
                { "Content-Type": "application/json" }
            );
            if (responseData && !error) {
                console.log("responseData", responseData);
                const encodedToken = jwt_decode(responseData.accessToken);
                setToken(encodedToken);
                localStorage.setItem("token", JSON.stringify(encodedToken));
                navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
    }

    const register = async (data) => {
        console.log("going to register user", data)
        try {
            const responseData = await sendRequest(
                "http://localhost:8000/api/register",
                "POST",
                JSON.stringify(data),
                { "Content-Type": "application/json" }
            );
            if (responseData && !error) {
                console.log("responseData", responseData);
                const encodedToken = jwt_decode(responseData.accessToken);
                setToken(encodedToken);
                localStorage.setItem("token", JSON.stringify(encodedToken));
                navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
    }

    const logout = (data) => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/");
    }

    const userData = {
        login,
        logout,
        register,
        token,
        isLoading,
        error,
    }

    return (
        <UserContext.Provider value={userData}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;