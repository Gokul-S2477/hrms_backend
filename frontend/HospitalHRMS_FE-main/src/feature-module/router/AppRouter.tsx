import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, authRoutes } from "./router.link";
import { getUserRole } from "../../utils/auth";

const AppRouter: React.FC = () => {
  const role = getUserRole();

  // ROLE BASED LANDING PAGE
  const getHomePage = () => {
    if (role === "admin" || role === "hr") return "/admin-dashboard";
    if (role === "employee") return "/employee-dashboard";
    return "/login"; // if not logged in
  };

  return (
    <Routes>
      {/* AUTH ROUTES */}
      {authRoutes.map((r, i) => (
        <Route key={`auth-${i}`} path={r.path} element={r.element} />
      ))}

      {/* PUBLIC ROUTES */}
      {publicRoutes.map((r, i) => (
        <Route key={`pub-${i}`} path={r.path} element={r.element} />
      ))}

      {/* DEFAULT LANDING PAGE */}
      <Route path="/" element={<Navigate to={getHomePage()} replace />} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to={getHomePage()} replace />} />
    </Routes>
  );
};

export default AppRouter;
