import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
const ProtectedRoute = ({ children }:any) => {
  const { user }:any = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;