import React from 'react'
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

function isAdmin (user) {
  if (user && user.isAdmin) {
    if (user.isAdmin === true) {
      return true;
    }
  }
  return false;
}

function ProtectedRoute({redirectTo = "/", children}) {
    const user = useSelector((state) => state.session)

    if (!user.token) {
        return <Navigate to={redirectTo} />
    }
    if (!isAdmin(user)) {
      return <Navigate to="/" />
    }

  return children ? children : <Outlet />   //Children por si estoy protegendo un comp a parte
}

export default ProtectedRoute