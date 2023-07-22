import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProviderContext from "./context/AuthContext.jsx";
import SnackbarContextProvider from "./context/SnackbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviderContext>
      <SnackbarContextProvider>
        <App />
      </SnackbarContextProvider>
    </AuthProviderContext>
  </React.StrictMode>
);
