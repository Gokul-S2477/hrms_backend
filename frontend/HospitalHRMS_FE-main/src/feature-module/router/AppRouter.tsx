import React from "react";
import { Routes, Route } from "react-router-dom";
import Login3 from "../auth/login/login";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 👇 Default path will now show the Login3 page */}
      <Route path="/" element={<Login3 />} />
    </Routes>
  );
};

export default AppRouter;
