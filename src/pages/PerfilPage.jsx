import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/perfil/Header";
import ProfileInfo from "../components/perfil/ProfileInfo";
import CalculadoraMedia from "../components/perfil/Calculadora";
import useAuth from "../contexts/useAuth";
import { set } from "react-hook-form";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function PerfilPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [perfil, setPerfil] = useState(null);
  const [calcVisible, setCalcVisible] = useState(false);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const res = await fetch(`${backendUrl}/perfil/usuario/${id}`);
        const data = await res.json();
        console.log("Dados do perfil:", data); // Para debug
        setPerfil(data);
      } catch (err) {
        console.error("Erro ao buscar o perfil:", err);
      }
    };

    fetchUsuario();
  }, [id]);

  const showCalc = () => setCalcVisible(!calcVisible);

  return (
    <>
      <Header />
      <ProfileInfo perfil={perfil} />
      <Outlet />
      <button
        className="ml-4 px-4 py-2 bg-[#141313] text-white rounded"
        onClick={showCalc}
      >
        Calculadora de média
      </button>
      {calcVisible ? (
        <CalculadoraMedia onClose={() => setCalcVisible(false)} />
      ) : null}

      {/* <h2 className="my-5 text-2xl font-bold">Interesses :</h2>
      <Tags /> */}
      {user && user.id === id && (
        <a
          className="py-1.5 px-20 bg-[#141313] text-white rounded-2xl font-poppins font-bold h-10 w-80 cursor-pointer"
          href="/edit-profile"
        >
          Editar Perfil
        </a>
      )}
      {/* <Status /> */}
    </>
  );
}

export default PerfilPage;
