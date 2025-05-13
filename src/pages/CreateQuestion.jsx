import { Outlet } from "react-router-dom";
import Header from "../components/perfil/Header";
import { useState } from "react";
import interesses from "../services/interesses";

function CreateQuestion() {
  const [QuestionInteresse, setQuestionInteresse] = useState([]);

  return (
    <>
      <Header />
      <div className="bg-[#f2f2f2] rounded-xl w-[100%] h-[100%]">
        <form action="" className="flex flex-col gap-4 p-4">
          <label htmlFor="">Título:</label>
          <input className='bg-white' type="text" />
          <label>Tema:</label>
          <select
            name="interesses"
            className=" bg-white py-1 bg-tertiary rounded-2xl h-10 p-4 border-1"
            onChange={(e) => setQuestionInteresse(e.target.value)}
            value={QuestionInteresse}
          >
            {interesses.map((e) => {
              return <option key={e} value={e}>{e}</option>;
            })}
          </select>
          <label >Dúvida</label>
          <textarea rows='8' maxLength='' placeholder="numero max. de letras: X" className="bg-white py-1 w-full bg-tertiary rounded-2xl h-80 p-4 border-1"></textarea>
          {/* adicionar maximo de letras conforme o tamanho do banco de dados */}
        </form>
      </div>
      <div className="my-5">
        <a className='mx-4  py-2.5 px-[136.70px] bg-[#db4545] text-white rounded-2xl font-poppins font-bold h-10 w-80 cursor-pointer' href="/questions">Voltar</a> 
        <button class='btn'>Enviar</button>
        </div>
      <Outlet />
    </>
  );
}

export default CreateQuestion;