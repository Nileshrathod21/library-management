import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/dashboardgraph";

import BooksPage from "./Page/Book";
import Userpage from "./Page/User";
import Catalog from "./Page/Catalog";
import { FormDataContext } from "./Components/FormDataContext";
import { useState } from "react";

export function Applayout() {
  const [formData, setFormData] = useState({});
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
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
    </FormDataContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
