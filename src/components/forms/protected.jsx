import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ActiveContext } from '../../App'; // path adjust کریں

const ProtectedRoute = ({ children }) => {
    const { isauthenticated } = useContext(ActiveContext);

    if (!isauthenticated) {
        return <Navigate to="/" replace />; // user login نہیں تو redirect to login
    }

    return children; // user login ہے تو allow
};

export { ProtectedRoute };
