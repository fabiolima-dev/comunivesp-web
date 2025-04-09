import { Link } from "react-router-dom";

function NewPassword() {
  return (
    <form className="flex flex-col justify-around h-full bg-secondary w-full rounded-4xl p-10 gap-4">
      <h2 className="text-tertiary">Escolha uma nova senha</h2>
      <div className="flex flex-col items-end w-full gap-8">
        <input className="w-full" placeholder="nova senha"></input>
        <input className="w-full" placeholder="repita a nova senha"></input>
      </div>
      <Link className="w-full" to="/login">
        <button className="btn bg-primary text-quaternary w-full">
          Redefinir
        </button>
      </Link>
    </form>
  );
}

export default NewPassword;
