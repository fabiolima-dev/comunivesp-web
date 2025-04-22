function Status() {
  //lógica de consumo da DB para dados abaixo.
  const userEstrelas = 5;
  const userRespostas = 10;
  const userPerguntas = 20;
  return (
    <>
      <h2 className="my-5 text-2xl font-bold">Status</h2>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <span className="font-bold">Estrelas &#11088; :</span>
          <span>{userEstrelas}</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-bold">Respostas &#9989; :</span>
          <span>{userRespostas}</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-bold">Perguntas &#128173; :</span>
          <span>{userPerguntas}</span>
        </li>
      </ul>
    </>
  );
}
export default Status;
