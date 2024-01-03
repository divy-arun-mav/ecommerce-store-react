import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {

    const receivedData = localStorage.getItem('user');
    console.log(receivedData, "receivedData");
    if (receivedData) {
        return <Outlet />;
    } else {
        return <Navigate to="/" replace />;
    }
}

export default PrivateRoute;
