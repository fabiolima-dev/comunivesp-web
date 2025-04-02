import { Outlet } from "react-router-dom";
import LogoUnivesp from "../../public/logo-univesp.svg?url";

function LoginPage() {
  return (
    <div className="py-10 h-full m-auto flex items-center flex-col justify-around min-w-[280px] max-w-[400px] sm:m-0 sm:items-start">
      <img
        src={LogoUnivesp}
        alt="Logo Univesp"
        className="w-full px-4 min-h-40"
      />
      <Outlet />
    </div>
  );
}

export default LoginPage;
