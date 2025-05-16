import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../contexts/useAuth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { saveToken, saveUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const resBody = await response.json();

      if (response.ok) {
        console.log(resBody.message);

        localStorage.setItem("token", resBody.token);
        saveToken(resBody.token);

        saveUser(resBody.user);

        navigate(`../perfil/${resBody.user.id}`);
      } else {
        alert(resBody.error);
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around h-full bg-secondary w-full rounded-4xl p-10 gap-4"
    >
      <h2 className="text-tertiary">Bem vindo de volta!</h2>
      <div className="flex flex-col items-end w-full gap-8">
        <input
          className="w-full"
          {...register("email")}
          placeholder="e-mail univesp"
        ></input>
        <input
          className="w-full"
          type="password"
          {...register("senha")}
          placeholder="senha"
        ></input>
        <Link>Esqueceu a senha?</Link>
      </div>
      <div className="flex flex-col gap-1 w-full items-center">
        <button type="submit" className="btn bg-primary text-quaternary w-full">
          Entrar
        </button>
        <p>ou</p>
        <Link className="w-full" to="/cadastro">
          <button className="btn bg-quinary text-secondary w-full">
            Registrar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Login;
