import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/reset.css";
import "./css/base-styles.css";
import "./css/general-styling.css";
import "./css/utility-classes.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
