import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Contactus from "./Contactus";
import Listproduct from "./Listproduct";
import Nopage from "./Nopage";
import "./index.css";
import ListEmployee from "./ListEmployee";
import CreateEmployee from "./CreateEmployee.jsx";
import Display from "./Display.jsx";
import Edit from "./Edit.jsx";
import Employeedel from "./Employeedel.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/listproduct" element={<Listproduct />} />
        <Route path="/listemployee" element={<ListEmployee />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/display/:id" element={<Display />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Employeedel />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
