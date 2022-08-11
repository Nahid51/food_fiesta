import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user } = useSelector(state => ({ ...state.auth }));
    let location = useLocation();

    if (user?.result?.email) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;