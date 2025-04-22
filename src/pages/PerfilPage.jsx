import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import ProfileInfo from "../components/perfil/ProfileInfo";
import Tags from "../components/perfil/Tags";
import Status from "../components/perfil/Status";

function PerfilPage() {
  function editarPerfil() {
    //edicao de perfil
    alert("olá mundo");
  }
  return (
    <>
      <Header />
      <ProfileInfo />
      <Outlet />
      <h2 className="my-5 text-2xl font-bold">Especialidades :</h2>
      <Tags />
      <button className="btn" onClick={editarPerfil}>
        Editar Perfil
      </button>
      <Status />
    </>
  );
}

export default PerfilPage;
