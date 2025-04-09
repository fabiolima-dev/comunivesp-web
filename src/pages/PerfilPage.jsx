import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";

function PerfilPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PerfilPage;
