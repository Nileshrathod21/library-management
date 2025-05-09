import React from "react";
import ReactDOM from "react-dom/client";
import DefaultSidebar from "./Components/sidebar";
import { ThemeProvider } from "@material-tailwind/react";
import ExampleWithLocalizationProvider from "./Components/Table";
import TopNavbar from "./Components/Navbar";

function Applayout() {
  return (
    <ThemeProvider>
      <div className="flex">
        <div className="w-[20%] h-screen ">
          <DefaultSidebar />
        </div>
        <div className="flex-1 h-screen overflow-hidden relative">
          <TopNavbar />
          <ExampleWithLocalizationProvider />
        </div>
      </div>
    </ThemeProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
