import React from "react";

function ProfileInfo({ perfil }) {
  const formatarData = (dataString) => {
    if (!dataString) return "";

    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="px-4">
        <div className="flex items-center my-6 gap-12">
          {/* <img
            src="https://thispersondoesnotexist.com/"
            alt="profile-pic"
            className="w-16 h-16 rounded-full object-cover"
          /> */}
          {perfil && <h1 className="text-2xl font-bold">{perfil.nome}</h1>}
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <span className="font-bold">Eixo: </span>
            <span>{perfil?.eixo?.nome}</span>
          </li>
          {/* <li>
            <span className="font-bold">Polo: </span>
            <span>{perfil?.polo}</span>
          </li> */}
          <li>
            <span className="font-bold">Ano de ingresso: </span>
            <span>{perfil?.anoIngresso}</span>
          </li>
          <li>
            <span className="font-bold">Membro desde: </span>
            <span>{formatarData(perfil?.criadoEm)}</span>
          </li>
        </ul>
        <br></br>
      </div>
    </>
  );
}

export default ProfileInfo;
