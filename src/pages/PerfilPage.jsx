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
      <button className="btn" onClick={console.log("maneiro")}>
        Editar Perfil
      </button>
      <Status />
    </>
  );
}

export default PerfilPage;
