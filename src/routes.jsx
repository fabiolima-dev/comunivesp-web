import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Home from "./components/login/Home.jsx";
import Login from "./components/login/Login.jsx";

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default RoutesConfig;
