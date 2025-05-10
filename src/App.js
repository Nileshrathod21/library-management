import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import ExampleWithLocalizationProvider from "./Components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/dashboardgraph";

function Applayout() {
  // return (
  //   <ThemeProvider>
  //     <div className="flex">
  //       <div className="w-[20%] h-screen ">
  //         <DefaultSidebar />
  //       </div>
  //       <div className="flex-1 h-screen overflow-hidden relative">
  //         <TopNavbar />
  //         <ExampleWithLocalizationProvider />
  //       </div>
  //     </div>
  //   </ThemeProvider>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/book"
            element={
              <ExampleWithLocalizationProvider
                isBook={true}
                title={"Book Management"}
              />
            }
          />
          <Route
            path="/Users"
            element={
              <ExampleWithLocalizationProvider
                isBook={true}
                title={"Users Management"}
              />
            }
          />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
