import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <form className="flex flex-col justify-around h-8/12 bg-secondary w-full rounded-4xl p-10 gap-4">
      <h2 className="text-tertiary">Criar conta</h2>
      <div className="flex flex-col items-end w-full gap-8">
        <input className="w-full" placeholder="e-mail univesp"></input>
        <input className="w-full" placeholder="nome"></input>
        <input className="w-full" placeholder="senha"></input>
        <input className="w-full" placeholder="confirmar senha"></input>
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

export default CreateAccount;
