import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/perfil/Header";
import useAuth from "../contexts/useAuth";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Question() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [resposta, setResposta] = useState("");
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`${backendUrl}/duvidas/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar dúvida");
        }

        const data = await response.json();
        setQuestion(data);
      } catch (err) {
        console.error("Erro ao buscar dúvida:", err);
        setError("Erro ao carregar dúvida");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, [id, token]);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/duvidas/${id}/comentarios`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Erro ao carregar comentários");
        }

        const data = await response.json();
        setComentarios(data);
      } catch (err) {
        console.error("Erro ao buscar comentários:", err);
      }
    };

    if (question?.professor) {
      fetchComentarios();
    }
  }, [id, token, question?.professor]);

  const handleSubmitResposta = async (e) => {
    e.preventDefault();
    if (!resposta.trim()) return;

    try {
      const response = await fetch(`${backendUrl}/duvidas/${id}/comentarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          conteudo: resposta,
          alunoId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar comentário");
      }

      const newComentario = await response.json();
      setComentarios([...comentarios, newComentario]);
      setResposta("");
    } catch (err) {
      console.error("Erro ao enviar comentário:", err);
      setError("Erro ao enviar comentário");
    }
  };

  const handleEncerrarDuvida = async () => {
    if (!window.confirm("Tem certeza que deseja encerrar esta dúvida?")) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/duvidas/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao encerrar dúvida");
      }

      navigate("/question-board");
    } catch (err) {
      console.error("Erro ao encerrar dúvida:", err);
      setError("Erro ao encerrar dúvida");
    }
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!question) {
    return <div>Dúvida não encontrada</div>;
  }

  return (
    <div className="p-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h3 className="font-bold text-2xl mb-4">{question.titulo}</h3>
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-gray-600">De {question.aluno.nome}</p>
          {question.professor && (
            <div className="flex items-center gap-2 text-gray-600">
              <span>Mentorado por:</span>
              <span className="font-semibold">{question.professor.nome}</span>
            </div>
          )}
        </div>
        <p className="text-gray-800 mb-4">{question.descricao}</p>

        {user && user.id === question.aluno.id && (
          <button
            onClick={handleEncerrarDuvida}
            className="bg-[#db4545] text-white rounded-2xl font-bold px-4 py-2 mb-6"
          >
            Encerrar dúvida
          </button>
        )}

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h4 className="font-bold text-xl mb-4">Comentários</h4>

          {question.professor ? (
            <>
              {comentarios.length > 0 ? (
                <div className="max-h-80 overflow-y-auto pr-5">
                  {comentarios.map((resposta) => {
                    const isCurrentUser = user && user.id === resposta.autorId;
                    return (
                      <div
                        key={resposta.id}
                        className={`flex flex-col ${
                          isCurrentUser ? "items-end" : "items-start"
                        } mb-4`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-gray-800">
                            {isCurrentUser
                              ? "Você"
                              : resposta.autorNome || "Usuário"}
                          </span>
                        </div>
                        <div
                          className={`p-4 rounded-2xl shadow-md max-w-[80%] bg-gray-50 text-gray-900 border border-gray-200"
                        }`}
                        >
                          <p className="text-gray-800 whitespace-pre-wrap break-words text-base leading-relaxed font-medium">
                            {resposta.conteudo}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">
                  Nenhum comentário ainda. Seja o primeiro a comentar!
                </p>
              )}
              {user && (
                <form onSubmit={handleSubmitResposta} className="mt-6">
                  <textarea
                    value={resposta}
                    onChange={(e) => setResposta(e.target.value)}
                    placeholder="Digite seu comentário..."
                    className="w-full p-3 rounded-lg border border-gray-300 mb-4"
                    rows="4"
                  />
                  <button
                    type="submit"
                    className="bg-[#db4545] text-white rounded-2xl font-bold px-6 py-2"
                  >
                    Comentar
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <BookOpenIcon className="h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Aguardando professor
              </h3>
              <p className="text-gray-500 max-w-md">
                Sua dúvida está aguardando ser atendida por um professor. Assim
                que um professor se disponibilizar, você será notificado.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;
