import { UsersIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function ProfileForm() {
  const [userName, setUserName] = useState("Fernandinho Beira-mar");
  const [userAnoIngresso, setUserAnoIngresso] = useState(2020);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleYearChange = (event) => {
    const value = event.target.value;

    if (/^\d{0,4}$/.test(value)) {
      setUserAnoIngresso(value);
    }
    //fazer logica que permita o ano de ingresso entre {{criacao da univesp}} e ano que estamos (simples de fazer)
  };

  const cursos = [
    "Engenharia da computacao",
    "Engenharia da producao",
    "Licenciatura em matemática",
    "Pedagogia",
    "Letras",
    "Tecnologia de inf",
    "Ciencia de dados",
    "Administracao",
    "Processos gerenciais",
  ];

  const interesses = [];

  const polosUnivesp = [
    "Adamantina",
    "Aguaí",
    "Agudos",
    "Altinópolis",
    "Alumínio",
    "Alvinlândia",
    "Americana",
    "Américo Brasiliense",
    "Amparo",
    "Andradina",
    "Anhembi",
    "Aparecida",
    "Apiaí",
    "Araçariguama",
    "Araçatuba",
    "Araçoiaba da Serra",
    "Arandu",
    "Araraquara",
    "Araras",
    "Arealva",
    "Areias",
    "Artur Nogueira",
    "Arujá",
    "Assis",
    "Atibaia",
    "Avaré",
    "Bady Bassitt",
    "Bananal",
    "Bariri",
    "Barra Bonita",
    "Barretos",
    "Barrinha",
    "Barueri",
    "Bastos",
    "Bauru",
    "Bernardino de Campos",
    "Bertioga",
    "Biritiba-Mirim",
    "Boa Esperança do Sul",
    "Bocaina",
    "Boituva",
    "Bom Jesus dos Perdões",
    "Borborema",
    "Botucatu",
    "Bragança Paulista",
    "Braúna",
    "Brodowski",
    "Cabreúva",
    "Caçapava",
    "Cachoeira Paulista",
    "Caconde",
    "Cafelândia",
    "Caieiras",
    "Cajamar",
    "Cajati",
    "Cajobi",
    "Campinas",
    "Campo Limpo Paulista",
    "Campos do Jordão",
    "Capão Bonito",
    "Capela do Alto",
    "Capivari",
    "Caraguatatuba",
    "Carapicuíba",
    "Casa Branca",
    "Catanduva",
    "Cerqueira César",
    "Cerquilho",
    "Cesário Lange",
    "Charqueada",
    "Chavantes",
    "Colina",
    "Conchal",
    "Conchas",
    "Cordeirópolis",
    "Cosmópolis",
    "Cravinhos",
    "Cristais Paulista",
    "Cruzeiro",
    "Cubatão",
    "Cunha",
    "Diadema",
    "Dois Córregos",
    "Dourado",
    "Dracena",
    "Dumont",
    "Eldorado",
    "Elias Fausto",
    "Embu das Artes",
    "Engenheiro Coelho",
    "Espírito Santo do Pinhal",
    "Estiva Gerbi",
    "Fartura",
    "Fernandópolis",
    "Flora Rica",
    "Flórida Paulista",
    "Franca",
    "Francisco Morato",
    "Franco da Rocha",
    "Garça",
    "Gavião Peixoto",
    "Guaíra",
    "Guapiaçu",
    "Guará",
    "Guaraci",
    "Guararapes",
    "Guararema",
    "Guaratinguetá",
    "Guareí",
    "Guariba",
    "Guarujá",
    "Guarulhos",
    "Herculândia",
    "Hortolândia",
    "Iacanga",
    "Ibirá",
    "Ibitinga",
    "Ibiúna",
    "Igaraçu do Tietê",
    "Igarapava",
    "Igaratá",
    "Iguape",
    "Ilha Comprida",
    "Ilha Solteira",
    "Ilhabela",
    "Indaiatuba",
    "Ipaussu",
    "Iperó",
    "Ipeúna",
    "Iporanga",
    "Itaberá",
    "Itaí",
    "Itajobi",
    "Itaju",
    "Itanhaém",
    "Itaoca",
    "Itapecerica da Serra",
    "Itapetininga",
    "Itapeva",
    "Itapevi",
    "Itápolis",
    "Itaporanga",
    "Itapuí",
    "Itaquaquecetuba",
    "Itararé",
    "Itariri",
    "Itatiba",
    "Itu",
    "Itupeva",
    "Ituverava",
    "Jaboticabal",
    "Jacareí",
    "Jacupiranga",
    "Jaguariúna",
    "Jambeiro",
    "Jandira",
    "Jaú",
    "José Bonifácio",
    "Juquiá",
    "Juquitiba",
    "Lagoinha",
    "Laranjal Paulista",
    "Leme",
    "Lençóis Paulista",
    "Limeira",
    "Lins",
    "Lorena",
    "Louveira",
    "Lucélia",
    "Luiz Antônio",
    "Macatuba",
    "Mairinque",
    "Mairiporã",
    "Maracaí",
    "Marília",
    "Matão",
    "Mauá",
    "Mineiros do Tietê",
    "Miracatu",
    "Mirante do Paranapanema",
    "Mococa",
    "Mogi das Cruzes",
    "Mogi Mirim",
    "Monte Alto",
    "Monte Azul Paulista",
    "Monte Mor",
    "Morro Agudo",
    "Morungaba",
    "Motuca",
    "Murutinga do Sul",
    "Narandiba",
    "Nova Granada",
    "Novo Horizonte",
    "Olímpia",
    "Orlândia",
    "Osasco",
    "Ourinhos",
    "Ouroeste",
    "Pacaembu",
    "Paraguaçu Paulista",
    "Paraibuna",
    "Paranapanema",
    "Paulistânia",
    "Paulo de Faria",
    "Pederneiras",
    "Pedreira",
    "Pedro de Toledo",
    "Penápolis",
    "Pereiras",
    "Peruíbe",
    "Piacatu",
    "Piquete",
    "Piracaia",
    "Piracicaba",
    "Pirajuí",
    "Pirassununga",
    "Pitangueiras",
    "Poá",
    "Pompéia",
    "Pontal",
    "Porangaba",
    "Porto Feliz",
    "Porto Ferreira",
    "Potim",
    "Pradópolis",
    "Presidente Bernardes",
    "Presidente Epitácio",
    "Presidente Prudente",
    "Presidente Venceslau",
    "Quatá",
    "Queluz",
    "Rancharia",
    "Redenção da Serra",
    "Reginópolis",
    "Ribeirão Pires",
    "Ribeirão Preto",
    "Rio Claro",
    "Rio das Pedras",
    "Riolândia",
    "Rosana",
    "Salesópolis",
    "Saltinho",
    "Salto",
    "Sandovalina",
    "Santa Bárbara d'Oeste",
    "Santa Branca",
    "Santa Cruz da Esperança",
    "Santa Cruz das Palmeiras",
    "Santa Cruz do Rio Pardo",
    "Santa Gertrudes",
    "Santa Isabel",
    "Santana de Parnaíba",
    "Santo Anastácio",
    "Santo André",
    "Santo Antônio da Alegria",
  ];

  let anoDeIngresso = 2020;

  // CRIAR UM SERVICE OU SEJA LA OQ PARA ESSAS VARIAVEIS AMANHA

  return (
    <div className="m-4">
      <h2 className="my-5 text-4xl font-bold">Seu Perfil:</h2>
      <form>
        <label>
          <h2 className="my-5 text-2xl font-bold">Nome:</h2>
        </label>
        <input type="text" value={userName} onChange={handleNameChange} />
        <label>
          <h2 className="my-5 text-2xl font-bold">Eixo:</h2>
        </label>
        <select className="bg-tertiary rounded-2xl h-10 p-4 border-1">
          {cursos.map((curso, index) => (
            <option key={index} value={curso}>
              {/* futuramente colocar o value do user vindo da API */}
              {curso}
            </option>
          ))}
        </select>
        <label>
          <h2 className="my-5 text-2xl font-bold">Polo:</h2>
        </label>
        <select className="bg-tertiary rounded-2xl h-10 p-4 border-1">
          {polosUnivesp.map((polosUnivesp, index) => (
            <option key={index} value={polosUnivesp}>
              {/* futuramente colocar o value do user vindo da API */}
              {polosUnivesp}
            </option>
          ))}
        </select>

        <label>
          <h2 className="my-5 text-2xl font-bold">Ano de ingresso:</h2>
        </label>
        <input
          type="number"
          value={userAnoIngresso}
          onChange={handleYearChange}
          min={2016}
        />
        <label>
          <h2 className="my-5 text-2xl font-bold">Interesses:</h2>
        </label>
        {/* colocar um select de todas as materias de todos os cursos + langs de programacao e assuntos de programacao e dados */}
        {/* teste para commit */}
      </form>
    </div>
  );
}

export default ProfileForm;
