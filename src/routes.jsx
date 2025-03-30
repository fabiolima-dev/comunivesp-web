import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
