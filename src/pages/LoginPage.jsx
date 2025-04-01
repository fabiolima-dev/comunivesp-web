import LogoUnivesp from "../../public/logo-univesp.svg?url";

function LoginPage() {
  return (
    <div className="px-5 sm:px-40 h-full">
      <div className="py-10 h-full flex m-auto items-center flex-col justify-around min-w-[280px] max-w-[400px] sm:m-0 sm:items-start">
        <img src={LogoUnivesp} alt="Logo Univesp" className="w-full px-4" />
        <h1 className="lg:text-6xl">
          Conecte-se, ensine, aprenda e cresça junto!
        </h1>
        <div className="flex flex-col gap-6 w-full">
          <button className="bg-primary text-quarternary">Entrar</button>
          <button>Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
