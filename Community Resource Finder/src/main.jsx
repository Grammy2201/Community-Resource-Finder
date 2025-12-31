import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import ResourceProvider from "./context/ResourceProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </BrowserRouter>
  </React.StrictMode>
);


