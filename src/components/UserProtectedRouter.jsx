import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function UserProtectedRouter({ redirectTo = "/login", children }) {
  const user = useSelector((state) => state.session);

  if (!user.token) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}

export default UserProtectedRouter;
