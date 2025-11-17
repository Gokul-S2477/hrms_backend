import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, authRoutes } from "./router.link";
import ProtectedRoute from "./ProtectedRoute";
import TwoColumnSidebar from "@core/common/two-column";   // ⭐ FINAL IMPORT
import { getUserRole } from "utils/auth";

const AppRouter: React.FC = () => {
  const role = getUserRole();

  const getHomePage = () => {
    if (!role) return "/login";
    if (role === "admin" || role === "hr") return "/admin-dashboard";
    if (role === "employee") return "/employee-dashboard";
    return "/login";
  };

  return (
    <Routes>
      {authRoutes.map((r, i) => (
        <Route
          key={`auth-${i}`}
          path={r.path}
          element={
            <ProtectedRoute>
              <TwoColumnSidebar>
                {r.element}
              </TwoColumnSidebar>
            </ProtectedRoute>
          }
        />
      ))}

      {publicRoutes.map((r, i) => (
        <Route key={`pub-${i}`} path={r.path} element={r.element} />
      ))}

      <Route path="/" element={<Navigate to={getHomePage()} replace />} />
      <Route path="*" element={<Navigate to={getHomePage()} replace />} />
    </Routes>
  );
};

export default AppRouter;
