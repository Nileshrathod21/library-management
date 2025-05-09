// src/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "./Navbar.js";
import DefaultSidebar from "./sidebar.js";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex w-screen">
      <DefaultSidebar />
      <main className="w-full h-auto">
        <TopNavbar />
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
