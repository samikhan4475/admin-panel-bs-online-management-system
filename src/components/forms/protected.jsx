import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ActiveContext } from "../../App";

const ProtectedRoute = ({ children }) => {
  const { isauthenticated } = useContext(ActiveContext);

  if (!isauthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { ProtectedRoute };
