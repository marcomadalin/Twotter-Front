import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { TwittDialogProvider } from "./context/twittDialogContext";
import { ThemeProvider } from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <ThemeProvider>
      <TwittDialogProvider>
        <App />
      </TwittDialogProvider>
    </ThemeProvider>
  </AuthContextProvider>
);
