import { createTheme } from "@mui/material";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#1d9bf0",
    },
    secondary: {
      main: "#16181c",
      hover: "#1d1f23",
      tags: "#202327",
    },
    tertiary: {
      main: "#55595c",
    },
    border: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#ffffff",
      primaryDisabled: "rgba(255,255,255, 0.5)",
      secondary: "#55595c",
      tags: "#6c7176",
    },
    background: {
      default: "#000000",
      secondary: "#FFFFFF",
      lowOpacityBlack: "rgba(0,0,0, 0.2)",
    },
    opacityBackground: {
      main: "rgba(0, 0, 0, 0.8)",
    },
    icon: {
      main: "#FFFFFF",
      primary: "#1d9bf0",
      secondary: "#55595c",
      profile: "rgba(189,189,189,255)",
      hover: "rgba(29,155,240, 0.15)",
      hover2: "rgba(29,155,240, 0.35)",
      contrary: "#000000",
      hoverMain: "rgba(255,255,255,0.1)",
      hoverMain2: "rgba(0,0,0,0.1)",
      transaprent: "rgba(0,0,0,0.3)",
    },
    button: {
      primary: "#1d9bf0",
      disabled: "rgba(29,155,240, 0.5)",
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
    hoverFollowButton: "#d7dbdc",
    retwitt: {
      main: "rgba(1,158,106,1)",
      hover: "rgba(1,158,106,0.15)",
    },
    like: {
      main: "rgba(226,22,117,1)",
      hover: "rgba(226,22,117,0.15)",
    },
    coockie: {
      button: "#3c3d3d",
    },
    modal: {
      main: "rgba(29,155,240, 0.25)",
    },
    error: {
      main: "#b22222",
    },
  },
});

export default themeLight;
