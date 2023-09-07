import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) throw Error("Context out of bounds");
  return context;
}
