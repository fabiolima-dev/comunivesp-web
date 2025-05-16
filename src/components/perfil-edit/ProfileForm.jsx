import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function ProfileForm() {
  const navigate = useNavigate();
  const { user, saveUser } = useAuth();
  const [userName, setUserName] = useState("");
  const [userAnoIngresso, setUserAnoIngresso] = useState("");
  const [userEixoId, setUserEixoId] = useState("");
  // const [userInteresses, setSelectedInteresses] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [eixos, setEixos] = useState([]);
  const [isLoadingEixos, setIsLoadingEixos] = useState(true);

  useEffect(() => {
    const fetchEixos = async () => {
      try {
        const response = await fetch(`${backendUrl}/perfil/eixos`);

        if (!response.ok) {
          throw new Error(
            `Erro ao buscar eixos: ${response.status} ${response.statusText}`,
          );
        }
        const data = await response.json();
        setEixos(data);
      } catch (err) {
        setError(`Erro ao carregar eixos: ${err.message}`);
      } finally {
        setIsLoadingEixos(false);
      }
    };

    fetchEixos();
  }, []);

  useEffect(() => {
    if (user) {
      setUserName(user.nome || "");
      setUserAnoIngresso(user.anoIngresso || "");
      setUserEixoId(user.eixoId || "");
      // setSelectedInteresses(user.interesses || []);
    }
  }, [user]);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setUserAnoIngresso(value);
    }
  };

  // const handleCheckboxChange = (event) => {
  //   const { value, checked } = event.target;
  //   if (checked) {
  //     setSelectedInteresses([...userInteresses, value]);
  //   } else {
  //     setSelectedInteresses(
  //       userInteresses.filter((interesse) => interesse !== value),
  //     );
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch(`${backendUrl}/perfil/usuario/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          nome: userName,
          anoIngresso: userAnoIngresso,
          eixoId: userEixoId,
          // interesses: userInteresses,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar perfil");
      }

      const updatedUser = await response.json();
      saveUser(updatedUser);
      navigate(`/perfil/${user.id}`);
    } catch (err) {
      setError("Erro ao salvar perfil. Tente novamente.");
      console.error("Erro ao salvar perfil:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="m-4">
      <h2 className="my-5 text-4xl font-bold">Seu Perfil:</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <h2 className="my-5 text-2xl font-bold">Nome:</h2>
        </label>
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          className="w-full p-2 border rounded"
          required
        />
        <label>
          <h2 className="my-5 text-2xl font-bold">Eixo:</h2>
        </label>
        <select
          className="bg-tertiary rounded-2xl h-10 pl-4 pb-1 border-1 w-full"
          value={userEixoId}
          onChange={(e) => setUserEixoId(e.target.value)}
          required
          disabled={isLoadingEixos}
        >
          <option value="">Selecione um eixo</option>
          {eixos.map((eixo) => (
            <option key={eixo.id} value={eixo.id}>
              {eixo.nome}
            </option>
          ))}
        </select>
        {isLoadingEixos && <p className="text-gray-500">Carregando eixos...</p>}
        <label>
          <h2 className="my-5 text-2xl font-bold">Ano de ingresso:</h2>
        </label>
        <input
          type="number"
          value={userAnoIngresso}
          onChange={handleYearChange}
          min={2016}
          className="w-full p-2 border rounded"
          required
        />
        {/* <label>
          <h2 className="my-5 text-2xl font-bold">Interesses:</h2>
        </label>
        <div className="p-1 border-1 border-black rounded-2xl h-60 pl-4 overflow-auto">
          {[
            "JavaScript",
            "CSS",
            "HTML",
            "SQL",
            "React",
            "Node.js",
            "Python",
            "Java",
          ].map((interesse, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={interesse}
                checked={userInteresses.includes(interesse)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              {interesse}
            </label>
          ))}
        </div> */}
        <button
          type="submit"
          disabled={isSaving}
          className="mt-6 bg-secondary text-quaternary rounded-2xl font-main font-bold h-10 w-80 cursor-pointer disabled:opacity-50"
        >
          {isSaving ? "Salvando..." : "Salvar perfil"}
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
