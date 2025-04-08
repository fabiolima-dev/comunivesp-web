import { Outlet } from "react-router-dom";
import UnivespBg from "/univesp-bg.svg?url";

function PerfilPage() {
  return (
    <>
      <Outlet />

      <div className="flex h-full py-20 gap-20 justify-center">
        <img
          className="absolute rotate-15 opacity-5 -z-1 right-60 w-lg"
          src={UnivespBg}
          alt="Background"
        />
      </div>
    </>
  );
}

export default PerfilPage;
