import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function CreateAccount() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const senha = watch("senha");
  const query = new URLSearchParams(useLocation().search);
  const usuarioId = query.get("id");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${backendUrl}/auth/finalizar-cadastro`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, usuarioId }),
      });
      if (response.ok) {
        navigate("/login");
      } else {
        console.error("Erro ao finalizar cadastro.");
      }
    } catch (error) {
      console.error("Erro ao finalizar cadastro.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around h-full bg-secondary w-full rounded-4xl p-10 gap-8"
    >
      <h2 className="text-tertiary">Finalizar Cadastro</h2>
      <div className="flex flex-col items-end w-full gap-8">
        <input
          {...register("nome", { required: "Nome é obrigatório" })}
          className="w-full"
          placeholder="nome"
        ></input>
        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
        <input
          {...register("senha", {
            required: "Senha é obrigatória",
            minLength: { value: 6, message: "Mínimo 6 caracteres" },
          })}
          type="password"
          className="w-full"
          placeholder="senha"
        ></input>
        {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}
        <input
          {...register("confirmarSenha", {
            required: "Confirme sua senha",
            validate: (value) => value === senha || "As senhas não coincidem",
          })}
          type="password"
          className="w-full"
          placeholder="confirmar senha"
        ></input>
        {errors.confirmarSenha && (
          <p style={{ color: "red" }}>{errors.confirmarSenha.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 w-full items-center">
        <button type="submit" className="bg-primary text-quaternary w-full">
          Registrar
        </button>
        <p>ou</p>
        <Link className="w-full" to="/login">
          <button className="btn bg-quinary text-secondary w-full">
            Entrar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default CreateAccount;
