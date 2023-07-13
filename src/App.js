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
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          <Route
            path="home"
            element={user ? <Home /> : <Navigate replace to={"/explore"} />}
          />
          <Route path="explore" element={<Explore />} />
          <Route
            path=":username"
            element={user ? <Profile /> : <Navigate replace to={"/explore"} />}
          >
            <Route path="following" element={<Explore />} />
            <Route path="followers" element={<Explore />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="explore" />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
