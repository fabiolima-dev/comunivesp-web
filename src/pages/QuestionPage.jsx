import Header from "../components/perfil/Header";
import { Outlet } from "react-router-dom";
import QuestionService from "../assets/questionAssets";

function Question() {
  const { user, questionTitle, detalhePerguntas, interesse, respostas } =
    QuestionService;

  return (
    <div>
      <Header />
      <h3 className="font-bold text-lg mx-1.5">{questionTitle}</h3>
      <p className="flex text-black font-bold text-sm px-2 py-1">{user}</p>
      <p className="text-black text-sm px-2 py-1">{detalhePerguntas}</p>
      <p className="text-black bg-blue-300 text-sm rounded-2xl inline-block px-2 ">
        {interesse}
      </p>
      <button className="block my-5 bg-[#db4545] text-white rounded-2xl font-poppins font-bold h-10 w-80 cursor-pointer">
        Encerrar dúvida
      </button>

      <div className="flex-col bg-gray-200 w-[100%] p-5 rounded-2xl">
        {respostas.map((resposta) => (
          <div
            key={resposta.id}
            className="flex justify-end items-center border-2 border-gray-300 w-[100%] p-4 mb-4 rounded-lg"
          >
            <img
              src={resposta.profilePic}
              alt="profile-pic"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="text-black text-sm font-bold">{resposta.user}</p>
              <p className="text-black text-sm">{resposta.detalhe}</p>
            </div>
          </div>
        ))}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="bg-white rounded-2xl w-[100%] p-2 mb-5"
        ></textarea>
        <div className="flex justify-end">
          <button className="bg-[#db4545] text-white rounded-2xl font-poppins font-bold h-10 w-80 cursor-pointer">
            Responder
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Question;
