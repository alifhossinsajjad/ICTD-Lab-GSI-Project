import React from 'react';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {
    // TODO: implement login logic
    const user = true; // Temporary: Simulate logged-in user

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;