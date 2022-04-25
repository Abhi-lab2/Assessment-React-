import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="./login" replace={false} />;
  }
  return children;
};
