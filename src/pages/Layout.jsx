import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-5 sm:px-10 w-full h-full max-w-[1800px] m-auto">
      <Outlet />
    </div>
  );
}

export default Layout;
