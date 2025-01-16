'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component to wrap your app and provide auth state
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    // On mount, load the token from localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem('newsUser');
        setToken(storedToken);
    }, []);

    const handleLogin = (newToken) => {
        localStorage.setItem('newsUser', newToken);
        setToken(newToken);
    };

    const handleLogout = () => {
        localStorage.removeItem('newsUser');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
