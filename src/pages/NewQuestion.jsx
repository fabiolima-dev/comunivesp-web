import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/useAuth";
import interesses from "../assets/interesses";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function NewQuestion() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [titulo, setTitulo] = useState("");
  const [duvida, setDuvida] = useState("");
  // const [interesse, setInteresse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${backendUrl}/duvidas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titulo,
          descricao: duvida,
          // interesse,
          alunoId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar dúvida");
      }

      navigate("/question-board");
    } catch (err) {
      setError("Erro ao criar dúvida. Tente novamente.");
      console.error("Erro ao criar dúvida:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#f2f2f2] rounded-xl my-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          <label htmlFor="titulo">Título:</label>
          <input
            id="titulo"
            className="bg-white p-2 rounded"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          {/* <label htmlFor="interesse">Tema:</label> */}
          {/* <select
            id="interesse"
            name="interesses"
            className="py-1 bg-tertiary rounded-2xl h-10 p-4 border-1"
            onChange={(e) => setInteresse(e.target.value)}
            value={interesse}
            required
          >
            <option value="">Selecione um tema</option>
            {interesses.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select> */}
          <label htmlFor="duvida">Dúvida</label>
          <textarea
            id="duvida"
            rows="8"
            maxLength="1000"
            placeholder="Digite sua dúvida (máximo 1000 caracteres)"
            className="py-1 w-full bg-white rounded h-80 p-4 border-1"
            value={duvida}
            onChange={(e) => setDuvida(e.target.value)}
            required
          />
        </form>
      </div>
      <div className="my-5">
        <button
          onClick={() => navigate("/question-board")}
          className="mx-4 py-2.5 px-[136.70px] bg-[#db4545] text-white rounded-2xl font-poppins font-bold h-10 w-80 cursor-pointer"
        >
          Voltar
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="btn bg-primary text-white"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </>
  );
}

export default NewQuestion;
