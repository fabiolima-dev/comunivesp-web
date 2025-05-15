import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import questionBoard from "../assets/questionBoard";
import interesses from "../assets/interesses"; // Importando os interesses

function QuestionBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [filterTitle, setFilterTitle] = useState(""); // Filtro por título
  const [filterInterest, setFilterInterest] = useState(""); // Filtro por interesse

  const filteredQuestions = questionBoard.filter(
    (q) =>
      q.Titulo.toLowerCase().includes(filterTitle.toLowerCase()) &&
      q.Interesse.toLowerCase().includes(filterInterest.toLowerCase()),
  );

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center m-5">
        <h3 className="font-bold text-3xl">Dúvidas</h3>
        <button onClick={() => setIsModalOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mx-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Filtrar Dúvidas</h2>
            <label className="block mb-2">
              Título:
              <input
                type="text"
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-1"
              />
            </label>
            <label className="block mb-4">
              Interesse:
              <select
                value={filterInterest}
                onChange={(e) => setFilterInterest(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-1"
              >
                <option value="">Todos</option>
                {interesses.map((interesse, index) => (
                  <option key={index} value={interesse}>
                    {interesse}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsModalOpen(false)} className="btn">
                Cancelar
              </button>
              <button onClick={() => setIsModalOpen(false)} className="btn">
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="board" className="grid grid-cols-3 gap-4 m-5">
        {filteredQuestions.map((q) => (
          <div
            key={q.Titulo}
            className="text-black bg-gray-200 w-[100%] p-5 rounded-2xl"
          >
            <h3 className="font-bold text-2xl mt-2">{q.Titulo}</h3>
            <p className="text-black my-4">De {q.Usuario}</p>
            <span className="bg-blue-300 p-1 mt-3 rounded-2xl">
              {q.Interesse}
            </span>
            <p className="text-black my-4">{q.Detalhe}</p>
            <a
              className="bg-black p-1 mt-3 rounded-2xl text-white font-bold my-4 cursor-pointer"
              href="/question"
            >
              Ajudar
            </a>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default QuestionBoard;
