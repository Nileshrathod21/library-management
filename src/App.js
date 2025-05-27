import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/dashboardgraph";

import BooksPage from "./Page/Book";
import Userpage from "./Page/User";
import Catalog from "./Page/Catalog";

export function Applayout() {
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

  // const UserColumns = useMemo(
  //   () => [
  //     { accessorKey: "id", header: "ID" },
  //     { accessorKey: "name", header: "Name" },
  //     { accessorKey: "email", header: "Email" },
  //     { accessorKey: "user", header: "UserName" },
  //   ],
  //   []
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/book" element={<BooksPage />} />
          <Route path="/Users" element={<Userpage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Catalog" element={<Catalog />} />
        </Route>
      </Routes>
      {/* <SignupPage /> */}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
