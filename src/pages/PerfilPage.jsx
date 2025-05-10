import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import ProfileInfo from "../components/perfil/ProfileInfo";
import Tags from "../components/perfil/Tags";
import Status from "../components/perfil/Status";

function PerfilPage() {
  return (
    <>
      <Header />
      <ProfileInfo />
      <Outlet />
      <h2 className="my-5 text-2xl font-bold">Interesses :</h2>
      <Tags />
      <a
  className="py-1.5 px-20 bg-[#141313] text-white rounded-2xl font-poppins font-bold h-10 w-80 cursor-pointer"
  href="/edit-profile"
>
        Editar Perfil
      </a>
      <Status />
    </>
  );
}

export default PerfilPage;
