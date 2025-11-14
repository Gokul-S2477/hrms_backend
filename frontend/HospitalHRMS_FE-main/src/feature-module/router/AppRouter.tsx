import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, authRoutes } from "./router.link";

/**
 * AppRouter
 * Renders routes defined in router.link.tsx (publicRoutes & authRoutes)
 * - Keeps behavior simple and compatible with your existing route definitions.
 * - Adds a fallback "*" route that redirects unknown paths to /index (admin home).
 */

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes (login, register, error pages) */}
      {authRoutes &&
        authRoutes.map((r: any, idx: number) => {
          // Each r is { path, element, ... }
          // Some older entries include 'route: Route' property — ignore that.
          if (!r || !r.path) return null;
          return <Route key={`auth-${idx}`} path={r.path} element={r.element} />;
        })}

      {/* Public / App routes (dashboards, modules) */}
      {publicRoutes &&
        publicRoutes.map((r: any, idx: number) => {
          if (!r || !r.path) return null;
          return <Route key={`pub-${idx}`} path={r.path} element={r.element} />;
        })}

      {/* ensure /index works even if someone hits root or unknown */}
      <Route path="/" element={<Navigate to="/index" replace />} />
      <Route path="/index" element={<Navigate to="/index" replace />} />

      {/* Fallback: if nothing matched, send to /index (or replace with 404 page path) */}
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  );
};

export default AppRouter;

