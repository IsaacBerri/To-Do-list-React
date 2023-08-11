import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./style/app.css";
import { LoginProvider } from "./context/loginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
