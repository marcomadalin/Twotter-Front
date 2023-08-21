import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { TwittDialogProvider } from "./context/twittDialogContext";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TwittDialogProvider>
        <App />
      </TwittDialogProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
