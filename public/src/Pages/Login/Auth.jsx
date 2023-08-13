import React, { memo } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export const Auth = memo(() => {
  const auth = localStorage.getItem("token") || false;
  const location = useLocation();
  if (!auth) return <Navigate to="/login" state={{ from: location }} />;
  return <Outlet />;
});
