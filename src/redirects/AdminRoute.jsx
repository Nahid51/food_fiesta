import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const AdminRoute = ({ children }) => {
    const { user, loading } = useSelector(state => ({ ...state.auth }));
    let location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="warning" />
    }

    if (!user?.result?.role) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;

};

export default AdminRoute;