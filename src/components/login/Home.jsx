function Home() {
  return (
    <div className="h-8/12 flex flex-col justify-between gap-6">
      <h1 className="lg:text-6xl">
        Conecte-se, ensine, aprenda e cresça junto!
      </h1>
      <div className="flex flex-col gap-6 w-full items-center sm:items-start">
        <button className="bg-primary text-quarternary w-full max-w-94">
          Entrar
        </button>
        <button className="w-full max-w-94">Registrar</button>
      </div>
    </div>
  );
}

export default Home;
