import { createContext, useReducer } from "react";
import themeDark from "../themes/dark";
import themeLight from "../themes/light";

export const ThemeContext = createContext();

export function themeReducer(state, action) {
  switch (action.type) {
    case "LIGHT":
      return { theme: themeLight, act: "LIGHT" };
    case "DARK":
      return { theme: themeDark, act: "DARK" };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    theme:
      localStorage.getItem("theme") === null ||
      localStorage.getItem("theme") === "DARK"
        ? themeDark
        : themeLight,
    act:
      localStorage.getItem("theme") === null ||
      localStorage.getItem("theme") === "DARK"
        ? "DARK"
        : "LIGHT",
  });

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
