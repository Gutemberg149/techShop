import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RouterApp from "./App";
import ProdContextProvider from "./components/prodsContex/ProdsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProdContextProvider>
      <RouterProvider router={RouterApp} />
    </ProdContextProvider>
  </React.StrictMode>
);
