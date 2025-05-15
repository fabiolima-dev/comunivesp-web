import React, { useState } from "react";
import interesses from "/src/assets/interesses.jsx";
import cursos from "/src/assets/cursos.jsx";
import polos from "/src/assets/polos.jsx";

function ProfileForm() {
  const [userName, setUserName] = useState("Fernandinho Beira-mar");
  const [userAnoIngresso, setUserAnoIngresso] = useState(2020);
  const [userPolo, setUserPolo] = useState("");
  const [userInteresses, setSelectedInteresses] = useState([]);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleYearChange = (event) => {
    const value = event.target.value;

    if (/^\d{0,4}$/.test(value)) {
      setUserAnoIngresso(value);
    }
  };
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInteresses([...userInteresses, value]);
    } else {
      setSelectedInteresses(
        userInteresses.filter((interesse) => interesse !== value),
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      userName,
      userAnoIngresso,
      userInteresses,
      userPolo,
    };

    console.log("dados do form:", formData);
  };

  let anoDeIngresso = 2020;

  return (
    <div className="m-4">
      <h2 className="my-5 text-4xl font-bold">Seu Perfil:</h2>
      <form>
        <label>
          <h2 className="my-5 text-2xl font-bold">Nome:</h2>
        </label>
        <input type="text" value={userName} onChange={handleNameChange} />
        <label>
          <h2 className="my-5 text-2xl font-bold">Eixo:</h2>
        </label>
        <select className="bg-tertiary rounded-2xl h-10 pl-4 pb-1 border-1">
          {cursos.map((curso, index) => (
            <option key={index} value={curso}>
              {/* futuramente colocar o value do user vindo da API */}
              {curso}
            </option>
          ))}
        </select>
        <label>
          <h2 className="my-5 text-2xl font-bold">Polo:</h2>
        </label>
        <select
          className="bg-tertiary rounded-2xl h-10 pl-4 pb-1 border-1"
          value={userPolo}
          onChange={(event) => setUserPolo(event.target.value)}
        >
          {polos.map((polo, index) => (
            <option key={index} value={polo}>
              {polo}
            </option>
          ))}
        </select>

        <label>
          <h2 className="my-5 text-2xl font-bold">Ano de ingresso:</h2>
        </label>
        <input
          type="number"
          value={userAnoIngresso}
          onChange={handleYearChange}
          min={2016}
        />
        <label>
          <h2 className="my-5 text-2xl font-bold">Interesses:</h2>
        </label>
        <div className="p-1 border-1 border-black rounded-2xl h-60 pl-4 overflow-auto">
          {interesses.map((interesse, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={interesse}
                checked={userInteresses.includes(interesse)}
                onChange={handleCheckboxChange} // Passa a referência da função
                className="form-checkbox"
              />
              {interesse}
            </label>
          ))}
        </div>
      </form>
      <button
        onClick={handleSubmit}
        className="mt-6  bg-secondary text-quaternary rounded-2xl font-main font-bold h-10 w-80 cursor-pointer"
      >
        Salvar perfil
      </button>
    </div>
  );
}

export default ProfileForm;
