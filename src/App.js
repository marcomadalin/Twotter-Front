import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#1d9bf0",
    },
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    primary: {
      main: "#1d9bf0",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#000000",
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
