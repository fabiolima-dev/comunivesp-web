import { Link } from "react-router-dom";

function RecoverPassword() {
  return (
    <form className="flex flex-col justify-around h-8/12 bg-secondary w-full rounded-4xl p-10 gap-4">
      <h2 className="text-tertiary">Redefinir senha</h2>
      <p className="text-xl ">
        Informe o e-mail para receber o link de recuperação:
      </p>
      <div className="flex flex-col items-end w-full gap-8">
        <input className="w-full" placeholder="e-mail univesp"></input>
      </div>
      <div className="flex flex-col gap-1 w-full items-center">
        <Link className="w-full" to="/login">
          <button className="bg-primary text-quaternary w-full">
            Registrar
          </button>
        </Link>
        <p>ou</p>
        <Link className="w-full" to="/login">
          <button className="bg-quinary text-secondary w-full">Entrar</button>
        </Link>
      </div>
    </form>
  );
}

export default RecoverPassword;
