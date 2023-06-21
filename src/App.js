import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Explore from "./pages/Explore";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/Profile";
import themeDark from "./themes/dark";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          <Route path="home" element={user ? <Home /> : <Explore />} />
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={user ? <Profile /> : <Explore />} />
        </Route>
        <Route path="*" element={<Navigate to="explore" />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={themeDark}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
