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
          <label htmlFor="">titulo:</label>
          <input className='bg-white' type="text" />
          <label className="">tema:</label>
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
          <label >Duvida</label>
          <textarea className="bg-white py-1 bg-tertiary rounded-2xl h-10 p-4 border-1"></textarea>
        </form>
        <button class='btn'>Voltar</button> 
        {/* trocar para link de voltar         */}
        <button class='btn'>Enviar</button>
      </div>
      <Outlet />
    </>
  );
}

export default CreateQuestion;