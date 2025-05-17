import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoUnivesp from "/logo-univesp.svg?url";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import useAuth from "../../contexts/useAuth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, saveUser, saveToken } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Limpa os dados do usuário e token
    saveUser(null);
    saveToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Fecha o menu
    setIsMenuOpen(false);

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <>
      <header className="flex items-center justify-between w-full h-16 px-4 py-2 ">
        <img src={LogoUnivesp} alt="Logo Univesp" className="w-50" />

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="appearance-none border-none outline-none cursor-pointer"
          >
            <EllipsisHorizontalIcon className="w-15" />
          </button>

          {isMenuOpen && (
            <nav className="absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 w-64">
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    onClick={() => navigate(`/perfil/${user?.id}`)}
                    className="text-gray-800 hover:text-red-500 w-full text-left"
                  >
                    Meu perfil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/edit-profile")}
                    className="text-gray-800 hover:text-red-500 w-full text-left"
                  >
                    Editar perfil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/question-board")}
                    className="text-gray-800 hover:text-red-500 w-full text-left"
                  >
                    Dúvidas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/question-creation")}
                    className="text-gray-800 hover:text-red-500 w-full text-left"
                  >
                    Criar dúvidas
                  </button>
                </li>
                {user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-gray-800 hover:text-red-500 w-full text-left"
                    >
                      Sair
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
