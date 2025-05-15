import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import questionBoard from "../services/questionBoard";

function QuestionBoard() {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center m-5">
        <h3 className="font-bold text-3xl">Dúvidas</h3>
        <button>
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
      <div id="board" className="grid grid-cols-3 gap-4 m-5">
        {questionBoard.map((q) => {
          return (
            <a className=" text-black bg-gray-200 w-[100%] p-5 rounded-2xl">
              <h3 className="font-bold text-2xl mt-2">{q.Titulo}</h3>
              <p className="text-black my-4">De {q.Usuario}</p>
              <span className="bg-blue-300 p-1 mt-3 rounded-2xl">
                {q.Interesse}
              </span>
              <p className="text-black my-4">{q.Detalhe}</p>
              <a
                className="bg-black p-1 mt-3 rounded-2xl text-white font-bold my-4  cursor-pointer"
                href="/question"
              >
                Ajudar
              </a>
            </a>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default QuestionBoard;
