import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Home from "./components/login/Home.jsx";
import Login from "./components/login/Login.jsx";
import CreateAccount from "./components/login/CreateAccount.jsx";
import RecoverPassword from "./components/login/RecoverPassword.jsx";
import NewPassword from "./components/login/NewPassword.jsx";
import EmailConfirmation from "./components/login/EmailConfirmation.jsx";
import PasswordChanged from "./components/login/PasswordChanged.jsx";
import PasswordReset from "./components/login/PasswordReset.jsx";
import RequestRegistration from "./components/login/RequestRegistration.jsx";
import PerfilPage from "./pages/PerfilPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

const RoutesConfig = () => (
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<LoginPage />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<CreateAccount />} />
            <Route path="redefinir-senha" element={<RecoverPassword />} />
            <Route path="nova-senha" element={<NewPassword />} />
            <Route path="confirmacao-email" element={<EmailConfirmation />} />
            <Route path="recuperacao-senha" element={<PasswordReset />} />
            <Route path="senha-alterada" element={<PasswordChanged />} />
            <Route
              path="solicitacao-cadastro"
              element={<RequestRegistration />}
            />
          </Route>
          <Route path="perfil/:id" element={<PerfilPage />}></Route>
        </Route>
      </Routes>
    </AuthProvider>
  </Router>
);

export default RoutesConfig;
