import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function RequestRegistration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${backendUrl}/auth/solicitacao-cadastro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      if (response.ok) {
        console.log("email enviado com sucesso");
        navigate("/confirmacao-email");
      } else {
        console.error("Falha ao enviar o e-mail de autenticacao");
      }
    } catch (error) {
      console.error("Falha ao enviar o e-mail de autenticacao");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around h-full bg-secondary w-full rounded-4xl p-10 gap-4"
    >
      <h2 className="text-tertiary">Confirme seu e-mail</h2>
      <p className="text-xl ">
        Para continuar com o cadastro, insira seu e-mail institucional no campo
        abaixo. Enviaremos um link de verificação para confirmar seu endereço de
        e-mail
      </p>
      <input
        type="email"
        className="w-full"
        placeholder="e-mail univesp"
        {...register("email", {
          required: "O e-mail é obrigatório.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@(aluno\.)?univesp\.br$/,
            message:
              "Utilize um e-mail institucional válido (@univesp.br ou @aluno.univesp.br)",
          },
        })}
      ></input>
      {errors.email && <p className="text-primary">{errors.email.message}</p>}
      <button className="btn bg-primary text-quaternary w-full">Enviar</button>
    </form>
  );
}

export default RequestRegistration;
