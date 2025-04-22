import NavigationBar from "./NavigationBar";
import LogoUnivesp from "/logo-univesp.svg?url";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full h-16 px-4 py-2 ">
        <img src={LogoUnivesp} alt="Logo Univesp" className="w-50" />

        <button
          onClick={NavigationBar.display}
          className="appearance-none border-none outline-none"
        >
          <EllipsisHorizontalIcon className="w-15" />
        </button>
      </header>
    </>
  );
}

export default Header;
