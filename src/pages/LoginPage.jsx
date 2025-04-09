import { Outlet } from "react-router-dom";
import LogoUnivesp from "/logo-univesp.svg?url";
import Illustration from "/illustration.svg?url";

function LoginPage() {
  return (
    <div className="flex h-full py-20 gap-20 justify-center">
      <div className="h-full flex items-center flex-col gap-10 w-full min-w-[280px] max-w-[420px]">
        <img
          src={LogoUnivesp}
          alt="Logo Univesp"
          className="w-full my-2 sm:my-10"
        />
        <Outlet />
      </div>
      <div className="justify-center w-4xl shrink-1 hidden lg:flex">
        <img className="w-full" src={Illustration} alt="Ilustração" />
      </div>
    </div>
  );
}

export default LoginPage;
