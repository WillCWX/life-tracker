import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ isAuth, redirect, children }) {
  if (!isAuth) {
    return <Navigate to={redirect} />;
  } else {
    return children ? children : <Outlet />;
  }
}
