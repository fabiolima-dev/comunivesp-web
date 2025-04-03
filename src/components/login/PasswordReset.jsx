import { CheckCircleIcon } from "@heroicons/react/24/outline";

function PasswordReset() {
  return (
    <form className="flex flex-col items-center justify-around h-8/12 bg-secondary w-full rounded-4xl p-10 gap-4">
      <CheckCircleIcon className="text-tertiary w-40" />
      <h2 className="text-tertiary text-center">
        Link de recuperação enviado para o e-mail
      </h2>
    </form>
  );
}

export default PasswordReset;
