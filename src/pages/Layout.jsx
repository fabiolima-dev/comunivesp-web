import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="px-5 sm:px-40 h-full">
      <Outlet />
    </div>
  );
}

export default Layout;
