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
import Following from "./pages/Following";
import Followers from "./pages/Followers";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path=":username/following" element={<Following />} />
          <Route path=":username/followers" element={<Followers />} />
          <Route path=":username" element={<Profile />} />
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
