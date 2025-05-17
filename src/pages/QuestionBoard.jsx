import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/perfil/Header";
import useAuth from "../contexts/useAuth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function QuestionBoard() {
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const [duvidas, setDuvidas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDuvidas = async () => {
      try {
        const response = await fetch(`${backendUrl}/duvidas`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar dúvidas");
        }

        const data = await response.json();
        setDuvidas(data);
      } catch (err) {
        console.error("Erro ao buscar dúvidas:", err);
        setError("Erro ao carregar dúvidas");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDuvidas();
  }, [token]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center m-5">
        <h3 className="font-bold text-3xl">Dúvidas</h3>
        <button onClick={() => navigate("/question-creation")}>
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
        {duvidas.map((duvida) => (
          <div
            key={duvida.id}
            className="text-black bg-gray-200 w-[100%] p-5 rounded-2xl"
          >
            <h3 className="font-bold text-2xl mt-2">{duvida.titulo}</h3>
            <p className="text-black my-4">De {duvida.aluno.nome}</p>
            <p className="text-black my-4">{duvida.descricao}</p>
            {user && (
              <>
                {user.id === duvida.aluno.id ||
                user.id === duvida.professorId ? (
                  <button
                    onClick={() => navigate(`/question/${duvida.id}`)}
                    className="bg-black p-1 mt-3 rounded-2xl text-white font-bold my-4 cursor-pointer"
                  >
                    Visualizar
                  </button>
                ) : duvida.status === "ABERTA" ? (
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch(
                          `${backendUrl}/duvidas/${duvida.id}/ajudar`,
                          {
                            method: "PATCH",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                              status: "FECHADA",
                              professorId: user.id,
                            }),
                          },
                        );

                        if (!response.ok) {
                          throw new Error("Erro ao assumir a dúvida");
                        }

                        navigate(`/question/${duvida.id}`);
                      } catch (error) {
                        console.error(error);
                        alert("Não foi possível assumir esta dúvida.");
                      }
                    }}
                    className="bg-green-600 hover:bg-green-700 p-1 mt-3 rounded-2xl text-white font-bold my-4 cursor-pointer"
                  >
                    Ajudar
                  </button>
                ) : (
                  <p className="mt-3 text-sm text-gray-500 font-semibold">
                    Dúvida fechada
                  </p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default QuestionBoard;
