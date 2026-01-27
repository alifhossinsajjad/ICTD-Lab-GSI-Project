import React, { createContext, useState, useEffect } from "react";
import AuthService from "../services/auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = AuthService.getCurrentUser();
            if (currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    const login = async (email, password) => {
        const data = await AuthService.login(email, password);
        setUser(data);
        return data;
    };

    const register = async (email, password) => {
        return await AuthService.register(email, password);
    };

    const verifyEmail = async (email) => {
        return await AuthService.verifyEmail(email);
    };

    const verifyEmailCode = async (email, code) => {
        return await AuthService.verifyEmailCode(email, code);
    };

    const logout = () => {
        AuthService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                verifyEmail,
                verifyEmailCode,
                logout,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};
