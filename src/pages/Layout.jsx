import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-5 sm:px-40 max-w-[1800px] h-full m-auto">
      <Outlet />
    </div>
  );
}

export default Layout;
