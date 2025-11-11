import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="terms-container p-10 py-25 bg-secondary rounded-4xl h-full flex flex-col justify-around">
      <h2 className="text-tertiary mb-2">Termos de Uso</h2>
      <p className="text-tertiary mb-4">
        Declaro que li e concordo com os Termos de Uso e com a Política de
        Privacidade, autorizando o tratamento dos meus dados pessoais conforme a
        LGPD.
      </p>
      <Link to="/solicitacao-cadastro" className="mb-4 text-primary underline">
        <button className={`px-4 py-2 text-tertiary bg-primary rounded`}>
          Aceito
        </button>
      </Link>
    </div>
  );
};

export default Terms;
