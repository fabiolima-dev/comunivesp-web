import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function PasswordChanged() {
  return (
    <form className="flex flex-col items-center justify-around h-8/12 bg-secondary w-full rounded-4xl p-10 gap-4">
      <CheckCircleIcon className="text-tertiary w-40" />
      <h2 className="text-tertiary text-center">
        Nova senha cadastrada com sucesso
      </h2>
      <button className="bg-primary">Entrar</button>
    </form>
  );
}

export default PasswordChanged;
