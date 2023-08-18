import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./style/app.css";
import { LoginProvider } from "./context/loginContext.jsx";
import { ToDoProvider } from "./context/ToDoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </LoginProvider>
  </React.StrictMode>
);
