import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function PasswordChanged() {
  return (
    <form className="flex flex-col items-center justify-around h-full bg-secondary w-full rounded-4xl p-10 gap-4">
      <CheckCircleIcon className="text-tertiary w-40" />
      <h2 className="text-tertiary text-center">
        Nova senha cadastrada com sucesso
      </h2>
      <Link className="w-full" to="/login">
        <button className="bg-primary w-full">Entrar</button>
      </Link>
    </form>
  );
}

export default PasswordChanged;
