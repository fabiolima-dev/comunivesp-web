import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import ProfileInfo from "../components/perfil/ProfileInfo";

function PerfilPage() {
  return (
    <>
      <Header />
      <ProfileInfo />
      <Outlet />
    </>
  );
}

export default PerfilPage;
