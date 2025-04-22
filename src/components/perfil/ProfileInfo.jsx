import React from "react";

function ProfileInfo() {
  const eixo = "Tecnologia da informação";
  const polo = "São Paulo";
  const anoDeIngresso = "2023";
  const mesComunivesp = "Abril";
  const anoComunivesp = "2025";
  const inicioComunivesp = `${mesComunivesp} de ${anoComunivesp}`;

  return (
    <>
      <div className="px-4">
        <div className="flex items-center my-6 gap-12">
          <img
            src="https://thispersondoesnotexist.com/"
            alt="profile-pic"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold">Fernandinho Beira-mar</h1>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <span className="font-bold">Eixo: </span>
            <span>{eixo}</span>
          </li>
          <li>
            <span className="font-bold">Polo: </span>
            <span>{polo}</span>
          </li>
          <li>
            <span className="font-bold">Ano de ingresso: </span>
            <span>{anoDeIngresso}</span>
          </li>
          <li>
            <span className="font-bold">Membro desde: </span>
            <span>{inicioComunivesp}</span>
          </li>
        </ul>
        <br></br>
      </div>
    </>
  );
}

export default ProfileInfo;
