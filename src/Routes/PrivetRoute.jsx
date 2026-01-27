import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { LuLoader } from "react-icons/lu";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-emerald-950">
                <span className="text-emerald-400 animate-spin text-4xl">
                    <LuLoader />
                </span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;