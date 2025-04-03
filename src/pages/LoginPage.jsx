import { Outlet } from "react-router-dom";
import LogoUnivesp from "/logo-univesp.svg?url";
import Illustration from "/illustration.svg?url";

function LoginPage() {
  return (
    <div className="flex h-full py-20 gap-10 justify-center">
      <div className="h-full flex items-center flex-col justify-around min-w-[280px] max-w-[420px] sm:m-0 sm:items-start shrink xl:shrink-0">
        <img src={LogoUnivesp} alt="Logo Univesp" className="w-full min-h-40" />
        <Outlet />
      </div>
      <img
        className="w-4xl hidden 2xl:block"
        src={Illustration}
        alt="Ilustração"
      />
    </div>
  );
}

export default LoginPage;
