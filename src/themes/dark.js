import { createTheme } from "@mui/material";

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#1d9bf0",
    },
    secondary: {
      main: "#16181c",
      hover: "#1d1f23",
      tags: "#202327",
    },
    border: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#ffffff",
      secondary: "#55595c",
      tags: "#6c7176",
    },
    background: {
      default: "#000000",
    },
    opacityBackground: {
      main: "rgba(0, 0, 0, 0.8)",
    },
    icon: {
      main: "#FFFFFF",
      primary: "#1d9bf0",
      secondary: "#55595c",
    },
    boxShadow: {
      main: "0 0 6px 1px rgba(255, 255, 255, 0.35)",
    },
    blur: {
      main: "rgba(255, 255, 255, 0.35)",
    },
    blurTabs: {
      main: "rgba(255, 255, 255, 0.15)",
    },
  },
});

export default themeDark;
