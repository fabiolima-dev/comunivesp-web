import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="flex flex-col justify-around h-full bg-secondary w-full rounded-4xl p-10 gap-4">
      <h2 className="text-tertiary">Bem vindo de volta!</h2>
      <div className="flex flex-col items-end w-full gap-8">
        <input className="w-full" placeholder="e-mail univesp"></input>
        <input className="w-full" placeholder="senha"></input>
        <Link>Esqueceu a senha?</Link>
      </div>
      <div className="flex flex-col gap-1 w-full items-center">
        <Link className="w-full" to="/login">
          <button className="bg-primary text-quaternary w-full">Entrar</button>
        </Link>
        <p>ou</p>
        <Link className="w-full" to="/cadastro">
          <button className="bg-quinary text-secondary w-full">
            Registrar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Login;
