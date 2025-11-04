// src/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "./Navbar.js";
import DefaultSidebar from "./sidebar.js";
import Dashboard from "./dashboardgraph.js";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex w-screen ">
      <DefaultSidebar />
      <main className="w-full h-auto">
        <TopNavbar />
        <div className="w-full">
          {location.pathname === "/" && <Dashboard />}
          <Outlet />
        </div>
      </main>
    </div>
  );
}
