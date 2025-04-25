import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import ProfileForm from "../components/perfil-edit/ProfileForm";

function PerfilEditPage() {
  return (
    <>
      <Header />
      <Outlet />
      <ProfileForm />
    </>
  );
}

export default PerfilEditPage;
