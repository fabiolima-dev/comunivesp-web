import { Outlet } from "react-router-dom";
import UnivespBg from "/univesp-bg.svg?url";

function Layout() {
  return (
    <div className="px-5 sm:px-10 w-full h-full max-w-[1800px] m-auto">
      <img
        className="absolute rotate-15 opacity-5 -z-1 right-60 top-18 w-lg"
        src={UnivespBg}
        alt="Background"
      />
      <Outlet />
    </div>
  );
}

export default Layout;
