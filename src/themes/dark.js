import { createTheme } from "@mui/material";

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#1d9bf0",
    },
    secondary: {
      main: "#16181c",
    },
    border: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#000000",
    },
    icon: {
      main: "#FFFFFF",
    },
    boxShadow: {
      main: "0 0 6px 1px rgba(255, 255, 255, 0.35)",
    },
    blur: {
      main: "rgba(255, 255, 255, 0.35)",
    },
  },
});

export default themeDark;
