import React from "react";
import Header from "../components/perfil/Header";
import { Outlet } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col p-4 gap-10">
        <h2>Links Úteis</h2>
        <ul className="flex flex-col gap-5">
          <li>
            <h3 className="font-bold">AVA</h3>
            <a
              className="text-secondary"
              href="https://ava.univesp.br/?new_loc=%2Fultra%2Fcourse"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ava.univesp.br/?new_loc=%2Fultra%2Fcourse
            </a>
          </li>
          <li>
            <h3 className="font-bold">SEI</h3>
            <a
              className="text-secondary"
              href="https://sei.univesp.br/index.xhtml"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sei.univesp.br/index.xhtml
            </a>
          </li>
          <li>
            <h3 className="font-bold">Calendário</h3>
            <a
              className="text-secondary"
              href="https://ava.univesp.br/ultra/calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ava.univesp.br/ultra/calendar
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UsefulLinks;
