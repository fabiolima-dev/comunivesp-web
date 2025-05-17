import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full flex flex-col justify-around gap-6">
      <h1 className="lg:text-6xl">
        Conecte-se, ensine, aprenda e cresça junto!
      </h1>
      <div className="flex flex-col gap-1 w-full items-center">
        <Link className="w-full" to="/login">
          <button className="btn bg-primary text-quarternary w-full">
            Entrar
          </button>
        </Link>
        <p className="text-secondary">ou</p>
        <Link className="w-full" to="/solicitacao-cadastro">
          <button className="btn w-full">Registrar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
