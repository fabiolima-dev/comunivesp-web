import { useState } from "react";
import LogoUnivesp from "/logo-univesp.svg?url";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="flex items-center justify-between w-full h-16 px-4 py-2 ">
        <img src={LogoUnivesp} alt="Logo Univesp" className="w-50" />

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="appearance-none border-none outline-none"
          >
            <EllipsisHorizontalIcon className="w-15" />
          </button>

          {isMenuOpen && (
            <nav className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 w-64">
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="/profile"
                    className="text-gray-800 hover:text-red-500"
                  >
                    Meu perfil
                  </a>
                </li>
                <li>
                  <a
                    href="/editarPerfil"
                    className="text-gray-800 hover:text-red-500"
                  >
                    Editar perfil
                  </a>
                </li>
                <li>
                  <a
                    href="/duvidas"
                    className="text-gray-800 hover:text-red-500"
                  >
                    Dúvidas
                  </a>
                </li>
                <li>
                  <a
                    href="/criarDuvida"
                    className="text-gray-800 hover:text-red-500"
                  >
                    Criar dúvidas
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
