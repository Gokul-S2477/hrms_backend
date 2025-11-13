// src/feature-module/router/AppRouter.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: 20 }}>Hospital HRMS Frontend is running ✅</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
